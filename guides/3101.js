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
        "id": 548,
        "sub_delay": 6000,
        "distance": 300,
        "offset": angle
	});
	
	SPAWNING_SECOND_CIRCLE_FLOWERS.push({
		"type": "spawn",
        "id": 548,
        "sub_delay": 6000,
        "distance": 250,
        "offset": angle
	});
	SPAWNING_THIRD_CIRCLE_FLOWERS.push({
		"type": "spawn",
        "id": 548,
        "sub_delay": 6000,
        "distance": 200,
        "offset": angle
	});	
	
	
	
	
	
}
module.exports = {
    // First boss
    "h-3101-1000-100": [{"type": "func","func": guid_voice}],
    // Start(first debuff applied)

	
	
	
    "s-3101-1000-1116-0": [{"type": "text","sub_type": "message","message": "顺<---甩尾" }],	
    "s-3101-1000-1117-0": [{"type": "text","sub_type": "message","message": "逆--->甩尾" }],		
    "s-3101-1000-1121-0": [{"type": "text","sub_type": "message","message": "右-->砸地" }],			
    "s-3101-1000-1122-0": [{"type": "text","sub_type": "message","message": "左<--砸地" }],

	"s-3101-1000-1124-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "注意晕眩"}],
	"s-3101-1000-2124-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "注意晕眩"}],

	"s-3101-1000-1127-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "后喷"}],	
	"s-3101-1000-2127-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "后喷"}],	
	
	"s-3101-1000-1128-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "三连击"}],
	"s-3101-1000-2128-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "三连击"}],
	
	"s-3101-1000-1131-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "远程注意后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "远程注意后喷"}],				

	"s-3101-1000-2131-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "远程注意后喷"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "远程注意后喷"}],				



						   
    "s-3101-1000-1132-0": [{"type": "text","sub_type": "message","message": "左右喷 ←→" }],			
    "s-3101-1000-1133-0": [{"type": "text","sub_type": "message","message": "击飞 " }],			
    "s-3101-1000-1138-0": [{"type": "text","sub_type": "message","message": "击飞" }],		
    "s-3101-1000-1139-0": [{"type": "text","sub_type": "message","message": "前后喷 ↑↓" }],	
	
    "s-3101-1000-1141-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "双手前砸 (慢)" }],	

	"s-3101-1000-1142-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "右手+左手"}],	
	"s-3101-1000-2142-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "右手+左手"}],	

	
    "s-3101-1000-1148-0": [{"type": "text","sub_type": "message","message": "右手蓄力" }],		
    "s-3101-1000-1149-0": [{"type": "text","sub_type": "message","message": "左手蓄力" }],			
    "s-3101-1000-1150-0": [{"type": "text","sub_type": "message","message": "移动" }],		
    "s-3101-1000-1156-0": [{"type": "text","sub_type": "message","message": "转身1" }],			
    "s-3101-1000-1157-0": [{"type": "text","sub_type": "message","message": "转身2" }],		
    "s-3101-1000-1305-0": [{"type": "text","sub_type": "message","message": "双手抱拳" }],			
	

    "s-3101-1000-2116-0": [{"type": "text","sub_type": "message","message": "顺<---甩尾" }],	
    "s-3101-1000-2117-0": [{"type": "text","sub_type": "message","message": "逆--->甩尾" }],		
    "s-3101-1000-2121-0": [{"type": "text","sub_type": "message","message": "右-->砸地" }],			
    "s-3101-1000-2122-0": [{"type": "text","sub_type": "message","message": "左<--砸地" }],

			
		
		
    "s-3101-1000-2132-0": [{"type": "text","sub_type": "message","message": "左右喷 ←→" }],			
    "s-3101-1000-2133-0": [{"type": "text","sub_type": "message","message": "击飞 " }],			
    "s-3101-1000-2138-0": [{"type": "text","sub_type": "message","message": "击飞" }],		
    "s-3101-1000-2139-0": [{"type": "text","sub_type": "message","message": "前后喷 ↑↓" }],	
	
    "s-3101-1000-2141-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "双手前砸 (慢)" }],		
			
    "s-3101-1000-2148-0": [{"type": "text","sub_type": "message","message": "右手蓄力" }],		
    "s-3101-1000-2149-0": [{"type": "text","sub_type": "message","message": "左手蓄力" }],			
    "s-3101-1000-2150-0": [{"type": "text","sub_type": "message","message": "移动" }],		
    "s-3101-1000-2156-0": [{"type": "text","sub_type": "message","message": "转身1" }],			
    "s-3101-1000-2157-0": [{"type": "text","sub_type": "message","message": "转身2" }],		
    "s-3101-1000-2305-0": [{"type": "text","sub_type": "message","message": "双手抱拳" }],			


    "s-3101-1000-1313-0": [{"type": "text","sub_type": "message","message": "内外炸圈"}].concat(SPAWNING_SECOND_CIRCLE_FLOWERS),	
	
    "s-3101-1000-2313-0": [{"type": "text","sub_type": "message","message": "内外炸圈"}].concat(SPAWNING_SECOND_CIRCLE_FLOWERS),		

    // Second boss

    "s-3101-2000-1232-0": [{"type": "text","sub_type": "message","message": "靠近"}].concat(SPAWNING_FIRST_CIRCLE_FLOWERS),	
	
    "s-3101-2000-1231-0": [{"type": "text","sub_type": "message","message": "跑远"}].concat(SPAWNING_FIRST_CIRCLE_FLOWERS),		
	
   // "s-3101-2000-1232-0": [{"type": "text","sub_type": "message","message": "靠近" }],	
   // "s-3101-2000-1231-0": [{"type": "text","sub_type": "message","message": "跑远" }],	
    "s-3101-2000-2108-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "后喷" }],	
    "s-3101-2000-1108-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "后喷" }],		
    "s-3101-2000-1235-0": [{"type": "text","sub_type": "message","message": "幻觉2人吃鉴定" }],
    "s-3101-2000-1228-0": [{"type": "text","sub_type": "message","message": "快抱团" }]
    // Third boss


};