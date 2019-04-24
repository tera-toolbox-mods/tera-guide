// RK9
//made by michengs
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
	
	
	
	

	
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

 "h-735-1000-100": rings_inout_seventhfloor,





     "s-735-1000-104-0": [{"type": "text","sub_type": "message","message": "Dodge Stun", "message_TW": "BOSS 眩晕攻击!坦克注意！" }],	
	 "s-735-1000-112-0": [{"type": "text","sub_type": "message","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],	 
     "s-735-1000-111-0": [{"type": "text","sub_type": "message","message": "BACK ATTACK", "message_TW": "BOSS 攻击身后打手请注意！" }],	
     "s-735-1000-305-0": [{"type": "text","sub_type": "message","message": "get in", "message_TW": "进" }],	 
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
"s-735-3000-129-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "坦无敌闪"}],	

  "s-735-3000-321-0": [
		  {"type": "text","sub_type": "message","message": "get out", "message_TW": "BOSS护盾 快打，不然灭团!" },
          {"type": "text","sub_type": "message","delay": 90000,"message": "JUMP", "message_TW": "10S后准备破盾！"}	  
		 ],


//出去	 
"s-735-3000-324-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "出去"}]

};