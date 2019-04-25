// 
//made by michengs
let guidecounter = 0 ;//
let guidetimer;//
   function guid_voice(handlers) {   
	  clearTimeout(guidetimer);
      guidecounter++;
    if(guidecounter >= 3) {	
handlers['text']({
"sub_type": "message",
"delay": 2000,
"message_TW": "proxy频道输入:補助 help 获取更多使用信息!"
});

handlers['text']({
"sub_type": "notification",
"delay": 2000,
"message_TW": "proxy频道输入:補助 help <br>获取更多使用信息!"
});
    }
    guidetimer = setTimeout(()=>{
        guidecounter = 0;
    }, 3000);
}	

module.exports = {



 "h-782-1000-100": [{"type": "func","func": guid_voice}],
 
 //一王
 
 
  "s-782-1000-1106-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "重击" }],
  "s-782-1000-1107-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后喷击退" }],
  "s-782-1000-1108-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "点名击飞" }], 
  "s-782-1000-1109-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "滚石" }],
  "s-782-1000-1110-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "滚石" }],
  "s-782-1000-1301-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "食人花眩晕" }], 
  "s-782-1000-1307-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "笼子禁锢" }],
  "s-782-1000-1309-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "1朵花-鉴定!!" }],
  "s-782-1000-1310-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "2朵花-鉴定!!" }], 
  "s-782-1000-1116-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "全屏攻击!!" }],
  "s-782-1000-1312-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "金色花!!" }],

 
  //二王
  
  "s-782-2000-1105-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "翻滚" }], 
  "s-782-2000-1113-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "双手眩晕" }],
  "s-782-2000-1114-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "三连地板靠近" }],
  "s-782-2000-1116-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "前砸 后砸" }], 
  "s-782-2000-1301-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "捶地远离 旋转击退" }],
  "s-782-2000-1312-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "旋转靠近 捶地击飞" }], 
 

	
//三王


  "s-782-3000-1118-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "三连击左-右-喷" }],
  "s-782-3000-1143-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左后" }],
  "s-782-3000-1145-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左后" }], 
  "s-782-3000-1146-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左后扩散" }],
  "s-782-3000-1154-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左后扩散" }],
  "s-782-3000-1144-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右后" }], 
  "s-782-3000-1147-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右后" }],
  "s-782-3000-1148-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右后扩散" }],
  "s-782-3000-1155-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右后扩散" }], 
  "s-782-3000-1161-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后砸 前砸" }],
  "s-782-3000-1162-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后砸 前砸" }],
  "s-782-3000-1213-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "尾巴" }],
  "s-782-3000-1215-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "尾巴" }], 
  "s-782-3000-1139-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "打右边" }],
  "s-782-3000-1150-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "打右边" }],
  "s-782-3000-1141-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "打左边" }], 
  "s-782-3000-1152-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "打左边" }],
  "s-782-3000-1300-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "一次觉醒 推人" }],
  "s-782-3000-1399-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "二次觉醒 推人" }], 
  "s-782-3000-1360-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "爆炸爆炸" }], 
	
 //一王
 
 
  "s-782-1000-2106-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "重击" }],
  "s-782-1000-2107-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后喷击退" }],
  "s-782-1000-2108-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "点名击飞" }], 
  "s-782-1000-2109-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "滚石" }],
  "s-782-1000-2110-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "滚石" }],
  "s-782-1000-2301-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "食人花眩晕" }], 
  "s-782-1000-2307-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "笼子禁锢" }],
  "s-782-1000-2309-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "1朵花-鉴定!!" }],
  "s-782-1000-2310-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "2朵花-鉴定!!" }], 
  "s-782-1000-2116-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "全屏攻击!!" }],
  "s-782-1000-2312-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "金色花!!" }],

 
  //二王
  
  "s-782-2000-2105-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "翻滚" }], 
  "s-782-2000-2113-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "双手眩晕" }],
  "s-782-2000-2114-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "三连地板靠近" }],
  "s-782-2000-2116-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "前砸 后砸" }], 
  "s-782-2000-2301-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "捶地远离 旋转击退" }],
  "s-782-2000-2312-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "旋转靠近 捶地击飞" }], 
 

	
//三王


  "s-782-3000-2118-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "三连击左-右-喷" }],
  "s-782-3000-2143-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左后" }],
  "s-782-3000-2145-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左后" }], 
  "s-782-3000-2146-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左后扩散" }],
  "s-782-3000-2154-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "左后扩散" }],
  "s-782-3000-2144-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右后" }], 
  "s-782-3000-2147-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右后" }],
  "s-782-3000-2148-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右后扩散" }],
  "s-782-3000-2155-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "右后扩散" }], 
  "s-782-3000-2161-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后砸 前砸" }],
  "s-782-3000-2162-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "后砸 前砸" }],
  "s-782-3000-2213-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "尾巴" }],
  "s-782-3000-2215-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "尾巴" }], 
  "s-782-3000-2139-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "打右边" }],
  "s-782-3000-2150-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "打右边" }],
  "s-782-3000-2141-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "打左边" }], 
  "s-782-3000-2152-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "打左边" }],
  "s-782-3000-2300-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "一次觉醒 推人" }],
  "s-782-3000-2399-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "二次觉醒 推人" }], 
  "s-782-3000-2360-0": [{"type": "text","sub_type": "message","message": "alert", "message_TW": "爆炸爆炸" }] 





};