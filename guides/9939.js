
//made by michengs

let player, entity, library, effect;

	function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
    }
function Spawnitem2(item,degrees,distance, intervalDegrees, radius, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	applyDistance(shield_loc, distance, degrees);
    for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
        handlers['spawn']({
        	"id": item,
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});
    }
}
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

"s-939-2000-119-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "前喷"}],

"s-939-2000-113-0": [{"type": "text","sub_type": "message","message": "Spin","message_TW": "击晕"}],


"s-939-2000-115-0": [{"type": "text","sub_type": "message","message": "Spin","message_TW": "旋转"},
	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,6000)}],









"s-939-2000-304-0": [{"type": "text","sub_type": "message","message": "Spin","message_TW": "拉人"}],



























"s-759-2000-101-0": [{"type": "text","sub_type": "message","message": "Push","message_TW": "推"}],
"s-759-2000-104-0": [{"type": "text","sub_type": "message","message": "BIG AOE","message_TW": "全屏攻击"}],
"s-759-2000-107-0": [{"type": "text","sub_type": "message","message": "Dodge","message_TW": "闪避"}],


"s-759-3000-101-0": [{"type": "text","sub_type": "message","message": "Explo","message_TW": "爆炸"}],
"s-759-3000-102-0": [{"type": "text","sub_type": "message","message": "Pull","message_TW": "拉"}],
"s-759-3000-105-0": [{"type": "text","sub_type": "message","message": "Dodge","message_TW": "闪避"}],
"s-759-3000-110-0": [{"type": "text","sub_type": "message","message": "GET OUT","message_TW": "出"}]
		 
};