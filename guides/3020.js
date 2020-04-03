// Sea of Honor
//
// made by michengs
// updated by HSDN

const {SpawnMarker, SpawnVector, SpawnCircle, applyDistance} = require("../lib");

let player, entity, library, effect;
let green = false;
let purple = false;
let boss_thirty = false;
let print = false;

// 2000 => 4000 => 6000
function skilld_event(skillid, handlers, event, entity, dispatch) {
	// (зеленый) "Ближе!"
	if (skillid == 121) {
		green  = true;
		// круг перед боссом
		SpawnCircle(true, 553,0,170,8,290,2000,2000,handlers,event,entity); // 1
		// бублик вокруг босса
		SpawnCircle(true, 445,0,0,8,280,4000,2000,handlers,event,entity); // 2
		SpawnCircle(true, 445,0,0,4,570,4000,2000,handlers,event,entity); // 2
	}

	// (фиолетовый) "Проваливай!"
	if (skillid == 122) {
		purple = true;
		// бублик вокруг босса
		SpawnCircle(true, 553,0,0,8,280,2000,2000,handlers,event,entity); // 1
		SpawnCircle(true, 553,0,0,4,570,2000,2000,handlers,event,entity); // 1
		// круг перед боссом
		SpawnCircle(true, 445,0,170,8,290,4000,2000,handlers,event,entity); // 2
	}

	// "Упади в бездну"
	if (skillid == 120) {
		// Проваливай! - Упади в бездну
		// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> к нему (бублик перед боссом)
		if (purple && !boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT > IN","message_TW": "进-出-进","message_RU": "К нему > От него > К нему"});

			// бублик перед боссом
			SpawnCircle(true, 912,0,150,8,280,6000,3000,handlers,event,entity); // 3
			SpawnCircle(true, 912,0,150,4,570,6000,3000,handlers,event,entity); // 3

			setTimeout(() => purple = false, 2000);

		// < 30%
		// Проваливай! - Упади в бездну
		// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> [волны] -> к нему (бублик перед боссом)
		} else if (purple && boss_thirty) { 
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT","message_TW": "进-出","message_RU": "К нему > От него"});
			handlers['text']({"type": "text","sub_type": "message","delay": 6000,"message": "IN","message_TW": "进","message_RU": "К нему"});

			// бублик перед боссом
			SpawnCircle(true, 912,0,150,8,280,7000,5000,handlers,event,entity); // 3
			SpawnCircle(true, 912,0,150,4,570,7000,5000,handlers,event,entity); // 3

			setTimeout(() => purple = false, 2000);
		}
	}

	// "Ощути силу взрыва"
	if (skillid == 123) {
		// Ближе! - Ощути силу взрыва
		// от него (круг перед боссом) -> к нему (бублик вокруг босса) -> от него (большой круг перед боссом)
		if (green && !boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "OUT > IN > OUT","message_TW": "出-进-出","message_RU": "От него > К нему > От него"});

			// большой круг перед боссом
			SpawnCircle(true, 912,0,200,8,450,6000,3000,handlers,event,entity); // 3

			setTimeout(() => green = false, 2000);

		// Проваливай - Ощути силу взрыва
		// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> от него (большой круг перед боссом)
		} else if (purple && !boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT > OUT","message_TW": "进-出-出","message_RU": "К нему > От него > От него"});
			
			// большой круг перед боссом
			SpawnCircle(true, 912,0,200,8,450,6000,3000,handlers,event,entity); // 3

			setTimeout(() => purple = false, 2000);

		// < 30%
		// Ближе! - Ощути силу взрыва
		// от него (круг перед боссом) -> к нему (бублик вокруг босса) -> [волны] -> от него (большой круг перед боссом)
		} else if (green && boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "OUT > IN","message_TW": "出-进","message_RU": "От него > К нему"});
			handlers['text']({"type": "text","sub_type": "message","delay": 6000,"message": "OUT","message_TW": "出","message_RU": "От него"});

			// большой круг перед боссом
			SpawnCircle(true, 912,0,200,8,450,7000,5000,handlers,event,entity); // 3

			setTimeout(() => purple = false, 2000);

		// < 30%
		// Проваливай! - Ощути силу взрыва
		// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> [волны] -> от него (большой круг перед боссом)
		} else if (purple && boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT","message_TW": "进-出","message_RU": "К нему > От него"});
			handlers['text']({"type": "text","sub_type": "message","delay": 6000,"message": "OUT","message_TW": "出","message_RU": "От него"});

			// большой круг перед боссом
			SpawnCircle(true, 912,0,200,8,450,7000,5000,handlers,event,entity); // 3

			setTimeout(() => purple = false, 2000);
		}
	}
}

