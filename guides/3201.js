// 
let notice_guide = true;
let   notice = true  ; 
let boss = null;
let counter = 0;
let lastboss = false;
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
// 	召喚光柱 ，告示牌提示（  角度 距离   延迟时间 时间）
function SpawnThing( degrees, radius, delay, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;			
   let angle =  Math.PI * degrees / 180 
        handlers['spawn']({
			"sub_type": "build_object",
        	"id": 1,
			"delay": delay,			
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle,
			"ownerName": "SAFE SPOT",
			"message": "SAFE"
        }, {loc: shield_loc});  
        handlers['spawn']({
			"sub_type": "item",
        	"id": 88850,
			"delay": delay,			
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});	
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

function start_boss() {
  lastboss = true  ;
  notice = true  ; 
  boss = null;
  counter = 0;
}

function skilld_event(skillid, handlers, event, ent, dispatch) {
	
if (skillid === 203 || skillid === 204) {
		notice = false;
		setTimeout(() => notice = true, 4000);
		
}	

if (skillid === 234 || skillid === 203 || skillid === 204 ) {
setTimeout(() => counter++, 4000);
}	

if (notice && skillid === 234 && boss && counter >= 1 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位!!!",
"message": "dps"

});			
}
if (notice && skillid === 234 && !boss && counter >= 1  ) {
handlers['text']({
"sub_type": "message",
"message_TW": "坦位!!!",
"message": "tank"
});			
}
if (skillid === 32010224) {
		boss = true;
}	
if (skillid === 32010220) {
		boss = false;
}	

if (skillid === 203 && !boss && counter >= 1 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "坦位!",
"message": "tank"
});	

}	
if (skillid === 203 && boss && counter >= 1 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位!",
"message": "dps"
});	

}

if (skillid === 204 && boss && counter >= 1 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "坦位!!",
"message": "tank"
});	

}
if (skillid === 204 && !boss && counter >= 1 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位!!",
"message": "dps"
});	

}

if (skillid === 203 && counter == 0 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位本体!",
"message": "dps entity"
});	
}
if (skillid === 204 && counter == 0 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "坦位本体!!",
"message": "tank entity"
});	
}
if (notice && skillid === 234 && counter == 0 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位本体!!!",
"message": "dps entity"
});			
}

