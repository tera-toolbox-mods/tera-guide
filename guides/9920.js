// AAHM 
//made by Yuyuko
let counter = 0;
let timer;
let print = true;

const TIMER_DELAY = 600;

const ITEM_SPAWNED_ON_SWIPE_ID = 556;
const ITEM_SPAWNED_ON_SWIPE_SUB_DELAY = 3000;
const ITEM_SPAWNED_ON_SWIPE_DISTANCE = 150;

//Ghergof: Knock up mech, AKA 'Your flesh will be deleted' callout
const EVENT_DELAY_FIRST_BOSS_HM = [{
    "type": "text",
    "sub_type": "notification",
    "delay": TIMER_DELAY,
    "message": "Dodge!"
}, ];



//Kalioth Health tips
function start_boss() {
    print = true;
}

function print_fifty(handlers) {
    if (print) {
        handlers['text']({
            "sub_type": "notification",
            "message": "50%"
        });
    }
    print = false;
}

function print_twenty(handlers) {
    if (print) {
        handlers['text']({
            "sub_type": "notification",
            "message": "20%"
        });
    }
    print = false;
}

//Antaroth: counter of back attacks
function right_left_attack_HM(handlers) {
    clearTimeout(timer);
    counter++;
    if (counter >= 2) {
        handlers['text']({
            "sub_type": "notification",
            "message": "Back attack"
        });
    }
    timer = setTimeout(() => {
        counter = 0;
    }, 3000);
}

/* ------------------------------------------- */
let third_boss_entity = null;
const COLOURS_OFFSETS = {
    "red": 0,
    "yellow": 2.5,
    "blue": -2.5,
};

let clockwise = null;

function set_clockwise(bool, handlers, _, ent) {
    third_boss_entity = ent;
    clockwise = bool;
}

function change_colour(colour, handlers) {
    // if we're already in the cage
    if(clockwise !== null || !third_boss_entity) return;
    // Get the colour rotation
    const colour_rotation = clockwise ? ["red", "yellow", "blue"] : ["blue", "yellow", "red"];

    // Loop thru the three cage rotations
    for(let i = 0; i < 3; i++) {
        let current_colour = colour_rotation[(colour_rotation.indexOf(colour) + i) % 3];

        handlers['spawn']({
            "id": 561,
            "delay": i * 2500,
            "sub_delay": (i + 1) * 3000,
            "distance": 75,
            "offset": COLOURS_OFFSETS[current_colour]
        }, third_boss_entity);
    }

    // clear out clockwise
    setTimeout(()=> {
        clockwise = null;
    }, 12000);
}

/* ------------------------------------------- */


