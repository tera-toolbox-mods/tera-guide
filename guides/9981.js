// vs
//made by michengs

let player, entity, library, effect;

// Helper Functions

function single_stage_callout(message, handlers, event, entity) {
	if (entity.stage == 0) {
		handlers['text']({
	        "sub_type": "message",
			"message": message,
		});
	}
}

// First Floor

// Knockback
let knockbackCounter = 0;
let knockbackTimer;

function knockback_firstfloor(handlers) {
	clearTimeout(knockbackTimer);
	knockbackCounter++;

    if(knockbackCounter >= 2) {
        handlers['text']({
            "sub_type": "message",
			"message": "KNOCKBACK",
        });
        knockbackCounter = 0;
    }

    knockbackTimer = setTimeout(()=>{
        knockbackCounter = 0;
	}, 5000);
}

// Third Floor

// Cage Mechanic
const PizzaA = {
    offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8],
    distance: 200
};

const PizzaB = {
    offsets: [-0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
    distance: 200
};

const PizzaC = {
    offsets: [-0.26, 1.29, 2.9, -1.84],
    distance: 200
};

const CounterPizzaC = {
    offsets: [0.24, 2.33, -2.88, -0.8, 0.79, 1.83, -2.34, -1.3],
    distance: 200
}

const Inner = {
    offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8, -0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
    distance: 275
};

const Outer = {
    offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8, -0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
    distance: 150
};

PizzaA.counter = PizzaB;
PizzaB.counter = PizzaA;
PizzaC.counter = CounterPizzaC;
Inner.counter = Outer;
Outer.counter = Inner;

const Mechanics = {
    1122: {
        order: [PizzaA, Inner, Outer, PizzaB, PizzaC],
        delays: [0, 1000, 2000, 3000, 4000]
    },
    1123: {
        order: [PizzaB, PizzaA, Outer, Inner, PizzaC],
        delays: [200, 1200, 2200, 3200, 4200]
    },
    1124: {
        order: [Inner, PizzaB, PizzaA, Outer, PizzaC],
        delays: [0, 1000, 2000, 3000, 4000]
    },
    1127: {
        order: [PizzaA, PizzaB, Inner, Outer, PizzaC],
        delays: [200, 1200, 2200, 3200, 4200]
    }
}

let debuffs_thirdfloor = [false, false, false, false, false] // False = Blue (Avoid Hit), True = Red (Take Hit)

function cage_mechanic_thirdfloor(id, handlers, event, entity) {
	let mechanic = Mechanics[id];
    
    if (mechanic && entity.stage == 0) {
    	let flower_id = 559;

        for (let i in mechanic.order) {
            let pattern = !debuffs_thirdfloor[i] ? mechanic.order[i] : mechanic.order[i].counter;

            for (let offset of pattern.offsets) {
	            handlers['spawn']({
	            	"id": flower_id,
	            	"delay": mechanic.delays[i],
	            	"sub_delay": mechanic.delays[i] + 1900,
	            	"distance": pattern.distance,
	            	"offset": offset
	            }, entity);
        	}
            flower_id = flower_id == 559 ? 556 : 559;
        }
    }
}

function cage_set_debuff(id, bool) {
	debuffs_thirdfloor[id] = bool;
}

// Fifth Floor

// Debuff Tracker

let debuff_tracker_started = false;

let debuffs_fifthfloor = {
	90340501: {name: "FIRE", count: 0},
	90340502: {name: "ICE", count: 0},
};

let debuff_call_event = null;

function start_fifthfloor(handlers, event, entity, dispatch) {
	const abnormality_change = (added, event) => {
		if ((player.isMe(event.target) || player.playersInParty.includes(event.target.toString())) && debuffs_fifthfloor[event.id]) {
				if (added) {
					debuffs_fifthfloor[event.id].count++;
				} else {
					debuffs_fifthfloor[event.id].count--;
				}

				if (debuff_call_event) {
					clearTimeout(debuff_call_event);
				}

				debuff_call_event = setTimeout(() => {
					let buffer = [];

					for (const entry of Object.values(debuffs_fifthfloor)) {
						buffer.push(`${entry.name}: ${entry.count}`);
					}

					handlers['text']({
			        	"sub_type": "message",
						"message": buffer.join(" - ")
			        });

					debuff_call_event = null;
				}, 200);
		}
	};

	if (!debuff_tracker_started) {
		dispatch.hook('S_ABNORMALITY_BEGIN', 2, abnormality_change.bind(null, true));
		dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));
		debuff_tracker_started = true;
	}
}

// Mobs Wave Attack Flowers

