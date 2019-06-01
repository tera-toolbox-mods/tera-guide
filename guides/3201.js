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


	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 时间）
function Spawnitem2(item,degrees,distance, intervalDegrees, radius, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	library.applyDistance(shield_loc, distance, degrees);
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
"message_TW": "打手位!!!"
});			
}
if (notice && skillid === 234 && !boss && counter >= 1  ) {
handlers['text']({
"sub_type": "message",
"message_TW": "坦位!!!"
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
"message_TW": "坦位!"
});	

}	
if (skillid === 203 && boss && counter >= 1 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位!"
});	

}

if (skillid === 204 && boss && counter >= 1 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "坦位!!"
});	

}
if (skillid === 204 && !boss && counter >= 1 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位!!"
});	

}

if (skillid === 203 && counter == 0 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位本体!"
});	
}
if (skillid === 204 && counter == 0 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "坦位本体!!"
});	
}
if (notice && skillid === 234 && counter == 0 ) {
handlers['text']({
"sub_type": "message",
"message_TW": "打手位本体!!!"
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

    // 1王追加
    "s-3201-1000-107-0": [{"type": "text","sub_type": "message","message": "后喷慢慢慢" },
	{"type": "text","sub_type": "message","delay": 3000,"message": "击退!!!"}],	
    "s-3201-1000-111-0": [{"type": "text","sub_type": "message","message": "远程注意后喷" }],	
    "s-3201-1000-112-0": [{"type": "text","sub_type": "message","message": "左右噴" }],	
    "s-3201-1000-113-0": [{"type": "text","sub_type": "message","message": "击飞" }],
    "s-3201-1000-118-0": [{"type": "text","sub_type": "message","message": "击飞" }],	
    "s-3201-1000-119-0": [{"type": "text","sub_type": "message","delay": 1500,"message": "前后喷 ↑↓" }],
    "s-3201-1000-143-0": [{"type": "text","sub_type": "message","message": "8连击" }],	
    "s-3201-1000-145-0": [{"type": "text","sub_type": "message","message": "8连击" }],		 
    "s-3201-1000-311-0": [{"type": "text","sub_type": "message","message": "3次全屏攻击准备!" },
	{"type": "text","sub_type": "message","delay": 4250,"message": "击退!"}],	
    "s-3201-1000-312-0": [{"type": "text","sub_type": "message","message": "吸血准备!!!" },
	{"type": "text","sub_type": "message","delay": 2250,"message": "击退!!!"}],	
    "s-3201-1000-314-0": [{"type": "text","sub_type": "message","message": "内外炸圈" },
	{"type": "func","func": Spawnitem2.bind(null,912,0,75,15,300,6000)}],	


    // 1王---------------------------------------------------------------------------------------------------------------------------

    "s-3201-1000-116-0": [{"type": "text","sub_type": "message","message": "顺<---甩尾" }],	
    "s-3201-1000-117-0": [{"type": "text","sub_type": "message","message": "逆--->甩尾" }],		
    "s-3201-1000-121-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "右-->" }],			
    "s-3201-1000-122-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "左<--" }],
	"s-3201-1000-124-0": [{"type": "text","class_position":"tank","sub_type": "msgcg","message": "注意晕眩"}],
	"s-3201-1000-127-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "后喷"}],	
	"s-3201-1000-128-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "三连击"}],
	"s-3201-1000-131-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "远程注意后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "远程注意后喷"}],								   
    "s-3201-1000-132-0": [{"type": "text","sub_type": "message","message": "左右喷 ←→" }],			
    "s-3201-1000-133-0": [{"type": "text","sub_type": "message","message": "击飞 " }],			
    "s-3201-1000-138-0": [{"type": "text","sub_type": "message","message": "击飞" }],		
    "s-3201-1000-139-0": [{"type": "text","sub_type": "message","message": "前后喷 ↑↓" }],	
    "s-3201-1000-141-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "双手前砸 (慢)" }],	
	"s-3201-1000-142-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "右手+左手"}],	
    "s-3201-1000-148-0": [{"type": "text","sub_type": "message","message": "右手蓄力" }],		
    "s-3201-1000-149-0": [{"type": "text","sub_type": "message","message": "左手蓄力" }],			
    "s-3201-1000-150-0": [{"type": "text","sub_type": "message","message": "移动" }],		
    "s-3201-1000-156-0": [{"type": "text","sub_type": "message","message": "转身1" }],			
    "s-3201-1000-157-0": [{"type": "text","sub_type": "message","message": "转身2" }],		
    "s-3201-1000-305-0": [{"type": "text","sub_type": "message","message": "双手抱拳" }],			
    "s-3201-1000-313-0": [{"type": "text","sub_type": "msgcp","message": "内外炸圈"},
	{"type": "func","func": Spawnitem2.bind(null,912,0,75,15,300,6000)}],		

    //二王
	
	
    "h-3201-2000-99": [{"type": "func","func": start_boss}],	
    "s-3201-2000-232-0": [{"type": "text","sub_type": "msgcp","message": "靠近"},
	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,3000)}],	
    "s-3201-2000-231-0": [{"type": "text","sub_type": "msgcp","message": "跑远"},
	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,3000)}],		
    "s-3201-2000-230-0": [{"type": "text","sub_type": "msgcg","message": "全屏攻击注意沉默" }],	
    "s-3201-2000-108-0": [{"type": "text","sub_type": "message","message": "前插+后喷" }],	
    "s-3201-2000-235-0": [{"type": "text","sub_type": "message","message": "注视2人吃鉴定" }],
	
	

	
	//-----------------------------------------------------------------------------------------------------------------------------------
	
