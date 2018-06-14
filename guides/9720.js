// AANM
//made by Yuyuko
let counter = 0;
let timer;

const TIMER_DELAY = 600;

const ITEM_SPAWNED_ON_SWIPE_ID = 556;
const ITEM_SPAWNED_ON_SWIPE_SUB_DELAY = 5000;
const ITEM_SPAWNED_ON_SWIPE_DISTANCE = 150;

// Ghergof: Knock up mech, AKA 'Your flesh will be deleted' callout
const EVENT_DELAY_FIRST_BOSS_NM = [{
    "type": "text",
    "sub_type": "notification",
    "delay": TIMER_DELAY,
    "message": "Dodge!"
}, ];

// Antaroth: counter of back attacks
function right_left_attack_NM(handlers) {
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

module.exports = {

    //Ghergof, not enraged

    //Backstep+donuts, stay in, get out
    "s-720-1000-1117": [{
        "type": "text",
        "sub_type": "notification",
        "message": "stay in&#x2191; + get out&#x2193;"
    }],
    //Stomp+donuts, get out, stay in
    "s-720-1000-1116": [{
        "type": "text",
        "sub_type": "notification",
        "message": "get out&#x2193; + stay in&#x2191;"
    }],
    //ground thrust 2x+shield swing
    "s-720-1000-1109": [{
        "type": "text",
        "sub_type": "notification",
        "message": "back attack"
    }],

    //Ghergof, enraged

    //Backstep+donuts, stay in, get out
    "s-720-1000-2117": [{
        "type": "text",
        "sub_type": "notification",
        "message": "stay in&#x2191; + get out&#x2193;"
    }],
    //Stomp+donuts, get out, stay in
    "s-720-1000-2116": [{
        "type": "text",
        "sub_type": "notification",
        "message": "get out&#x2193; + stay in&#x2191;"
    }],
    //ground thrust 2x+shield swing
    "s-720-1000-2109": [{
        "type": "text",
        "sub_type": "notification",
        "message": "back attack"
    }],

    //Ghergof special attack

    //Ghergof, knockup attack
    "s-720-1000-1300": EVENT_DELAY_FIRST_BOSS_NM,

    //Kalioth, not enraged

    //Spin attack
    "s-720-2000-1106": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Spin attack"
    }],
    //Back attack
    "s-720-2000-1105": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Back attack"
    }],
    //Random aggro stun
    "s-720-2000-1104": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Random jump"
    }],
    //Stun attack
    "s-720-2000-1110": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Stun attack"
    }],
    //right hand side swing, tank goes to right, dps goes to left
    "s-720-2000-1112": [{
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
    "s-720-2000-1111": [{
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
    "s-720-2000-2106": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Spin attack"
    }],
    //enraged back attack
    "s-720-2000-2105": [{
        "type": "text",
        "sub_type": "notification",
        "message": "back attack"
    }],
    //Random aggro stun
    "s-720-2000-2104": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Random aggro jump"
    }],
    //right hand side swing, tank goes to right, dps goes to left
    "s-720-2000-2112": [{
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
    "s-720-2000-2111": [{
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
    "s-720-2000-2110": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Stun attack"
    }],

    //Kalioth, special attacks

    //Red, stay 15m away
    "s-720-2000-3119": [{
        "type": "text",
        "sub_type": "notification",
        "message": "red: get out&#x2193;"
    }],
    //Blue, stay near within 15m
    "s-720-2000-3220": [{
        "type": "text",
        "sub_type": "notification",
        "message": "blue: stay in&#x2191;"
    }],
    //stun+donut
    "s-720-2000-3116": [{
        "type": "text",
        "sub_type": "notification",
        "message": "dodge + stay in&#x2191;"
    }],
    //random aggro poison（3107）

    //Antaroth, unenraged

    //pushback when engaging
    "s-720-3000-1315": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Pushback"
    }],
    //random aggro stun
    "s-720-3000-1107": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Random jump"
    }],
    //random aggro, holding blue orb, energy beam
    "s-720-3000-1204": [{
        "type": "text",
        "sub_type": "notification",
        "message": "energy beam"
    }],
    //heart thrust+anticlockwise spin+right swipe
    "s-720-3000-1109": [{
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
    //heart thrust+clockwise spin+left swipe
    "s-720-3000-1111": [{
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
    "s-720-3000-1113": [{
        "type": "text",
        "sub_type": "notification",
        "message": "front, back slam"
    }],
    //spinning attack
    "s-720-3000-1115": [{
        "type": "text",
        "sub_type": "notification",
        "message": "spinning attack"
    }],
    //golf swing x2 + back slam
    "s-720-3000-1104": [{
        "type": "func",
        "func": right_left_attack_NM
    }],
    //teleport back+ spin or front, back slam
    "s-720-3000-1202": [{
        "type": "text",
        "sub_type": "notification",
        "message": "spin or front,back slam"
    }],

    //Antaroth, enraged

    //random aggro, holding blue orb, energy beam
    "s-720-3000-2204": [{
        "type": "text",
        "sub_type": "notification",
        "message": "enraged:energy beam"
    }],
    //heart thrust+anticlockwise spin+right swipe
    "s-720-3000-2109": [{
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
    //heart thrust+clockwise spin+left swipe
    "s-720-3000-2111": [{
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
    "s-720-3000-2113": [{
        "type": "text",
        "sub_type": "notification",
        "message": "front, back slam"
    }],
    //golf swing x2 + back slam
    "s-720-3000-2104": [{
        "type": "func",
        "func": right_left_attack_NM
    }],
    //spinning attack
    "s-720-3000-2115": [{
        "type": "text",
        "sub_type": "notification",
        "message": "spinning attack"
    }],
    //random aggro stun
    "s-720-3000-2107": [{
        "type": "text",
        "sub_type": "notification",
        "message": "Random jump"
    }],
    //teleport back+ spin or front, back slam
    "s-720-3000-2202": [{
        "type": "text",
        "sub_type": "notification",
        "message": "spin or front,back slam"
    }],

    //Antaroth, special attacks

    //clones, random aggro, energy beam
    "s-720-3000-1400": [{
        "type": "text",
        "sub_type": "notification",
        "message": "beam"
    }],
    //clones, random aggro, spin attack
    "s-720-3000-1401": [{
        "type": "text",
        "sub_type": "notification",
        "message": "spin"
    }]

};