module.exports = {
    /* -------------------------------- */
    // Cage mechanic on third boss
    // red
    "ae-0-0-9203037": [{
        "type": "func",
        "func": change_colour.bind(null, 'red')
    }],
    // yellow
    "ae-0-0-9203038": [{
        "type": "func",
        "func": change_colour.bind(null, 'yellow')
    }],
    // blue
    "ae-0-0-9203039": [{
        "type": "func",
        "func": change_colour.bind(null, 'blue')
    }],

    // counter-clockwise
    "s-920-3000-1317": [{
        "type": "func",
        "func": set_clockwise.bind(null, false)
    }],

    // clockwise
    "s-920-3000-1318": [{
        "type": "func",
        "func": set_clockwise.bind(null, true)
    }],

    /* -------------------------------- */


    //Ghergof, not enraged

    //Backstep+donuts, stay in, get out
    "s-920-1000-1117": [{
        "type": "text",
        "sub_type": "notification",
        "message": "stay in&#x2191; + get out&#x2193;"
    }],
    //Stomp+donuts, get out, stay in
    "s-920-1000-1116": [{
        "type": "text",
        "sub_type": "notification",
        "message": "get out&#x2193; + stay in&#x2191;"
    }],
    //ground thrust 2x+shield swing
    "s-920-1000-1109": [{
        "type": "text",
        "sub_type": "notification",
        "message": "back attack"
    }],
    //Massive In-Out Big AoE+Outer AoE+Inner AoE
    "s-920-1000-1130": [{
        "type": "text",
        "sub_type": "notification",
        "message": "full>outer>inner"
    }],


    //Ghergof, enraged

    //Backstep+donuts, stay in, get out
    "s-920-1000-2117": [{
        "type": "text",
        "sub_type": "notification",
        "message": "stay in&#x2191; + get out&#x2193;"
    }],
    //Stomp+donuts, get out, stay in
    "s-920-1000-2116": [{
        "type": "text",
        "sub_type": "notification",
        "message": "get out&#x2193; + stay in&#x2191;"
    }],
    //ground thrust 2x+shield swing
    "s-920-1000-2109": [{
        "type": "text",
        "sub_type": "notification",
        "message": "back attack"
    }],
    //enraged Massive In-Out Big AoE+Inner AoE+Outer AoE
    "s-920-1000-2130": [{
        "type": "text",
        "sub_type": "notification",
        "message": "full>inner>outer"
    }],

    //Ghergof special attack

    //Ghergof, knockup attack
    "s-920-1000-1300": EVENT_DELAY_FIRST_BOSS_HM,

    //Kalioth, not enraged

    //target one player then turn aroud with right hand side swing（I'm not sure if it always did LOL）
    "s-920-2000-1108": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Target swing"
    }],
    //Spin attack
    "s-920-2000-1106": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Spin attack"
    }],
    //Back attack
    "s-920-2000-1105": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Back attack"
    }],
    //Random aggro stun
    "s-920-2000-1104": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Random jump"
    }],
    //Stun attack
    "s-920-2000-1110": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Stun attack"
    }],
    //right hand side swing, tank goes to right, dps goes to left
    "s-920-2000-1112": [{
            "type": "text",
            "class_position": "tank",
            "sub_type": "notification",
            "message": "right&#x2192;"
        },
        {
            "type": "text",
            "class_position": "dps",
            "sub_type": "notification",
            "message": "left&#x2190;"
        },
        {
            "type": "text",
            "class_position": "heal",
            "sub_type": "notification",
            "message": "left&#x2190;"
        }
    ],
    //left hand side swing, tank goes to left, dps goes to right
    "s-920-2000-1111": [{
            "type": "text",
            "class_position": "tank",
            "sub_type": "notification",
            "message": "left&#x2190;"
        },
        {
            "type": "text",
            "class_position": "dps",
            "sub_type": "notification",
            "message": "right&#x2192;"
        },
        {
            "type": "text",
            "class_position": "heal",
            "sub_type": "notification",
            "message": "right&#x2192;"
        }
    ],
    //Kalioth, enraged

    //Spin attack
    "s-920-2000-2106": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Spin attack"
    }],
    //enraged back attack
    "s-920-2000-2105": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Back attack"
    }],
    //Random aggro stun
    "s-920-2000-2104": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Random jump"
    }],
    //right hand side swing, tank goes to right, dps goes to left
    "s-920-2000-2112": [{
            "type": "text",
            "class_position": "tank",
            "sub_type": "notification",
            "message": "right&#x2192;"
        },
        {
            "type": "text",
            "class_position": "dps",
            "sub_type": "notification",
            "message": "left&#x2190;"
        },
        {
            "type": "text",
            "class_position": "heal",
            "sub_type": "notification",
            "message": "left&#x2190;"
        }
    ],
    //left hand side swing, tank goes to left, dps goes to right
    "s-920-2000-2111": [{
            "type": "text",
            "class_position": "tank",
            "sub_type": "notification",
            "message": "left&#x2190;"
        },
        {
            "type": "text",
            "class_position": "dps",
            "sub_type": "notification",
            "message": "right&#x2192;"
        },
        {
            "type": "text",
            "class_position": "heal",
            "sub_type": "notification",
            "message": "right&#x2192;"
        }
    ],
    //Stun attack
    "s-920-2000-2110": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Stun attack"
    }],
    //target one player then turn aroud with right hand side swing（I'm not sure if it always did LOL）
    "s-920-2000-2108": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Target swing"
    }],


    //Kalioth, special attacks
    //Red, stay 15m away
    "s-920-2000-3119": [{
        "type": "text",
        "sub_type": "notification",
        "message": "red: get out&#x2193;"
    }],
    //Blue, stay near within 15m
    "s-920-2000-3220": [{
        "type": "text",
        "sub_type": "notification",
        "message": "blue: stay in&#x2191;"
    }],
    //stun+donut
    "s-920-2000-3116": [{
        "type": "text",
        "sub_type": "notification",
        "message": "dodge + stay in&#x2191;"
    }],
    //random aggro poison（3107）	

    //Kalioth Health tips

    //50%
    "h-920-2000-99": [{
        "type": "func",
        "func": start_boss
    }],
    "h-920-2000-50": [{
        "type": "func",
        "func": print_fifty
    }],
    //20%
    "h-920-2000-21": [{
        "type": "func",
        "func": start_boss
    }],
    "h-920-2000-20": [{
        "type": "func",
        "func": print_twenty
    }],

    //Antaroth, unenraged

    //pushback when engaging
    "s-920-3000-1315": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Pushback"
    }],
    //random aggro stun
    "s-920-3000-1107": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Random jump"
    }],
    //random aggro, holding blue orb, energy beam
    "s-920-3000-1204": [{
        "type": "text",
        "sub_type": "notification",
        "message": "energy beam"
    }],
    //heart thrust+anticlockwise spin+right swipe+AOEs from out to in
    "s-920-3000-1109": [{
            "type": "text",
            "class_position": "tank",
            "sub_type": "notification",
            "message": "right&#x2192;>out to in"
        },
        {
            "type": "text",
            "class_position": "dps",
            "sub_type": "notification",
            "message": "left&#x2190;>out to in"
        },
        {
            "type": "text",
            "class_position": "heal",
            "sub_type": "notification",
            "message": "left&#x2190;>out to in"
        },

        // Courtesy of Kasea ;)
        {
            "type": "spawn",
            "id": ITEM_SPAWNED_ON_SWIPE_ID,
            "sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
            "distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
            "offset": -1
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWNED_ON_SWIPE_ID,
            "sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
            "distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
            "offset": -2.3
        }
    ],
    //heart thrust+clockwise spin+left swipe+AOEs from in to out
    "s-920-3000-1111": [{
            "type": "text",
            "class_position": "tank",
            "sub_type": "notification",
            "message": "left&#x2190;>in to out"
        },
        {
            "type": "text",
            "class_position": "dps",
            "sub_type": "notification",
            "message": "right&#x2192;>in to out"
        },
        {
            "type": "text",
            "class_position": "heal",
            "sub_type": "notification",
            "message": "right&#x2192;>in to out"
        },

        // Courtesy of Kasea ;)
        {
            "type": "spawn",
            "id": ITEM_SPAWNED_ON_SWIPE_ID,
            "sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
            "distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
            "offset": 1
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWNED_ON_SWIPE_ID,
            "sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
            "distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
            "offset": 2.3
        }
    ],
    //front, back slam
    "s-920-3000-1113": [{
        "type": "text",
        "sub_type": "notification",
        "message": "front, back slam"
    }],
    //spinning attack
    "s-920-3000-1115": [{
        "type": "text",
        "sub_type": "notification",
        "message": "spinning attack"
    }],

    //golf swing x2 + back slam
    "s-920-3000-1104": [{
        "type": "func",
        "func": right_left_attack_HM
    }],
    //teleport back+ spin or front, back slam
    "s-920-3000-1202": [{
        "type": "text",
        "sub_type": "notification",
        "message": "spin or front,back slam"
    }],

    //Antaroth, enraged

    //enraged:random aggro, holding blue orb, energy beam
    "s-920-3000-2204": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Enraged: energy beam"
    }],
    //heart thrust+anticlockwise spin+right swipe+AOEs from out to in
    "s-920-3000-2109": [{
            "type": "text",
            "class_position": "tank",
            "sub_type": "notification",
            "message": "right&#x2192;>out to in"
        },
        {
            "type": "text",
            "class_position": "dps",
            "sub_type": "notification",
            "message": "left&#x2190;>out to in"
        },
        {
            "type": "text",
            "class_position": "heal",
            "sub_type": "notification",
            "message": "left&#x2190;>out to in"
        },

        // Courtesy of Kasea ;)
        {
            "type": "spawn",
            "id": ITEM_SPAWNED_ON_SWIPE_ID,
            "sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
            "distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
            "offset": -1
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWNED_ON_SWIPE_ID,
            "sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
            "distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
            "offset": -2.3
        }
    ],
    //heart thrust+clockwise spin+left swipe+AOEs from in to out
    "s-920-3000-2111": [{
            "type": "text",
            "class_position": "tank",
            "sub_type": "notification",
            "message": "left&#x2190;>in to out"
        },
        {
            "type": "text",
            "class_position": "dps",
            "sub_type": "notification",
            "message": "right&#x2192;>in to out"
        },
        {
            "type": "text",
            "class_position": "heal",
            "sub_type": "notification",
            "message": "right&#x2192;>in to out"
        },

        // Courtesy of Kasea ;)
        {
            "type": "spawn",
            "id": ITEM_SPAWNED_ON_SWIPE_ID,
            "sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
            "distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
            "offset": 1
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWNED_ON_SWIPE_ID,
            "sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
            "distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
            "offset": 2.3
        }
    ],
    //front, back slam
    "s-920-3000-2113": [{
        "type": "text",
        "sub_type": "notification",
        "message": "front, back slam"
    }],

    //golf swing x2 + back slam
    "s-920-3000-2104": [{
        "type": "func",
        "func": right_left_attack_HM
    }],
    //spinning attack
    "s-920-3000-2115": [{
        "type": "text",
        "sub_type": "notification",
        "message": "spinning attack"
    }],
    //random aggro stun
    "s-920-3000-2107": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Random jump"
    }],
    //teleport back+ spin or front, back slam
    "s-920-3000-2202": [{
        "type": "text",
        "sub_type": "notification",
        "message": "spin or front,back slam"
    }],

    //Antaroth special attack

    //clones, random aggro, energy beam
    "s-920-3000-1400": [{
        "type": "text",
        "sub_type": "notification",
        "message": "beam"
    }],
    //clones, random aggro, spin attack
    "s-920-3000-1401": [{
        "type": "text",
        "sub_type": "notification",
        "message": "spin"
    }]

};