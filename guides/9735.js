// RK9
//made by michengs

let notice_guide = true;
let player, entity, library, effect;
let power = false;
let Level = 0;
let notice = true;
let powerMsg = null;
let steptwo = false ;	
function guid_voice(handlers) {   
if(notice_guide) {
handlers['text']({
"sub_type": "message",
"delay": 2000,
"message_TW": "一层', '<font color=#FF0000>爆炸! 爆炸!</font>"
});

handlers['text']({
"sub_type": "notification",
"delay": 2000,
"message_TW": "一层', '<font color=#FF0000>爆炸! 爆炸!</font>"
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
	function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
    }
	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 延迟 时间）
function Spawnitem2(item,degree,distance, intervalDegrees, radius, delay, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
    let	degrees = 360 - degree;	
	applyDistance(shield_loc, distance, degrees);
    for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
        handlers['spawn']({
			"sub_type": "item",			
        	"id": item,
			"delay": delay,			
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});
    }
}

function SpawnThingobject( degrees, radius, delay, times, handlers, event, entity ) {
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
			"ownerName": "巴哈勒",
			"message": "王坐方向"
        }, {loc: shield_loc});  
}






let skills_hand = {
	1112:  {truth: 'Truth -> Break shield',     lie: 'Lie -> Puddles (run away)'},
	1111:  {truth: 'Truth -> Break shield',     lie: 'Lie -> Puddles (run away)'},	
	1305:  {truth: 'Truth -> Break shield',     lie: 'Lie -> Puddles (run away)'},	
	1304:  {truth: 'Truth -> Break shield',     lie: 'Lie -> Puddles (run away)'}	
	
};
//let debuff_tracker_started = false;	

function start_skills(handlers, event, entity, dispatch) {
	const skill_change = (added, event) => {
		if ((player.isMe(event.target) || player.playersInParty.includes(event.target.toString())) && skills_hand[event.id]) {

			
					handlers['text']({
			        	"sub_type": "notification",
						"message": skills_hand[event.id].lie
			        });
			

		}
	};
		dispatch.hook('S_ACTION_STAGE',9, skill_change.bind(null, true));
}



























module.exports = {
	
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},



    "h-735-1000-100": [{"type": "func","func": start_skills}],	


    "s-735-1000-111-0": [{"type": "text","sub_type": "message","message": "BACK ATTACK","message_TW": "BOSS 攻击身后打手请注意！" }],	
    "s-735-1000-112-0": [{"type": "text","sub_type": "message","message": "BACK ATTACK","message_TW": "BOSS 攻击身后打手请注意！" }],
    "s-735-1000-205-0": [{"type": "text","sub_type": "message","message": "wind","message_TW": "即将开启通风系统，请离开中间！" }],	
    "s-735-1000-304-0": [{"type": "text","sub_type": "message","message": "OUT","message_TW": "出去！" }],
    "s-735-1000-305-0": [{"type": "text","sub_type": "message","message": "IN","message_TW": "进！" }],	
    "s-735-1000-306-0": [{"type": "text","sub_type": "message","message": "Incoming Summon","message_TW": "召唤地雷！快打！" }], 	
    "s-735-1000-307-0": [{"type": "text","sub_type": "message","message": "PULL","message_TW": "BOSS 拉人，注意无敌躲避！" }],	
	
    "s-735-1000-309-0": [ 
      {"type": "text","sub_type": "message","message": "Four missile launches were initiated","message_TW": "开始发射4次导弹！！" },
      {"type": "text","sub_type": "message","delay": 7000,"message": "5", "message_TW": "5"},
      {"type": "text","sub_type": "message","delay": 8000,"message": "4", "message_TW": "4"},
      {"type": "text","sub_type": "message","delay": 9000,"message": "3", "message_TW": "3"},
      {"type": "text","sub_type": "message","delay": 10000,"message": "2", "message_TW": "2"},
      {"type": "text","sub_type": "message","delay": 11000,"message": "1", "message_TW": "1"},
      {"type": "text","sub_type": "message","delay": 12000,"message": "JUMP", "message_TW": "快跳！"}
],
//------------------------------------2王

"s-735-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_TW": "前砸注意躲避"}],
"s-735-2000-108-0": [{"type": "text","sub_type": "message","message": "back","message_TW": "后踢打手補师注意"}],
"s-735-2000-301-0": [{"type": "text","sub_type": "message","message": "throws","message_TW": "boss扔溜溜球，注意躲避"}],
"s-735-2000-304-0": [{"type": "text","sub_type": "message","message": "OUT","message_TW": "快跑远"}],
//------------------------------------3王
//s拳
"s-735-3000-116-0": [{"type": "text","sub_type": "message","message": "RIGHT →↘","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-119-0": [{"type": "text","sub_type": "message","message": "RIGHT →↘","message_TW": "S拳秒杀躲避右边 →↘"}],
"s-735-3000-118-0": [{"type": "text","sub_type": "message","message": "LEFT ←↙","message_TW": "S拳秒杀躲避 左边 ←↙"}],	 
"s-735-3000-117-0": [{"type": "text","sub_type": "message","message": "LEFT ←↙","message_TW": "S拳秒杀躲避 左边 ←↙"}],
"s-735-3000-129-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "dodge","message_TW": "坦无敌闪"}],	

  "s-735-3000-321-0": [
		  {"type": "text","sub_type": "message","message": "SHIELD!","message_TW": "BOSS护盾 快打，不然灭团!" },
          {"type": "text","sub_type": "message","delay": 90000,"message": "After 10s SHIELD! ", "message_TW": "10S后准备破盾！"}	    
		 ],


//出去	 
"s-735-3000-324-0": [{"type": "text","sub_type": "message","message": "get out↓","message_TW": "出去"}]

};