"s-3201-2000-228-0": [ 
{"type": "text","sub_type": "message","message": "组员分伤！！" },
{"type": "text","sub_type": "message","delay": 3500,"message": "赶紧闪开"},

{"type": "text","sub_type": "message","delay": 4300,"message": "2"}
],
	
	
    "s-3201-2000-101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "右手 左手" }],	
    "s-3201-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "左手 右手" }],	
    "s-3201-2000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "旋转顺" }],
    "s-3201-2000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "右手" }],
    "s-3201-2000-105-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "前突刺" }],
    "s-3201-2000-106-0": [{"type": "text","sub_type": "message","message": "！" }],
    "s-3201-2000-107-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "左手" }],	
    "s-3201-2000-109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "4连击" }],	
    "s-3201-2000-110-0": [{"type": "text","sub_type": "message","message": "飞天" }],	
    "s-3201-2000-111-0": [{"type": "text","sub_type": "message","message": "飞天飞剑1" }],		
    "s-3201-2000-112-0": [{"type": "text","sub_type": "message","message": "飞天飞剑2" }],	
    "s-3201-2000-113-0": [{"type": "text","sub_type": "message","message": "旋转逆近距离粉末" }],		
    "s-3201-2000-114-0": [{"type": "text","sub_type": "message","message": "旋转后方攻击" }],	
    "s-3201-2000-115-0": [{"type": "text","sub_type": "message","message": "旋转逆远距离粉末" }],		
    "s-3201-2000-116-0": [{"type": "text","sub_type": "message","message": "后喷" }],	
    "s-3201-2000-150-0": [{"type": "text","sub_type": "message","message": "前冲" }],	
    "s-3201-2000-201-0": [{"type": "text","sub_type": "message","message": "向后移动8m" }],	
    "s-3201-2000-202-0": [{"type": "text","sub_type": "message","message": "前方移动8m" }],	

    "s-3201-2000-203-0": [{"type": "func","func": skilld_event.bind(null, 203)}],	

    "s-3201-2000-204-0": [{"type": "func","func": skilld_event.bind(null, 204)}],		

   "am-3201-320126-32010224": [{"type": "text","sub_type": "message","message": "接下來吃本体" },
 	{"type": "func","func": skilld_event.bind(null, 32010224)}  
   ],	
	
   "am-3201-2000-32010220": [{"type": "text","sub_type": "message","message": "接下來吃分身" },
   	{"type": "func","func": skilld_event.bind(null, 32010220)}
   ],		
	
	
	"ae-0-0-9203100": [{"type": "func","func": skilld_event.bind(null, 9203100)}],
	
    "s-3201-2000-205-0": [{"type": "text","sub_type": "message","message": "起飞 共用" }],	
    "s-3201-2000-206-0": [{"type": "text","sub_type": "message","message": "近 共用秒杀" }],	
    "s-3201-2000-207-0": [{"type": "text","sub_type": "message","message": "远 共用秒杀" }],	
    "s-3201-2000-208-0": [{"type": "text","sub_type": "message","message": "近2 共用秒杀" }],	
    "s-3201-2000-209-0": [{"type": "text","sub_type": "message","message": "远2 共用秒杀" }],	
    "s-3201-2000-210-0": [{"type": "text","sub_type": "message","message": "结束 一般 共用" }],	
    "s-3201-2000-211-0": [{"type": "text","sub_type": "message","message": "旋转 前" }],	
    "s-3201-2000-212-0": [{"type": "text","sub_type": "message","message": "横向右手" }],	
    "s-3201-2000-213-0": [{"type": "text","sub_type": "message","message": "后方" }],	
    "s-3201-2000-214-0": [{"type": "text","sub_type": "message","message": "落地" }],	
    "s-3201-2000-215-0": [{"type": "text","sub_type": "message","message": "右方打击 共用" }],	
    "s-3201-2000-216-0": [{"type": "text","sub_type": "message","message": "后方打击 共用" }],	
    "s-3201-2000-217-0": [{"type": "text","sub_type": "message","message": "震动翅膀 喷射共用" }],		
    "s-3201-2000-218-0": [{"type": "text","sub_type": "message","message": "前方移动准备" }],	
    "s-3201-2000-219-0": [{"type": "text","sub_type": "message","message": "后方移动准备" }],	
    "s-3201-2000-220-0": [{"type": "text","sub_type": "message","message": "爆炸 共用" }],	
    "s-3201-2000-221-0": [{"type": "text","sub_type": "message","message": "结束宝石与机制" }],		
    "s-3201-2000-222-0": [{"type": "text","sub_type": "message","message": "短移动 共用" }],	
    "s-3201-2000-223-0": [{"type": "text","sub_type": "message","message": "后方开始 共用" }],
    "s-3201-2000-224-0": [{"type": "text","sub_type": "message","message": "！" }],	
    "s-3201-2000-225-0": [{"type": "text","sub_type": "message","message": "！" }],
    "s-3201-2000-226-0": [{"type": "text","sub_type": "message","message": "空中吸收 蓄力" }],	
   // "s-3201-2000-227-0": [{"type": "text","sub_type": "message","message": "赶紧闪" }],
  //  "s-3201-2000-228-0": [{"type": "text","sub_type": "message","message": "开始" }],	
    "s-3201-2000-229-0": [{"type": "text","sub_type": "message","message": "3个宝石种子传唤" }],	
    "s-3201-2000-233-0": [{"type": "text","sub_type": "message","message": "5个宝石种子传唤" }],
    "s-3201-2000-234-0": [{"type": "text","sub_type": "message","message": "注视" },
	{"type": "func","func": skilld_event.bind(null, 234)}]

};