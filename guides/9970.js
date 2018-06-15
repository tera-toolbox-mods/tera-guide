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
    "s-970-1000-1307": EVENT_FOR_DEBUFFS 

    // Meh, fill in with stop_timer id 1 below 70% hp, but cba
    
    // Second boss


    // Third boss


};