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
	
"s-3027-1001-255-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "区域鉴定"}],	//0
"s-3027-1002-256-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "区域鉴定"}],	//60
	
"s-3027-1000-108-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "前砸"}],

"s-3027-1000-112-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后勤"}],     //连招
"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "點名"}],

"s-3027-1000-134-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "前戳"}],    //连招
"s-3027-1000-134-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后方"}],   
"s-3027-1000-147-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后砸"}],

"s-3027-1000-355-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "蓄力 | 击倒"}],  //连招  右侧上
"s-3027-1000-114-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "劈擊"}],

"s-3027-1000-350-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "吸收 | "},    //连招
                      {"type": "func","func": Spawnitem2.bind(null,445,0,0,15,250,200,5000)},
                      {"type": "func","func": Spawnitem2.bind(null,445,0,0,15,450,200,5000)}],
"s-3027-1000-302-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "炸圈"}],	

"s-3027-1000-357-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "吸收 | 远离"}],    //连招
"s-3027-1000-110-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "连击"}],
"s-3027-1000-110-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "连击"}],
"s-3027-1000-264-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大招蓄力"}],
	
"s-3027-1000-135-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "蓄力挥刀!!"}],	   //连招		
//"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名挥刀"}],		
	
"s-3027-1000-111-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "蓄力挥刀!!"}],	   //连招  左侧		
//"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名挥刀"}],	
	
"s-3027-1000-136-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "蓄力挥刀"}],	   //连招
"s-3027-1000-144-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "挥刀"}],		
//"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名挥刀"}],		
	
"s-3027-1000-356-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "蓄力点名"}], ////连招	点名					  
"s-3027-1000-356-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "瞬移"}],
//"s-3027-1000-147-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后砸"}],		
	
"s-3027-1000-117-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "蓄力点名"}],//连招	 随机
"s-3027-1000-117-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "瞬移"}],
//"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "瞬移"}],

"s-3027-1000-145-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "蓄力挥刀"}], //连招  3连挥刀 
"s-3027-1000-139-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "！"}],
"s-3027-1000-140-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大跳砸"}],	

"s-3027-1000-151-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "转身攻击"}],  //连招  2次点
"s-3027-1000-149-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名"}],
"s-3027-1000-149-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后方瞬移"}],
"s-3027-1000-148-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名"}],
"s-3027-1000-148-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "瞬移"}],

"s-3027-1000-141-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "蓄力挥刀"}], //连招  3连挥刀 
"s-3027-1000-146-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "前砸"}],
				  
"s-3027-1000-142-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "蓄力"}], //连招  3连挥刀 
"s-3027-1000-143-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "前砸"}],					  
					  
"s-3027-1000-116-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大跳"}],	
"s-3027-1000-116-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "闪"}],

"s-3027-1000-402-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大跳| 插地"}],
"s-3027-1000-109-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "！"}],
					  
"s-3027-1000-351-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "破盾"}],

"s-3027-1000-401-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "全屏攻击"}]				
	 
};