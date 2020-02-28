//made by michengs

let player, entity, library, effect;
let	print = true;
let debuff = 0 ;
let timer1;
let timer2;
let qbacting = false;
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


if (skillid === 212 && debuff === 1 ) {    //右红内 紅色 
if (qbacting) {
handlers['text']({
"sub_type": "message",
"message": "OUT",
"message_TW": "出 | 右手"
});	
	} else {
handlers['text']({
"sub_type": "message",
"message": "IN",
"message_TW": "进 | 右手"
});					
	}
} else if (skillid === 215 && debuff === 1 ) {    //左红内 紅色
if (qbacting) {
handlers['text']({
"sub_type": "message",
"message": "OUT",
"message_TW": "出 | 左手"
});	
	} else {
handlers['text']({
"sub_type": "message",
"message": "IN",
"message_TW": "进 | 左手"
});					
	}
} else if (skillid === 213 && debuff === 1 ) {    //左蓝内 紅色
if (qbacting) {
handlers['text']({
"sub_type": "message",
"message": "IN",
"message_TW": "进 | 左手"
});	
	} else {
handlers['text']({
"sub_type": "message",
"message": "OUT",
"message_TW": "出 | 左手"
});					
	}
} else if (skillid === 214 && debuff === 1 ) {    //右蓝内 紅色
if (qbacting) {
handlers['text']({
"sub_type": "message",
"message": "IN",
"message_TW": "进 | 右手"
});	
	} else {
handlers['text']({
"sub_type": "message",
"message": "OUT",
"message_TW": "出 | 右手"
});					
	}
} else if (skillid === 212 && debuff === 2 ) {    //右红内 蓝色 
if (qbacting) {
handlers['text']({
"sub_type": "message",
"message": "IN",
"message_TW": "进 | 右手"
});	
	} else {
handlers['text']({
"sub_type": "message",
"message": "OUT",
"message_TW": "出 | 右手"
});					
	}
} else if (skillid === 215 && debuff === 2 ) {    //左红内 蓝色
if (qbacting) {
handlers['text']({
"sub_type": "message",
"message": "IN",
"message_TW": "进 | 左手"
});	
	} else {
handlers['text']({
"sub_type": "message",
"message": "OUT",
"message_TW": "出 | 左手"
});					
	}
} else if (skillid === 213 && debuff === 2 ) {    //左蓝内 蓝色
if (qbacting) {
handlers['text']({
"sub_type": "message",
"message": "OUT",
"message_TW": "出 | 左手"
});	
	} else {
handlers['text']({
"sub_type": "message",
"message": "IN",
"message_TW": "进 | 左手"
});					
	}
} else if (skillid === 214 && debuff === 2 ) {    //右蓝内 蓝色
if (qbacting) {
handlers['text']({
"sub_type": "message",
"message": "OUT",
"message_TW": "出 | 右手"
});	
	} else {
handlers['text']({
"sub_type": "message",
"message": "IN",
"message_TW": "进 | 右手"
});					
	}
}


if (skillid === 3026004) { //愤怒
qbacting = true;
}
if (skillid === 3026005) { //恐惧
qbacting = false;
}

if (skillid === 99020020) { //死亡解除debuff
debuff = 0
clearTimeout(timer2);
clearTimeout(timer1);
}
if ([3026001].includes(skillid)) {   //debuff为红色
debuff = 1
clearTimeout(timer1);
clearTimeout(timer2);
timer1 = setTimeout(()=>{
handlers['text']({
"sub_type": "message",
"message_TW": "!",
});	
		debuff = 0
  }, 80000);		   
}
if ([3026002].includes(skillid)) {    //debuff为蓝色
debuff = 2
clearTimeout(timer2);
clearTimeout(timer1);
timer2 = setTimeout(()=>{
handlers['text']({
"sub_type": "message",
"message_TW": "!",
});	
		debuff = 0
  }, 80000);	
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
"s-3026-1000-206-2": [{"type": "func","func": Spawnitem2.bind(null,553,0,0,15,350,200,3000)}],
"s-3026-1000-153-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "毒尾后扫| 击倒"}],
"s-3026-1000-154-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "冰风暴| 持续伤害"}],   //30不可防
"s-3026-1000-155-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "火焰柱| 击倒"}],      //30不可防
"s-3026-1000-137-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "咆哮击倒"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,0,2,1275,200,13000)}],
"s-3026-1000-138-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "AOE"}],

"qb-3026-1000-3026005": [{"type": "func","func": skilld_event.bind(null, 3026005)}],//吃同色恐惧
"qb-3026-1000-3026004": [{"type": "func","func": skilld_event.bind(null, 3026004)}],//吃异色愤怒

"s-3026-1000-212-0": [{"type": "func","func": skilld_event.bind(null, 212)},{"type": "func","func": Spawnitem2.bind(null,445,0,0,15,120,200,6000)}],
"s-3026-1000-141-0": [{"type": "func","func": skilld_event.bind(null, 141)}],   
"s-3026-1000-215-0": [{"type": "func","func": skilld_event.bind(null, 215)},{"type": "func","func": Spawnitem2.bind(null,445,0,0,15,120,200,6000)}],      
"s-3026-1000-144-0": [{"type": "func","func": skilld_event.bind(null, 144)}],
"s-3026-1000-213-0": [{"type": "func","func": skilld_event.bind(null, 213)},{"type": "func","func": Spawnitem2.bind(null,445,0,0,15,120,200,6000)}],
"s-3026-1000-143-0": [{"type": "func","func": skilld_event.bind(null, 143)}],
"s-3026-1000-214-0": [{"type": "func","func": skilld_event.bind(null, 214)},{"type": "func","func": Spawnitem2.bind(null,445,0,0,15,120,200,6000)}],
"s-3026-1000-142-0": [{"type": "func","func": skilld_event.bind(null, 142)}],

"ae-0-0-99020020": [{"type": "func","func": skilld_event.bind(null, 99020020)}],

"am-3026-1000-30260001": [{"type": "func","func": skilld_event.bind(null, 3026001)}],//红色

"am-3026-1000-30260002": [{"type": "func","func": skilld_event.bind(null, 3026002)}]//蓝色

		 
};