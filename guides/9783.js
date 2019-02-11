//DRC
//made by michengs







module.exports = {


 "h-783-1000-100": [{"type": "text","sub_type": "notification","delay": 2000,"message": "proxy频道输入:補助 help <br>获取更多使用信息!"}],

//一王 

 "s-783-1000-108": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "后跳眩晕" }],
 "s-783-1000-109": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "后扫击退" }],
 "s-783-1000-119": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "蓄力捶地" }],
 "s-783-1000-127": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "雷电!!" }],
 
 
 //二王
 "s-783-2000-110": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "前砸闪避" }],
 "s-783-2000-111": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "右后踢击退" }], 
 "s-783-2000-115": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "左后踢击退" }],
 "s-783-2000-119": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "跳跃眩晕" }],
 "s-783-2000-120": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "前拳+后踢击退" }],
 "s-783-2000-316": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "火焰爆炸" }], 
 "s-783-2000-317": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "水波击飞" }],
 "s-783-2000-318": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "地毯眩晕" }],
 
 
 
 //三王
 
 "s-783-3000-106": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "前推击退" }],
 "s-783-3000-109": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "前插眩晕" }], 
 "s-783-3000-112": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "后扫击退" }],
 "s-783-3000-301": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "地刺击飞" }],
 "s-783-3000-303": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "右" }],
 "s-78300-306": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "左" }], 
 "s-783-3000-309": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "注视!!" }],
 "s-783-3000-315": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "恐惧吸血" }],
 
 

	//303: {msg: '<font color="#80FF00" size="32">' +'→→→→右', sign_degrees1:  80, sign_distance1: 250, sign_degrees2:  260, sign_distance2: 250},
	//306: {msg: '<font color="#80FF00" size="32">' +'左←←←←', sign_degrees1: 280, sign_distance1: 250, sign_degrees2:  100, sign_distance2: 250},













    //后跳+内外圈,安全区域：站里面+站外面
	//Backstep+donuts, stay in, alert
	
     "s-783-1000-1104": [{"type": "text","sub_type": "speech","message": "Dodge Stun", "message_TW": "BOSS 眩晕攻击!坦克注意！" },
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

     "s-783-1000-1304": [{"type": "text","sub_type": "speech","message": "alert", "message_TW": "出去" }]
		 
  


};