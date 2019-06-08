// 火神
//made by michengs
let notice_guide = true;
let player, entity, library, effect;
let	shining = false;
let	skill = 0;
let	print = false;
let notice = true; 
let notices = true;
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
function skillds_event(skillids, handlers, event, ent, dispatch) {
if (skillids === 104 ) {
	    skill = 104
	//	setTimeout(() => skill = 0, 500);
		
}else if ( skillids === 134) {
	    skill = 134
	//	setTimeout(() => skill = 0, 500);
}else if ( skillids === 118) {
	    skill = 118
	//	setTimeout(() => skill = 0, 500);
}
}

function skilld_event(skillid, handlers, event, ent, dispatch) {
		
		if (skillid == 90442000) shining = true;
		if (skillid == 90442001) shining = false;
if (skillid == 90442304) {
handlers['text']({"sub_type": "message","message_TW": "暈王"});	
handlers['text']({
"sub_type": "notification",
"message_TW": "暈王"
});			
}


if (skillid == 90444001 && skill == 104)

	setTimeout(() => {
	if (shining){
		handlers['text']({"sub_type": "msgcp","message_TW": "后砸"}); 
	    skill = 0; 
	    notices = false;
		setTimeout(() => notices = true, 1000);		
	}
	
	}, 500);
	

if (skillid == 90442000 && skill == 134) setTimeout(() => {
	if (shining){

		handlers['text']({"sub_type": "msgcp","message_TW": "后砸"});
	    skill = 0; 
	    notices = false;
		setTimeout(() => notices = true, 1000);			
}
	}, 300);
if (skillid == 90444001 && skill == 118) setTimeout(() => { 

if (shining){ 
	
handlers['text']({"sub_type": "msgcp","message_TW": "后砸"});
	    skill = 0; 
	    notices = false;
		setTimeout(() => notices = true, 1000);		
}
 }, 300);

	if (notice && skillid == 305 ) {
		notice = false;
handlers['text']({"sub_type": "message","message_TW": "注意镭射"});	
handlers['text']({
"sub_type": "notification",
"message_TW": "注意镭射!"
});			
		setTimeout(() => notice = true, 4000);
					}


if ( notices && skillid == 137 ) {
handlers['text']({"sub_type": "message","message_TW": "后砸"});		
}
					
}
function start_boss() {
print = true;
}
function print_th(handlers) {
if(print) {
handlers['text']({
"sub_type": "message",
"message": "红眼射线 (激活)",
"message_TW": "红眼射线 (激活)"
});
}
print = false;
}
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},
 "h-444-1000-100-0": [{"type": "func","func": guid_voice}],
 "h-444-2000-100-0": [{"type": "func","func": guid_voice}],
 
 
  "s-444-2000-1104-0": [ {"type": "func","func": skillds_event.bind(null, 104)}],
  "s-444-2000-2104-0": [ {"type": "func","func": skillds_event.bind(null, 104)}], 
  
  "s-444-2000-1134-0": [ {"type": "func","func": skillds_event.bind(null, 134)}],  
   "s-444-2000-2134-0": [ {"type": "func","func": skillds_event.bind(null, 134)}], 
   
 "s-444-1000-2103-0": [{"type": "text","sub_type": "message","message": "前砸 闪避" },		
     {"type": "func","func": Spawnitem2.bind(null,445,356,400,8,350,100,3000)}], 
 
 "s-444-1000-2108-0": [{"type": "text","sub_type": "message","message": "丢锤 (晕眩)" }], 
 "s-444-1000-2111-0": [{"type": "text","sub_type": "message","message": "后砸 (慢慢慢慢)" },

     {"type": "func","func": Spawnitem2.bind(null,445,180,500,8,480,100,2000)}				
 ],  
 "s-444-1000-2113-0": [{"type": "text","sub_type": "message","message": "点名 (闪避)" }], 
 
 "s-444-1000-2114-0": [{"type": "text","sub_type": "message","message": "捶地 (秒杀)" },
      {"type": "func","func": Spawnitem2.bind(null,445,356,260,10,320,100,4000)}				
				
 ],  
 "s-444-1000-2115-0": [{"type": "text","sub_type": "message","message": "右 蓄力(击飞)" }],  
 "s-444-1000-2116-0": [{"type": "text","sub_type": "message","message": "甜甜圈" },
	      {"type": "func","func": Spawnitem2.bind(null,445,0,0,8,290,100,6000)}			
 ],   
 "s-444-1000-2117-0": [{"type": "text","sub_type": "message","message": "随仇->跳劈 (击倒)" }],  
 "s-444-1000-2118-0": [{"type": "text","sub_type": "message","message": "主仇->跳劈 (击倒)" },
 {"type": "func","func": skillds_event.bind(null, 118)}
 ],  

 "s-444-1000-2121-0": [{"type": "text","sub_type": "message","message": "左  (4连半月)" },

  {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}				
			
 ],    
 "s-444-1000-2131-0": [{"type": "text","sub_type": "message","message": "左 范围(挡) | 后拉" },
     {"type": "func","func": Spawnitem2.bind(null,445,358,340,8,660,100,4000)}				
				
 ], 
  "s-444-1000-2132-0": [  
  {"type": "func","func": Spawnitem1.bind(null,912,270,200,0,500,2000)},
  {"type": "func","func": Spawnitem1.bind(null,912,270,200,180,500,2000)}],

 "s-444-1000-2137-0": [
{"type": "text","sub_type": "message","message": "后砸 " },
     {"type": "func","func": Spawnitem2.bind(null,445,180,500,8,480,100,2000)}], 
 
 "s-444-1000-2138-0": [{"type": "text","sub_type": "message","message": "左 蓄力(击飞)" }],  
 "s-444-1000-2139-0": [{"type": "text","sub_type": "message","message": "转圈 (击倒)" }],  
 "s-444-1000-2140-0": [{"type": "text","sub_type": "message","message": "右  (4连半月)" },
   {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}
 ],  
