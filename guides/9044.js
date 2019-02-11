// RK9
//made by michengs

let counter = 0;
let timer;


const ITEM_SPAWNED_ON_SWIPE_ID = 513;
const ITEM_SPAWNED_ON_SWIPE_SUB_DELAY = 2500;
const ITEM_SPAWNED_ON_SWIPE_DISTANCE = 150;






module.exports = {



 "h-044-1000-100": [{"type": "text","sub_type": "message","delay": 2000,"message": "proxy频道输入:補助 help <br>获取更多使用信息!"}],




//一王 
//firstboss, 

    //后跳+内外圈,安全区域：站里面+站外面
	//Backstep+donuts, stay in, get out
	
     "s-735-1000-104-0": [{"type": "text","sub_type": "message","message": "Dodge Stun", "message_TW": "BOSS 眩晕攻击!坦克注意！" },
//左边--------------------------------
 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
 {"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE"},
{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 2.3},
 {"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 1}
	 
	 ],

     "s-735-1000-304-0": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "出去" }],
		 
     "s-735-1000-305-0": [{"type": "text","sub_type": "message","message": "get in", "message_TW": "进" }],	 
 
		 //眩晕
     "s-735-1000-104-0": [{"type": "text","sub_type": "message","message": "Dodge Stun", "message_TW": "BOSS 眩晕攻击!坦克注意！" }],	

		 //前后砸 

	 "s-735-1000-112-0": [{"type": "text","sub_type": "message","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],	 			  
     "s-735-1000-111-0": [{"type": "text","sub_type": "message","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],		 
		 	 
//跳
	
"s-735-1000-309-0": [ 
{"type": "text","sub_type": "message","message": "Dodge Stun", "message_TW": "开始发射4次导弹！！" },
{"type": "text","sub_type": "message","delay": 7000,"message": "JUMP", "message_TW": "倒计时5"},
{"type": "text","sub_type": "message","delay": 8000,"message": "JUMP", "message_TW": "倒计时4"},
{"type": "text","sub_type": "message","delay": 9000,"message": "JUMP", "message_TW": "倒计时3"},
{"type": "text","sub_type": "message","delay": 10000,"message": "JUMP", "message_TW": "倒计时2"},
{"type": "text","sub_type": "message","delay": 11000,"message": "JUMP", "message_TW": "倒计时1"},
{"type": "text","sub_type": "message","delay": 12000,"message": "JUMP", "message_TW": "快跳！"}
],

//拉人
	     "s-735-1000-307-0": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "BOSS 拉人，注意无敌躲避！" }],
	//炸弹
	     "s-735-1000-306-0": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "召唤地雷！快打！" }],


//------------------------------------2王

//---愤怒前砸



"s-735-2000-102-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "前砸注意躲避"}],

"s-735-2000-108-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "后踢打手補师注意"}],

"s-735-2000-301-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "boss扔溜溜球，注意躲避"}],

"s-735-2000-304-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "boss近程攻击，快跑远"}],

//------------------------------------3王
//s拳
"s-735-3000-116-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-119-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避右边 →↘"}],	 
"s-735-3000-118-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避 左边 ←↙"}],	 
"s-735-3000-117-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避 左边 ←↙"}],

	
//破盾
	     "s-735-3000-321-0": [
		  {"type": "text","sub_type": "message","message": "get out", "message_TW": "BOSS护盾 快打，不然灭团!" },
          {"type": "text","sub_type": "message","delay": 105000,"message": "JUMP", "message_TW": "10S后准备破盾！"}	  
		 ],
		 
	 
		 
//坦无敌闪
"s-735-3000-129-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "坦无敌闪"}],
	
//出去	 
"s-735-3000-324-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "出去"}] 
		 


};