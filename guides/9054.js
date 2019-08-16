
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
function Spawnitem2(item,degrees,distance, intervalDegrees, radius, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	applyDistance(shield_loc, distance, degrees);
    for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
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
			"ownerName": "閃電球",
			"message": "閃電球"
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
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

//1王


"s-454-1000-1101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_TW": "左手"}],
"s-454-1000-1102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_TW": "右手"}],
"s-454-1000-1103-0": [{"type": "text","sub_type": "message","message": "Head Slam! (Slow)","message_TW": "3连闪避"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,200,15,275,4000)}],
"s-454-1000-1104-0": [{"type": "text","sub_type": "message","message": "Spin get out (Slow)","message_TW": "旋转6次"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,0,15,200,5000)}],
"s-454-1000-1105-0": [{"type": "text","sub_type": "message","message": "Get in","message_TW": "进"}],
"s-454-1000-1106-0": [{"type": "text","sub_type": "message","message": "Random hatred","message_TW": "点名"}],
"s-454-1000-1107-0": [{"type": "text","sub_type": "message","message_TW": "乌龟行动"}],
"s-454-1000-1108-0": [{"type": "text","sub_type": "message","message": "left side","message_TW": "左侧"}],
"s-454-1000-1109-0": [{"type": "text","sub_type": "message","message": "right side","message_TW": "右侧"}],
"s-454-1000-1201-0": [{"type": "text","sub_type": "message","message": "Body Slam!","message_TW": "身体撞击"}],
"s-454-1000-1202-0": [{"type": "text","sub_type": "message","message_TW": "乌龟防御动作"}],
"s-454-1000-1203-0": [{"type": "text","sub_type": "message","message_TW": "乌龟眩晕"}],
"s-454-1000-1204-0": [{"type": "text","sub_type": "message","message_TW": "乌龟模式提醒"}],
"s-454-1000-1205-0": [{"type": "text","sub_type": "message","message_TW": "乌龟逃走"}],
"s-454-1000-1206-0": [{"type": "text","sub_type": "message","message_TW": "乌龟大气动作Wait老马"}],
//--------------------------------------------------------------------------------------------------------------------
"s-454-1000-2101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_TW": "左手"}],
"s-454-1000-2102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_TW": "右手"}],
"s-454-1000-2103-0": [{"type": "text","sub_type": "message","message": "Head Slam! (Fast)","message_TW": "3连闪避"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,200,15,275,4000)}],
"s-454-1000-2104-0": [{"type": "text","sub_type": "message","message": "Spin get out (Fast)","message_TW": "旋转6次"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,0,15,200,5000)}],
"s-454-1000-2105-0": [{"type": "text","sub_type": "message","message": "Get in","message_TW": "进"}],
"s-454-1000-2106-0": [{"type": "text","sub_type": "message","message": "Random hatred","message_TW": "点名"}],
"s-454-1000-2107-0": [{"type": "text","sub_type": "message","message_TW": "乌龟行动"}],
"s-454-1000-2108-0": [{"type": "text","sub_type": "message","message": "left side","message_TW": "左侧"}],
"s-454-1000-2109-0": [{"type": "text","sub_type": "message","message": "right side","message_TW": "右侧"}],
"s-454-1000-2201-0": [{"type": "text","sub_type": "message","message": "Body Slam!","message_TW": "身体撞击"}],
"s-454-1000-2202-0": [{"type": "text","sub_type": "message","message_TW": "乌龟防御动作"}],
"s-454-1000-2203-0": [{"type": "text","sub_type": "message","message_TW": "乌龟眩晕"}],
"s-454-1000-2204-0": [{"type": "text","sub_type": "message","message_TW": "乌龟模式提醒"}],
"s-454-1000-2205-0": [{"type": "text","sub_type": "message","message_TW": "乌龟逃走"}],
"s-454-1000-2206-0": [{"type": "text","sub_type": "message","message_TW": "乌龟大气动作Wait老马"}],
"s-454-1000-3101-0": [{"type": "text","sub_type": "message","message": "Pile damage","message_TW": "石堆破坏"}],
"s-454-1000-3102-0": [{"type": "text","sub_type": "message","message": "front","message_TW": "前喷"}],
"s-454-1000-3103-0": [{"type": "text","sub_type": "message","message": "Knock down","message_TW": "击倒boss"}],
"s-454-1000-3104-0": [{"type": "text","sub_type": "message","message": "SHIELD!","message_TW": "破盾不然团灭"}],

