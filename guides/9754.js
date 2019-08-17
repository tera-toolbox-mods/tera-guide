
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
	//构建直线（提示标志 偏移角度 偏移距离  角度 最远距离   时间）
function Spawnitem1(item,degree,distance,angles, maxRadius, times, handlers, event, entity) {
	
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;	
    let	degrees = 360 - degree;	
	applyDistance(shield_loc, distance, degrees);		
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

function SpawnThing5( degrees, radius, delay, times, handlers, event, entity ) {
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
			"ownerName": "球形闪电",
			"message": "球形闪电"
        }, {loc: shield_loc});  
}
function SpawnThing6( degrees, radius, delay, times, handlers, event, entity ) {
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
			"ownerName": "水墙背面",
			"message": "水墙背面"
        }, {loc: shield_loc});  
}
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

"s-754-1000-1103-0": [{"type": "text","sub_type": "message","message": "Head Slam! (Slow)","message_TW": "头砸 (慢)"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,200,15,275,0,4000)}


],
"s-754-1000-2103-0": [{"type": "text","sub_type": "message","message": "Head Slam! (Fast)","message_TW": "头砸 (快)"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,200,15,275,0,4000)}],
"s-754-1000-2104-0": [{"type": "text","sub_type": "message","message": "Spin get out (Fast)","message_TW": "旋出（快）"}],
"s-754-1000-1104-0": [{"type": "text","sub_type": "message","message": "Spin get out (Slow)","message_TW": "旋出（慢）"}],
"s-754-1000-1201-0": [{"type": "text","sub_type": "message","message": "Body Slam!","message_TW": "身体撞击"}],
"s-754-1000-2105-0": [{"type": "text","sub_type": "message","message": "Get in","message_TW": "进入"}],
"s-754-1000-3104-0": [{"type": "text","sub_type": "message","message": "SHIELD!","message_TW": "破盾"}],




"s-754-1001-1104-0": [{"type": "text","sub_type": "message","message": "Frontal Spin!","message_TW": "正面旋转！"}],
"s-754-1001-2104-0": [{"type": "text","sub_type": "message","message": "Frontal Spin!","message_TW": "正面旋转！"}],
"s-754-1001-1110-0": [{"type": "text","sub_type": "message","message": "Cyclone! (Slow)","message_TW": "旋风！（慢）"}],
"s-754-1001-2110-0": [{"type": "text","sub_type": "message","message": "Cyclone! (Fast)","message_TW": "旋风！（快）"}],
"s-754-1001-2102-0": [{"type": "text","sub_type": "message","message": "Back Flip (Fast)","message_TW": "后翻（快）"}],
"s-754-1001-1102-0": [{"type": "text","sub_type": "message","message": "Back Flip (Slow)","message_TW": "后翻（慢）"}],
"s-754-1001-2105-0": [{"type": "text","sub_type": "message","message": "Tail","message_TW": "尾巴"}],
//-------------------------------------------------------------------------------------------------------------

"dm-0-0-905420": [{"type": "text","sub_type": "message","message": "Water wall","message_TW": "水墙检定"}],
"s-754-403-1101-0": [{"type": "text","sub_type": "message","message_TW": "墻"},
                    {"type": "func","func": SpawnThing6.bind(null,500, 180, 100, 9000)}],
"qb-754-1000-454012": [{"type": "text","sub_type": "message","message": "Fix the SLATE","message_TW": "修石板"}],
"qb-754-1002-454001": [{"type": "text","sub_type": "message","message_TW": "电球"}],
"qb-754-305-454005": [{"type": "text","sub_type": "message","message_TW": "水浪检定"}],
"qb-754-306-454006": [{"type": "text","sub_type": "message","message_TW": "水浪检定"}],
"qb-754-307-454007": [{"type": "text","sub_type": "message","message_TW": "水浪检定"}],

"s-754-100-1101-0": [{"type": "text","sub_type": "message","message": "electric ball","message_TW": "召喚电球"},
                     {"type": "func","func": SpawnThing5.bind(null,0, 0, 10, 3000)}],

"s-754-106-3201-0": [{"type": "text","sub_type": "message","message": "1","message_TW": "1"},
   {"type": "func","func": Spawnitem1.bind(null,513,0,0,0,3000,11000)}],
"s-754-107-3202-0": [{"type": "text","sub_type": "message","message": "2","message_TW": "2"},
   {"type": "func","func": Spawnitem1.bind(null,513,0,0,0,3000,11000)}],
"s-754-108-3203-0": [{"type": "text","sub_type": "message","message": "3","message_TW": "3"},
   {"type": "func","func": Spawnitem1.bind(null,513,0,0,0,3000,11000)}],
"s-754-109-3204-0": [{"type": "text","sub_type": "message","message": "4","message_TW": "4"},
   {"type": "func","func": Spawnitem1.bind(null,513,0,0,0,3000,11000)}],


"s-754-1002-1107-0": [{"type": "text","sub_type": "message","message": "Back Hit! (Slow)","message_TW": "后击！（慢）"}],
"s-754-1002-2107-0": [{"type": "text","sub_type": "message","message": "Back Hit! (Fast)","message_TW": "后击！（快）"}],
"s-754-1002-1112-0": [{"type": "text","sub_type": "message","message": "Jump (Slow)","message_TW": "跳跃（慢）"}],
"s-754-1002-2112-0": [{"type": "text","sub_type": "message","message": "Jump (Fast)","message_TW": "跳跃（快）"}],
"s-754-1002-3105-0": [{"type": "text","sub_type": "message","message": "Get in","message_TW": "进"}],
"s-754-1002-3117-0": [{"type": "text","sub_type": "message","message": "In Out In","message_TW": "进 出 进"},
	                  {"type": "func","func": Spawnitem2.bind(null,513,0,0,15,275,0,10000)}],
"s-754-1002-3110-0": [{"type": "text","sub_type": "message","message": "Pizza mech","message_TW": "披萨机制"}]

		 
};

