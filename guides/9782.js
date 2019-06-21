// 
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
	function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
    }
// 	召喚光柱 ，告示牌提示（  角度 距离   时间）
function SpawnThing( degrees, radius, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;			
   let angle =  Math.PI * degrees / 180 
        handlers['spawn']({
			"sub_type": "build_object",
        	"id": 1,
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle,
			"ownerName": "SAFE SPOT",
			"message": "SAFE"
        }, {loc: shield_loc});  
        handlers['spawn']({
			"sub_type": "item",
        	"id": 88850,
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});	
}
	//构建直线（提示标志  角度 最远距离   时间）
function Spawnitem1(item,degrees, maxRadius, times, handlers, event, entity) {
 let angle = degrees * Math.PI/180
    for (let radius=50 ; radius<=maxRadius; radius+=50) {
        handlers['spawn']({
        	"id": item,
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, entity);
    }
}
	

	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 时间）
function Spawnitem2(item,degree,distance, intervalDegrees, radius, delay,times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
    let	degrees = 360 - degree;
	applyDistance(shield_loc, distance, degrees);
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


module.exports = {

	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

 "h-782-1000-100": [{"type": "func","func": guid_voice}],
 

 
 

	
 //一王
 
 
  "s-782-1000-106-0": [{"type": "text","sub_type": "message","message": "重击" }],
  "s-782-1000-107-0": [{"type": "text","sub_type": "message","message": "后喷击退" }],
  "s-782-1000-108-0": [{"type": "text","sub_type": "message","message": "点名击飞" }], 
  "s-782-1000-109-0": [{"type": "text","sub_type": "message","message": "滚石" }],
  "s-782-1000-110-0": [{"type": "text","sub_type": "message","message": "滚石" }],
  "s-782-1000-301-0": [{"type": "text","sub_type": "message","message": "食人花眩晕" }], 
  "s-782-1000-307-0": [{"type": "text","sub_type": "message","message": "笼子禁锢" }],
  "s-782-1000-309-0": [{"type": "text","sub_type": "message","message": "1朵花-鉴定!!" }],
  "s-782-1000-310-0": [{"type": "text","sub_type": "message","message": "2朵花-鉴定!!" }], 
  "s-782-1000-116-0": [{"type": "text","sub_type": "message","message": "全屏攻击!!" }],
  "s-782-1000-312-0": [{"type": "text","sub_type": "message","message": "金色花!!" }],

 
  //二王
  
  "s-782-2000-105-0": [{"type": "text","sub_type": "message","message": "翻滚" }], 
  "s-782-2000-113-0": [{"type": "text","sub_type": "message","message": "双手眩晕" }],
  "s-782-2000-114-0": [{"type": "text","sub_type": "message","message": "三连地板靠近" },
 	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,260,0,3000)}],
  "s-782-2000-116-0": [{"type": "text","sub_type": "message","message": "前砸 后砸" }], 
  "s-782-2000-301-0": [{"type": "text","sub_type": "message","message": "捶地远离 旋转击退" },
 	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,260,0,3000)}],
  "s-782-2000-302-0": [{"type": "text","sub_type": "message","message": "旋转靠近 捶地击飞" },
 	{"type": "func","func": Spawnitem2.bind(null,912,0,0,15,260,0,3000)}], 
//三王


  "s-782-3000-118-0": [{"type": "text","sub_type": "message","message": "三连击左-右-喷" }],
  "s-782-3000-143-0": [{"type": "text","sub_type": "message","message": "左后" }],
  "s-782-3000-145-0": [{"type": "text","sub_type": "message","message": "左后" }], 
  "s-782-3000-146-0": [{"type": "text","sub_type": "message","message": "左后扩散" },
     {"type": "func","func": SpawnThing.bind(null,215,388,8000)},	  
     {"type": "func","func": SpawnThing.bind(null,215,370,8000)},	 
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,15,160,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,12,320,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,10,480,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,8,640,2500,8000)},	
     {"type": "func","func": Spawnitem2.bind(null,445,215,370,6,800,2500,8000)}],
  "s-782-3000-154-0": [{"type": "text","sub_type": "message","message": "左后扩散" },
     {"type": "func","func": SpawnThing.bind(null,205,370,8000)},	 
     {"type": "func","func": Spawnitem2.bind(null,445,205,370,15,160,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,205,370,12,320,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,205,370,10,480,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,205,370,8,640,2500,8000)},	
     {"type": "func","func": Spawnitem2.bind(null,445,205,370,6,800,2500,8000)}],
  "s-782-3000-144-0": [{"type": "text","sub_type": "message","message": "右后" }], 
  "s-782-3000-147-0": [{"type": "text","sub_type": "message","message": "右后" }],
  "s-782-3000-148-0": [{"type": "text","sub_type": "message","message": "右后扩散" },
     {"type": "func","func": SpawnThing.bind(null,155,388,8000)}, 
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,15,160,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,12,320,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,10,480,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,8,640,2500,8000)},	
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,6,800,2500,8000)}],
  "s-782-3000-155-0": [{"type": "text","sub_type": "message","message": "右后扩散" },
     {"type": "func","func": SpawnThing.bind(null,155,388,8000)}, 
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,15,160,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,12,320,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,10,480,2500,8000)},
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,8,640,2500,8000)},	
     {"type": "func","func": Spawnitem2.bind(null,445,155,388,6,800,2500,8000)}],
  "s-782-3000-161-0": [{"type": "text","sub_type": "message","message": "后砸 前砸" }],
  "s-782-3000-162-0": [{"type": "text","sub_type": "message","message": "后砸 前砸" }],
  "s-782-3000-213-0": [{"type": "text","sub_type": "message","message": "尾巴" }],
  "s-782-3000-215-0": [{"type": "text","sub_type": "message","message": "尾巴" }], 
  
  "s-782-3000-139-0": [{"type": "text","sub_type": "message","message": "打右边" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,500,5000)},
  {"type": "func","func": Spawnitem1.bind(null,912,180,500,5000)},
   {"type": "func","func": SpawnThing.bind(null,270,200,8000)}],
  "s-782-3000-150-0": [{"type": "text","sub_type": "message","message": "打右边" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,500,5000)},
  {"type": "func","func": Spawnitem1.bind(null,912,180,500,5000)},
   {"type": "func","func": SpawnThing.bind(null,270,200,8000)}],
  "s-782-3000-141-0": [{"type": "text","sub_type": "message","message": "打左边" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,500,5000)},
  {"type": "func","func": Spawnitem1.bind(null,912,180,500,5000)},
   {"type": "func","func": SpawnThing.bind(null,90,200,8000)}], 
  "s-782-3000-152-0": [{"type": "text","sub_type": "message","message": "打左边" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,500,5000)},
  {"type": "func","func": Spawnitem1.bind(null,912,180,500,5000)},
   {"type": "func","func": SpawnThing.bind(null,90,200,8000)}],
   
  "s-782-3000-300-0": [{"type": "text","sub_type": "message","message": "一次觉醒 推人" }],
  "s-782-3000-399-0": [{"type": "text","sub_type": "message","message": "二次觉醒 推人" }], 
  "s-782-3000-360-0": [{"type": "text","sub_type": "message","message": "爆炸爆炸" }] 


};