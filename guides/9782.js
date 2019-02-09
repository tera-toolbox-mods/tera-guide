// RK9
//made by michengs

let counter = 0;
let timer;


const ITEM_SPAWNED_ON_SWIPE_ID = 513;
const ITEM_SPAWNED_ON_SWIPE_SUB_DELAY = 2500;
const ITEM_SPAWNED_ON_SWIPE_DISTANCE = 150;


/*


let SPAWNING_FIRST_CIRCLE_FLOWERS = [];
let SPAWNING_SECOND_CIRCLE_FLOWERS = [];
const SPAWN_CIRCLES = false;
const stepone = 2 * Math.PI / 40;//40 flowers in total
for(let angle = -Math.PI; angle <= Math.PI; angle += stepone) {
    if(!SPAWN_CIRCLES) continue;
	SPAWNING_FIRST_CIRCLE_FLOWERS.push({
        "type": "spawn",
        "id": 603,
        "sub_delay": 6000,
        "distance": 143,
        "offset": angle
    });
	
	SPAWNING_SECOND_CIRCLE_FLOWERS.push({
        "type": "spawn",
        "id": 603,
        "sub_delay": 6000,
        "distance": 157,
        "offset": angle
    });
};
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "text","class_position":"tank","sub_type": "notification","message": "right&#x2192;>out to in","message_TW": "&#x53F3;&#x2192; + &#x4ECE;&#x5916;&#x5230;&#x5185;"});




*/


//三王出盾倒计时


//内圈
//inner flower circle



