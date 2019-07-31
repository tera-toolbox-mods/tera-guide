const DispatchWrapper = require('./dispatch');
const fs = require('fs');
const path = require('path');
const dbg = require('./dbg');
let voice = null;
try { voice = require('voice') }
catch(e) { voice = null; }
// Tank class ids(brawler + lancer)
const TANK_CLASS_IDS = [1, 10];
// Dps class ids(not counting warrior)
const DPS_CLASS_IDS = [2, 3, 4, 5, 8, 9, 11, 12];
const MapID = require('./StrSheet_Dungeon-0.json').String;
// Healer class ids
const HEALER_CLASS_IDS = [6, 7];
// Warrior Defence stance abnormality ids
const WARRIOR_TANK_IDS = [100200, 100201];
const cr = '</font><font color="#ff0000">';//RED 红色
const co = '</font><font color="#ff7700">';//ORANGE 橘色
const cy = '</font><font color="#ffff00">';//YELLOW 黄色
const cg = '</font><font color="#00ff00">';//GREEN 绿色
const cdb = '</font><font color="#2727ff">';//DARK BLUE 深蓝
const cb = '</font><font color="#0077ff">';//BLUE  蓝色
const cv = '</font><font color="#7700ff">';//VIOLET 紫色
const cp = '</font><font color="#ff00ff">';//PINK   粉红
const clp = '</font><font color="#ff77ff">';//LIGHT PINK 浅粉色
const clb = '</font><font color="#00ffff">';//LIGHT BLUE 浅蓝色
const cbl = '</font><font color="#000000">';//BLACK 黑色
const cgr = '</font><font color="#777777">';//GRAY 灰色
const cw = '</font><font color="#ffffff">';//WHITE 白色	
const rate1 = 1;
const rate2 = 2;
const rate3 = 3;
const rate4 = 4;
const rate5 = 5;
const rate6 = 6;
const rate7 = 7;
const rate8 = 8;
const rate9 = 9;
const rate10 = 10;

