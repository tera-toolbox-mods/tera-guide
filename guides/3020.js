//made by michengs

let player, entity, library, effect;

function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
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

	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 延迟 时间）
function Spawnitem2(item,degree,distance, intervalDegrees, radius, delay, times, handlers, event, entity ) {
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


"s-3020-2200-108-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "晕"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,150,15,125,200,3000)}],


"s-3020-2200-120-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "进-出-进"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,0,15,275,200,3000)},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,250,3000,5000)},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,200,5000,8000)}],

"s-3020-2200-121-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "出-进-出"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,250,200,4000)},  //
                      {"type": "func","func": Spawnitem2.bind(null,553,0,0,15,275,4000,5000)},   //
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,450,5000,8000)}],//

"s-3020-2200-122-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "进-出-出"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,0,15,275,200,4000)},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,250,4000,5000)},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,450,5000,8000)}],

"s-3020-9101-122-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "强袭"}],
	   		   

 "s-3020-2201-121-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "2201-121" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
 "s-3020-2201-125-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "2201-125" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
 "s-3020-2201-126-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "2201-126" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
 "s-3020-2201-201-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "2201-201" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
  
  
 "s-3020-6103-203-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "6103-203" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
 "s-3020-6103-202-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "6103-202" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
 "s-3020-6103-201-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "6103-201" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}],  
  


"s-3020-2200-128-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "强袭"}],
"s-3020-2200-129-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名蓄力"}],
"s-3020-2200-131-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "咆哮远离"}],

"s-3020-2200-133-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名扩散圈"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,0,15,300,200,3000)}],

"s-3020-2200-135-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "准备跳"}],

"s-3020-2200-137-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "扩散圈"}],

"s-3020-2200-139-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "收缩圈"}],

"s-3020-2200-202-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "defence 3秒"}],
"s-3020-2200-203-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "defence 10秒"}],
"s-3020-2200-204-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "变身"}]		 
};