module.exports = {




 

     "ae-0-0-4030": [{"type": "text","sub_type": "notification","delay": 5000,"message_TW": "欢迎进入殿下"} ],


	/*

[10501][Guide] Abnormality: 4030 | Started by: ae-0-0 | key: ae-0-0-4030
[10502][Guide] Abnormality: 4032 | Started by: ae-0-0 | key: ae-0-0-4032
[10502][Guide] Abnormality: 781124 | Started by: ae-0-0 | key: ae-0-0-781124
[10502][Guide] Abnormality: 99020020 | Started by: ae-0-0 | key: ae-0-0-99020020
[10502][Guide] Abnormality: 8000089 | Started by: ae-0-0 | key: ae-0-0-8000089
[10503][Guide] Abnormality: 8000090 | Started by: ae-0-0 | key: ae-0-0-8000090
[10503][Guide] Abnormality: 29 | Started by: ae-0-0 | key: ae-0-0-29
[10513][Guide] Abnormality: 32 | Started by: ae-0-0 | key: ae-0-0-32
[10514][Guide] Abnormality: 38 | Started by: ae-0-0 | key: ae-0-0-38
[10518][Guide] Abnormality: 950600 | Started by: ae-0-0 | key: ae-0-0-950600
[10519][Guide] Abnormality: 999001018 | Started by: ae-0-0 | key: ae-0-0-999001018
[10521][Guide] Abnormality: 4030 | Started by: ae-0-0 | key: ae-0-0-4030
[10521][Guide] Abnormality: 4032 | Started by: ae-0-0 | key: ae-0-0-4032

*/
































//一王 不愤怒
//firstboss, not enraged

    //后跳+内外圈,安全区域：站里面+站外面
	//Backstep+donuts, stay in, get out
	
     "s-735-1000-1104-0": [{"type": "text","sub_type": "notification","message": "Dodge Stun", "message_TW": "BOSS 眩晕攻击!坦克注意！" },
//左边--------------------------------
 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE"},
{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 2.3},
 {"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 1},
 //右边--------------------------
  {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -1, "ownerName": "SAFE SPOT", "message": "SAFE"},
{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -2.3},
 {"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -1}
 
 
 
 
	 
	 ],

     "s-735-1000-1304-0": [{"type": "text","sub_type": "notification","message": "get out", "message_TW": "出去" }],
		 
     "s-735-1000-1305-0": [{"type": "text","sub_type": "notification","message": "get in", "message_TW": "进" }],	 
		 //眩晕
     "s-735-1000-2104-0": [{"type": "text","sub_type": "notification","message": "Dodge Stun", "message_TW": "BOSS 眩晕攻击!坦克注意！" }],	

		 //前后砸 
     "s-735-1000-2112-0": [{"type": "text","sub_type": "notification","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],	
	 "s-735-1000-1112-0": [{"type": "text","sub_type": "notification","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],	 
     "s-735-1000-2111-0": [{"type": "text","sub_type": "notification","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],			  
     "s-735-1000-1111-0": [{"type": "text","sub_type": "notification","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],		 
		 	 
//跳
	
"s-735-1000-1309-0": [ 
{"type": "text","sub_type": "notification","message": "Four missile launches begin", "message_TW": "开始发射4次导弹！！" },
{"type": "text","sub_type": "notification","delay": 7000,"message": "Countdown 5", "message_TW": "倒计时5"},
{"type": "text","sub_type": "notification","delay": 8000,"message": "Countdown 4", "message_TW": "倒计时4"},
{"type": "text","sub_type": "notification","delay": 9000,"message": "Countdown 3", "message_TW": "倒计时3"},
{"type": "text","sub_type": "notification","delay": 10000,"message": "Countdown 2", "message_TW": "倒计时2"},
{"type": "text","sub_type": "notification","delay": 11000,"message": "Countdown 1", "message_TW": "倒计时1"},
{"type": "text","sub_type": "notification","delay": 12000,"message": "JUMP", "message_TW": "快跳！"}
],

//拉人
	     "s-735-1000-1307-0": [{"type": "text","sub_type": "notification","message": "BOSS pull people, attention invincible dodge", "message_TW": "BOSS 拉人，注意无敌躲避！" }],
	//炸弹
	     "s-735-1000-1306-0": [{"type": "text","sub_type": "notification","message": "Call for the mines! Fight!", "message_TW": "召唤地雷！快打！" }],


//------------------------------------2王

//---愤怒前砸

"s-735-2000-2102-0": [{"type": "text","sub_type": "notification","message": "FRONT DODGE","message_TW": "前砸注意躲避"}],

"s-735-2000-1102-0": [{"type": "text","sub_type": "notification","message": "FRONT DODGE","message_TW": "前砸注意躲避"}],

"s-735-2000-2108-0": [{"type": "text","sub_type": "notification","message": "BACK DODGE","message_TW": "后踢打手補师注意"}],

"s-735-2000-1108-0": [{"type": "text","sub_type": "notification","message": "BACK DODGE","message_TW": "后踢打手補师注意"}],

"s-735-2000-1301-0": [{"type": "text","sub_type": "notification","message": "Incoming Summon","message_TW": "boss扔溜溜球，注意躲避"}],

"s-735-2000-1304-0": [{"type": "text","sub_type": "notification","message": "get out↓","message_TW": "boss近程攻击，快跑远"}],

//------------------------------------3王
//s拳
"s-735-3000-2116-0": [{"type": "text","sub_type": "notification","message": "RIGHT →↘","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-2119-0": [{"type": "text","sub_type": "notification","message": "RIGHT →↘","message_TW": "S拳秒杀躲避右边 →↘"}],	
"s-735-3000-1116-0": [{"type": "text","sub_type": "notification","message": "RIGHT →↘","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-1119-0": [{"type": "text","sub_type": "notification","message": "RIGHT →↘","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-1118-0": [{"type": "text","sub_type": "notification","message": "LEFT ←↙","message_TW": "S拳秒杀躲避 左边 ←↙"}],	 
"s-735-3000-2118-0": [{"type": "text","sub_type": "notification","message": "LEFT ←↙","message_TW": "S拳秒杀躲避 左边 ←↙"}],	 
"s-735-3000-2117-0": [{"type": "text","sub_type": "notification","message": "LEFT ←↙","message_TW": "S拳秒杀躲避 左边 ←↙"}],
"s-735-3000-1117-0": [{"type": "text","sub_type": "notification","message": "LEFT ←↙","message_TW": "S拳秒杀躲避 左边 ←↙"}],

	
//破盾
	     "s-735-3000-1321-0": [
		  {"type": "text","sub_type": "notification","message": "SHIELD!", "message_TW": "BOSS护盾 快打，不然灭团!" },
          {"type": "text","sub_type": "notification","delay": 105000,"message": "10s later SHIELD!", "message_TW": "10S后准备破盾！"}	  
		 ],
		 
	 
		 
//坦无敌闪
"s-735-3000-1129-0": [{"type": "text","sub_type": "notification","message": "tank Invincible jump","message_TW": "坦无敌闪"}],
"s-735-3000-2129-0": [{"type": "text","sub_type": "notification","message": "tank Invincible jump","message_TW": "坦无敌闪"}],	


//出去	 
"s-735-3000-1324-0": [{"type": "text","sub_type": "notification","message": " get out↓","message_TW": "出去"}] 
		 


};