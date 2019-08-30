
//

let player, entity, library, effect;

	function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
    }
function Spawnitem2(item,degree,distance, intervalDegrees, radius, delay,times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
    let	degrees = 360 - degree;
	applyDistance(shield_loc, distance, degrees);
    for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
        handlers['spawn']({
        	"id": item,
			"delay": delay,
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});
    }
}


const FIRST_TIMER_DELAY = 40000;
const SECOND_TIMER_DELAY = 55000;

const EVENT_FOR_DEBUFFS = [

    {
        "type": "text",
        "sub_type": "message",

        "delay": FIRST_TIMER_DELAY,
        "message": "Debuff swap will happen soon",
		"message_TW": "Debuff交换准备"
    },
    {
        "type": "text",
        "sub_type": "message",

        "delay": SECOND_TIMER_DELAY,
        "message": "Debuff swap will happen soon",
		"message_TW": "Debuff交换准备"
    }
];

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

    // Start(first debuff applied)
   // "ae-0-0-97000042": EVENT_FOR_DEBUFFS,
   // "ae-0-0-97000043": EVENT_FOR_DEBUFFS,

    // Debuff rotation happening
  //  "s-970-1000-1307":  ,

    // Meh, fill in with stop_timer id 1 below 70% hp, but cba
    
    // Second boss
    "s-970-2000-2106-0": [{"type": "text","sub_type": "message","message_TW": "晕","message": " STUN"}],

    // Third boss
    "s-970-3000-1102-0": [{"type": "text","sub_type": "message","message_TW": "左手","message": " Left Hand"}],
    "s-970-3000-2102-0": [{"type": "text","sub_type": "message","message_TW": "左手","message": " Left Hand"}],

    //Right Hand
    "s-970-3000-1101-0": [{"type": "text","sub_type": "message","message_TW": "右手","message": " Right Hand"}],
    "s-970-3000-2101-0": [{"type": "text","sub_type": "message","message_TW": "右手","message": " Right Hand"}],

    //Tail Slam
    "s-970-3000-1103-0": [{"type": "text","sub_type": "message","message_TW": "尾巴","message": " Tail Slam"}],
    "s-970-3000-2103-0": [{"type": "text","sub_type": "message","message_TW": "尾巴","message": " Tail Slam"}],

    //FATE Avoid Circles
    "s-970-3000-1301-0": [{"type": "text","sub_type": "message","message_TW": "命运圈","message": " FATE Avoid Circles"}],

    //Tail AOE (jump in front)
    "s-970-3000-2110-0": [{"type": "text","sub_type": "message","message_TW": "尾部AOE(向前跳)","message": " Tail AOE (jump in front)"}],
    "s-970-3000-1110-0": [{"type": "text","sub_type": "message","message_TW": "尾部AOE(向前跳)","message": " Tail AOE (jump in front)"}],

    //Get Ready ! (for in out mechanic)
    "s-970-3000-1304-0": [{"type": "text","sub_type": "message","message_TW": "准备","message": " Get Ready ! (for in out mechanic)"}],
    "s-970-3000-1303-0": [{"type": "text","sub_type": "message","message_TW": "准备","message": " Get Ready ! (for in out mechanic)"}],

    //GO OUT then come in
    "s-970-3000-2113-0": [{"type": "text","sub_type": "message","message_TW": "出 -> 进","message": " OUT -> IN"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,0,5000)}],
    "s-970-3000-1113-0": [{"type": "text","sub_type": "message","message_TW": "出 -> 进","message": " OUT -> IN"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,0,5000)}],

    //STAY IN then go out
    "s-970-3000-2116-0": [{"type": "text","sub_type": "message","message_TW": "进 -> 出","message": " IN -> OUT"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,0,5000)}],
    "s-970-3000-1116-0": [{"type": "text","sub_type": "message","message_TW": "进 -> 出","message": " IN -> OUT"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,0,5000)}],

    //GET RED SKULL !!
    "s-970-3000-1318-0": [{"type": "text","sub_type": "message","message_TW": "吃红球","message": " GET RED SKULL !!"}],
    "s-970-3000-1317-0": [{"type": "text","sub_type": "message","message_TW": "吃红球","message": " GET RED SKULL !!"}],
    "s-970-3000-1319-0": [{"type": "text","sub_type": "message","message_TW": "吃红球","message": " GET RED SKULL !!"}],

    //DODGE the PATTERNS !
    "s-970-3000-1322-0": [{"type": "text","sub_type": "message","message_TW": "內外炸解王!","message": " DODGE the PATTERNS !"}],

    //GATHER FOR CLEANSE ! !
    "s-970-3000-1311-0": [{"type": "text","sub_type": "message","message_TW": "集中净化","message": " GATHER FOR CLEANSE !"}]
};