// RK9
//made by michengs

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
/*	
let rings_inout_seventhfloor = [];

const sign_offsets_seventhfloor = [0.24, 1.29, 2.33, -2.88, -1.84, -0.8];//披萨A
for (let offset of sign_offsets_seventhfloor) {
    rings_inout_seventhfloor.push({
    	"type": "spawn",
    	"id": 559,
        "delay": 6000,		
    	"sub_delay": 8000,
    	"distance": 250,
    	"offset": offset
    });
}	                                                                      //外
for (let angle = -Math.PI; angle <= Math.PI; angle += 2 * Math.PI / 60) {
    rings_inout_seventhfloor.push({
    	"type": "spawn",
    	"id": 559,
        "delay": 8000,		
    	"sub_delay": 10000,
    	"distance": 250,
    	"offset": angle
    });
}	
	                                                                   //內
for (let angle = -Math.PI; angle <= Math.PI; angle += 2 * Math.PI / 60) {
    rings_inout_seventhfloor.push({
    	"type": "spawn",
    	"id": 559,
        "delay": 10000,		
    	"sub_delay": 12000,
    	"distance": 150,
    	"offset": angle
    });
}		

	
	
const sign_offsets_seventhfloor1 = [-0.26, 0.79, 1.83, 2.9, -2.34, -1.3]; //披萨B
for (let offset of sign_offsets_seventhfloor1) {
    rings_inout_seventhfloor.push({
    	"type": "spawn",
    	"id": 559,
        "delay": 12000,		
    	"sub_delay": 14000,
    	"distance": 250,
    	"offset": offset
    });
}	
	
const sign_offsets_seventhfloor2 = [-0.26, 1.29, 2.9, -1.84]; //披萨C
for (let offset of sign_offsets_seventhfloor2) {
    rings_inout_seventhfloor.push({
    	"type": "spawn",
    	"id": 559,
        "delay": 14000,		
    	"sub_delay": 16000,
    	"distance": 250,
    	"offset": offset
    });
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
	},
	
{
		"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 6000,
		"distance": 225,
		"ownerName": "安全界限",
		"message": "安全界限",
		"offset": -3.14
	},
{
		"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 6000,
		"distance": 375,
		"ownerName": "安全界限",
		"message": "安全界限",
		"offset": 0
	});
	SPAWNING_THIRD_CIRCLE_FLOWERS.push({
		"type": "spawn",
        "id": 553,
        "sub_delay": 6000,
        "distance": 225,
        "offset": -3.14
	});	
	
}
*/
/*
let rings_inout_seventhfloor = [];

const sign_offsets_seventhfloor =   [0, -0.157, -0.315, -0.474, -0.636, -0.801, -0.97, -1.144, -1.325, -1.514, -1.713, -1.922, -2.144, -2.378, -2.625, -2.88, -3.141, 2.88, 2.625, 2.378, 2.144, 1.922, 1.713, 1.514, 1.325, 1.144,0.97, 0.801, 0.636, 0.474, 0.315, 0.157];//披萨A
const sign_distances_seventhfloor = [375, 373.8, 370.4, 364.7, 356.9, 347.3, 335.9, 323.1, 309.2, 294.6, 280, 265.7, 252.5, 241.2, 232.4, 226.9, 225, 226.9, 232.4, 241.2, 252.5, 265.7, 280, 294.6, 309.2, 323.1 ,335.9, 347.3, 356.9, 364.7, 370.4, 373.8];//披萨A



for (let offset of sign_offsets_seventhfloor; distance of sign_distances_seventhfloor  ) {
	

    rings_inout_seventhfloor.push({
    	"type": "spawn",
    	"id": 553,
        "delay": 6000,		
    	"sub_delay": 80000,
    	"distance": distance,
    	"offset": offset
    });
	
	
}					
	*/

	
	const steptwo = 2 * Math.PI / 30;//20 flowers in total
let SPAWNING_FIRST_CIRCLE_FLOWERS = [];
for(let angle = -Math.PI; angle <= Math.PI; angle += steptwo) {
	SPAWNING_FIRST_CIRCLE_FLOWERS.push({
	    "type": "spawn",
        "id": 553,
        "sub_delay": 5000,
        "distance": 680,
        "offset": angle
	});
}
	
function rings_seventhfloor(handlers, event, entity) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;

	library.applyDistance(shield_loc, 50);

    for (let angle = -Math.PI; angle <= Math.PI; angle += 2 * Math.PI / 40) {
        handlers['spawn']({
        	"id": 603,
        	"sub_delay": 5000,
        	"distance": 200,
        	"offset": angle
        }, {loc: shield_loc});
    }


}	
	
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

    "h-3101-1000-100": [{"type": "func","func": guid_voice}],






     "s-735-1000-104-0": [{"type": "text","sub_type": "msgcg","message":  "注意眩暈"}],	
	 "s-735-1000-112-0": [{"type": "text","sub_type": "msgcg","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],	 
     "s-735-1000-111-0": [{"type": "text","sub_type": "msgcg","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],	
   //  "s-735-1000-305-0": [{"type": "text","sub_type": "message","message": "get in", "message_TW": "进" }],	 
     "s-735-1000-306-0": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "召唤地雷！快打！" }], 
     "s-735-1000-307-0": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "BOSS 拉人，注意无敌躲避！" }],

"s-735-1000-309-0": [ 
{"type": "text","sub_type": "message","message": "Dodge Stun", "message_TW": "开始发射4次导弹！！" },
{"type": "text","sub_type": "message","delay": 7000,"message": "JUMP", "message_TW": "倒计时5"},
{"type": "text","sub_type": "message","delay": 8000,"message": "JUMP", "message_TW": "倒计时4"},
{"type": "text","sub_type": "message","delay": 9000,"message": "JUMP", "message_TW": "倒计时3"},
{"type": "text","sub_type": "message","delay": 10000,"message": "JUMP", "message_TW": "倒计时2"},
{"type": "text","sub_type": "message","delay": 11000,"message": "JUMP", "message_TW": "倒计时1"},
{"type": "text","sub_type": "message","delay": 12000,"message": "JUMP", "message_TW": "快跳！"}
],
//------------------------------------2王

"s-735-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "前砸注意躲避"}],
"s-735-2000-108-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "后踢打手補师注意"}],
"s-735-2000-301-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "boss扔溜溜球，注意躲避"}],
"s-735-2000-304-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "boss近程攻击，快跑远"}],

//------------------------------------3王
//s拳
"s-735-3000-116-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-119-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-118-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避 左边 ←↙"}],	 
"s-735-3000-117-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避 左边 ←↙"}],
"s-735-3000-129-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "坦无敌闪"}],	

  "s-735-3000-321-0": [
		  {"type": "text","sub_type": "message","message": "get out", "message_TW": "BOSS护盾 快打，不然灭团!" },
          {"type": "text","sub_type": "message","delay": 90000,"message": "JUMP", "message_TW": "10S后准备破盾！"}	  
		 ],


//出去	 
"s-735-3000-324-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "出去"}]

};