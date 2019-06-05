// RK9
//made by michengs

let notice_guide = true;
let player, entity, library, effect;
	let firstskill = 0,
		secondskill = 0,
		MSG = null,
		print = false,
		tempskill = 0;	
function guid_voice(handlers) {   
if(notice_guide) {
handlers['text']({
"sub_type": "message",
"delay": 3000,
"message_TW": "进入哨兵机械区域"
});

handlers['text']({
"sub_type": "notification",
"delay": 3000,
"message_TW": "进入哨兵机械区域"
});
}
notice_guide = false;

}	
// 	召喚光柱 ，告示牌提示（  角度 距离   延迟时间 时间）
function SpawnThing( degrees, radius, delay, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;			
   let angle =  Math.PI * degrees / 180 
        handlers['spawn']({
			"sub_type": "build_object",
        	"id": 1,
			"delay": delay,			
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle,
			"ownerName": "SAFE SPOT",
			"message": "SAFE"
        }, {loc: shield_loc});  
        handlers['spawn']({
			"sub_type": "item",
        	"id": 88850,
			"delay": delay,			
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});	
}
// 	召喚点 ，提示（ 提示标志 角度 距离   延迟时间 时间）
function Spawnitem( item,degrees, radius, delay, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;			
   let angle =  Math.PI * degrees / 180 
        handlers['spawn']({
        	"id": item,
			"delay": delay,			
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});	
}

	//构建直线（提示标志 偏移角度 偏移距离  角度 最远距离   时间）
function Spawnitem1(item,degree,distance,angles, maxRadius, times, handlers, event, entity) {
	
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;	
    let	degrees = 360 - degree;	
	library.applyDistance(shield_loc, distance, degrees);		
    let angle = angles * Math.PI/180
    for (let radius=50 ; radius<=maxRadius; radius+=50) {
        handlers['spawn']({
        	"id": item,
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});
    }
}

	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 延迟 时间）
function Spawnitem2(item,degree,distance, intervalDegrees, radius, delay, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
    let	degrees = 360 - degree;	
	library.applyDistance(shield_loc, distance, degrees);
    for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
        handlers['spawn']({
        	"id": item,
			"delay": delay,			
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});
    }
}

