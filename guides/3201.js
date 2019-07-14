// 
let notice_guide = true;
let   notice = true  ; 
let boss = 3;
let lastboss = false;
let timer = 01;
let player, entity, library, effect;
let	print = false;

function SpawnThing5( degrees, radius, delay, times, handlers, event, entity ) {
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
			"ownerName": "定时炸弹",
			"message": "定时炸弹"
        }, {loc: shield_loc});  
}

function SpawnThing6( degrees, radius, delay, times, handlers, event, entity ) {
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
			"ownerName": "炸弹",
			"message": "炸弹"
        }, {loc: shield_loc});  
}



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
  boss = 3;
  print = true ; 
}
function start_boss1() {
  print = true ;
}
function skilld_event(skillid, handlers, event, ent, dispatch) {
	
if (skillid === 203 || skillid === 204) {
		notice = false;
		setTimeout(() => notice = true, 4000);
		
}	

if (notice && skillid === 234 && boss === 1  ) { //203 204技能没出/满足234 打手位置本体技能/满足吃分身buff
handlers['text']({
"sub_type": "message",
"message_TW": "打手位!!!",
"message": "dps"

});	
setTimeout(function () {
handlers['text']({
"sub_type": "message",
"message_TW": "诅咒准备!",
"message": "debuff coming soon！"
});	
		   }, 55000);		
}
if (notice && skillid === 234 && boss === 0 ) { //203 204技能没出/满足234 打手位置本体技能/满足吃本体buff
handlers['text']({
"sub_type": "message",
"message_TW": "坦位!!!",
"message": "tank"
});	
setTimeout(function () {
handlers['text']({
"sub_type": "message",
"message_TW": "诅咒准备!",
"message": "debuff coming soon！"
});	
		   }, 55000);			
}
if (skillid === 32010224) {  //吃分身buff
		boss = 1;
setTimeout(function () {
	if (boss === 1){
handlers['text']({
"sub_type": "message",
"message_TW": "重置debuff!",
"message": "debuff reload"
});	
		boss = 3;
}
		   }, 80000);		
}	
if (skillid === 32010220) { //吃本体buff
		boss = 0;
setTimeout(function () {
	if (boss === 0){
handlers['text']({
"sub_type": "message",
"message_TW": "重置debuff!",
"message": "debuff reload"
});	
		boss = 3;
}
		   }, 80000);			
}	

if (skillid === 203 && boss === 0 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "坦位!",
"message": "tank"
});	
setTimeout(function () {
handlers['text']({
"sub_type": "message",
"message_TW": "诅咒准备!",
"message": "debuff coming soon！"
});	
		   }, 55000);	
}	
if (skillid === 203 && boss === 1 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位!",
"message": "dps"
});	
setTimeout(function () {
handlers['text']({
"sub_type": "message",
"message_TW": "诅咒准备!",
"message": "debuff coming soon！"
});	
		   }, 55000);	
}

if (skillid === 204 && boss === 1 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "坦位!!",
"message": "tank"
});	
setTimeout(function () {
handlers['text']({
"sub_type": "message",
"message_TW": "诅咒准备!",
"message": "debuff coming soon！"
});	
		   }, 55000);	
}
if (skillid === 204 && boss === 0 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位!!",
"message": "dps"
});	
setTimeout(function () {
handlers['text']({
"sub_type": "message",
"message_TW": "诅咒准备!",
"message": "debuff coming soon！"
});	
		   }, 55000);	
}

if (skillid === 203 && boss === 3 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "dps位本体!",
"message": "dps entity"
});	
setTimeout(function () {
handlers['text']({
"sub_type": "message",
"message_TW": "诅咒准备!",
"message": "debuff coming soon！"
});	
		   }, 55000);	
}
if (skillid === 204 && boss === 3 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "tank位本体!!",
"message": "tank entity"
});	
setTimeout(function () {
handlers['text']({
"sub_type": "message",
"message_TW": "诅咒准备!",
"message": "debuff coming soon！"
});	
		   }, 55000);	
}
if (notice && skillid === 234 && boss === 3 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "dps位本体!!!",
"message": "dps entity"
});
setTimeout(function () {
handlers['text']({
"sub_type": "message",
"message_TW": "诅咒准备!",
"message": "debuff coming soon！"
});	
		   }, 55000);				
}