//-----------------------------------------------------------------------------------------------------
 "s-444-1000-1103-0": [{"type": "text","sub_type": "message","message": "前砸 闪避" },		
     {"type": "func","func": Spawnitem2.bind(null,445,356,400,8,350,100,3000)}], 
 
 "s-444-1000-1108-0": [{"type": "text","sub_type": "message","message": "丢锤 (晕眩)" }], 
 "s-444-1000-1111-0": [{"type": "text","sub_type": "message","message": "后砸 (慢慢慢慢)" },

     {"type": "func","func": Spawnitem2.bind(null,445,180,500,8,480,100,2000)}				
 ],  
 "s-444-1000-1113-0": [{"type": "text","sub_type": "message","message": "点名 (闪避)" }], 
 
 "s-444-1000-1114-0": [{"type": "text","sub_type": "message","message": "捶地 (秒杀)" },
      {"type": "func","func": Spawnitem2.bind(null,445,356,260,10,320,100,4000)}				
				
 ],  
 "s-444-1000-1115-0": [{"type": "text","sub_type": "message","message": "右 蓄力(击飞)" }],  
 "s-444-1000-1116-0": [{"type": "text","sub_type": "message","message": "甜甜圈" },
	      {"type": "func","func": Spawnitem2.bind(null,445,0,0,8,290,100,6000)}			
 ],   
 "s-444-1000-1117-0": [{"type": "text","sub_type": "message","message": "随仇->跳劈 (击倒)" }],  
 "s-444-1000-1118-0": [{"type": "text","sub_type": "message","message": "主仇->跳劈 (击倒)" },
 {"type": "func","func": skillds_event.bind(null, 118)}
 ],  

 "s-444-1000-1121-0": [{"type": "text","sub_type": "message","message": "左  (4连半月)" },

  {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}				
			
 ],    
 "s-444-1000-1131-0": [{"type": "text","sub_type": "message","message": "左 范围(挡) | 后拉" },
     {"type": "func","func": Spawnitem2.bind(null,445,358,340,8,660,100,4000)}				
				
 ], 
  "s-444-1000-1132-0": [  
  {"type": "func","func": Spawnitem1.bind(null,912,270,200,0,500,2000)},
  {"type": "func","func": Spawnitem1.bind(null,912,270,200,180,500,2000)}],

 "s-444-1000-1137-0": [
{"type": "text","sub_type": "message","message": "后砸 " },
     {"type": "func","func": Spawnitem2.bind(null,445,180,500,8,480,100,2000)}], 
 
 "s-444-1000-1138-0": [{"type": "text","sub_type": "message","message": "左 蓄力(击飞)" }],  
 "s-444-1000-1139-0": [{"type": "text","sub_type": "message","message": "转圈 (击倒)" }],  
 "s-444-1000-1140-0": [{"type": "text","sub_type": "message","message": "右  (4连半月)" },
   {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}
 ],  
 //-------------------------------------------------------------------------------------------------
  "h-444-2000-99": [{"type": "func","func": start_boss},
       {
            "type": "spawn",
            "id": 6,
            "sub_delay": 99999999,
            "pos": {
                x: -114567,
                y: 115063,
                z: 4022
            }
        }],

  "s-444-2000-1101-0": [{"type": "text","sub_type": "message","message": "锤地 270 重击" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,0,190,500,4000)},
  {"type": "func","func": Spawnitem1.bind(null,912,0,0,270,500,3000)}],

 "s-444-2000-1103-0": [{"type": "text","sub_type": "message","message": "前砸 闪避" },
				
     {"type": "func","func": Spawnitem2.bind(null,445,356,400,8,350,100,3000)}], 
 
 "s-444-2000-1107-0": [{"type": "text","sub_type": "message","message": "重击 闪避" }], 
 "s-444-2000-1108-0": [{"type": "text","sub_type": "message","message": "丢锤 (晕眩)" }], 
 "s-444-2000-1111-0": [{"type": "text","sub_type": "message","message": "后砸 (慢慢慢慢)" },
     {"type": "func","func": Spawnitem2.bind(null,445,180,500,8,480,100,2000)}				
 ],  
 
 "s-444-2000-1112-0": [{"type": "text","sub_type": "message","message": "完美格挡" },
       {"type": "text","sub_type": "message","delay": 1040,"message": "1" },
    //  {"type": "text","sub_type": "message","delay": 2040,"message": "1" },	
     {"type": "func","func": Spawnitem2.bind(null,445,356,220,12,210,100,4000)}				
				
 ], 
 
 "s-444-2000-1113-0": [{"type": "text","sub_type": "message","message": "点名 (闪避)" }], 
 
 "s-444-2000-1114-0": [{"type": "text","sub_type": "message","message": "捶地 (秒杀)" },
      {"type": "func","func": Spawnitem2.bind(null,445,356,260,10,320,100,4000)}				
				
 ],  
 "s-444-2000-1115-0": [{"type": "text","sub_type": "message","message": "右 蓄力(击飞)" }],  
 "s-444-2000-1116-0": [{"type": "text","sub_type": "message","message": "甜甜圈" },
	      {"type": "func","func": Spawnitem2.bind(null,445,0,0,8,290,100,6000)}			
 ],   
 "s-444-2000-1117-0": [{"type": "text","sub_type": "message","message": "随仇->跳劈 (击倒)" }],  
 "s-444-2000-1118-0": [{"type": "text","sub_type": "message","message": "主仇->跳劈 (击倒)" },
  {"type": "func","func": skillds_event.bind(null, 118)}
 ],  
 "s-444-2000-1119-0": [{"type": "text","sub_type": "message","message": "右 安全→ (坦左移)" },
	   {"type": "func","func": SpawnThing.bind(null,270,300,100,2000)}			
 ],  
 "s-444-2000-120-0": [{"type": "text","sub_type": "message","message": "左 安全← (坦右移)" },
 	   {"type": "func","func": SpawnThing.bind(null,90,300,100,2000)}	
 ], 

 "s-444-2000-1121-0": [{"type": "text","sub_type": "message","message": "左  (4连半月)" },

  {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}				
			
 ],  
 "s-444-2000-1122-0": [{"type": "text","sub_type": "message","message": "左  第3下加速'" },
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"} 
 ],  
 "s-444-2000-1123-0": [{"type": "text","sub_type": "message","message": "左  第2下加速" },
   {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}
 ],  
 "s-444-2000-1125-0": [{"type": "text","sub_type": "message","message": "右 前砸(闪) | 后拉" }, 
      {"type": "func","func": Spawnitem2.bind(null,445,356,400,8,350,100,3000)}
 ],  
 "s-444-2000-1126-0": [  
  {"type": "func","func": Spawnitem1.bind(null,912,90,200,0,500,2000)},
  {"type": "func","func": Spawnitem1.bind(null,912,90,200,180,500,2000)}],  
 
 "s-444-2000-1131-0": [{"type": "text","sub_type": "message","message": "左 范围(挡) | 后拉" },
     {"type": "func","func": Spawnitem2.bind(null,445,358,340,8,660,100,4000)}				
				
 ], 
  "s-444-2000-1132-0": [  
  {"type": "func","func": Spawnitem1.bind(null,912,270,200,0,500,2000)},
  {"type": "func","func": Spawnitem1.bind(null,912,270,200,180,500,2000)}], 
 "s-444-2000-1135-0": [{"type": "text","sub_type": "message","message": "完美格挡" },
       {"type": "text","sub_type": "message","delay": 535,"message": "1" },
    //  {"type": "text","sub_type": "message","delay": 1535,"message": "1" },		  
      {"type": "func","func": Spawnitem2.bind(null,445,356,220,12,210,100,4000)}	
 ],  
 "s-444-2000-1137-0": [
{"type": "func","func": skilld_event.bind(null, 137)},
     {"type": "func","func": Spawnitem2.bind(null,445,180,500,8,480,100,2000)}], 
 
 "s-444-2000-1138-0": [{"type": "text","sub_type": "message","message": "左 蓄力(击飞)" }],  
 "s-444-2000-1139-0": [{"type": "text","sub_type": "message","message": "转圈 (击倒)" }],  
 "s-444-2000-1140-0": [{"type": "text","sub_type": "message","message": "右  (4连半月)" },
   {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}
 ],  
 "s-444-2000-1141-0": [{"type": "text","sub_type": "message","message": "右  第3下加速" },
   {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}
 ],  
 "s-444-2000-1142-0": [{"type": "text","sub_type": "message","message": "右  第2下加速" },
   {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}
 ],  
 "s-444-2000-1308-0": [{"type": "text","sub_type": "message","message": "第1次晕" }],  
 "s-444-2000-1309-0": [{"type": "text","sub_type": "message","message": "第2次晕" }],  
 "s-444-2000-1310-0": [{"type": "text","sub_type": "message","message": "第3次晕" }], 

 "s-444-2000-1311-0": [{"type": "text","sub_type": "message","message": "补师开盾 (右手放锤)" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,0,0,500,6000)},
  {"type": "func","func": Spawnitem1.bind(null,912,0,0,180,500,6000)}				
				
 ],  
 "s-444-2000-1312-0": [{"type": "text","sub_type": "message","message": "补师开盾 (左右放锤)" },
   {"type": "func","func": Spawnitem1.bind(null,912,0,0,0,500,6000)},
  {"type": "func","func": Spawnitem1.bind(null,912,0,0,180,500,6000)}], 
