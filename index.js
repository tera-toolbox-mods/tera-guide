const config = require('./config');

// Try to silently import the say dependency
let say = null;
try { say = require('say') }
catch(e) { say = null; }

// Tank class ids(brawler + lancer)
const TANK_CLASS_IDS = [1, 10];

// Dps class ids(not counting warrior)
const DPS_CLASS_IDS = [2, 3, 4, 5, 8, 9, 11, 12];

// Healer class ids
const HEALER_CLASS_IDS = [6, 7];

// Warrior Defence stance abnormality ids
const WARRIOR_TANK_IDS = [100200, 100201];

class TeraGuide{
    constructor(dispatch) {
        const { player, entity, library, effect } = require('library')(dispatch);
        const command = require('command')(dispatch);

        // An object of types and their corresponding function handlers
        const function_event_handlers = {
            "spawn": spawn_handler,
            "text": text_handler,
            "sound": sound_handler,
            "stop_timer": stop_timer_handler,
            "func": func_handler
        };

        // A boolean for if the module is enabled or not
        let enabled = config['enabled'];
        // A boolean for the debugging settings
        let debug = config['debug'];

        // A boolean indicating if a guide was found
        let guide_found = false;
        // The guide settings for the current zone
        let active_guide = {};

        // All of the timers, where the key is the id
        let random_timer_id = 0xFFFFFFFA; // Used if no id is specified
        let timers = {};

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
        function handle_event(ent, id, called_from_identifier, prefix_identifier, d, speed=1.0) {
            const unique_id = `${prefix_identifier}-${ent['huntingZoneId']}-${ent['templateId']}`;
            const key = `${unique_id}-${id}`;
            debug_message(d, `${called_from_identifier}: ${id} | Started by: ${unique_id} | key: ${key}`);

            const entry = active_guide[key];
            if(entry) return start_events(entry, ent, speed);
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
            // If the guide module is active and a guide for the current dungeon is found
            if(enabled && guide_found) {
                const ent = entity['mobs'][e.gameId.toString()];
                // Due to a bug for some bizare reason(probably proxy fucking itself) we do this ugly hack
                e.loc.w = e.w;
                // We've confirmed it's a mob, so it's plausible we want to act on this
                if(ent) return handle_event(Object.assign({}, ent, e), library.getSkillInfo(e.skill, true, true).id, 'Skill', 's', debug.debug || debug.skill || (ent['templateId'] % 1000 === 0 ? debug.boss : false), e.speed);
            }
        }
        dispatch.hook('S_ACTION_STAGE', 5, {order: 15}, s_action_stage);

        /** ABNORMALITY **/

        // Boss abnormality triggered
        function abnormality_triggered(e) {
            // If the guide module is active and a guide for the current dungeon is found
            if(enabled && guide_found) {
                const empty = library.emptyLong();
                // If e.source isn't defined, we define it
                if(e.source === undefined) e.source = empty;

                // If the boss/mob get's a abnormality applied to it
                const target_ent = entity['mobs'][e.target.toString()];

                // If the boss/mob is the cause for the abnormality
                const source_ent = entity['mobs'][e.source.toString()];

                // If the mob/boss applies an abnormality to me, it's plausible we want to act on this
                if(source_ent && player.isMe(e.target)) handle_event(source_ent, e.id, 'Abnormality', 'am', debug.debug || debug.abnormal);

                // If "nothing"/server applies an abnormality to me, it's plausible we want to act on this. (spam rip)
                if(player.isMe(e.target) && empty.equals(e.source)) handle_event({
                    huntingZoneId: 0,
                    templateId: 0
                }, e.id, 'Abnormality', 'ae', debug.debug || debug.abnormal);

                // If it's a mob/boss getting an abnormality applied to itself, it's plausible we want to act on it
                if(target_ent) handle_event(target_ent, e.id, 'Abnormality', 'ab', debug.debug || debug.abnormal);
            }
        }
        dispatch.hook('S_ABNORMALITY_BEGIN', 2, {order: 15}, abnormality_triggered);
        dispatch.hook('S_ABNORMALITY_REFRESH', 1, {order: 15}, abnormality_triggered);

        /** HEALTH **/

        // Boss health bar triggered
        dispatch.hook('S_BOSS_GAGE_INFO', 3, e=> {
             // If the guide module is active and a guide for the current dungeon is found
             if(enabled && guide_found) {
                const ent = entity['mobs'][e.id.toString()];
                // We've confirmed it's a mob, so it's plausible we want to act on this
                if(ent) return handle_event(ent, Math.floor(e.curHp / e.maxHp * 100), 'Health', 'h', debug.debug || debug.hp);
            }
        });

        /** MISC **/

        // Load guide and clear out timers
        dispatch.hook('S_LOAD_TOPO', 3, e=> {
            // Clear out the timers
            for(let key in timers) clearTimeout(timers[key]);
            timers = {};

            // Send debug message
            debug_message(debug.debug, 'Entered zone:', e.zone);

            // Remove potential cached guide from require cache, so that we don't need to relog to refresh guide
            try {
                delete require.cache[require.resolve('./guides/' + e.zone)];
            }catch(e) {}
            

            // Try loading a guide
            try {
                active_guide = require('./guides/' + e.zone);
                guide_found = true;
            }catch(e) {
                active_guide = {};
                guide_found = false;
                debug_message(debug.debug, e);
            }
        });

        // Guide command
        command.add('guide', (type, arg1, arg2)=> {
            switch(type) {
                // Toggle debug settings
                case "debug": {
                    if(!arg1 || debug[arg1] === undefined) return command.message(`Invalid sub command for debug mode. ${arg1}`);
                    debug[arg1] = !debug[arg1];
                    command.message(`Guide module debug(${arg1}) mode has been ${debug[arg1]?"enabled":"disabled"}.`);
                    break;
                }
                // Testing events
                case "event": {
                    // If we didn't get a second argument or the argument value isn't an event type, we return
                    if(!arg1 || !function_event_handlers[arg1] || !arg2) return command.message(`Invalid values for sub command "event" ${arg1} | ${arg2}`);

                    // Call a function handler with the event we got from arg2 with yourself as the entity
                    function_event_handlers[arg1](JSON.parse(arg2), player);
                    break;
                }
                // No known sub command found, so toggle on/off
                default: {
                    enabled = !enabled;
                    command.message(`Guide module has been ${enabled?"enabled":"disabled"}.`);
                }
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

            // Set sub_type to be collection as default for backward compatibility
            const sub_type =  event['sub_type'] || 'collection';

            // The unique spawned id this item will be using.
            const item_unique_id = random_timer_id--;

            // The location of the item spawned
            let loc = ent['loc'].clone();

            // if pos is set, we use that
            if(event['pos']) loc = event['pos'];

            loc.w = ent['loc'].w + event['offset'] || 0;
            library.applyDistance(loc, event['distance'] || 0);

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
                        source: library.emptyLong(),
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
                    case "item": return dispatch.toClient('S_SPAWN_DROPITEM', 6, sending_event);
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

        // Text handler
        function text_handler(event, ent, speed=1.0) {
            // Fetch the message(with region tag)
            const message = event[`message_${dispatch.base.region}`] || event[`message_${dispatch.base.region.toUpperCase()}`] || event['message'];
            // Make sure sub_type is defined
            if(!event['sub_type']) return debug_message(true, "Text handler needs a sub_type");
            // Make sure message is defined
            if(!message) return debug_message(true, "Text handler needs a message");

            let sending_event = {};
            // Create the sending event
            switch(event['sub_type']) {
                // If it's type message, it's S_DUNGEON_EVENT_MESSAGE with unk1 41
                case "message": {
                    sending_event = {
                        message: message,
                        unk1: 41,
                        unk2: 0,
                        unk3: 0
                    };
                    break;
                }
                // If it's type notification, it's S_CHAT with channel 21
                case "notification": {
                    sending_event = {
                        channel: 21,
                        authorName: config['chat-name'],
                        message: message
                    };
                    break;
                }
                // If it's type speech, it's text to speech. But since it isn't "required" to a try/catch
                case "speech": {
                    // if the say dependency was found
                    if(say) {
                        timers[event['id'] || random_timer_id--] = setTimeout(()=> {
                            say.speak(message);
                        }, (event['delay'] || 0 ) / speed);
                    }
                    return;
                }
                // If we haven't implemented the sub_type the event asks for
                default: {
                    return debug_message(true, "Invalid sub_type for text handler:", event['sub_type']);
                }
            }

            // Create the timer
            timers[event['id'] || random_timer_id--] = setTimeout(()=> {
                switch(event['sub_type']) {
                    case "message": return dispatch.toClient('S_DUNGEON_EVENT_MESSAGE', 1, sending_event);
                    case "notification": return dispatch.toClient('S_CHAT', 2, sending_event);
                }
            }, (event['delay'] || 0 ) / speed);
        }

        // Sound handler
        function sound_handler(event, ent, speed=1.0) {
            // Make sure id is defined
            if(!event['id']) return debug_message(true, "Sound handler needs a id");

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
            timers[event['id'] || random_timer_id--] = setTimeout(event['func'], (event['delay'] || 0) / speed, function_event_handlers, event, ent, dispatch);
        }
    }
}

module.exports = TeraGuide;