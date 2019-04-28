//DRC
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


module.exports = {


 "h-783-1000-100": [{"type": "func","func": guid_voice}],

//一王 

 "s-783-1000-1108-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后跳眩晕" }],
 "s-783-1000-1109-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后扫击退" }],
 "s-783-1000-1119-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "蓄力捶地" }],
 "s-783-1000-1127-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "雷电!!" }],
 
 
 //二王
 "s-783-2000-1110-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "前砸闪避" }],
 "s-783-2000-1111-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右后踢击退" }], 
 "s-783-2000-1115-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左后踢击退" }],
 "s-783-2000-1119-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "跳跃眩晕" }],
 "s-783-2000-1120-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "前拳+后踢击退" }],
 "s-783-2000-1316-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "火焰爆炸" }], 
 "s-783-2000-1317-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "水波击飞" }],
 "s-783-2000-1318-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "地毯眩晕" }],
 
 
 
 //三王
 "s-783-3000-1106-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "前推击退" }],
 "s-783-3000-1109-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "前插眩晕" }], 
 "s-783-3000-1112-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后扫击退" }],
 "s-783-3000-1301-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "地刺击飞" }],
 "s-783-3000-1303-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右" }],
 "s-783-3000-1306-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左" }], 
 "s-783-3000-1309-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "注视!!" }],
 "s-783-3000-1315-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "恐惧吸血" }],
 
  "s-783-1000-2108-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后跳眩晕" }],
 "s-783-1000-2109-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后扫击退" }],
 "s-783-1000-2119-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "蓄力捶地" }],
 "s-783-1000-2127-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "雷电!!" }],
 
 
 //二王
 "s-783-2000-2110-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "前砸闪避" }],
 "s-783-2000-2111-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右后踢击退" }], 
 "s-783-2000-2115-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左后踢击退" }],
 "s-783-2000-2119-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "跳跃眩晕" }],
 "s-783-2000-2120-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "前拳+后踢击退" }],
 "s-783-2000-2316-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "火焰爆炸" }], 
 "s-783-2000-2317-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "水波击飞" }],
 "s-783-2000-2318-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "地毯眩晕" }],
 
 
 
 //三王
 "s-783-3000-2106-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "前推击退" }],
 "s-783-3000-2109-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "前插眩晕" }], 
 "s-783-3000-2112-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后扫击退" }],
 "s-783-3000-2301-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "地刺击飞" }],
 "s-783-3000-2303-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右" }],
 "s-783-3000-2306-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左" }], 
 "s-783-3000-2309-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "注视!!" }],
 "s-783-3000-2315-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "恐惧吸血" }]

  


};