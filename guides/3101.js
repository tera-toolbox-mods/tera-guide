// 
let guidecounter = 0 ;//
let guidetimer;//


 let player, entity, library, effect;


	
   function guid_voice(handlers) {   
	  clearTimeout(guidetimer);
      guidecounter++;
    if(guidecounter >= 2) {	
handlers['text']({
"sub_type": "message",
"delay": 2000,
"message": "proxy频道输入:補助 help 获取更多使用信息!"
});

handlers['text']({
"sub_type": "notification",
"delay": 2000,
"message": "proxy频道输入:補助 help <br>获取更多使用信息!"
});
    }
    guidetimer = setTimeout(()=>{
        guidecounter = 0;
    }, 3000);
}	
const SPAWN_CIRCLES = true;
const stepone = 2 * Math.PI / 40;//40 
const steptwo = 2 * Math.PI / 60;//72 flowers in total
//内圈
let SPAWNING_FIRST_CIRCLE_FLOWERS = [];
let SPAWNING_SECOND_CIRCLE_FLOWERS = [];
let SPAWNING_THIRD_CIRCLE_FLOWERS = [];
//外圈

for(let angle = -Math.PI; angle <= Math.PI; angle += steptwo) {
	if(!SPAWN_CIRCLES) continue;
	SPAWNING_FIRST_CIRCLE_FLOWERS.push({
	    "type": "spawn",
        "id": 553,
        "sub_delay": 3000,
        "distance": 300,
        "offset": angle
	});
	
	SPAWNING_SECOND_CIRCLE_FLOWERS.push({
		"type": "spawn",
        "id": 553,
        "sub_delay": 6000,
        "distance": 250,
        "offset": angle
	});
	SPAWNING_THIRD_CIRCLE_FLOWERS.push({
		"type": "spawn",
        "id": 553,
        "sub_delay": 6000,
        "distance": 200,
        "offset": angle
	});	
	
	
	
	
	
}
module.exports = {
    // First boss
    "h-3101-1000-100": [{"type": "func","func": guid_voice}],
    // 1王

    "s-3101-1000-116-0": [{"type": "text","sub_type": "message","message": "顺<---甩尾" }],	
    "s-3101-1000-117-0": [{"type": "text","sub_type": "message","message": "逆--->甩尾" }],		
    "s-3101-1000-121-0": [{"type": "text","sub_type": "message","message": "右-->" }],			
    "s-3101-1000-122-0": [{"type": "text","sub_type": "message","message": "左<--" }],
	"s-3101-1000-124-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "注意晕眩"}],
	"s-3101-1000-127-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "后喷"}],	
	"s-3101-1000-128-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "三连击"}],
	"s-3101-1000-131-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "远程注意后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "远程注意后喷"}],								   
    "s-3101-1000-132-0": [{"type": "text","sub_type": "message","message": "左右喷 ←→" }],			
    "s-3101-1000-133-0": [{"type": "text","sub_type": "message","message": "击飞 " }],			
    "s-3101-1000-138-0": [{"type": "text","sub_type": "message","message": "击飞" }],		
    "s-3101-1000-139-0": [{"type": "text","sub_type": "message","message": "前后喷 ↑↓" }],	
    "s-3101-1000-141-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "双手前砸 (慢)" }],	
	"s-3101-1000-142-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "右手+左手"}],	
    "s-3101-1000-148-0": [{"type": "text","sub_type": "message","message": "右手蓄力" }],		
    "s-3101-1000-149-0": [{"type": "text","sub_type": "message","message": "左手蓄力" }],			
    "s-3101-1000-150-0": [{"type": "text","sub_type": "message","message": "移动" }],		
    "s-3101-1000-156-0": [{"type": "text","sub_type": "message","message": "转身1" }],			
    "s-3101-1000-157-0": [{"type": "text","sub_type": "message","message": "转身2" }],		
    "s-3101-1000-305-0": [{"type": "text","sub_type": "message","message": "双手抱拳" }],			
    "s-3101-1000-313-0": [{"type": "text","sub_type": "message","message": "内外炸圈"}].concat(SPAWNING_SECOND_CIRCLE_FLOWERS),		

    //二王
    "s-3101-2000-232-0": [{"type": "text","sub_type": "message","message": "靠近"}].concat(SPAWNING_FIRST_CIRCLE_FLOWERS),	
    "s-3101-2000-231-0": [{"type": "text","sub_type": "message","message": "跑远"}].concat(SPAWNING_FIRST_CIRCLE_FLOWERS),		
    "s-3101-2000-230-0": [{"type": "text","sub_type": "message","message": "全屏攻击注意沉默" }],	
    "s-3101-2000-108-0": [{"type": "text","sub_type": "message","message": "前插+后喷" }],	
    "s-3101-2000-235-0": [{"type": "text","sub_type": "message","message": "注视2人吃鉴定" }],
  //  "s-3101-2000-228-0": [{"type": "text","sub_type": "message","message": "组员分伤" }],
	//-----------------------------------------------------------------------------------------------------------------------------------
	

	
	
    "s-3101-2000-101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "右手 左手" }],	
    "s-3101-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "左手 右手" }],	
    "s-3101-2000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "旋转顺" }],
    "s-3101-2000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "右手" }],
    "s-3101-2000-105-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "前突刺" }],
    "s-3101-2000-106-0": [{"type": "text","sub_type": "message","message": "！" }],
    "s-3101-2000-107-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "左手" }],	
    "s-3101-2000-109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "4连击" }],	
    "s-3101-2000-110-0": [{"type": "text","sub_type": "message","message": "飞天" }],	
    "s-3101-2000-111-0": [{"type": "text","sub_type": "message","message": "飞天飞剑1" }],		
    "s-3101-2000-112-0": [{"type": "text","sub_type": "message","message": "飞天飞剑2" }],	
    "s-3101-2000-113-0": [{"type": "text","sub_type": "message","message": "旋转逆近距离粉末" }],		
    "s-3101-2000-114-0": [{"type": "text","sub_type": "message","message": "旋转后方攻击" }],	
    "s-3101-2000-115-0": [{"type": "text","sub_type": "message","message": "旋转逆远距离粉末" }],		
    "s-3101-2000-116-0": [{"type": "text","sub_type": "message","message": "后喷" }],	
    "s-3101-2000-150-0": [{"type": "text","sub_type": "message","message": "前冲" }],	
    "s-3101-2000-201-0": [{"type": "text","sub_type": "message","message": "向后移动8m" }],	
    "s-3101-2000-202-0": [{"type": "text","sub_type": "message","message": "前方移动8m" }],	
    "s-3101-2000-203-0": [{"type": "text","sub_type": "message","message": "后方移动12m" }],	
    "s-3101-2000-204-0": [{"type": "text","sub_type": "message","message": "前方移动12m" }],	
    "s-3101-2000-205-0": [{"type": "text","sub_type": "message","message": "起飞 共用" }],	
    "s-3101-2000-206-0": [{"type": "text","sub_type": "message","message": "近 共用秒杀" }],	
    "s-3101-2000-207-0": [{"type": "text","sub_type": "message","message": "远 共用秒杀" }],	
    "s-3101-2000-208-0": [{"type": "text","sub_type": "message","message": "近2 共用秒杀" }],	
    "s-3101-2000-209-0": [{"type": "text","sub_type": "message","message": "远2 共用秒杀" }],	
    "s-3101-2000-210-0": [{"type": "text","sub_type": "message","message": "结束 一般 共用" }],	
    "s-3101-2000-211-0": [{"type": "text","sub_type": "message","message": "旋转 前" }],	
    "s-3101-2000-212-0": [{"type": "text","sub_type": "message","message": "横向右手" }],	
    "s-3101-2000-213-0": [{"type": "text","sub_type": "message","message": "后方" }],	
    "s-3101-2000-214-0": [{"type": "text","sub_type": "message","message": "落地" }],	
    "s-3101-2000-215-0": [{"type": "text","sub_type": "message","message": "右方打击 共用" }],	
    "s-3101-2000-216-0": [{"type": "text","sub_type": "message","message": "后方打击 共用" }],	
    "s-3101-2000-217-0": [{"type": "text","sub_type": "message","message": "震动翅膀 喷射共用" }],		
    "s-3101-2000-218-0": [{"type": "text","sub_type": "message","message": "前方移动准备" }],	
    "s-3101-2000-219-0": [{"type": "text","sub_type": "message","message": "后方移动准备" }],	
    "s-3101-2000-220-0": [{"type": "text","sub_type": "message","message": "爆炸 共用" }],	
    "s-3101-2000-221-0": [{"type": "text","sub_type": "message","message": "结束宝石与机制" }],		
    "s-3101-2000-222-0": [{"type": "text","sub_type": "message","message": "短移动 共用" }],	
    "s-3101-2000-223-0": [{"type": "text","sub_type": "message","message": "后方开始 共用" }],
    "s-3101-2000-224-0": [{"type": "text","sub_type": "message","message": "！" }],	
    "s-3101-2000-225-0": [{"type": "text","sub_type": "message","message": "！" }],
    "s-3101-2000-226-0": [{"type": "text","sub_type": "message","message": "空中吸收 蓄力" }],	
    "s-3101-2000-227-0": [{"type": "text","sub_type": "message","message": "5人隐形透明" }],
    "s-3101-2000-228-0": [{"type": "text","sub_type": "message","message": "开始" }],	
    "s-3101-2000-229-0": [{"type": "text","sub_type": "message","message": "3个宝石种子传唤" }],	
    "s-3101-2000-233-0": [{"type": "text","sub_type": "message","message": "5个宝石种子传唤" }],
    "s-3101-2000-234-0": [{"type": "text","sub_type": "message","message": "注视" }]

};