if (skillid === 9203100 && lastboss ) {
	
handlers['text']({
"sub_type": "message",
"message_TW": "死亡+1!!"
});	
}
}

function print_eighty(handlers) {
if(print) {
handlers['text']({
"sub_type": "message",
"message": "80%",
"message_TW": "诅咒准备"
});
}
print = false;
}	
function print_seventyfive(handlers) {
if(print) {
handlers['text']({
"sub_type": "message",
"message": "75%",
"message_TW": "宝石分伤准备"
});
}
print = false;
}
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},	
	
    // First boss
  //  "h-3201-1000-100": [{"type": "func","func": guid_voice}],

    // 1王
    "s-3201-1000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "dodge","message_TW": "闪避!!!" }],	
    "s-3201-1000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Stun attack","message_TW": "眩晕!!!" }],	
    "s-3201-1000-107-0": [{"type": "text","sub_type": "message","message": "back","message_TW": "后喷慢" },
	{"type": "text","sub_type": "message","delay": 2250,"message": "pull","message_TW": "击退!!!"}],	
	
    "s-3201-1000-111-0": [{"type": "text","sub_type": "message","message": "Ranged DPS attention","message_TW": "远程注意后喷" }],	
    "s-3201-1000-112-0": [{"type": "text","sub_type": "message","message": "left right","message_TW": "左右噴" }],	
    "s-3201-1000-113-0": [{"type": "text","sub_type": "message","message": "Jump (Slow)","message_TW": "击飞慢" },
	{"type": "text","sub_type": "message","delay": 1500,"message": "pull","message_TW": "閃!"},	
	{"type": "text","sub_type": "notification","delay": 1500,"message": "pull","message_TW": "閃!"}		
	
	],
    "s-3201-1000-118-0": [{"type": "text","sub_type": "message","message": "Jump P (Slow)","message_TW": "击飞P慢" },
	{"type": "text","sub_type": "message","delay": 1500,"message": "pull","message_TW": "閃!"},	
	{"type": "text","sub_type": "notification","delay": 1500,"message": "pull","message_TW": "閃!"}		
	],	
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
    "s-3201-1000-133-0": [{"type": "text","sub_type": "message","delay": 500,"message": "Jump (Fast)","message_TW": "击飞快" }],			
    "s-3201-1000-138-0": [{"type": "text","sub_type": "message","delay": 500,"message": "Jump P (Fast)","message_TW": "击飞P快" }],	
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
    "s-3201-1000-313-0": [{"type": "text","sub_type": "msgcp","message": "Circles (Slow)","message_TW": "甜甜圈(慢)"},
	{"type": "func","func": Spawnitem2.bind(null,912,0,75,15,300,6000)}],		
    "s-3201-1000-314-0": [{"type": "text","sub_type": "message","message": "Circles (Fast)","message_TW": "甜甜圈快" },
	{"type": "func","func": Spawnitem2.bind(null,912,0,75,15,300,6000)}],	

    //二王

    "h-3201-2000-99": [{"type": "func","func": start_boss}],	
	
 //   "s-3201-2000-101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right left","message_TW": "右手 左手" }],	
  //  "s-3201-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left right","message_TW": "左手 右手" }],	
    "s-3201-2000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "spin","message_TW": "旋转顺" }],
  //  "s-3201-2000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_TW": "右手" }],
    "s-3201-2000-105-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_TW": "前突刺" }],
 //   "s-3201-2000-107-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_TW": "左手" }],	
    "s-3201-2000-108-0": [{"type": "text","sub_type": "message","message": "Back attack!","message_TW": "前插+后喷" }],		
    "s-3201-2000-109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "quaternion Attack","message_TW": "4连击" }],	
    "s-3201-2000-110-0": [{"type": "text","sub_type": "message","message_TW": "飞天" }],			
    "s-3201-2000-114-0": [{"type": "text","sub_type": "message","message_TW": "旋转后方攻击" }],	
   // "s-3201-2000-116-0": [{"type": "text","sub_type": "message","message": "back","message_TW": "后喷" }],	
    "s-3201-2000-150-0": [{"type": "text","sub_type": "message","message_TW": "前冲" }],	
    "s-3201-2000-201-0": [{"type": "text","sub_type": "message","message": "back 8m","message_TW": "向后移动8m" }],	
    "s-3201-2000-202-0": [{"type": "text","sub_type": "message","message": "front 8m","message_TW": "前方移动8m" }],	
    "s-3201-2000-203-0": [{"type": "func","func": skilld_event.bind(null, 203)}],	
    "s-3201-2000-204-0": [{"type": "func","func": skilld_event.bind(null, 204)}],
	
   "am-3201-320126-32010224": [{"type": "text","sub_type": "notification","message": "next true","message_TW": "接下來吃本体" },{"type": "func","func": skilld_event.bind(null, 32010224)}],	
   "am-3201-2000-32010220": [{"type": "text","sub_type": "notification","message": "next false","message_TW": "接下來吃分身" },{"type": "func","func": skilld_event.bind(null, 32010220)}],		
	"ae-0-0-9203100": [{"type": "func","func": skilld_event.bind(null, 9203100)}],
	
    "s-3201-2000-211-0": [{"type": "text","sub_type": "message","message": "front","message_TW": "旋转 前" }],	

    "s-3201-2000-213-0": [{"type": "text","sub_type": "message","message": "back","message_TW": "后方" }],	

   // "s-3201-2000-226-0": [{"type": "text","sub_type": "message","message_TW": "空中吸收 蓄力" }],	
    "s-3201-2000-228-0": [ 
       {"type": "text","sub_type": "message","message": "Team up","message_TW": "组员分伤！！" },
       {"type": "text","sub_type": "message","delay": 3500,"message": "dodge","message_TW": "闪"},
       {"type": "text","sub_type": "notification","delay": 3500,"message": "dodge","message_TW": "闪"},
       {"type": "text","sub_type": "message","delay": 65000,"message": "dodge","message_TW": "宝石分伤准备"}],
    "s-3201-2000-229-0": [{"type": "text","sub_type": "message","message": "3","message_TW": "3个宝石炸弹" }],	
    "s-3201-2000-230-0": [{"type": "text","sub_type": "msgcg","message": "AOE","message_TW": "全屏攻击" }],
    "s-3201-2000-231-0": [{"type": "text","sub_type": "msgcp","message": "OUT safe ↓","message_TW": "出"},{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,3000)}],	
    "s-3201-2000-232-0": [{"type": "text","sub_type": "msgcp","message": "IN safe ↑","message_TW": "进"},
	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,3000)},
	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,1000,3000)}	
	],		
    "s-3201-2000-233-0": [{"type": "text","sub_type": "message","message": "5","message_TW": "5个宝石炸弹" }],
	
