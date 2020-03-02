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


	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 延迟 时间）
function Spawnitem2(item,degree,distance, intervalDegrees, radius, delay, times, handlers, event, entity ) {
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


module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},
		
"s-3027-1000-108-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "右转击退"}]	

		 
};