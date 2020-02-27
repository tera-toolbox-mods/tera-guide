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
"s-3026-1000-120-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "咆哮集中"}],
"s-3026-1000-157-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "冰火交换"}],
"s-3026-1000-103-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "毒尾后扫"}],
"s-3026-1000-118-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大跳无敌闪"}],
"s-3026-1000-145-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "眩晕流血"}],
"s-3026-1000-206-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后跳扫 | 击飞"}],
"s-3026-1000-206-2": [{"type": "func","func": Spawnitem2.bind(null,553,0,0,15,325,200,3000)}],
"s-3026-1000-153-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "毒尾后扫| 击倒"}],
"s-3026-1000-154-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "冰风暴| 持续伤害"}],   //30不可防
"s-3026-1000-155-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "火焰柱| 击倒"}],      //30不可防
"s-3026-1000-137-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "咆哮击倒"}],
"s-3026-1000-138-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "AOE"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,0,2,1250,200,8000)}],
"s-3026-1000-212-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "恐惧"}]//吃同色


//-------------------qb 3026005   恐惧
//-------------------qb 3026004   愤怒


//30260002寒冰气息
//30260001火焰气息
		 
};