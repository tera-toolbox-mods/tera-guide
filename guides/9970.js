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
	
  //  "s-970-3000-1322-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "内外炸" }],
  //  "s-970-3000-1303-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "进" }],
   // "s-970-3000-2113-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "出" }],	
	
	
	
  //  "s-970-3000-1301-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "炸圈" }],	
  //  "s-970-3000-2303-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "进" }]
    // Meh, fill in with stop_timer id 1 below 70% hp, but cba
    
    // Second boss


    // Third boss


};