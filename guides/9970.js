// RMHM
const FIRST_TIMER_DELAY = 40000;
const SECOND_TIMER_DELAY = 55000;

const EVENT_FOR_DEBUFFS = [
    {
        "type": "stop_timer",
        "id": 1
    },
    {
        "type": "stop_timer",
        "id": 2
    },
    {
        "type": "text",
        "sub_type": "message",
        "id": 1,
        "delay": FIRST_TIMER_DELAY,
        "message": "Debuff swap will happen soon"
    },
    {
        "type": "text",
        "sub_type": "message",
        "id": 2,
        "delay": SECOND_TIMER_DELAY,
        "message": "Debuff swap will happen soon"
    }
];

module.exports = {
    // First boss

    // Start(first debuff applied)
    "ae-0-0-97000042": EVENT_FOR_DEBUFFS,
    "ae-0-0-97000043": EVENT_FOR_DEBUFFS,

    // Debuff rotation happening
    "s-970-1000-1307": EVENT_FOR_DEBUFFS,

    // Meh, fill in with stop_timer id 1 below 70% hp, but cba
    
    // Second boss
    "s-970-2000-2106-0": [{"type": "text","sub_type": "notification","message": " STUN"}],

    // Third boss
    "s-970-3000-1102-0": [{"type": "text","sub_type": "notification","message": " Left Hand"}],
    "s-970-3000-2102-0": [{"type": "text","sub_type": "notification","message": " Left Hand"}],

    //Right Hand
    "s-970-3000-1101-0": [{"type": "text","sub_type": "notification","message": " Right Hand"}],
    "s-970-3000-2101-0": [{"type": "text","sub_type": "notification","message": " Right Hand"}],

    //Tail Slam
    "s-970-3000-1103-0": [{"type": "text","sub_type": "notification","message": " Tail Slam"}],
    "s-970-3000-2103-0": [{"type": "text","sub_type": "notification","message": " Tail Slam"}],

    //FATE Avoid Circles
    "s-970-3000-1301-0": [{"type": "text","sub_type": "notification","message": " FATE Avoid Circles"}],

    //Tail AOE (jump in front)
    "s-970-3000-2110-0": [{"type": "text","sub_type": "notification","message": " Tail AOE (jump in front)"}],
    "s-970-3000-1110-0": [{"type": "text","sub_type": "notification","message": " Tail AOE (jump in front)"}],

    //Get Ready ! (for in out mechanic)
    "s-970-3000-1304-0": [{"type": "text","sub_type": "notification","message": " Get Ready ! (for in out mechanic)"}],
    "s-970-3000-1303-0": [{"type": "text","sub_type": "notification","message": " Get Ready ! (for in out mechanic)"}],

    //GO OUT then come in
    "s-970-3000-2113-0": [{"type": "text","sub_type": "notification","message": " OUT -> IN"}],
    "s-970-3000-1113-0": [{"type": "text","sub_type": "notification","message": " OUT -> IN"}],

    //STAY IN then go out
    "s-970-3000-2116-0": [{"type": "text","sub_type": "notification","message": " IN -> OUT"}],
    "s-970-3000-1116-0": [{"type": "text","sub_type": "notification","message": " IN -> OUT"}],

    //GET RED SKULL !!
    "s-970-3000-1318-0": [{"type": "text","sub_type": "notification","message": " GET RED SKULL !!"}],
    "s-970-3000-1317-0": [{"type": "text","sub_type": "notification","message": " GET RED SKULL !!"}],
    "s-970-3000-1319-0": [{"type": "text","sub_type": "notification","message": " GET RED SKULL !!"}],

    //DODGE the PATTERNS !
    "s-970-3000-1322-0": [{"type": "text","sub_type": "notification","message": " DODGE the PATTERNS !"}],

    //GATHER FOR CLEANSE ! !
    "s-970-3000-1311-0": [{"type": "text","sub_type": "notification","message": " GATHER FOR CLEANSE !"}]
};