let mobflowers_fifthfloor = [];
for (let distance = 20; distance < 480; distance += 20) {
    mobflowers_fifthfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 3000,
    	"distance": distance,
    	"offset": 0.35
    });
    mobflowers_fifthfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 3000,
    	"distance": distance,
    	"offset": -0.35
    });
}
for (let offset = 0.35; offset >= -0.35; offset -= 0.05) {
    mobflowers_fifthfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 3000,
    	"distance": 480,
    	"offset": offset
    });
}

// 7th Floor

// Rings Flowers

function rings_seventhfloor(handlers, event, entity) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;

	library.applyDistance(shield_loc, 50);

    for (let angle = -Math.PI; angle <= Math.PI; angle += 2 * Math.PI / 40) {
        handlers['spawn']({
        	"id": 603,
        	"sub_delay": 5000,
        	"distance": 200,
        	"offset": angle
        }, {loc: shield_loc});
    }

    for (let angle = -Math.PI; angle <= Math.PI; angle += 2 * Math.PI / 70) {
        handlers['spawn']({
        	"id": 603,
        	"sub_delay": 5000,
        	"distance": 350,
        	"offset": angle
        }, {loc: shield_loc});
    }

}

// Rings IN + OUT and OUT + IN Flowers
// 召唤安全范围
let rings_inout_seventhfloor = [];
for (let angle = -Math.PI; angle <= Math.PI; angle += 2 * Math.PI / 40) {
    rings_inout_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 6000,
    	"distance": 250,
    	"offset": angle
    });
}

// Lasers Flowers and Signs

let lasers_markers_seventhfloor = [];
let inverted_lasers_markers_seventhfloor = [];
const sign_offsets_seventhfloor = [-0.32, -0.94, -1.57, -2.2, -2.83, 2.83, 2.2, 1.57, 0.94, 0.32];

for (let offset of sign_offsets_seventhfloor) {
	const event = {
		"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 4000,
		"distance": 450,
		"ownerName": "SAFE SPOT",
		"message": "SAFE",
		"offset": offset
	}

	lasers_markers_seventhfloor.push(event);
	inverted_lasers_markers_seventhfloor.push(event);
}

for (let distance = 175; distance <= 425; distance += 25) {
    lasers_markers_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 4000,
    	"distance": distance,
    	"offset": 0
    });
    lasers_markers_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 4000,
    	"distance": distance,
    	"offset": 1.25
    });
    lasers_markers_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 4000,
    	"distance": distance,
    	"offset": 2.5
    });
    lasers_markers_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 4000,
    	"distance": distance,
    	"offset": -2.5
    });
    lasers_markers_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 4000,
    	"distance": distance,
    	"offset": -1.25
    });

    inverted_lasers_markers_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 4000,
    	"distance": distance,
    	"offset": 0.62
    });
    inverted_lasers_markers_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 4000,
    	"distance": distance,
    	"offset": 1.87
    });
    inverted_lasers_markers_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 4000,
    	"distance": distance,
    	"offset": 3.12
    });
    inverted_lasers_markers_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 4000,
    	"distance": distance,
    	"offset": -1.88
    });
    inverted_lasers_markers_seventhfloor.push({
    	"type": "spawn",
    	"id": 603,
    	"sub_delay": 4000,
    	"distance": distance,
    	"offset": -0.63
    });
}