function skilld_event(skillid, handlers, event, ent, dispatch) {
	
if (skillid === 9935311 ) {
			firstskill = tempskill;
			secondskill = 0;

 MSG =  'Next: ' + firstskill + ' + ' + secondskill
handlers['text']({
"sub_type": "message",
"message_TW":  MSG
});
} else if (skillid === 9935312) { //REVERSE
			secondskill = tempskill;
			firstskill = 0;
 MSG =  'Next: ' + firstskill + ' + ' + secondskill
handlers['text']({
"sub_type": "message",
"message_TW":  MSG
});			
			
		}	

if (skillid === 9935302 ) {
			firstskill = '出';
			tempskill = '出';

handlers['text']({
"sub_type": "alert",
"delay": 3000,
"message_TW":  "外"
});
		
} else if (skillid === 9935303) { //
			firstskill = '进';
			tempskill = '进';
handlers['text']({
"sub_type": "alert",
"delay": 3000,
"message_TW":  "內"
});			
			
}else if (skillid === 9935304) { //
			firstskill = '全';
			tempskill = '全';
handlers['text']({
"sub_type": "alert",
"delay": 3000,
"message_TW":  "全"
});			
			
		}

 if ( firstskill === 0 && skillid === 935301) {
					firstskill = '出';
					tempskill = '出';
 MSG = firstskill + ' + ' + secondskill 
 handlers['text']({
"sub_type": "message",
"message_TW":  MSG
});	
					secondskill = tempskill;
					firstskill = 0;		
handlers['text']({
"sub_type": "alert",
"delay": 8000,
"message_TW":  "外"
});		
}else if ( firstskill === 0 && skillid === 935302) {
					firstskill = '进';
					tempskill = '进';
 MSG = firstskill + ' + ' + secondskill 
 handlers['text']({
"sub_type": "message",
"message_TW":  MSG
});	
					secondskill = tempskill;
					firstskill = 0;
handlers['text']({
"sub_type": "alert",
"delay": 8000,
"message_TW":  "內"
});						

}else if ( firstskill === 0 && skillid === 935303) {
					firstskill = '全';
					tempskill = '全';
 MSG = firstskill + ' + ' + secondskill 
 handlers['text']({
"sub_type": "message",
"message_TW":  MSG
});	
					secondskill = tempskill;
					firstskill = 0;
handlers['text']({
"sub_type": "alert",
"delay": 8000,
"message_TW":  "全"
});	
}

 if ( secondskill === 0 && skillid === 935301) {
					secondskill = '出';
					tempskill = '出';
 MSG = firstskill + ' + ' + secondskill 
 handlers['text']({
"sub_type": "message",
"message_TW":  MSG
});	
					firstskill = tempskill;
					secondskill = 0;
handlers['text']({
"sub_type": "alert",
"delay": 8000,
"message_TW":  "外"
});	
}else if ( secondskill === 0 && skillid === 935302) {
					secondskill = '进';
					tempskill = '进';
 MSG = firstskill + ' + ' + secondskill 
 handlers['text']({
"sub_type": "message",
"message_TW":  MSG
});	
					firstskill = tempskill;
					secondskill = 0;
handlers['text']({
"sub_type": "alert",
"delay": 8000,
"message_TW":  "內"
});	
}else if ( secondskill === 0 && skillid === 935303) {
					secondskill = '全';
					tempskill = '全';
 MSG = firstskill + ' + ' + secondskill 
 handlers['text']({
"sub_type": "message",
"message_TW":  MSG
});	
					firstskill = tempskill;
					secondskill = 0;
handlers['text']({
"sub_type": "alert",
"delay": 8000,
"message_TW":  "全"
});						
}
}
function start_boss() {
print = true;
}
function print_seventy(handlers) {
if(print) {
handlers['text']({
"sub_type": "message",
"message": "70%",
"message_TW": "70%"
});
}
print = false;
}
module.exports = {
	
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},
// 	召喚点 ，提示（ 提示标志 角度 距离   延迟时间 时间）


    "h-935-1000-100": [{"type": "func","func": guid_voice}],


    "s-935-1000-108-0": [{"type": "text","sub_type": "message","message": "出去！" }],
    "s-935-1000-111-0": [{"type": "text","sub_type": "message","message": "BOSS 攻击身后打手请注意！" }],	
    "s-935-1000-112-0": [{"type": "text","sub_type": "message","message": "BOSS 攻击身后打手请注意！" }],
    "s-935-1000-205-0": [{"type": "text","sub_type": "message","message": "即将开启通风系统，请离开中间！" }],	
    "s-935-1000-304-0": [{"type": "text","sub_type": "message","message": "出去！" }],
    "s-935-1000-305-0": [{"type": "text","sub_type": "message","message": "进！" }],	
    "s-935-1000-306-0": [{"type": "text","sub_type": "message","message": "召唤地雷！快打！" }], 	
    "s-935-1000-307-0": [{"type": "text","sub_type": "message","message": "BOSS 拉人，注意无敌躲避！" }],	
	
    "s-935-1000-309-0": [ 
      {"type": "text","sub_type": "message","message": "Dodge Stun", "message_TW": "开始发射4次导弹！！" },
      {"type": "text","sub_type": "message","delay": 7000,"message": "JUMP", "message_TW": "5"},
      {"type": "text","sub_type": "message","delay": 8000,"message": "JUMP", "message_TW": "4"},
      {"type": "text","sub_type": "message","delay": 9000,"message": "JUMP", "message_TW": "3"},
      {"type": "text","sub_type": "message","delay": 10000,"message": "JUMP", "message_TW": "2"},
      {"type": "text","sub_type": "message","delay": 11000,"message": "JUMP", "message_TW": "1"},
      {"type": "text","sub_type": "message","delay": 12000,"message": "JUMP", "message_TW": "快跳！"}
],
    "s-935-1000-311-0": [{"type": "text","sub_type": "message","message": "安全区域 右前方 →↗" },
     {"type": "func","func": SpawnThing.bind(null,67,120,100,12000)}],//
    "s-935-1000-312-0": [{"type": "text","sub_type": "message","message": "安全区域 右后方 →↘" },
     {"type": "func","func": SpawnThing.bind(null,112,120,100,12000)}],	//
    "s-935-1000-313-0": [{"type": "text","sub_type": "message","message": "安全区域 后左方 ↓↙" },
     {"type": "func","func": SpawnThing.bind(null,202,120,100,12000)}],//
    "s-935-1000-314-0": [{"type": "text","sub_type": "message","message": "安全区域 前左方 ↑↖" },
     {"type": "func","func": SpawnThing.bind(null,337,120,100,12000)}],//
    "s-935-1000-315-0": [{"type": "text","sub_type": "message","message": "安全区域 前右方 ↑↗" },
     {"type": "func","func": SpawnThing.bind(null,22,120,100,12000)}],	//
    "s-935-1000-316-0": [{"type": "text","sub_type": "message","message": "安全区域 后右方 ↓↘" },
     {"type": "func","func": SpawnThing.bind(null,157,120,100,12000)}],//
    "s-935-1000-317-0": [{"type": "text","sub_type": "message","message": "安全区域 左后方 ←↙" },
     {"type": "func","func": SpawnThing.bind(null,247,120,100,12000)}],//
    "s-935-1000-318-0": [{"type": "text","sub_type": "message","message": "安全区域 左前方 ←↖" },
     {"type": "func","func": SpawnThing.bind(null,292,120,100,12000)}],//
    "s-935-1000-319-0": [{"type": "text","sub_type": "message","message": "安全区域 前右方 ↑↗" },
     {"type": "func","func": SpawnThing.bind(null,22,120,100,12000)}],	//
    "s-935-1000-320-0": [{"type": "text","sub_type": "message","message": "安全区域 后右方 ↓↘" },
     {"type": "func","func": SpawnThing.bind(null,157,120,100,12000)}],//
    "s-935-1000-321-0": [{"type": "text","sub_type": "message","message": "安全区域 后左方 ↓↙" },
     {"type": "func","func": SpawnThing.bind(null,202,120,100,12000)}],//
    "s-935-1000-322-0": [{"type": "text","sub_type": "message","message": "安全区域 左前方 ←↖" },
     {"type": "func","func": SpawnThing.bind(null,292,120,100,12000)}],	//
    "s-935-1000-323-0": [{"type": "text","sub_type": "message","message": "安全区域 右前方 →↗" },
     {"type": "func","func": SpawnThing.bind(null,67,120,100,12000)}], //
    "s-935-1000-324-0": [{"type": "text","sub_type": "message","message": "安全区域 右后方 →↘" },
     {"type": "func","func": SpawnThing.bind(null,112,120,100,12000)}],//
    "s-935-1000-325-0": [{"type": "text","sub_type": "message","message": "安全区域 左后方 ←↙" },
     {"type": "func","func": SpawnThing.bind(null,247,120,100,12000)}],//
    "s-935-1000-326-0": [{"type": "text","sub_type": "message","message": "安全区域 前左方 ↑↖" },
     {"type": "func","func": SpawnThing.bind(null,337,120,100,12000)}],//

