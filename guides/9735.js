// RK9
//made by michengs
let player, entity, library, effect;

// Helper Functions

function single_stage_callout(message, handlers, event, entity) {
	if (entity.stage == 0) {
		handlers['text']({
	        "sub_type": "notification",
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
            "sub_type": "notification",
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
			        	"sub_type": "notification",
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





//三王出盾倒计时



//inner flower circle
//左边安全点 --------------------------------
/*
 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE"},
{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 2.3},
 {"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 1}
	//---------------------------- 
	*/


module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},
//一王 不愤怒
//firstboss, not enraged

    //后跳+内外圈,安全区域：站里面+站外面
	//Backstep+donuts, stay in, get out
	
	
	"s-735-1000-1104": mobflowers_fifthfloor,
		"s-735-1000-1104": [{"type": "func","func": cage_mechanic_thirdfloor.bind(null, 1104)}],

"s-735-1000-1104-0":[{"type": "text","sub_type": "speech","message": "Dodge Stun", "message_TW": "BOSS 眩晕攻击!坦克注意！" }],	
"s-735-1000-1104-0":[{"type": "text","sub_type": "speech","say": "BOSS 眩晕攻击!坦克注意！" }],		
	
	
     "s-735-1000-1104-0": [{"type": "text","sub_type": "notification","message": "Dodge Stun", "message_TW": "BOSS 眩晕攻击!坦克注意！" },
	 
	 

	 ],

     "s-735-1000-1304-0": [{"type": "text","sub_type": "notification","message": "get out", "message_TW": "出去" }],
		 
     "s-735-1000-1305-0": [{"type": "text","sub_type": "notification","message": "get in", "message_TW": "进" }],	 
 
		 //眩晕
     "s-735-1000-2104-0": [{"type": "text","sub_type": "notification","message": "Dodge Stun", "message_TW": "BOSS 眩晕攻击!坦克注意！" }],	

		 //前后砸 
     "s-735-1000-2112-0": [{"type": "text","sub_type": "notification","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],	
	 "s-735-1000-1112-0": [{"type": "text","sub_type": "notification","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],	 
     "s-735-1000-2111-0": [{"type": "text","sub_type": "notification","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],			  
     "s-735-1000-1111-0": [{"type": "text","sub_type": "notification","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],		 
		 	 
//跳
	
"s-735-1000-1309-0": [ 
{"type": "text","sub_type": "notification","message": "Dodge Stun", "message_TW": "开始发射4次导弹！！" },
{"type": "text","sub_type": "notification","delay": 7000,"message": "JUMP", "message_TW": "倒计时5"},
{"type": "text","sub_type": "notification","delay": 8000,"message": "JUMP", "message_TW": "倒计时4"},
{"type": "text","sub_type": "notification","delay": 9000,"message": "JUMP", "message_TW": "倒计时3"},
{"type": "text","sub_type": "notification","delay": 10000,"message": "JUMP", "message_TW": "倒计时2"},
{"type": "text","sub_type": "notification","delay": 11000,"message": "JUMP", "message_TW": "倒计时1"},
{"type": "text","sub_type": "notification","delay": 12000,"message": "JUMP", "message_TW": "快跳！"}
],

//拉人
	     "s-735-1000-1307-0": [{"type": "text","sub_type": "notification","message": "get out", "message_TW": "BOSS 拉人，注意无敌躲避！" }],
	//炸弹
	     "s-735-1000-1306-0": [{"type": "text","sub_type": "notification","message": "get out", "message_TW": "召唤地雷！快打！" }],


//------------------------------------2王

//---愤怒前砸

"s-735-2000-2102-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "前砸注意躲避"}],

"s-735-2000-1102-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "前砸注意躲避"}],

"s-735-2000-2108-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "后踢打手補师注意"}],

"s-735-2000-1108-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "后踢打手補师注意"}],

"s-735-2000-1301-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "boss扔溜溜球，注意躲避"}],

"s-735-2000-1304-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "boss近程攻击，快跑远"}],

//------------------------------------3王
//s拳
"s-735-3000-2116-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-2119-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避右边 →↘"}],	
"s-735-3000-1116-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-1119-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-1118-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避 左边 ←↙"}],	 
"s-735-3000-2118-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避 左边 ←↙"}],	 
"s-735-3000-2117-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避 左边 ←↙"}],
"s-735-3000-1117-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避 左边 ←↙"}],

	
//破盾
	     "s-735-3000-1321-0": [
		  {"type": "text","sub_type": "notification","message": "get out", "message_TW": "BOSS护盾 快打，不然灭团!" },
          {"type": "text","sub_type": "notification","delay": 90000,"message": "JUMP", "message_TW": "10S后准备破盾！"}	  
		 ],
		 
	 
		 
//坦无敌闪
"s-735-3000-1129-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "坦无敌闪"}],
"s-735-3000-2129-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "坦无敌闪"}],	


//出去	 
"s-735-3000-1324-0": [{"type": "text","sub_type": "notification","message": "stay in↑ + get out↓","message_TW": "出去"}] 
		 


};