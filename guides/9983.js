//DRC
//made by michengs

let notice_guide = true;
let player, entity, library, effect;
function guid_voice(handlers) {   
if(notice_guide) {
handlers['text']({
"sub_type": "message",
"delay": 2000,
"message": "获取更多信息 proxy频道输入:補助 help"
});

handlers['text']({
"sub_type": "notification",
"delay": 2000,
"message": "获取更多信息 proxy频道输入:補助 help"
});
}
notice_guide = false;

}	
const SPAWN_CIRCLES = true;
const steptwo = 2 * Math.PI / 30;//20 flowers in total
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
        "sub_delay": 5000,
        "distance": 680,
        "offset": angle
	});
	
	SPAWNING_THIRD_CIRCLE_FLOWERS.push({
		"type": "spawn",
        "id": 553,
        "sub_delay": 6000,
        "distance": 225,
        "offset": angle
	});	
	
}


let SPAWNING_right_FLOWERS = []; //303
let SPAWNING_left_FLOWERS = [];  //306
for (let distance = 50; distance <= 250; distance += 50) {
    SPAWNING_right_FLOWERS.push({
    	"type": "spawn",
    	"id": 553,	
    	"sub_delay": 5000,
    	"distance": distance,
    	"offset": 1.57
    },
{
    	"type": "spawn",
    	"id": 553,		
    	"sub_delay": 5000,
    	"distance": distance,
    	"offset": -1.57
    },
	
{
			"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 5000,
		"distance": 250,
		"ownerName": "SAFE SPOT",
		"message": "SAFE",
		"offset": -1.39
	},
	{
		"type":"spawn",
		"sub_type": "item",
		"id": 98260,
		"sub_delay": 5000,
		"distance": 250,
		"offset": -1.39
	
	}	,
	
{
			"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 5000,
		"distance": 250,
		"ownerName": "SAFE SPOT",
		"message": "SAFE",
		"offset": 1.745
	},
	{
		"type":"spawn",
		"sub_type": "item",
		"id": 98260,
		"sub_delay": 5000,
		"distance": 250,
		"offset": 1.745
	
	});
	
    SPAWNING_left_FLOWERS.push({
    	"type": "spawn",
    	"id": 553,	
    	"sub_delay": 5000,
    	"distance": distance,
    	"offset": 1.57
    },
{
    	"type": "spawn",
    	"id": 553,		
    	"sub_delay": 5000,
    	"distance": distance,
    	"offset": -1.57
    },	
{
			"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 5000,
		"distance": 250,
		"ownerName": "SAFE SPOT",
		"message": "SAFE",
		"offset": 1.39
	},
	{
		"type":"spawn",
		"sub_type": "item",
		"id": 98260,
		"sub_delay": 5000,
		"distance": 250,
		"offset": 1.39
	}	,	
{
			"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 5000,
		"distance": 250,
		"ownerName": "SAFE SPOT",
		"message": "SAFE",
		"offset": -1.745
	},
	{
		"type":"spawn",
		"sub_type": "item",
		"id": 98260,
		"sub_delay": 5000,
		"distance": 250,
		"offset": -1.745
	});	
}

	

module.exports = {

 //"h-983-1000-100": [{"type": "text","sub_type": "message","message": "_","message_TW": "地毯眩晕" }].concat(SPAWNING_left_FLOWERS),
 //"h-983-1000-100": [{"type": "func","func": guid_voice}],


 
 "s-983-1000-108-0": [{"type": "text","sub_type": "message","message": "back stun","message_TW": "后跳眩晕" }],
 "s-983-1000-109-0": [{"type": "text","sub_type": "message","message": "Knockback","message_TW": "后扫击退" }],
 "s-983-1000-119-0": [{"type": "text","sub_type": "message","message": "energy","message_TW": "蓄力捶地" }],
 "s-983-1000-127-0": [{"type": "text","sub_type": "message","message": "thunder","message_TW": "雷电!!" }],
 "dm-0-0-9783103": [{"type": "text","sub_type": "message","message": "100","message_TW": "100能量鉴定!!" }],
 "dm-0-0-9983103": [{"type": "text","sub_type": "message","message": "100","message_TW": "100能量鉴定!!" }],
 //二王
 "s-983-2000-110-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_TW": "前砸闪避" }],
 "s-983-2000-111-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "right back","message_TW": "右后踢击退" },
                      {"type": "text","class_position":"heal","sub_type": "message","message": "right back","message_TW": "右后踢击退" }], 					  
 "s-983-2000-115-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "left back","message_TW": "左后踢击退" },
                      {"type": "text","class_position":"heal","sub_type": "message","message": "left back","message_TW": "左后踢击退" }], 
 "s-983-2000-119-0": [{"type": "text","sub_type": "message","message": "jump stun","message_TW": "跳跃眩晕" }],
 "s-983-2000-120-0": [{"type": "text","sub_type": "message","message": "front + back","message_TW": "前拳+后踢击退" }],
 "s-983-2000-316-0": [{"type": "text","sub_type": "message","message": "Flame Blast","message_TW": "火焰爆炸" }], 
 "s-983-2000-317-0": [{"type": "text","sub_type": "message","message": "water wave","message_TW": "水波击飞" }],
 "s-983-2000-318-0": [{"type": "text","sub_type": "message","message": "stun","message_TW": "地毯眩晕" }].concat(SPAWNING_FIRST_CIRCLE_FLOWERS),
 
 
 
 //三王
 "s-983-3000-106-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_TW": "前推击退" }],
 "s-983-3000-109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "stun","message_TW": "前插眩晕" }], 
 "s-983-3000-112-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "Knockback","message_TW": "后扫击退" },
                      {"type": "text","class_position":"heal","sub_type": "message","message": "Knockback","message_TW": "后扫击退" }],
 "s-983-3000-301-0": [{"type": "text","sub_type": "message","message": "diaup","message_TW": "地刺击飞" }],
 
 "s-983-3000-303-0": [{"type": "text","sub_type": "message","message": "right","message_TW": "右" }].concat(SPAWNING_right_FLOWERS),
 "s-983-3000-306-0": [{"type": "text","sub_type": "message","message": "left","message_TW": "左" }].concat(SPAWNING_left_FLOWERS),
 "s-983-3000-309-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_TW": "注视!!" }],
 "s-983-3000-315-0": [{"type": "text","sub_type": "message","message": "suck blood","message_TW": "恐惧吸血" }]


};