"h-3201-2000-81": [{"type": "func","func": print_eighty}],	
"h-3201-2000-78": [{"type": "func","func": start_boss1}],	
"h-3201-2000-76": [{"type": "func","func": print_seventyfive}],	
	
	
    "s-3201-2000-234-0": [{"type": "func","func": skilld_event.bind(null, 234)}],	
  //  "s-3201-2000-235-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_TW": "注视2人吃鉴定" }]	
    "s-3201-2000-236-0": [{"type": "text","sub_type": "message","message": "counter","message_TW": "复活反制点名" }],
	
	
   "s-3201-320115-203": [{"type": "func","func": SpawnThing.bind(null,0, 0, 100, 3000)},
                        {"type": "func","func": Spawnitem2.bind(null,445,0,0,15,100,3000)}
   ],	// 	1王水晶位
	
	//320124-------------302 301
		
   "s-3201-320120-204": [{"type": "func","func": SpawnThing5.bind(null,0, 0, 100, 10000)},   //炸弹慢
                         {"type": "func","func": Spawnitem2.bind(null,445,0,0,15,125,10000)}],
   
   "s-3201-320120-205": [{"type": "func","func": SpawnThing6.bind(null,0, 0, 10, 100)},   //炸弹
                         {"type": "func","func": Spawnitem2.bind(null,445,0,0,15,125,100)}]			

};