// HP босса < 30%
function start_boss() {
	if (print) return;
	boss_thirty = true;
	print = true;
}

let debuff_tracker_started = false;
let debuffs_targe = {
	30209101: {msgt: 'lightning',     msg: '闪电', msgr: 'Молния (эвейд)'}, 
	30209102: {msgt: 'Witch',     msg: '魔女',     msgr: 'Ведьма (эвейд)'}
};
let debuff_call_event = null;
function start_Sailing_Instance(handlers, event, entity, dispatch) {
	const abnormality_change = (added, event) => {
		if ((player.isMe(event.target) || player.playersInParty.includes(event.target.toString())) && debuffs_targe[event.id]) {
				if (added) {
				if (debuff_call_event) {
					clearTimeout(debuff_call_event);
				}
				debuff_call_event = setTimeout(() => {
					handlers['text']({
			        	"sub_type": "message",
						"message": debuffs_targe[event.id].msgt,
						"message_TW": debuffs_targe[event.id].msg,
						"message_RU": debuffs_targe[event.id].msgr						
			        });
					debuff_call_event = null;
				}, 1500);
				} else {

				}
		}
	};

	if (!debuff_tracker_started) {
		dispatch.hook('S_ABNORMALITY_BEGIN', 4, abnormality_change.bind(null, true));
		dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));
		debuff_tracker_started = true;
	}
}
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	"s-3020-1900-104-0": [{"type": "text","sub_type": "message","message": "Suction (Dodge)","message_TW": "吸蓝","message_RU": "Высасывание (Выйти)"},{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,15,450,200,3000)}],

	// 2 BOSS
	"s-3020-1200-103-0": [{"type": "text","sub_type": "message","message": "Suction (Dodge)","message_TW": "吸蓝","message_RU": "Высасывание"}],

	// 3 BOSS
	"s-3020-2200-108-0": [{"type": "text","sub_type": "message","message": "Front stun","message_TW": "晕","message_RU": "Стан"},{"type": "func","func": SpawnCircle.bind(null,true,553,0,170,20,120,200,2000)}],

	"ae-0-0-4030": [{"type": "func","func": start_Sailing_Instance}],
	"ae-0-0-4020": [{"type": "func","func": start_Sailing_Instance}],
	"h-3020-2200-30": [{"type": "func","func": start_boss}],
	"h-3020-2200-29": [{"type": "func","func": start_boss}],
	"h-3020-2200-28": [{"type": "func","func": start_boss}],
	"h-3020-2200-27": [{"type": "func","func": start_boss}],
	"h-3020-2200-26": [{"type": "func","func": start_boss}],
	"h-3020-2200-25": [{"type": "func","func": start_boss}],
	"h-3020-2200-24": [{"type": "func","func": start_boss}],
	"h-3020-2200-23": [{"type": "func","func": start_boss}],
	"h-3020-2200-22": [{"type": "func","func": start_boss}],
	"h-3020-2200-21": [{"type": "func","func": start_boss}],
	"h-3020-2200-20": [{"type": "func","func": start_boss}],
	"h-3020-2200-19": [{"type": "func","func": start_boss}],
	"h-3020-2200-18": [{"type": "func","func": start_boss}],
	"h-3020-2200-17": [{"type": "func","func": start_boss}],
	"h-3020-2200-16": [{"type": "func","func": start_boss}],
	"h-3020-2200-15": [{"type": "func","func": start_boss}],
	"h-3020-2200-14": [{"type": "func","func": start_boss}],
	"h-3020-2200-13": [{"type": "func","func": start_boss}],
	"h-3020-2200-12": [{"type": "func","func": start_boss}],
	"h-3020-2200-11": [{"type": "func","func": start_boss}],
	"h-3020-2200-10": [{"type": "func","func": start_boss}],
	"h-3020-2200-9": [{"type": "func","func": start_boss}],
	"h-3020-2200-8": [{"type": "func","func": start_boss}],
	"h-3020-2200-7": [{"type": "func","func": start_boss}],
	"h-3020-2200-6": [{"type": "func","func": start_boss}],
	"h-3020-2200-5": [{"type": "func","func": start_boss}],
	"h-3020-2200-4": [{"type": "func","func": start_boss}],
	"h-3020-2200-3": [{"type": "func","func": start_boss}],
	"h-3020-2200-2": [{"type": "func","func": start_boss}],
	"h-3020-2200-1": [{"type": "func","func": start_boss}],

	"s-3020-2200-121-0": [{"type": "func","func": skilld_event.bind(null, 121)}], // "Ближе!" (зеленый)
	"s-3020-2200-122-0": [{"type": "func","func": skilld_event.bind(null, 122)}], // "Проваливай!" (фиолетовый)
	"s-3020-2200-120-0": [{"type": "func","func": skilld_event.bind(null, 120)}], // "Упади в бездну"
	"s-3020-2200-123-0": [{"type": "func","func": skilld_event.bind(null, 123)}], // "Ощути силу взрыва"
 
	"s-3020-2200-127-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "跳劈","message_RU": "Прыжок | К нему"},
						  {"type": "func","func": SpawnCircle.bind(null,true,553,0,0,15,200,250,1000)},
						  {"type": "func","func": SpawnCircle.bind(null,true,553,0,0,10,300,1000,4000)}
	],
	"s-3020-2200-128-0": [{"type": "text","sub_type": "message","message": "Upper cut (Knock up)","message_TW": "强袭","message_RU": "Черкаш (подлет)"}],
	"s-3020-2200-129-0": [{"type": "text","sub_type": "message","message": "Hammer Toss ~ Skull","message_TW": "点名蓄力","message_RU": "Полоса в цель"},
						  {"type": "func","func": SpawnVector.bind(null,553,90,100,0,500,200,6000)},
						  {"type": "func","func": SpawnVector.bind(null,553,270,100,0,500,200,6000)}
	],
	"s-3020-2200-131-0": [{"type": "text","sub_type": "message","message": "Jump | OUT","message_TW": "咆哮远离","message_RU": "Прыжок | От него"}],
	"s-3020-2200-133-1": [{"type": "text","sub_type": "message","message": "Donuts","message_TW": "点名扩散圈","message_RU": "Бублики"},
                          {"type": "func","func": SpawnMarker.bind(null,true,0,0,0,5000,true,["中心","扩散圈"])},                              
						  {"type": "func","func": SpawnCircle.bind(null,true,445,0,0,10,300,200,5000)},
						  {"type": "func","func": SpawnCircle.bind(null,true,445,0,0,6,600,200,5000)},
						  {"type": "func","func": SpawnCircle.bind(null,true,445,0,0,4,900,200,5000)}
	],
	"s-3020-2200-135-0": [{"type": "text","sub_type": "message","message": "Puddles Inc (Jump)","message_TW": "准备跳","message_RU": "Волны х5"}],
	"s-3020-2200-137-0": [{"type": "text","sub_type": "message","message": "Outward Pluse","message_TW": "扩散圈","message_RU": "Волна от"}],
	"s-3020-2200-139-0": [{"type": "text","sub_type": "message","message": "Inward Succ","message_TW": "收缩圈","message_RU": "Волна к"}],

	"s-3020-2200-202-0": [{"type": "text","sub_type": "message","message": "Defence 3sec.","message_RU": "Защита 3 сек."}],
	"s-3020-2200-203-0": [{"type": "text","sub_type": "message","message": "Defence 10sec.","message_RU": "Защита 10 сек."}],
	"s-3020-2200-204-0": [{"type": "text","sub_type": "message","message": "30% transformation","message_TW": "变身","message_RU": "Видоизменение"}]
};