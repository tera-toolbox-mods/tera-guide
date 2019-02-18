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
	//"s-434-6000-2134": [{"type": "func","func": single_stage_callout.bind(null, "SLAM + BACK")}],
// First Floor

// Knockback  5秒内连续出2次 固定处某技能 
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

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// First Floor

	// Clone Mechanic
	"ab-434-1000-90340105": [{"type": "text","sub_type": "notification","message": "STUN IT"}],

	// Backstep + Knockback
	"s-434-1000-1304": [{"type": "text","sub_type": "notification","message": "BACKSTEP + KNOCKBACK"}],

	// Not Enraged
	"s-434-1000-1102": [{"type": "func","func": knockback_firstfloor}],
	"s-434-1000-1105": [{"type": "text","sub_type": "notification","message": "PUKE"}],
	"s-434-1000-1203": [{"type": "text","sub_type": "notification","message": "SLEEP"}],

	// Enraged
	"s-434-1000-2102": [{"type": "func","func": knockback_firstfloor}],
	"s-434-1000-2105": [{"type": "text","sub_type": "notification","message": "PUKE"}],
	"s-434-1000-2203": [{"type": "text","sub_type": "notification","message": "SLEEP"}],

	// Second Floor

	// Not Enraged
	"s-434-2000-1101": [{"type": "text","sub_type": "notification","message": "SMASH COMING"}],
	"s-434-2000-1102": [{"type": "text","sub_type": "notification","message": "SPIN"}],
	"s-434-2000-1107": [{"type": "text","sub_type": "notification","message": "BACK"}],
	"s-434-2000-1108": [{"type": "text","sub_type": "notification","message": "FRONT"}],
	"s-434-2000-1109": [{"type": "func","func": single_stage_callout.bind(null, "BACK SPIN")}],
	"s-434-2000-1110": [{"type": "text","sub_type": "notification","message": "OUT"}],
	"s-434-2000-1119": [{"type": "text","sub_type": "notification","message": "PULL"}],
	"s-434-2000-1122": [{"type": "text","sub_type": "notification","message": "IN"}],
	

	// Enraged
	"s-434-2000-2101": [{"type": "text","sub_type": "notification","message": "SMASH COMING"}],
	"s-434-2000-2102": [{"type": "text","sub_type": "notification","message": "SPIN"}],
	"s-434-2000-2107": [{"type": "text","sub_type": "notification","message": "BACK"}],
	"s-434-2000-2108": [{"type": "text","sub_type": "notification","message": "FRONT"}],
	"s-434-2000-2109": [{"type": "func","func": single_stage_callout.bind(null, "BACK SPIN")}],
	"s-434-2000-2110": [{"type": "text","sub_type": "notification","message": "OUT"}],
	"s-434-2000-2119": [{"type": "text","sub_type": "notification","message": "PULL"}],
	"s-434-2000-2122": [{"type": "text","sub_type": "notification","message": "IN"}],

	// Third Floor

	// Cage Mechanic
	"s-434-3000-1122": [{"type": "func","func": cage_mechanic_thirdfloor.bind(null, 1122)}],
	"s-434-3000-1123": [{"type": "func","func": cage_mechanic_thirdfloor.bind(null, 1123)}],
	"s-434-3000-1124": [{"type": "func","func": cage_mechanic_thirdfloor.bind(null, 1124)}],
	"s-434-3000-1127": [{"type": "func","func": cage_mechanic_thirdfloor.bind(null, 1127)}],

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





	"s-434-3000-112": [{"type": "func","func": single_stage_callout.bind(null, "STAB + KNOCKUP")}], //
	//左边安全区
	"s-434-3000-130": [{"type": "text","sub_type": "notification","message": "LEFT SWIPE"}, 
	{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE"}, 
	{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE"}, 
	{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 2.3}, 
	{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 1}],
	//右边安全区	
	"s-434-3000-131": [{"type": "text","sub_type": "notification","message": "RIGHT SWIPE"}, 
	{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -2.3, "ownerName": "SAFE SPOT", "message": "SAFE"}, 
	{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -1, "ownerName": "SAFE SPOT", "message": "SAFE"},
	{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -2.3},
	{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -1}],
	
	"s-434-3000-134": [{"type": "func","func": single_stage_callout.bind(null, "DEBUFF")}],       //
	"s-434-3000-502": [{"type": "func","func": single_stage_callout.bind(null, "FORCED CAGE")}], //



	// Fifth Floor

	// Debuff Tracker
	// "h-434-5000-100": [{"type": "func","func": start_fifthfloor}],

	// Mob Wave Attack
	"s-434-5002-3106": mobflowers_fifthfloor,
	"s-434-5003-3101": mobflowers_fifthfloor,	



	// Seventh Floor

	// Lasers + Mechanic
	"s-434-7000-1901": [{"type": "text","sub_type": "notification","message": "DEBUFF (CLOSEST)"}].concat(lasers_markers_seventhfloor),
	"s-434-7000-1902": [{"type": "text","sub_type": "notification","message": "DEBUFF (FURTHEST)"}].concat(inverted_lasers_markers_seventhfloor),
	"s-434-7000-1903": [{"type": "text","sub_type": "notification","message": "GATHER + CLEANSE"}].concat(lasers_markers_seventhfloor),
	"s-434-7000-1904": [{"type": "text","sub_type": "notification","message": "GATHER + NO CLEANSE"}].concat(inverted_lasers_markers_seventhfloor),
	"s-434-7000-1905": [{"type": "text","sub_type": "notification","message": "SPREAD"}].concat(lasers_markers_seventhfloor),
	"s-434-7000-1906": [{"type": "text","sub_type": "notification","message": "GATHER"}].concat(inverted_lasers_markers_seventhfloor),




	// Enraged
	"s-434-7000-2152": [{"type": "func","func": single_stage_callout.bind(null, "STUN + BACK")}],
	"s-434-7000-2138": rings_inout_seventhfloor,
	"s-434-7000-2154": [{"type": "text","sub_type": "notification","message": "OUT + IN"}],
	"s-434-7000-2155": [{"type": "text","sub_type": "notification","message": "IN + OUT"}],
	"s-434-7000-2240": [{"type": "func","func": rings_seventhfloor}],
	"s-434-7000-2401": [{"type": "text","sub_type": "notification","message": "PLAGUE/REGRESS"}],
	"s-434-7000-2402": [{"type": "text","sub_type": "notification","message": "SLEEP"}],
};