if (skillid === 9203100 && lastboss ) {
 counter = 0;		
handlers['text']({
"sub_type": "message",
"message_TW": "死亡+1!!"
});	
}
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},	
	
    // First boss
    "h-3201-1000-100": [{"type": "func","func": guid_voice}],

    // 1王
    "s-3201-1000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "dodge","message_TW": "闪避!!!" }],	
    "s-3201-1000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Stun attack","message_TW": "眩晕!!!" }],	
    "s-3201-1000-107-0": [{"type": "text","sub_type": "message","message": "back","message_TW": "后喷（慢）" },
	{"type": "text","sub_type": "message","delay": 2250,"message": "pull","message_TW": "击退!!!"}],	
	
    "s-3201-1000-111-0": [{"type": "text","sub_type": "message","message": "Ranged DPS attention","message_TW": "远程注意后喷" }],	
    "s-3201-1000-112-0": [{"type": "text","sub_type": "message","message": "left right","message_TW": "左右噴" }],	
    "s-3201-1000-113-0": [{"type": "text","sub_type": "message","message": "Jump (Slow)","message_TW": "击飞（慢）" }],
    "s-3201-1000-118-0": [{"type": "text","sub_type": "message","message": "Jump P (Slow)","message_TW": "击飞P（慢）" }],	
    "s-3201-1000-119-0": [{"type": "text","sub_type": "message","delay": 1000,"message": "Back + Front","message_TW": "前后喷 ↑↓" }],
    "s-3201-1000-121-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_TW": "右-->" }],			
    "s-3201-1000-122-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_TW": "左<--" }],
	"s-3201-1000-124-0": [{"type": "text","class_position":"tank","sub_type": "msgcg","message": "Stun attack","message_TW": "注意晕眩"}],
	"s-3201-1000-127-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "back","message_TW": "后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "back","message_TW": "后喷"}],	
	"s-3201-1000-128-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Triple Attack","message_TW": "三连击"}],	
	"s-3201-1000-131-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "Ranged DPS attention","message_TW": "远程注意后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "Ranged DPS attention","message_TW": "远程注意后喷"}],								   
    "s-3201-1000-132-0": [{"type": "text","sub_type": "message","message": "left right ←→","message_TW": "左右喷 ←→" }],			
    "s-3201-1000-133-0": [{"type": "text","sub_type": "message","message": "Jump (Fast)","message_TW": "击飞（快） " }],			
    "s-3201-1000-138-0": [{"type": "text","sub_type": "message","message": "Jump P (Fast)","message_TW": "击飞P（快）" }],	
    "s-3201-1000-139-0": [{"type": "text","sub_type": "message","message": "Back + Front (Fast)","message_TW": "前后喷（快）↑↓" }],
    "s-3201-1000-141-0": [{"type": "text","class_position":"tank","sub_type": "message","message_TW": "双手前砸 (慢)" }],	
	"s-3201-1000-142-0": [{"type": "text","class_position":"tank","sub_type": "message","message_TW": "右手+左手"}],	
    "s-3201-1000-143-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left→right","message_TW": "8连左→右" },
	 {"type": "text","class_position":"dps","sub_type": "message","message": "right←left","message_TW": "8连右←左" },
	 {"type": "text","class_position":"heal","sub_type": "message","message": "right←left","message_TW": "8连右←左" },	 
     {"type": "func","func": SpawnThing.bind(null,150,300,100,2715)},	//1
     {"type": "func","func": SpawnThing.bind(null,225,300,2800,4175)},   //6
     {"type": "func","func": SpawnThing.bind(null,30,300,100,1000)},	//1
     {"type": "func","func": SpawnThing.bind(null,330,300,1100,5000)}   //7	  
	],	
    "s-3201-1000-145-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left→right","message_TW": "8连左→右" },
	 {"type": "text","class_position":"dps","sub_type": "message","message": "right←left","message_TW": "8连右←左" },
	 {"type": "text","class_position":"heal","sub_type": "message","message": "right←left","message_TW": "8连右←左" },	
     {"type": "func","func": SpawnThing.bind(null,30,300,100,1000)},	//1
     {"type": "func","func": SpawnThing.bind(null,330,300,1100,5000)},   //7	 	
     {"type": "func","func": SpawnThing.bind(null,150,300,100,2000)},	  //1
     {"type": "func","func": SpawnThing.bind(null,225,300,2500,5000)}	//6
	],
    "s-3201-1000-148-0": [{"type": "text","sub_type": "message","message_TW": "右手蓄力" }],		
    "s-3201-1000-149-0": [{"type": "text","sub_type": "message","message_TW": "左手蓄力" }],	
    "s-3201-1000-151-0": [{"type": "text","sub_type": "message","message": "Stun attack","message_TW": "眩晕!!!" }],
    "s-3201-1000-305-0": [{"type": "text","sub_type": "message","message": "Pizza","message_TW": "双手抱拳" }],		
    "s-3201-1000-311-0": [{"type": "text","sub_type": "message","message_TW": "3次全屏攻击准备!" },
	{"type": "text","sub_type": "message","delay": 4000,"message": "pull","message_TW": "击退!"}],	
    "s-3201-1000-312-0": [{"type": "text","sub_type": "message","message_TW": "吸血准备!!!" },
	{"type": "text","sub_type": "message","delay": 2000,"message": "pull","message_TW": "击退!!!"}],
    "s-3201-1000-313-0": [{"type": "text","sub_type": "msgcp","message": "Circles (Slow)","message_TW": "内外炸圈(慢)"},
	{"type": "func","func": Spawnitem2.bind(null,912,0,75,15,300,6000)}],		
    "s-3201-1000-314-0": [{"type": "text","sub_type": "message","message": "Circles (Fast)","message_TW": "内外炸圈(快)" },
	{"type": "func","func": Spawnitem2.bind(null,912,0,75,15,300,6000)}],	

    //二王

    "h-3201-2000-99": [{"type": "func","func": start_boss}],	
	
    "s-3201-2000-101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right left","message_TW": "右手 左手" }],	
    "s-3201-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left right","message_TW": "左手 右手" }],	
    "s-3201-2000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "spin","message_TW": "旋转顺" }],
    "s-3201-2000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_TW": "右手" }],
    "s-3201-2000-105-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_TW": "前突刺" }],
    "s-3201-2000-107-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_TW": "左手" }],	
    "s-3201-2000-108-0": [{"type": "text","sub_type": "message","message": "Back attack!","message_TW": "前插+后喷" }],		
    "s-3201-2000-109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "quaternion Attack","message_TW": "4连击" }],	
    "s-3201-2000-110-0": [{"type": "text","sub_type": "message","message_TW": "飞天" }],			
    "s-3201-2000-114-0": [{"type": "text","sub_type": "message","message_TW": "旋转后方攻击" }],	
	
    "s-3201-2000-116-0": [{"type": "text","sub_type": "message","message": "back","message_TW": "后喷" }],	
    "s-3201-2000-150-0": [{"type": "text","sub_type": "message","message_TW": "前冲" }],	
    "s-3201-2000-201-0": [{"type": "text","sub_type": "message","message": "back 8m","message_TW": "向后移动8m" }],	
    "s-3201-2000-202-0": [{"type": "text","sub_type": "message","message": "front 8m","message_TW": "前方移动8m" }],	
    "s-3201-2000-203-0": [{"type": "func","func": skilld_event.bind(null, 203)}],	
    "s-3201-2000-204-0": [{"type": "func","func": skilld_event.bind(null, 204)}],
	
   "am-3201-320126-32010224": [{"type": "text","sub_type": "message","message": "next true","message_TW": "接下來吃本体" },{"type": "func","func": skilld_event.bind(null, 32010224)}],	
   "am-3201-2000-32010220": [{"type": "text","sub_type": "message","message": "next false","message_TW": "接下來吃分身" },{"type": "func","func": skilld_event.bind(null, 32010220)}],		
	"ae-0-0-9203100": [{"type": "func","func": skilld_event.bind(null, 9203100)}],
	
    "s-3201-2000-211-0": [{"type": "text","sub_type": "message","message": "front","message_TW": "旋转 前" }],	

    "s-3201-2000-213-0": [{"type": "text","sub_type": "message","message": "back","message_TW": "后方" }],	

    "s-3201-2000-226-0": [{"type": "text","sub_type": "message","message_TW": "空中吸收 蓄力" }],	
    "s-3201-2000-228-0": [ 
       {"type": "text","sub_type": "message","message": "Team up","message_TW": "组员分伤！！" },
       {"type": "text","sub_type": "message","delay": 3500,"message": "dodge","message_TW": "赶紧闪开"}
],
    "s-3201-2000-229-0": [{"type": "text","sub_type": "message","message": "3","message_TW": "3个宝石种子传唤" }],	
    "s-3201-2000-230-0": [{"type": "text","sub_type": "msgcg","message": "AOE","message_TW": "全屏攻击注意沉默" }],
    "s-3201-2000-231-0": [{"type": "text","sub_type": "msgcp","message": "OUT safe ↓","message_TW": "跑远"},{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,3000)}],	
    "s-3201-2000-232-0": [{"type": "text","sub_type": "msgcp","message": "IN safe ↑","message_TW": "靠近"},
	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,3000)},
	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,875,3000)}	
	],		
    "s-3201-2000-233-0": [{"type": "text","sub_type": "message","message": "5","message_TW": "5个宝石种子传唤" }],
    "s-3201-2000-234-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_TW": "注视" },
	{"type": "func","func": skilld_event.bind(null, 234)}],
    "s-3201-2000-235-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_TW": "注视2人吃鉴定" }]	

};