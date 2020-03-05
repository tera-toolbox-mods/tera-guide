//made by michengs

let player, entity, library, effect;
let timer1;
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

function skilld_event(skillid, handlers, event, ent, dispatch) {	

if ([351].includes(skillid)) {   // //蓝色0  红色1
//debuff = skillid % 2;	
//clearTimeout(timer1);
clearTimeout(timer1);
	
 timer1 = setTimeout(()=>{
	 
handlers['text']({
"sub_type": "message",
"message_TW": "倒计时破盾"
});	

  }, 75000);   
 }
}
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},
	
	
	
	// boss位置 ，角度， 持续时间,类型， 偏角       ，偏距，       ，最小半径   ，角度范围 ，间距      ，半径         
	//(distance, angle, duration, type, offsetAngle, offsetDistance, minRadius, maxRadius, rotateAngle, rotateRadius) 
	

	
	
"s-3027-1001-255-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "区域鉴定"}],	//0
"s-3027-1002-256-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "区域鉴定"}],	//60
	
	
	
	
	
"s-3027-1000-108-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Jump","message_TW": "一刀(慢)"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-108"}],




"s-3027-1000-112-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后跳 | 一刀"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-112"}],     //连招
"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-130"}],

"s-3027-1000-134-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "前戳"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-134-0"}],    //连招
"s-3027-1000-134-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后方"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-134-1"}],   
"s-3027-1000-147-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后砸"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-147"}],

"s-3027-1000-355-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "下巴粉碎"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-355"}],  //连招  右侧上
"s-3027-1000-114-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "劈擊"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-114"}],

"s-3027-1000-350-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "吸 | 炸圈"},{"type": "text","sub_type": "message","delay": 3750,"message":  'Waves soon...',"message_TW": "進"},{"type": "func","func": Spawnitem2.bind(null,445,0,0,12,240,200,5000)},{"type": "func","func": Spawnitem2.bind(null,445,0,0,8,480,200,5000)}],
//"s-3027-1000-302-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "炸圈"}],	

"s-3027-1000-357-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "吸 | 远离"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-357"}],    //连招
//"s-3027-1000-110-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "连击"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-110-0"}],
//"s-3027-1000-110-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "连击"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-110-1"}],
//"s-3027-1000-264-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大招蓄力"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-264"}],
	
"s-3027-1000-135-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "一刀!!"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-135"}],	   //连招		
//"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名挥刀"}],		
	
"s-3027-1000-111-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "一刀!!"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-111"}],	   //连招  左侧		
//"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名挥刀"}],	
	
"s-3027-1000-136-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "2圈 | 一刀"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-136"}],	   //连招
"s-3027-1000-144-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "挥刀"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-144"}],		
//"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名挥刀"}],		
	
"s-3027-1000-356-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-356-0"}], ////连招	点名					  
"s-3027-1000-356-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "瞬移"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-356-1"}],
//"s-3027-1000-147-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后砸"}],		
	
"s-3027-1000-117-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-117-0"}],//连招	 随机
"s-3027-1000-117-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "瞬移"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-117-1"}],
//"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "瞬移"}],

"s-3027-1000-145-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "3圈 | 斩击"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-145"}], //连招  3连挥刀 
"s-3027-1000-139-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "！"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-139"}],
"s-3027-1000-140-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大跳砸"},{"type": "func","func": Spawnitem2.bind(null,445,0,180,8,460,200,3000)},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-140"}],	

"s-3027-1000-151-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "转身三斩 | 一刀"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-151"}],  //连招  2次点
"s-3027-1000-149-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-149-0"}],
"s-3027-1000-149-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "后方瞬移"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-149-1"}],
"s-3027-1000-148-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-148-0"}],
"s-3027-1000-148-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "瞬移"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-148-1"}],

"s-3027-1000-141-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "回旋 | 一刀"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-141"}], //连招  3连挥刀 
"s-3027-1000-146-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "下巴 | 一刀"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-146"}],
				  
"s-3027-1000-142-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "下巴 | 一刀"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-142"}], //连招  3连挥刀 
"s-3027-1000-143-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "一刀"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-143"}],					  
					  
"s-3027-1000-116-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大跳"},{"type": "func","func": Spawnitem2.bind(null,445,0,180,8,460,200,3000)},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-116-0"}],	
"s-3027-1000-116-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "闪"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-116-1"}],

"s-3027-1000-402-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大跳| 插地"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-402"}],
"s-3027-1000-109-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "前跳 | 一刀"},{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "-109"}],
					  
"s-3027-1000-351-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "破盾"},{"type": "func","func": skilld_event.bind(null, 351)}],

"s-3027-1000-401-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "全屏攻击"}]				
	 
};