//------------------------------------2王

"s-935-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "前砸注意躲避"}],
"s-935-2000-105-0": [{"type": "text","sub_type": "message","message": "注意击飞"},
{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,250,100,4000)}
],
"s-935-2000-108-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "后踢打手補师注意"}],
"s-935-2000-301-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "boss扔溜溜球，注意躲避"}],

"s-935-2000-304-0": [{"type": "text","sub_type": "message","message": "boss近程攻击，快跑远"}],
"s-935-2000-305-0": [{"type": "text","sub_type": "message","message": "boss远程攻击，快靠近"},
{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,125,100,4000)}
],
"s-935-2000-308-0": [{"type": "text","sub_type": "message","message": "左←"}],
"s-935-2000-309-0": [{"type": "text","sub_type": "message","message": "右→"}],

//------------------------------------3王
    "h-935-3000-99": [{"type": "func","func": start_boss}],
    "h-935-3000-70": [{"type": "func","func": print_seventy}],
   "dm-0-0-9935311": [{"type": "func","func": skilld_event.bind(null, 9935311)}],	
   "dm-0-0-9935312": [{"type": "func","func": skilld_event.bind(null, 9935312)}],	
   "dm-0-0-9935302": [{"type": "func","func": skilld_event.bind(null, 9935302)}],	   
   "dm-0-0-9935303": [{"type": "func","func": skilld_event.bind(null, 9935303)}],
   "dm-0-0-9935304": [{"type": "func","func": skilld_event.bind(null, 9935304)}],	
   "qb-935-3000-935301": [{"type": "func","func": skilld_event.bind(null, 935301)}],	
   "qb-935-3000-935302": [{"type": "func","func": skilld_event.bind(null, 935302)}],
   "qb-935-3000-935303": [{"type": "func","func": skilld_event.bind(null, 935303)}],	