//---------------------------------------------------------------------------------------------------
  "s-444-2000-2101-0": [{"type": "text","sub_type": "message","message": "锤地 270 重击" },
  {"type": "func","func": Spawnitem1.bind(null,912,0,0,190,500,4000)},
  {"type": "func","func": Spawnitem1.bind(null,912,0,0,270,500,3000)}],

 "s-444-2000-2103-0": [{"type": "text","sub_type": "message","message": "前砸 闪避" },
				
     {"type": "func","func": Spawnitem2.bind(null,445,356,400,8,350,100,3000)}], 
 
 "s-444-2000-2107-0": [{"type": "text","sub_type": "message","message": "重击 闪避" }], 
 "s-444-2000-2108-0": [{"type": "text","sub_type": "message","message": "丢锤 (晕眩)" }], 
 "s-444-2000-2111-0": [{"type": "text","sub_type": "message","message": "后砸 (慢慢慢慢)" },
     {"type": "func","func": Spawnitem2.bind(null,445,180,500,8,480,100,2000)}				
 ],  
 
 "s-444-2000-2112-0": [{"type": "text","sub_type": "message","message": "完美格挡" },
       {"type": "text","sub_type": "message","delay": 1800,"message": "1" },
       {"type": "text","sub_type": "message","delay": 2700,"message": "2" },	   
   //   {"type": "text","sub_type": "message","delay": 2800,"message": "1" },	
   //   {"type": "text","sub_type": "message","delay": 3690,"message": "2" },	
     {"type": "func","func": Spawnitem2.bind(null,445,356,220,12,210,100,4000)}				
				
 ], 
 
 "s-444-2000-2113-0": [{"type": "text","sub_type": "message","message": "点名 (闪避)" }], 
 
 "s-444-2000-2114-0": [{"type": "text","sub_type": "message","message": "捶地 (秒杀)" },
      {"type": "func","func": Spawnitem2.bind(null,445,356,260,10,320,100,4000)}				
				
 ],  
 "s-444-2000-2115-0": [{"type": "text","sub_type": "message","message": "右 蓄力(击飞)" }],  
 "s-444-2000-2116-0": [{"type": "text","sub_type": "message","message": "甜甜圈" },
	      {"type": "func","func": Spawnitem2.bind(null,445,0,0,8,290,100,6000)}			
 ],   
 "s-444-2000-2117-0": [{"type": "text","sub_type": "message","message": "随仇->跳劈 (击倒)" }],  
 "s-444-2000-2118-0": [{"type": "text","sub_type": "message","message": "主仇->跳劈 (击倒)" },
  {"type": "func","func": skillds_event.bind(null, 118)}
 ],  
 "s-444-2000-2119-0": [{"type": "text","sub_type": "message","message": "右 安全→ (坦左移)" },
	   {"type": "func","func": SpawnThing.bind(null,270,300,100,2000)}			
 ],  
 "s-444-2000-2120-0": [{"type": "text","sub_type": "message","message": "左 安全← (坦右移)" },
 	   {"type": "func","func": SpawnThing.bind(null,90,300,100,2000)}	
 ], 

 "s-444-2000-2121-0": [{"type": "text","sub_type": "message","message": "左  (4连半月)" },

  {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}				
			
 ],  
 "s-444-2000-2122-0": [{"type": "text","sub_type": "message","message": "左  第3下加速'" },
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"} 
 ],  
 "s-444-2000-2123-0": [{"type": "text","sub_type": "message","message": "左  第2下加速" },
   {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}
 ],  
 "s-444-2000-2125-0": [{"type": "text","sub_type": "message","message": "右 前砸(闪) | 后拉" }, 
      {"type": "func","func": Spawnitem2.bind(null,445,356,400,8,350,100,3000)}
 ],  
 "s-444-2000-2126-0": [  
  {"type": "func","func": Spawnitem1.bind(null,912,90,200,0,500,2000)},
  {"type": "func","func": Spawnitem1.bind(null,912,90,200,180,500,2000)}],  
 
 "s-444-2000-2131-0": [{"type": "text","sub_type": "message","message": "左 范围(挡) | 后拉" },
     {"type": "func","func": Spawnitem2.bind(null,445,358,340,8,660,100,4000)}				
				
 ], 
  "s-444-2000-2132-0": [  
  {"type": "func","func": Spawnitem1.bind(null,912,270,200,0,500,2000)},
  {"type": "func","func": Spawnitem1.bind(null,912,270,200,180,500,2000)}], 
 "s-444-2000-2135-0": [{"type": "text","sub_type": "message","message": "完美格挡" },
      {"type": "text","sub_type": "message","delay": 535,"message": "1" },
      {"type": "text","sub_type": "message","delay": 1535,"message": "2" },	  
     // {"type": "text","sub_type": "message","delay": 1535,"message": "1" },	
     // {"type": "text","sub_type": "message","delay": 2535,"message": "2" },		  
      {"type": "func","func": Spawnitem2.bind(null,445,356,220,12,210,100,4000)}	
 ],  
 "s-444-2000-2137-0": [
{"type": "func","func": skilld_event.bind(null, 137)},
     {"type": "func","func": Spawnitem2.bind(null,445,180,500,8,480,100,2000)}], 
 
 "s-444-2000-2138-0": [{"type": "text","sub_type": "message","message": "左 蓄力(击飞)" }],  
 "s-444-2000-2139-0": [{"type": "text","sub_type": "message","message": "转圈 (击倒)" }],  
 "s-444-2000-2140-0": [{"type": "text","sub_type": "message","message": "右  (4连半月)" },
   {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}
 ],  
 "s-444-2000-2141-0": [{"type": "text","sub_type": "message","message": "右  第3下加速" },
   {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}
 ],  
 "s-444-2000-2142-0": [{"type": "text","sub_type": "message","message": "右  第2下加速" },
   {"type": "func","func": Spawnitem1.bind(null,912,90,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,90,50,180,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,0,500,6000)},				
  {"type": "func","func": Spawnitem1.bind(null,912,270,50,180,500,6000)},				
  {"type": "text","sub_type": "message","delay": 60000,"message": "四连半月 (就绪)"}
 ],  

   "ab-444-2000-90442000": [{"type": "func","func": skilld_event.bind(null, 90442000)}],	
   "ab-444-2000-90442001": [{"type": "func","func": skilld_event.bind(null, 90442001)}],
   "ab-444-2000-90442304": [{"type": "func","func": skilld_event.bind(null, 90442304)}],
   "ab-444-2000-90444001": [{"type": "func","func": skilld_event.bind(null, 90444001)}],
  
  "s-444-2500-1201-0": [{"type": "func","func": print_th}],
  "s-444-2500-1305-0": [{"type": "func","func": skilld_event.bind(null, 305)},
   {"type": "func","func": Spawnitem1.bind(null,553,0,0,0,3000,4000)}]  

};