//2王




"s-454-1001-1102-0": [{"type": "text","sub_type": "message","message": "Back Flip (Fast)","message_TW": "后空翻"}],
"s-454-1001-1104-0": [{"type": "text","sub_type": "message","message": "Frontal Spin!","message_TW": "正面旋转！"}],
"s-454-1001-1105-0": [{"type": "text","sub_type": "message","message": "Tail","message_TW": "尾巴"}],
"s-454-1001-1108-0": [{"type": "text","sub_type": "message","message": "random poison","message_TW": "隨仇放毒"}],
"s-454-1001-1109-0": [{"type": "text","sub_type": "message","message": "Pull + poison","message_TW": "拉人放毒"},
                      {"type": "text","sub_type": "message","delay": 2000,"message_TW": "闪"}],
"s-454-1001-1110-0": [{"type": "text","sub_type": "message","message": "Cyclone! (Slow)","message_TW": "死亡旋轉"}],
"s-454-1001-1113-0": [{"type": "text","sub_type": "message","message_TW": "深海粘液场"}],
"s-454-1001-1111-0": [{"type": "text","sub_type": "message","message": "Spin lunge attack","message_TW": "旋转突进攻击"}],
//--------------------------------------------------------------------------------------------------------------------
"s-454-1001-2102-0": [{"type": "text","sub_type": "message","message": "Back Flip (Fast)","message_TW": "后空翻"}],
"s-454-1001-2104-0": [{"type": "text","sub_type": "message","message": "Frontal Spin!","message_TW": "正面旋转！"}],
"s-454-1001-2105-0": [{"type": "text","sub_type": "message","message": "Tail","message_TW": "尾巴"}],
"s-454-1001-2108-0": [{"type": "text","sub_type": "message","message": "random poison","message_TW": "隨仇放毒"}],
"s-454-1001-2109-0": [{"type": "text","sub_type": "message","message": "Pull + poison","message_TW": "拉人放毒"},
                      {"type": "text","sub_type": "message","delay": 2000,"message_TW": "闪"}],
"s-454-1001-2110-0": [{"type": "text","sub_type": "message","message": "Cyclone! (Slow)","message_TW": "死亡旋轉"}],
"s-454-1001-2113-0": [{"type": "text","sub_type": "message","message_TW": "深海粘液场"}],
"s-454-1001-2111-0": [{"type": "text","sub_type": "message","message": "Spin lunge attack","message_TW": "旋转突进攻击"}],
"s-454-1001-3103-0": [{"type": "text","sub_type": "message","message": "Knock down","message_TW": "击倒检定"}],
"s-454-1001-3105-0": [{"type": "text","sub_type": "message","message": "poison","message_TW": "放毒"}],
"s-454-1001-3102-0": [{"type": "text","sub_type": "message","message": "big jump","message_TW": "大跳跃攻击"}],

//3王

"s-454-1002-1102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_TW": "前砸"}],
"s-454-1002-1103-0": [{"type": "text","sub_type": "message","message": "Random hatred","message_TW": "点名"}],
"s-454-1002-1104-0": [{"type": "text","sub_type": "message","message": "AOE","message_TW": "范围攻击"}],
"s-454-1002-1107-0": [{"type": "text","sub_type": "message","message": "Back Hit! (Fast)","message_TW": "后击！"}],
"s-454-1002-1108-0": [{"type": "text","sub_type": "message","message": "Back Hit","message_TW": "后击！"}],
"s-454-1002-1112-0": [{"type": "text","sub_type": "message","message": "Jump (Fast)","message_TW": "跳跃"}],
"s-454-1002-1106-0": [{"type": "text","sub_type": "message","message": "left","message_TW": "左侧攻击"}],
"s-454-1002-1110-0": [{"type": "text","sub_type": "message","message": " circle","message_TW": "齒輪掃圈"}],