//s拳
"s-935-3000-116-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避右边 →↘"}, 
	{"type": "func","func": Spawnitem.bind(null,6,170,200,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,6,350,200,0,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,120,250,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,130,240,0,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,140,230,0,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,150,220,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,160,210,0,3000)},	
	{"type": "func","func": Spawnitem1.bind(null,912,170,210,180,290,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,300,250,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,310,240,0,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,320,230,0,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,330,220,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,340,210,0,3000)},		
	{"type": "func","func": Spawnitem1.bind(null,912,350,210,0,290,3000)}],
"s-935-3000-117-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避 左边 ←↙"}, 
	{"type": "func","func": Spawnitem.bind(null,6,10,200,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,6,190,200,0,3000)},	
	{"type": "func","func": Spawnitem1.bind(null,912,10,210,0,290,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,20,210,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,30,220,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,40,230,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,50,240,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,60,250,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,240,250,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,230,240,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,220,230,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,210,220,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,200,210,0,3000)},	
	{"type": "func","func": Spawnitem1.bind(null,912,190,210,180,290,3000)}],
"s-935-3000-118-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避 左边 ←↙"}, 
	{"type": "func","func": Spawnitem.bind(null,6,10,200,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,6,190,200,0,3000)},	
	{"type": "func","func": Spawnitem1.bind(null,912,10,210,0,290,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,20,210,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,30,220,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,40,230,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,50,240,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,60,250,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,240,250,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,230,240,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,220,230,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,210,220,0,3000)},		
	{"type": "func","func": Spawnitem.bind(null,912,200,210,0,3000)},	
	{"type": "func","func": Spawnitem1.bind(null,912,190,210,180,290,3000)}],	
"s-935-3000-119-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "S拳秒杀躲避右边 →↘"}, 
	{"type": "func","func": Spawnitem.bind(null,6,170,200,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,6,350,200,0,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,120,250,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,130,240,0,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,140,230,0,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,150,220,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,160,210,0,3000)},	
	{"type": "func","func": Spawnitem1.bind(null,912,170,210,180,290,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,300,250,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,310,240,0,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,320,230,0,3000)},	
	{"type": "func","func": Spawnitem.bind(null,912,330,220,0,3000)},
	{"type": "func","func": Spawnitem.bind(null,912,340,210,0,3000)},		
	{"type": "func","func": Spawnitem1.bind(null,912,350,210,0,290,3000)}],
	
"s-935-3000-129-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "坦无敌闪"}],	


"s-935-3000-305-0": [{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,300,100,7000)}],
  "s-935-3000-321-0": [
		  {"type": "text","sub_type": "message","message": "get out", "message_TW": "BOSS护盾 快打，不然灭团!" },
          {"type": "text","sub_type": "message","delay": 105000,"message": "JUMP", "message_TW": "10S后准备破盾！"}	  
		 ],

"s-935-3000-324-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "出去"}]

};