class TeraGuide{
    constructor(dispatch) {
        const fake_dispatch = new DispatchWrapper(dispatch);
        const { player, entity, library, effect } = dispatch.require.library;
        const command = dispatch.command;

        // An object of types and their corresponding function handlers
        const function_event_handlers = {
            "spawn": spawn_handler,
            "despawn": despawn_handler,
            "text": text_handler,
            "sound": sound_handler,
            "stop_timer": stop_timer_handler,
            "func": func_handler,
            "lib": require('./lib')
        };	
	if (dispatch.proxyAuthor !== 'caali') {
		const options = require('./module').options;
		if (options) {
			const settingsVersion = options.settingsVersion;
			if (settingsVersion) {
				dispatch.settings = require('./' + (options.settingsMigrator || 'settings_migrator.js'))(dispatch.settings._version, settingsVersion, dispatch.settings);
				dispatch.settings._version = settingsVersion;
			}
		}
	}		

        // export functionality for 3rd party modules
        this.handlers = function_event_handlers;

        // A boolean for if the module is enabled or not

        // A boolean for the debugging settings
        let debug = dbg['debug'];

        // A boolean indicating if a guide was found
        let guide_found = false;
        let spguide = false;		
		//let cc = cg;
        // The guide settings for the current zone
        let active_guide = {};
        // All of the timers, where the key is the id
        let random_timer_id = 0xFFFFFFFA; // Used if no id is specified
        let timers = {};	
		let StrSheet_Dungeon_String = [];
        /** HELPER FUNCTIONS **/

        // Write generic debug message used when creating guides
        function debug_message(d, ...args) {
            if(d) {
                console.log(`[${Date.now() % 100000}][Guide]`, ...args);

                if(debug.chat) command.message(args.toString());
            }
        }

        // Makes sure the event passes the class position check
        function class_position_check(class_position) {
            // if it's not defined we assume that it's for everyone
            if(!class_position) return true;
            // If it's an array
            if(Array.isArray(class_position)) {
                // If one of the class_positions pass, we can accept it
                for(let ent of class_position) if(class_position_check(ent)) return true;

                // All class_positions failed, so we return false
                return false;
            }

            switch(class_position) {
                case "tank": {
                    // if it's a warrior with dstance abnormality
                    if(player.job === 0) {
                        // Loop thru tank abnormalities
                        for(let id of WARRIOR_TANK_IDS) {
                            // if we have the tank abnormality return true
                            if(effect.hasAbnormality(id)) return true;
                        }
                    }

                    // if it's a tank return true
                    if(TANK_CLASS_IDS.includes(player.job)) return true;
                    break;
                }
                case "dps": {
                    // If it's a warrior with dstance abnormality
                    if(player.job === 0) {
                        // Loop thru tank abnormalities
                        for(let id of WARRIOR_TANK_IDS) {
                            // if we have the tank abnormality return false
                            if(effect.hasAbnormality(id)) return false;
                        }
                        // warrior didn't have tank abnormality
                        return true;
                    }

                    // if it's a dps return true
                    if(DPS_CLASS_IDS.includes(player.job)) return true;
                    break;
                }
                case "heal": {
                    // if it's a healer return true
                    if(HEALER_CLASS_IDS.includes(player.job)) return true;
                    break;
                }
                default: {
                    debug_message(true, "Failed to find class_position value:", class_position);
                }
            }
            return false;
        }

        // Handle events such as boss skill and abnormalities triggered
        function handle_event(ent, id, called_from_identifier, prefix_identifier, d, speed=1.0, stage=false) {
            const unique_id = `${prefix_identifier}-${ent['huntingZoneId']}-${ent['templateId']}`;
            const key = `${unique_id}-${id}`;
            const stage_string = (stage===false ? '' : `-${stage}`);

            debug_message(d, `${called_from_identifier}: ${id} | Started by: ${unique_id} | key: ${key + stage_string}`);

            if(stage !== false) {
                const entry = active_guide[key + stage_string];
                if(entry) start_events(entry, ent, speed);
            }

            const entry = active_guide[key];
            if(entry) start_events(entry, ent, speed);
        }

        // This is where all the magic happens
        function start_events(events=[], ent, speed=1.0) {
            // Loop over the events
            for(let event of events) {
                const func = function_event_handlers[event['type']];
                // The function couldn't be found, so it's an invalid type
                if(!func) debug_message(true, "An event has invalid type:", event['type']);
                // If the function is found and it passes the class position check, we start the event
                else if(class_position_check(event['class_position'])) func(event, ent, speed=1.0);
            }
        }

        /** S_ACTION_STAGE **/

        // Boss skill action
        function s_action_stage(e) {
			let skillid = e.skill.id % 1000;			
            // If the guide module is active and a guide for the current dungeon is found
            if(dispatch.settings.enabled && guide_found) {
				
                const ent = entity['mobs'][e.gameId.toString()];
                // Due to a bug for some bizare reason(probably proxy fucking itself) we do this ugly hack
                e.loc.w = e.w;
                // We've confirmed it's a mob, so it's plausible we want to act on this
		  if ( spguide ) {
               if(ent) return handle_event(Object.assign({}, ent, e), e.skill.id, 'Skill', 's', debug.debug || debug.skill || (ent['templateId'] % 1000 === 0 ? debug.boss : false), e.speed, e.stage);
            }else{
                if(ent) return handle_event(Object.assign({}, ent, e), skillid, 'Skill', 's', debug.debug || debug.skill || (ent['templateId'] % 1000 === 0 ? debug.boss : false), e.speed, e.stage);
            }
            }
        }
        dispatch.hook('S_ACTION_STAGE', 9, {order: 15}, s_action_stage);
		
        /** ABNORMALITY **/

        // Boss abnormality triggered
        function abnormality_triggered(e) {
            // If the guide module is active and a guide for the current dungeon is found
            if(dispatch.settings.enabled && guide_found) {
                // avoid errors ResidentSleeper (neede for abnormality refresh)
                if(!e.source) e.source = 0n;

                // If the boss/mob get's a abnormality applied to it
                const target_ent = entity['mobs'][e.target.toString()];

                // If the boss/mob is the cause for the abnormality
                const source_ent = entity['mobs'][e.source.toString()];

                // If the mob/boss applies an abnormality to me, it's plausible we want to act on this
                if(source_ent && player.isMe(e.target)) handle_event(source_ent, e.id, 'Abnormality', 'am', debug.debug || debug.abnormal);

                // If "nothing"/server applies an abnormality to me, it's plausible we want to act on this. (spam rip)
                if(player.isMe(e.target) && 0 == (e.source || 0)) handle_event({
                    huntingZoneId: 0,
                    templateId: 0
                }, e.id, 'Abnormality', 'ae', debug.debug || debug.abnormal);

                // If it's a mob/boss getting an abnormality applied to itself, it's plausible we want to act on it
                if(target_ent) handle_event(target_ent, e.id, 'Abnormality', 'ab', debug.debug || debug.abnormal);
            }
        }
        dispatch.hook('S_ABNORMALITY_BEGIN', 3, {order: 15}, abnormality_triggered);
        dispatch.hook('S_ABNORMALITY_REFRESH', 1, {order: 15}, abnormality_triggered);

        /** HEALTH **/

        // Boss health bar triggered
        dispatch.hook('S_BOSS_GAGE_INFO', 3, e=> {
             // If the guide module is active and a guide for the current dungeon is found
             if(dispatch.settings.enabled && guide_found) {
                const ent = entity['mobs'][e.id.toString()];
                // We've confirmed it's a mob, so it's plausible we want to act on this
                if(ent) return handle_event(ent, Math.floor(Number(e.curHp) / Number(e.maxHp) * 100), 'Health', 'h', debug.debug || debug.hp);
            }
        });

        /** S_DUNGEON_EVENT_MESSAGE **/

        dispatch.hook('S_DUNGEON_EVENT_MESSAGE', 2, e=> {
            if (dispatch.settings.enabled && guide_found) {
                const result = /@dungeon:(\d+)/g.exec(e.message);
                if (result) {
                    handle_event({
                        huntingZoneId: 0,
                        templateId: 0
                    }, parseInt(result[1]), 'Dungeon Message', 'dm', debug.debug || debug.dm);
                }
            }
        });

        /** S_QUEST_BALLOON **/

        dispatch.hook('S_QUEST_BALLOON', 1, e=> {
            if (dispatch.settings.enabled && guide_found) {
                const source_ent = entity['mobs'][e.source.toString()];
                const result = /@monsterBehavior:(\d+)/g.exec(e.message);
                if (result && source_ent) {
                    handle_event(source_ent, parseInt(result[1]), 'Quest Balloon', 'qb', debug.debug || debug.qb);
                }
            }
        });

        /** MISC **/

        // Load guide and clear out timers
        dispatch.hook('S_LOAD_TOPO', 3, e=> {
            // Clear out the timers
            for(let key in timers) clearTimeout(timers[key]);
            timers = {};

            // Clear out previous hooks, that our previous guide module hooked
            fake_dispatch._remove_all_hooks();

            // Send debug message
            debug_message(debug.debug, 'Entered zone:', e.zone);

            // Remove potential cached guide from require cache, so that we don't need to relog to refresh guide
            try {
                delete require.cache[require.resolve('./guides/' + e.zone)];
            }catch(e) {}
            
            // Try loading a guide
            try {
                active_guide = require('./guides/' + e.zone);

            if ( 9916 == e.zone || 9781 == e.zone || 3017 == e.zone || 9044 == e.zone || 9070 == e.zone || 9920 == e.zone || 9970 == e.zone || 9981 == e.zone) {
			spguide = true;
            }else{				
               spguide = false;
            }
                guide_found = true;
		StrSheet_Dungeon_String = MapID.find(obj => obj.id === e.zone);
		if (StrSheet_Dungeon_String) {
			
		speak_voice('欢迎进入' + StrSheet_Dungeon_String.string , 8000)
		
		} 
            }catch(e) {
                active_guide = {};
                guide_found = false;
                debug_message(debug.debug, e);
            }

            // Try calling the "load" function
            try {
                active_guide.load(fake_dispatch);
            }catch(e) { debug_message(debug.debug, e); }
        });

        // Guide command
        command.add(['guide','補助','辅助'], {
            // Toggle debug settings
            debug(arg1) {
                if(!arg1 || debug[arg1] === undefined) return command.message(`Invalid sub command for debug mode. ${arg1}`);
                debug[arg1] = !debug[arg1];
                command.message(`Guide module debug(${arg1}) mode has been ${debug[arg1]?"enabled":"disabled"}.`);
            },
            // Testing events
            event(arg1, arg2) {
                // If we didn't get a second argument or the argument value isn't an event type, we return
                if(arg1 === "trigger" ? (!active_guide[arg2]) : (!arg1 || !function_event_handlers[arg1] || !arg2)) return command.message(`Invalid values for sub command "event" ${arg1} | ${arg2}`);

                // if arg2 is "trigger". It means we want to trigger a event
                if(arg1 === "trigger")
                    start_events(active_guide[arg2], player);
                else
                    // Call a function handler with the event we got from arg2 with yourself as the entity
                    function_event_handlers[arg1](JSON.parse(arg2), player);
            },
            语音() {
         if(!voice){
      	command.message(`需要voice依赖`);
			 return;		
			}
            	dispatch.settings.speaks = !dispatch.settings.speaks;
            	command.message(`语音通知 ${dispatch.settings.speaks?"开启":"关闭"}.`);
            },	
            語音() {
         if(!voice){
      	command.message(`需要voice依赖`);
			 return;		
			}
            	dispatch.settings.speaks = !dispatch.settings.speaks;
            	command.message(`语音通知 ${dispatch.settings.speaks?"开启":"关闭"}.`);
            },
           voice() {
         if(!voice){
      	command.message(`need voice Dependencies`);
			 return;		
			}
            	dispatch.settings.speaks = !dispatch.settings.speaks;
            	command.message(`text-to-speech ${dispatch.settings.speaks?"on":"off"}.`);
            },			
            通知() {
            	dispatch.settings.stream = !dispatch.settings.stream;
            	command.message(`消息通知已 ${dispatch.settings.stream?"关闭":"开启"}.`);
            },
            notice() {
            	dispatch.settings.stream = !dispatch.settings.stream;
            	command.message(`notice ${dispatch.settings.stream?"off":"on"}.`);
            },			
            組隊長通知() {
            	dispatch.settings.notice = !dispatch.settings.notice;	
            	command.message(`虚拟队长通知已 ${dispatch.settings.notice?"开启":"关闭"}.`);
            },				
            组队长通知() {
            	dispatch.settings.notice = !dispatch.settings.notice;	
            	command.message(`虚拟队长通知已 ${dispatch.settings.notice?"开启":"关闭"}.`);
            },	
            alert() {
            	dispatch.settings.notice = !dispatch.settings.notice;
            	command.message(`Virtual captain has been ${dispatch.settings.notice?"on":"off"}.`);
            },
            組隊通知() {
            	dispatch.settings.systemNotice = !dispatch.settings.systemNotice;
            	command.message(`组队通知已 ${dispatch.settings.systemNotice?"开启":"关闭"}.`);
            },			
            systemNotice() {
            	dispatch.settings.systemNotice = !dispatch.settings.systemNotice;
            	command.message(`system Notice ${dispatch.settings.systemNotice?"on":"off"}.`);
            },
            1() {
            	
            	command.message(`语音速度1`);
	           dispatch.settings.rate.splice(0,1, rate1);			
            },			
            2() {
        
            	command.message(`语音速度2`);
	           dispatch.settings.rate.splice(0,1, rate2);			
            },
            3() {
            
            	command.message(`语音速度3`);
	           dispatch.settings.rate.splice(0,1, rate3);					
            },	
            4() {
            
            	command.message(`语音速度4`);
	           dispatch.settings.rate.splice(0,1, rate4);					
            },				
            5() {
            
            	command.message(`语音速度5`);
	           dispatch.settings.rate.splice(0,1, rate5);					
            },
            6() {
            	
            	command.message(`语音速度6`);
	           dispatch.settings.rate.splice(0,1, rate6);					
            },	
            7() {
            
            	command.message(`语音速度7`);
	           dispatch.settings.rate.splice(0,1, rate7);					
            },				
            8() {
            
            	command.message(`语音速度8`);
	           dispatch.settings.rate.splice(0,1, rate8);					
            },	
	        9() {
            	
            	command.message(`语音速度10`);
	           dispatch.settings.rate.splice(0,1, rate9);					
            },			
            10() {
            	
            	command.message(`语音速度10`);
	           dispatch.settings.rate.splice(0,1, rate10);					
            },

            cr() {
               command.message( cr +"系统消息通知颜色红色");
	           dispatch.settings.cc.splice(0,1, cr );		   
            },
            cc() {
            
            	command.message( dispatch.settings.cc +"查看系统消息通知颜色");
			   
            },			
            co() {
            	command.message( co +"系统消息通知颜色橘色");
	           dispatch.settings.cc.splice(0,1, co);					
            },
            cy() {
            	command.message( cy +"系统消息通知颜色黄色");
	           dispatch.settings.cc.splice(0,1, cy);					
            },
            cg() {
            	command.message( cg +"系统消息通知颜色绿色");
	           dispatch.settings.cc.splice(0,1, cg);					
            },
            cdb() {

            	command.message( cdb +"系统消息通知颜色深蓝色");
	           dispatch.settings.cc.splice(0,1, cr);					
            },
            cb() {

            	command.message( cb +"系统消息通知颜色蓝色");
	           dispatch.settings.cc.splice(0,1, cb);				
            },
            cv() {

            	command.message( cv +"系统消息通知颜色紫色");
	           dispatch.settings.cc.splice(0,1, cv);				
            },
            cp() {

            	command.message( cp +"系统消息通知颜色粉色");
	           dispatch.settings.cc.splice(0,1, cp);				
            },
            clp() {

            	command.message( clp +"系统消息通知颜色浅粉色");
	           dispatch.settings.cc.splice(0,1, clp);				
            },
            clb() {

            	command.message( clb +"系统消息通知颜色浅蓝色");
	           dispatch.settings.cc.splice(0,1, clb);				
            },
            cbl() {

            	command.message( cbl +"系统消息通知颜色黑色");
	           dispatch.settings.cc.splice(0,1, cbl);				
            },
            cgr() {

            	command.message( cgr +"系统消息通知颜色灰色");
	           dispatch.settings.cc.splice(0,1, cgr);				
            },	
            cw() {

            	command.message( cw +"系统消息通知颜色白色");
	           dispatch.settings.cc.splice(0,1, cw);				
            },
			
            help() {
		command.message('補助 ，副本補助开/关 ，默认系统通知，通知颜色为绿色');
		command.message('補助 语音，副本補助语音开/关');
		command.message('補助 通知， 副本通知开/关');
		command.message('補助 组队通知， 组队通知开/关');
		command.message('補助 组队长通知，组队长通知开/关');		
		command.message('補助 1~10，调节语音速度10为最快语速，默认为1正常速度');
		command.message(dispatch.settings.cc + '補助 cc，查看当前系统消息通知颜色');		
		command.message(cr + '補助 cr，系统消息通知颜色为红色 ');
		command.message(co + '補助 co，系统消息通知颜色为橙色 ');
		command.message(cy + '補助 cy，系统消息通知颜色为黄色 ');
		command.message(cg + '補助 cg，系统消息通知颜色为绿色 ');
		command.message(cdb + '補助 cdb，系统消息通知颜色为青色 ');	
		command.message(cb + '補助 cb，系统消息通知颜色为蓝色 ');
		command.message(cv + '補助 cv，系统消息通知颜色为紫色 ');
		command.message(cp + '補助 cp，系统消息通知颜色为粉红色 ');
		command.message(clp + '補助 clp，系统消息通知颜色为浅粉色 ');	
		command.message(clb + '補助 clb，系统消息通知颜色为浅蓝色 ');
		command.message(cbl + '補助 cbl，系统消息通知颜色为黑色 ');
		command.message(cgr + '補助 cgr，系统消息通知颜色为灰色 ');	
		command.message(cw + '補助 cw，系统消息通知颜色为白色 ');
            },
            $default() {
              dispatch.settings.enabled = !dispatch.settings.enabled;
                command.message(`副本補助已 ${dispatch.settings.enabled?"on":"off"}.`);
            }
        });
		
        /** Function/event handlers for types **/

        // Spawn handler
        function spawn_handler(event, ent, speed=1.0) {
            // Make sure id is defined
            if(!event['id']) return debug_message(true, "Spawn handler needs a id");
            // Make sure sub_delay is defined
            if(!event['sub_delay']) return debug_message(true, "Spawn handler needs a sub_delay");
            // Make sure distance is defined
            //if(!event['distance']) return debug_message(true, "Spawn handler needs a distance");
            // Ignore if dispatch.settings.streamer mode is enabled
            if(dispatch.settings.stream) return;

            // Set sub_type to be collection as default for backward compatibility
            const sub_type =  event['sub_type'] || 'collection';

            // The unique spawned id this item will be using.
            const item_unique_id = event['force_gameId'] || random_timer_id--;

            // The location of the item spawned
            let loc = ent['loc'].clone();

            // if pos is set, we use that
            if(event['pos']) loc = event['pos'];

            loc.w = (ent['loc'].w || 0) + (event['offset'] || 0);
            library.applyDistance(loc, event['distance'] || 0 ,event['degrees'] || 0);

            let sending_event = {
                gameId: item_unique_id,
                loc: loc,
                w: loc.w
            };

            const despawn_event = {
                gameId: item_unique_id,
                unk: 0, // used in S_DESPAWN_BUILD_OBJECT
                collected: false // used in S_DESPAWN_COLLECTION
            };

            // Create the sending event
            switch(sub_type) {
                // If it's type collection, it's S_SPAWN_COLLECTION
                case "collection": {
                    Object.assign(sending_event, {
                        id: event['id'],
                        amount: 1,
                        extractor: false,
                        extractorDisabled: false,
                        extractorDisabledTime: 0
                    });
                    break;
                }
                // If it's type item, it's S_SPAWN_DROPITEM
                case "item": {
                    Object.assign(sending_event, {
                        item: event['id'],
                        amount: 1,
                        expiry: 0,
                        explode: false,
                        masterwork: false,
                        enchant: 0,
                        debug: false,
                        owners: []
                    });
                    break;
                }
                // If it's type build_object, it's S_SPAWN_BUILD_OBJECT
                case "build_object": {
                    Object.assign(sending_event, {
                        itemId : event['id'],
                        unk : 0,
                        ownerName : event['ownerName'] || '',
                        message : event['message'] || ''
                    });
                    break;
                }
                // If we haven't implemented the sub_type the event asks for
                default: {
                    return debug_message(true, "Invalid sub_type for spawn handler:", event['sub_type']);
                }
            }

            // Create the timer for spawning the item
            timers[item_unique_id] = setTimeout(()=> {
                switch(sub_type) {
                    case "collection": return dispatch.toClient('S_SPAWN_COLLECTION', 4, sending_event);
                    case "item": return dispatch.toClient('S_SPAWN_DROPITEM', 7, sending_event);
                    case "build_object": return dispatch.toClient('S_SPAWN_BUILD_OBJECT', 2, sending_event);
                }
            }, event['delay'] || 0 / speed);

            // Create the timer for despawning the item
            timers[random_timer_id--] = setTimeout(()=> {
                switch(sub_type) {
                    case "collection": return dispatch.toClient('S_DESPAWN_COLLECTION', 2, despawn_event);
                    case "item": return dispatch.toClient('S_DESPAWN_DROPITEM', 4, despawn_event);
                    case "build_object": return dispatch.toClient('S_DESPAWN_BUILD_OBJECT', 2, despawn_event);
                }
            }, event['sub_delay'] / speed);
        }

         // Despawn handler
         function despawn_handler(event) {
            // Make sure id is defined
            if(!event['id']) return debug_message(true, "Spawn handler needs a id");
            // Ignore if dispatch.settings.streamer mode is enabled
            if(dispatch.settings.stream) return;

            // Set sub_type to be collection as default for backward compatibility
            const sub_type =  event['sub_type'] || 'collection';

            const despawn_event = {
                gameId: event['id'],
                unk: 0, // used in S_DESPAWN_BUILD_OBJECT
                collected: false // used in S_DESPAWN_COLLECTION
            };

            switch(sub_type) {
                case "collection": return dispatch.toClient('S_DESPAWN_COLLECTION', 2, despawn_event);
                case "item": return dispatch.toClient('S_DESPAWN_DROPITEM', 4, despawn_event);
                case "build_object": return dispatch.toClient('S_DESPAWN_BUILD_OBJECT', 2, despawn_event);
                default: return debug_message(true, "Invalid sub_type for despawn handler:", event['sub_type']);
            }
        }
        // Text handler
        function text_handler(event, ent, speed=1.0) {
            // Fetch the message(with region tag)
            const message = event[`message_${dispatch.region}`] || event[`message_${dispatch.region.toUpperCase()}`] || event['message'];
            // Make sure sub_type is defined
            if(!event['sub_type']) return debug_message(true, "Text handler needs a sub_type");
            // Make sure message is defined
            if(!message) return debug_message(true, "Text handler needs a message");

            let sending_event = {};
			let sending_events = {};
            // Create the sending event
            switch(event['sub_type']) {
                // If it's type message, it's S_DUNGEON_EVENT_MESSAGE with type 41
				//混合通知
                case "message": {
	     timers[event['id'] || random_timer_id--] = setTimeout(()=> {					
				    if(voice){
		            if(dispatch.settings.speaks){	
                   voice.speak(message,dispatch.settings.rate)
					};
					};		
           }, (event['delay'] || 0 ) - 600 /speed);					
	     timers[event['id'] || random_timer_id--] = setTimeout(()=> {	
		     if(dispatch.settings.stream) return;
		      sendMessage(message);		
           }, (event['delay'] || 0 )   /speed);
                    break;		
                }			
                case "msgcp": {
	     timers[event['id'] || random_timer_id--] = setTimeout(()=> {					
				    if(voice){
		            if(dispatch.settings.speaks){	
                   voice.speak(message,dispatch.settings.rate)
					};
					};		
           }, (event['delay'] || 0 ) - 600 /speed);					
	     timers[event['id'] || random_timer_id--] = setTimeout(()=> {	
		     if(dispatch.settings.stream) return;
		
		      sendspMessage(message,cp);		
           }, (event['delay'] || 0 )   /speed);
                    break;		
                }				
                case "msgcg": {
	     timers[event['id'] || random_timer_id--] = setTimeout(()=> {					
				    if(voice){
		            if(dispatch.settings.speaks){	
                   voice.speak(message,dispatch.settings.rate)
					};
					};		
           }, (event['delay'] || 0 ) - 600 /speed);					
	     timers[event['id'] || random_timer_id--] = setTimeout(()=> {	
		     if(dispatch.settings.stream) return;
		
		      sendspMessage(message,cg);		
           }, (event['delay'] || 0 )   /speed);
                    break;		
                }				

				//组队长通知
                case "alert": {
                    sending_event = {
					channel: 21,
					authorName: 'guide',
					message
                    };
                    break;
                }
                case "MSG": {

	                        timers[event['id'] || random_timer_id--] = setTimeout(()=> {
              command.message( cr + message );
              console.log( cr + message );			  
                        }, (event['delay'] || 0 ) - 600 /speed);		  
		  
                    break;
                }				
				
				//语音通知
                case "speech": {
		            if(voice){
		            if(dispatch.settings.speaks){	
	                        timers[event['id'] || random_timer_id--] = setTimeout(()=> {
                             voice.speak(message,dispatch.settings.rate)
                        }, (event['delay'] || 0 ) - 600 /speed);				
					};
					};
                    break;
                }	
                 //团队长通知				
                case "notification": {
                    sending_event = {
					channel: 25,
					authorName: 'guide',
					message
                    };
                    break;				
                }
                default: {
                    return debug_message(true, "Invalid sub_type for text handler:", event['sub_type']);
                }
            }

            // Create the timer
            timers[event['id'] || random_timer_id--] = setTimeout(()=> {
            	if (!dispatch.settings.stream) {
	                switch(event['sub_type']) {
	                //    case "message": return dispatch.toClient('S_DUNGEON_EVENT_MESSAGE', 2, sending_events);	
	                    case "notification": return dispatch.toClient('S_CHAT', 2, sending_event);
	                    case "alert": return dispatch.toClient('S_CHAT', 2, sending_event);						
						
	                }
            	} 
				/*
				else {
            		// If dispatch.settings.streamer mode is enabled, send message all messages to party chat instead
            	//	return dispatch.toClient('S_CHAT', 2, { channel: 1, authorName: config['chat-name'], message });
            	}
				*/
            }, (event['delay'] || 0 ) / speed);
        }
	 function sendMessage(message) {
        if (dispatch.settings.notice) {
            dispatch.toClient('S_CHAT', 2, {
                channel: 21, //21 = p-notice, 1 = party, 2 = guild
                message
            });
        } else if(dispatch.settings.systemNotice) {
            dispatch.toClient('S_CHAT', 2, {
                channel: 1, //21 = p-notice, 1 = party, 2 = guild
                message
            });				
        } else {
            dispatch.toClient('S_DUNGEON_EVENT_MESSAGE', 2, {
                type: 42,
                chat: 0,
                channel: 27,
                message: ( dispatch.settings.cc +  message  ) //----------------------------------------------------------------------
            });
        }
    }	
	 function sendspMessage(message,spcc) {
       
            dispatch.toClient('S_DUNGEON_EVENT_MESSAGE', 2, {
                type: 42,
                chat: 0,
                channel: 27,
                message: ( spcc +  message  )   //----------------------------------------------------------------------
            });
        
    }	
        // Sound handler
        function sound_handler(event, ent, speed=1.0) {
            // Make sure id is defined
            if(!event['id']) return debug_message(true, "Sound handler needs a id");
            // Ignore if dispatch.settings.streamer mode is enabled
            if(dispatch.settings.stream) return;

            // Create the timer
            timers[event['id']] = setTimeout(()=> {
                // Send the sound
                dispatch.toClient('S_PLAY_SOUND', 1, {
                    SoundID: event['id']
                });
            });
        }

        // Stop timer handler
        function stop_timer_handler(event, ent, speed=1.0) {
            // Make sure id is defined
            if(!event['id']) return debug_message(true, "Stop timer handler needs a id");

            // Check if that entry exists, if it doesn't print out a debug message. This is because users can make mistakes
            if(!timers[event['id']]) return debug_message(true, `There isn't a timer with tie id: ${event['id']} active`);

            // clearout the timer
            clearTimeout(timers[event['id']]);
        }

        // Func handler
        function func_handler(event, ent, speed=1.0) {
            // Make sure func is defined
            if(!event['func']) return debug_message(true, "Func handler needs a func");

            // Start the timer for the function call
            timers[event['id'] || random_timer_id--] = setTimeout(event['func'], (event['delay'] || 0) / speed, function_event_handlers, event, ent, fake_dispatch);
        }
		
		function speak_voice ( alerts, delay) {
        setTimeout(()=> {
			if(voice){
          voice.speak(alerts,1)
          command.message( cg + alerts );	
			} else {
          command.message( cr + alerts );	
			}			
          }, delay );				
        }		
    }
}

module.exports = TeraGuide;