module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},
	
 "h-981-1000-100": [{"type": "text","sub_type": "notification","delay": 2000,"message": "proxy频道输入:補助 help <br>获取更多使用信息!"}],
	

	"s-981-1000-401": [{"type": "text","sub_type": "message","message": "右劈"},
	
	 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -1, "ownerName": "SAFE SPOT", "message": "SAFE"},
{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -2.3},
 {"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -1}	
	],
	"s-981-1000-402": [{"type": "text","sub_type": "message","message": "左劈"},
 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE"},
{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 2.3},
 {"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 1}	
	],
	

	

	"s-981-1000-303": [{"type": "text","sub_type": "message","message": "旋转攻击"}],
	"s-981-1000-113": [{"type": "text","sub_type": "message","message": "前劈"}],
	"s-981-1000-308": [{"type": "text","sub_type": "message","message": "出"}],
	"s-981-1000-309": [{"type": "text","sub_type": "message","message": "进"}],
	"s-981-1000-303": [{"type": "func","func": single_stage_callout.bind(null, "！")}],


	// 2王杜立温

	// Cage Mechanic
	"s-981-2000-122": [{"type": "func","func": cage_mechanic_thirdfloor.bind(null, 1122)}],
	"s-981-2000-123": [{"type": "func","func": cage_mechanic_thirdfloor.bind(null, 1123)}],
	"s-981-2000-124": [{"type": "func","func": cage_mechanic_thirdfloor.bind(null, 1124)}],
	"s-981-2000-127": [{"type": "func","func": cage_mechanic_thirdfloor.bind(null, 1127)}],

	"ae-0-0-90340306": [{"type": "func","func": cage_set_debuff.bind(null, 0, true)}],
	"ae-0-0-90340307": [{"type": "func","func": cage_set_debuff.bind(null, 0, false)}],
	"ae-0-0-90340308": [{"type": "func","func": cage_set_debuff.bind(null, 1, true)}],
	"ae-0-0-90340309": [{"type": "func","func": cage_set_debuff.bind(null, 1, false)}],
	"ae-0-0-90340310": [{"type": "func","func": cage_set_debuff.bind(null, 2, true)}],
	"ae-0-0-90340311": [{"type": "func","func": cage_set_debuff.bind(null, 2, false)}],
	"ae-0-0-90340312": [{"type": "func","func": cage_set_debuff.bind(null, 3, true)}],
	"ae-0-0-90340313": [{"type": "func","func": cage_set_debuff.bind(null, 3, false)}],
	"ae-0-0-90340314": [{"type": "func","func": cage_set_debuff.bind(null, 4, true)}],
	"ae-0-0-90340315": [{"type": "func","func": cage_set_debuff.bind(null, 4, false)}],

	// 
	"s-981-2000-503": [{"type": "text","sub_type": "message","message": "坦快跑远"}],	
	"s-981-2000-106": [{"type": "text","sub_type": "message","message": "后砸"}],	
	"s-981-2000-108": [{"type": "text","sub_type": "message","message": "前砸"}],		
	
	"s-981-2000-111": [{"type": "text","sub_type": "message","message": "360度攻击 "}],		
	"s-981-2000-302": [{"type": "text","sub_type": "message","message": "点名"}],		
	"s-981-2000-121": [{"type": "text","sub_type": "message","message": "召唤小怪快打"}],
	"s-981-2000-501": [{"type": "text","sub_type": "message","message": "封场鉴定开始"},
	{"type": "text","sub_type": "message","delay": 1000,"message": "3"} ,
	{"type": "text","sub_type": "message","delay": 2000,"message": "2"} ,
	{"type": "text","sub_type": "message","delay": 3000,"message": "1"} 
	],		
	"s-981-2000-112": [{"type": "func","func": single_stage_callout.bind(null, "STAB + KNOCKUP")}],
	"s-981-2000-130": [{"type": "text","sub_type": "message","message": "左劈"}, {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE"}, {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE"}, {"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 2.3}, {"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 1}],
	"s-981-2000-131": [{"type": "text","sub_type": "message","message": "右劈"}, {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -2.3, "ownerName": "SAFE SPOT", "message": "SAFE"}, {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -1, "ownerName": "SAFE SPOT", "message": "SAFE"}, {"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -2.3}, {"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -1}],
	"s-981-2000-134": [{"type": "func","func": single_stage_callout.bind(null, "吃注视")}],
	"s-981-2000-502": [{"type": "func","func": single_stage_callout.bind(null, "鉴定准备")}],


//----拉砍

	"s-981-3000-404": [{"type": "text","sub_type": "message","message": "注视 (最近)"}].concat(lasers_markers_seventhfloor),
	"s-981-3000-405": [{"type": "text","sub_type": "message","message": "注视 (最远)"}].concat(inverted_lasers_markers_seventhfloor),//
	"s-981-3000-301": [{"type": "text","sub_type": "message","message": "集中 + 解状态"}].concat(lasers_markers_seventhfloor),
	"s-981-3000-302": [{"type": "text","sub_type": "message","message": "集中 + 不 解状态"}].concat(inverted_lasers_markers_seventhfloor),//
	"s-981-3000-103": [{"type": "text","sub_type": "message","message": "分散"}].concat(lasers_markers_seventhfloor),
	"s-981-3000-105": [{"type": "text","sub_type": "message","message": "集中"}].concat(inverted_lasers_markers_seventhfloor),//
	"s-981-3000-116": [{"type": "text","sub_type": "message","message": "冲击波"}],
	"s-981-3000-701": [{"type": "text","sub_type": "message","message": "后踢 + 前戳"}],
	"s-981-3000-136": [{"type": "text","sub_type": "message","message": "点名"}],
	"s-981-3000-152": [{"type": "func","func": single_stage_callout.bind(null, "击晕 + 后踢")}],
	"s-981-3000-138": rings_inout_seventhfloor,// 召唤安全范围
	"s-981-3000-144": [{"type": "text","sub_type": "message","message": "出 "}],
	"s-981-3000-145": [{"type": "text","sub_type": "message","message": "进"}],
	"s-981-3000-240": [{"type": "func","func": rings_seventhfloor}],
	"s-981-3000-401": [{"type": "text","sub_type": "message","message": "驱散"}],
	"s-981-3000-402": [{"type": "text","sub_type": "message","message": "睡"}]
  
	// 






};