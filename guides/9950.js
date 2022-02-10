// Harrowhold

// 100 minutes
const DESPAWN_DELAY = 6000000;
// 553 = proper
// 534 = incognito
const ITEM_SPAWN_ID = 553; // 556

module.exports = {
    load: ()=> {},

    // 4th Phase

    // 99% hp, spawn firewall indicators
    "h-950-4000-99": [
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": {
                x: -7374,
                y: -83192,
                z: 1
            }
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": {
                x: -7894,
                y: -83163,
                z: 1
            }
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": {
                x: -8618,
                y: -83528,
                z: 1
            }
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": {
                x: -8897,
                y: -83998,
                z: 1
            }
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": {
                x: -8938,
                y: -84861,
                z: 1
            }
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": {
                x: -7391,
                y: -85812,
                z: 1
            }
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": {
                x: -6686,
                y: -85442,
                z: 1
            }
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": {
                x: -6348,
                y: -84873,
                z: 1
            }
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": {
                x: -6356,
                y: -84053,
                z: 1
            }
        },
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": {
                x: -6637,
                y: -83602,
                z: 1
            }
        },

        // temp
        // {
        //     "type": "spawn",
        //     "id": ITEM_SPAWN_ID,
        //     "sub_delay": DESPAWN_DELAY,
        //     "pos": { x: -7364, y: -83180, z: 1 }, // Front (head)
        // },
        // {
        //     "type": "spawn",
        //     "id": ITEM_SPAWN_ID,
        //     "sub_delay": DESPAWN_DELAY,
        //     "pos": { x: -8946, y: -84887, z: 1 }, // Right-Back leg
        // },
        {
            "type": "spawn",
            "id": ITEM_SPAWN_ID,
            "sub_delay": DESPAWN_DELAY,
            "pos": { x: -8686, y: -85301, z: 1 }, // Right-Back leg 2
        },
        // {
        //     "type": "spawn",
        //     "id": ITEM_SPAWN_ID,
        //     "sub_delay": DESPAWN_DELAY,
        //     "pos": { x: -8620, y: -83531, z: 1 }, // Right-Front leg
        // },
        // {
        //     "type": "spawn",
        //     "id": ITEM_SPAWN_ID,
        //     "sub_delay": DESPAWN_DELAY,
        //     "pos": { x: -6667, y: -85440, z: 1 }, // Left-Back leg
        // },
        // {
        //     "type": "spawn",
        //     "id": ITEM_SPAWN_ID,
        //     "sub_delay": DESPAWN_DELAY,
        //     "pos": { x: -7403, y: -85814, z: 1 }, // Left-Back leg 2
        // },
        // {
        //     "type": "spawn",
        //     "id": ITEM_SPAWN_ID,
        //     "sub_delay": DESPAWN_DELAY,
        //     "pos": { x: -6411, y: -84057, z: 1 }, // Left-Front leg
        // },
        // {
        //     "type": "spawn",
        //     "id": ITEM_SPAWN_ID,
        //     "sub_delay": DESPAWN_DELAY,
        //     "pos": { x: -6353, y: -84872, z: 1 }, // Left-Middle
        // },
        // {
        //     "type": "spawn",
        //     "id": ITEM_SPAWN_ID,
        //     "sub_delay": DESPAWN_DELAY,
        //     "pos": { x: -8908, y: -84001, z: 1 }  // Right-Middle
        // },
        
    ]
};