//----------------------------------------------------------------------------------------------------------------------------
"s-454-1002-2102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_TW": "前砸"}],
"s-454-1002-2103-0": [{"type": "text","sub_type": "message","message": "Random hatred","message_TW": "点名"}],
"s-454-1002-2104-0": [{"type": "text","sub_type": "message","message": "AOE","message_TW": "范围攻击"}],
"s-454-1002-2107-0": [{"type": "text","sub_type": "message","message": "Back Hit! (Fast)","message_TW": "后击！"}],
"s-454-1002-2108-0": [{"type": "text","sub_type": "message","message": "back","message_TW": "后击！"}],
"s-454-1002-2112-0": [{"type": "text","sub_type": "message","message": "Jump (Fast)","message_TW": "跳跃"}],
"s-454-1002-2106-0": [{"type": "text","sub_type": "message","message": "left","message_TW": "左侧攻击"}],
"s-454-1002-2110-0": [{"type": "text","sub_type": "message","message": " circle！","message_TW": "齒輪掃圈"}],

//-----------------------------------------------------------------------------------------------------------------------------
"s-454-1002-3105-0": [{"type": "text","sub_type": "message","message": "Get in","message_TW": "进"}],
"s-454-1002-3117-0": [{"type": "text","sub_type": "message","message": "In Out In","message_TW": "进 出 进"}],
"s-454-1002-3110-0": [{"type": "text","sub_type": "message","message": "Pizza mech","message_TW": "披萨机制"}],
"s-454-1002-3106-0": [{"type": "text","sub_type": "message","message_TW": "全場切割檢定"}],
"s-454-1002-3113-0": [{"type": "text","sub_type": "message","message": "SHIELD！","message_TW": "破盾"}],
"s-454-1002-3115-0": [{"type": "text","sub_type": "message","message": "25%","message_TW": "爆走模式"}],
"s-454-1002-3119-0": [{"type": "text","sub_type": "message","message_TW": "水浪檢定"}],


//------------------------------------------特殊
"qb-454-402-454008": [{"type": "text","sub_type": "message","message": "Water wave attack","message_TW": "水波攻擊"},
   {"type": "func","func": Spawnitem1.bind(null,912,0,0,0,3000,4000)}],
"qb-454-1000-454012": [{"type": "text","sub_type": "message","message": "Fix the SLATE","message_TW": "修石板"}],
"dm-0-0-905420": [{"type": "text","sub_type": "message","message": "Water wall","message_TW": "水墙检定"}],
"s-454-403-1101-0": [{"type": "text","sub_type": "message","message_TW": "墻"},
                    {"type": "func","func": SpawnThing6.bind(null,300, 180, 100, 9000)}],
"s-454-100-1101-0": [{"type": "text","sub_type": "message","message": "electric ball","message_TW": "召喚电球"},
                    {"type": "func","func": SpawnThing.bind(null,0, 0, 100, 9000)}],
"s-454-106-3101-0": [{"type": "text","sub_type": "message","message": "1","message_TW": "1"},
   {"type": "func","func": Spawnitem1.bind(null,912,0,0,0,3000,17000)}],
"s-454-107-3102-0": [{"type": "text","sub_type": "message","message": "2","message_TW": "2"},
   {"type": "func","func": Spawnitem1.bind(null,912,0,0,0,3000,17000)}],
"s-454-108-3103-0": [{"type": "text","sub_type": "message","message": "3","message_TW": "3"},
   {"type": "func","func": Spawnitem1.bind(null,912,0,0,0,3000,17000)}],
"s-454-109-3104-0": [{"type": "text","sub_type": "message","message": "4","message_TW": "4"},
   {"type": "func","func": Spawnitem1.bind(null,912,0,0,0,3000,17000)}]

		 
};

