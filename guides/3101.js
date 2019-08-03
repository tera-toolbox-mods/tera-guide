// 
let notice_guide = true;
let player, entity, library, effect;
function guid_voice(handlers) {   
if(notice_guide) {
handlers['text']({
"sub_type": "message",
"delay": 2000,
"message_TW": "获取更多信息 proxy频道输入:補助 help"
});

handlers['text']({
"sub_type": "notification",
"delay": 2000,
"message_TW": "获取更多信息 proxy频道输入:補助 help"
});
}
notice_guide = false;

}	
	function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
    }
	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 时间）
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
	
    // First boss
   // "h-3101-1000-100": [{"type": "func","func": guid_voice}],
    // 1王

    "s-3101-1000-121-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_TW": "右-->" }],			
    "s-3101-1000-122-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_TW": "左<--" }],
	"s-3101-1000-124-0": [{"type": "text","class_position":"tank","sub_type": "msgcg","message": "Stun attack","message_TW": "注意晕眩"}],
	"s-3101-1000-127-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "back","message_TW": "后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "back","message_TW": "后喷"}],	
	"s-3101-1000-128-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Triple Attack","message_TW": "三连击"}],	
	"s-3101-1000-131-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "Ranged DPS attention","message_TW": "远程注意后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "Ranged DPS attention","message_TW": "远程注意后喷"}],								   
    "s-3101-1000-132-0": [{"type": "text","sub_type": "message","message": "left right ←→","message_TW": "左右喷 ←→" }],			
    "s-3101-1000-133-0": [{"type": "text","sub_type": "message","message": "Jump (Fast)","message_TW": "击飞（快） " }],			
    "s-3101-1000-138-0": [{"type": "text","sub_type": "message","message": "Jump P (Fast)","message_TW": "击飞P（快）" }],	
    "s-3101-1000-139-0": [{"type": "text","sub_type": "message","message": "Back + Front (Fast)","message_TW": "前后喷（快）↑↓" }],
    "s-3101-1000-141-0": [{"type": "text","class_position":"tank","sub_type": "message","message_TW": "双手前砸 (慢)" }],	
	"s-3101-1000-142-0": [{"type": "text","class_position":"tank","sub_type": "message","message_TW": "右手+左手"}],	
    "s-3101-1000-148-0": [{"type": "text","sub_type": "message","message_TW": "右手蓄力" }],		
    "s-3101-1000-149-0": [{"type": "text","sub_type": "message","message_TW": "左手蓄力" }],	
    "s-3101-1000-305-0": [{"type": "text","sub_type": "message","message": "Pizza","message_TW": "双手抱拳" }],		
    "s-3101-1000-313-0": [{"type": "text","sub_type": "msgcp","message": "Circles (Slow)","message_TW": "内外炸圈(慢)"},
	{"type": "func","func": Spawnitem2.bind(null,912,0,75,15,300,6000)}],		




    //二王
    "s-3101-2000-101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right left","message_TW": "右手 左手" }],	
    "s-3101-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left right","message_TW": "左手 右手" }],	
    "s-3101-2000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "spin","message_TW": "旋转顺" }],
    "s-3101-2000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_TW": "右手" }],
    "s-3101-2000-105-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_TW": "前突刺" }],
    "s-3101-2000-107-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_TW": "左手" }],	
    "s-3101-2000-108-0": [{"type": "text","sub_type": "message","message": "Back attack!","message_TW": "前插+后喷" }],		
    "s-3101-2000-109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "quaternion Attack","message_TW": "4连击" }],	
    "s-3101-2000-110-0": [{"type": "text","sub_type": "message","message_TW": "飞天" }],			
    "s-3101-2000-114-0": [{"type": "text","sub_type": "message","message_TW": "旋转后方攻击" }],	
	
    "s-3101-2000-116-0": [{"type": "text","sub_type": "message","message": "back","message_TW": "后喷" }],	
    "s-3101-2000-150-0": [{"type": "text","sub_type": "message","message_TW": "前冲" }],	
    "s-3101-2000-201-0": [{"type": "text","sub_type": "message","message": "back 8m","message_TW": "向后移动8m" }],	
    "s-3101-2000-202-0": [{"type": "text","sub_type": "message","message": "front 8m","message_TW": "前方移动8m" }],	
 //   "s-3101-2000-203-0": [{"type": "func","func": skilld_event.bind(null, 203)}],	
  //  "s-3101-2000-204-0": [{"type": "func","func": skilld_event.bind(null, 204)}],

    "s-3101-2000-211-0": [{"type": "text","sub_type": "message","message": "front","message_TW": "旋转 前" }],	
    "s-3101-2000-226-0": [{"type": "text","sub_type": "message","message_TW": "空中吸收 蓄力" }],	
    "s-3101-2000-228-0": [ {"type": "text","sub_type": "message","message": "Team up","message_TW": "组员分伤！！" }],
    "s-3101-2000-230-0": [{"type": "text","sub_type": "msgcg","message": "AOE","message_TW": "全屏攻击注意沉默" }],
    "s-3101-2000-231-0": [{"type": "text","sub_type": "msgcp","message": "OUT safe ↓","message_TW": "跑远"},{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,3000)}],	
    "s-3101-2000-232-0": [{"type": "text","sub_type": "msgcp","message": "IN safe ↑","message_TW": "靠近"},
	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,3000)},
	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,875,3000)}	
	],		
    "s-3101-2000-234-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_TW": "注视" }],
    "s-3101-2000-235-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_TW": "注视2人吃鉴定" }]	
};