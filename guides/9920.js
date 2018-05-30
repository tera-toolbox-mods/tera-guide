// AAHM

module.exports = {
    // First boss

    // Target laser?
    "s-920-1000-1223": [
        {
            "type": "text",
            "sub_type": "message",
            "message": "Go to ice(if secondary aggro)"
        }
    ],

    // Push back -> target?
    "s-920-1000-1226": [
        {
            "type": "text",
            "sub_type": "message",
            "message": "Iframe push back"
        }
    ],

    // Shield back swing (unenraged)
    "s-920-1000-1105": [
        {
            "type": "text",
            "sub_type": "message",
            "message": "Dodge swing back attack"
        }
    ],

    // Shield back swing (enraged)
    "s-920-1000-2105": [
        {
            "type": "text",
            "sub_type": "message",
            "message": "Dodge swing back attack"
        },
        {
            "type": "text",
            "delay": 1000,
            "sub_type": "message",
            "message": "Back jump"
        },
        {
            "type": "text",
            "delay": 1300,
            "sub_type": "message",
            "message": "Out/In (iframe)"
        }
    ],

    // Second boss -- honestly idk with this one, names are all over the place

    // Boss below 50%
    "h-920-2000-50": [
        {
            "type": "text",
            "sub_type": "notification",
            "message": "Boss 50%. Both slashes from now on."
        }
    ],

    // Boss below 20%
    "h-920-2000-20": [
        {
            "type": "text",
            "sub_type": "notification",
            "message": "Boss 20%. Debuff often."
        }
    ],

    // Back attack + line on left ?
    "s-920-2000-1113": [
        {
            "type": "text",
            "sub_type": "message",
            "message": "Dodge back left swing (line)"
        },
        {
            "type": "spawn",
            "id": 559,
            "sub_delay": 5000,
            "distance": 200,
            "offset": -1.57
        },
    ],

    // Back attack + line on right ?
    "s-920-2000-1114": [
        {
            "type": "text",
            "sub_type": "message",
            "message": "Dodge back right swing (line)"
        },
        {
            "type": "spawn",
            "id": 559,
            "sub_delay": 5000,
            "distance": 200,
            "offset": 1.57
        },
    ],

    // Spinning attack (unenraged)
    "s-920-2000-1106": [
        {
            "type": "text",
            "sub_type": "message",
            "message": "Spinning attack(iframe, 15m)"
        },
    ],

    // Spinning attack (enraged)
    "s-920-2000-2106": [
        {
            "type": "text",
            "sub_type": "message",
            "message": "Spinning attack(iframe, 15m)"
        }
    ],


    // Third boss -- Idk names were aids :shrug: (only looked until 50% before I got bored)

    // Double cut -> double cut -> back attack (unenraged) ?
    "s-920-3000-1203": [
        {
            "type": "text",
            "sub_type": "message",
            "message": "Prepare to iframe(back attack)"
        }
    ],

    // Double cut -> double cut -> back attack (enraged) ?
    "s-920-3000-2203": [
        {
            "type": "text",
            "sub_type": "message",
            "message": "Prepare to iframe(back attack)"
        }
    ],

};