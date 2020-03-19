//made by michengs

let player, entity, library, effect;
let green = false;
let	purple = false;
let	boss_thirty = false;
let print = false;
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

function Spawnitem3(item,degree,distance, intervalDegrees, radius, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
    let	degrees = 360 - degree;	
	applyDistance(shield_loc, distance, degrees);
    for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
        handlers['spawn']({
        	"id": item,
			"delay": (boss_thirty ? 7000:5000),			
        	"sub_delay": (boss_thirty ? 9000:7000),
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

//121 123  前砸 旋转  大前砸     绿绿
//122 120  旋转  前砸  旋转     紫紫   前方走
//122 123  旋转  前砸  大前砸     紫绿  第二下前方移動

function skilld_event(skillid, handlers, event, ent, dispatch) {
		
		if (skillid == 121) green = true;
		if (skillid == 122) purple  = true;

if (skillid == 120){
	if (purple && !boss_thirty){
		handlers['text']({"sub_type": "msgcp","message": "Inside -outer -Inside","message_TW": "旋转-前砸-旋转"}); 
		setTimeout(() => purple = false, 2000);		
	} else if(purple && boss_thirty){
		handlers['text']({"sub_type": "msgcp","message": "Inside -outer","message_TW": "旋转-前砸"}); 
		handlers['text']({"sub_type": "msgcp","delay": 6000,"message": "Inside","message_TW": "旋转"}); 		
		setTimeout(() => purple = false, 2000);			 	 		 
	 
  }
}
if (skillid == 123){
	if (green && !boss_thirty){
		handlers['text']({"sub_type": "msgcp","message": "outer -Inside-outer","message_TW": "前砸-旋转-大前砸"}); 
		setTimeout(() => green = false, 2000);		
	 } else if(purple && !boss_thirty){
		handlers['text']({"sub_type": "msgcp","message": "Inside -outer -outer","message_TW": "旋转-前砸-大前砸"}); 
		setTimeout(() => purple = false, 2000);			 	 		 
	 } else if(green && boss_thirty){
		handlers['text']({"sub_type": "msgcp","message": "outer -Inside","message_TW": "前砸-旋转"}); 
		handlers['text']({"sub_type": "msgcp","delay":6000,"message": "outer","message_TW": "大前砸"}); 		
		setTimeout(() => purple = false, 2000);							
   } else if(purple && boss_thirty){
		handlers['text']({"sub_type": "msgcp","message": "Inside -outer","message_TW": "旋转-前砸"}); 
		handlers['text']({"sub_type": "msgcp","delay": 6000,"message": "outer","message_TW": "大前砸"}); 		
		setTimeout(() => purple = false, 2000);	
  }
 }
}
 function start_boss() {
if (print) return	 
   boss_thirty = true;	
   print = true ;
}

let debuff_tracker_started = false;
let debuffs_targe = {
	30209101: {msgt: 'lightning',     msg: '闪电'}, 
	30209102: {msgt: 'Witch',     msg: '魔女'}
};
let debuff_call_event = null;
function start_Sailing_Instance(handlers, event, entity, dispatch) {
	const abnormality_change = (added, event) => {
		if ((player.isMe(event.target) || player.playersInParty.includes(event.target.toString())) && debuffs_targe[event.id]) {
				if (added) {
				if (debuff_call_event) {
					clearTimeout(debuff_call_event);
				}
				debuff_call_event = setTimeout(() => {
					handlers['text']({
			        	"sub_type": "message",
						"message": debuffs_targe[event.id].msgt,
						"message_TW": debuffs_targe[event.id].msg						
			        });
					debuff_call_event = null;
				}, 1500);
				} else {

				}
		}
	};

	if (!debuff_tracker_started) {
		dispatch.hook('S_ABNORMALITY_BEGIN', 4, abnormality_change.bind(null, true));
		dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));
		debuff_tracker_started = true;
	}
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},




"s-3020-1900-104-0": [{"type": "text","sub_type": "message","message": "Suck blue(dodge)","message_TW": "吸蓝"},
                      {"type": "func","func": Spawnitem2.bind(null,445,0,0,15,300,200,3000)}],

"s-3020-1200-103-0": [{"type": "text","sub_type": "message","message": "Suck blue(dodge)","message_TW": "吸蓝"},
                      {"type": "func","func": Spawnitem2.bind(null,445,0,0,15,200,200,3000)}],
					  
					  


"s-3020-2200-108-0": [{"type": "text","sub_type": "message","message": "Charge (Halo Tan)","message_TW": "晕"},
                      {"type": "func","func": Spawnitem2.bind(null,445,0,170,20,120,200,2000)}],






//121 123  前砸 旋转  大前砸     绿绿
//122 120  旋转  前砸  旋转     紫紫   前方走
//122 123  旋转  前砸  大前砸     紫绿  第二下前方移動


			// 三连击 结束技能

"ae-0-0-4030": [ {"type": "func","func": start_Sailing_Instance}],
"ae-0-0-4020": [ {"type": "func","func": start_Sailing_Instance}],
"h-3020-2200-30": [ {"type": "func","func": start_boss}], 
"h-3020-2200-29": [ {"type": "func","func": start_boss}], 
"h-3020-2200-28": [ {"type": "func","func": start_boss}], 
"h-3020-2200-27": [ {"type": "func","func": start_boss}], 
"h-3020-2200-26": [ {"type": "func","func": start_boss}], 
"h-3020-2200-25": [ {"type": "func","func": start_boss}], 
"h-3020-2200-24": [ {"type": "func","func": start_boss}], 
"h-3020-2200-23": [ {"type": "func","func": start_boss}], 
"h-3020-2200-22": [ {"type": "func","func": start_boss}], 
"h-3020-2200-21": [ {"type": "func","func": start_boss}], 
"h-3020-2200-20": [ {"type": "func","func": start_boss}], 
"h-3020-2200-19": [ {"type": "func","func": start_boss}], 
"h-3020-2200-18": [ {"type": "func","func": start_boss}], 
"h-3020-2200-17": [ {"type": "func","func": start_boss}], 
"h-3020-2200-16": [ {"type": "func","func": start_boss}], 
"h-3020-2200-15": [ {"type": "func","func": start_boss}], 
"h-3020-2200-14": [ {"type": "func","func": start_boss}], 
"h-3020-2200-13": [ {"type": "func","func": start_boss}], 
"h-3020-2200-12": [ {"type": "func","func": start_boss}], 
"h-3020-2200-11": [ {"type": "func","func": start_boss}], 
"h-3020-2200-10": [ {"type": "func","func": start_boss}], 
"h-3020-2200-9": [ {"type": "func","func": start_boss}], 
"h-3020-2200-8": [ {"type": "func","func": start_boss}], 
"h-3020-2200-7": [ {"type": "func","func": start_boss}], 
"h-3020-2200-6": [ {"type": "func","func": start_boss}], 
"h-3020-2200-5": [ {"type": "func","func": start_boss}], 
"h-3020-2200-4": [ {"type": "func","func": start_boss}], 
"h-3020-2200-3": [ {"type": "func","func": start_boss}], 
"h-3020-2200-2": [ {"type": "func","func": start_boss}], 
"h-3020-2200-1": [ {"type": "func","func": start_boss}], 

"s-3020-2200-120-0": [{"type": "func","func": skilld_event.bind(null, 120)},
                      {"type": "func","func": Spawnitem3.bind(null,445,0,150,8,280)}],
					  
					  
					  
"s-3020-2200-121-0": [{"type": "func","func": skilld_event.bind(null, 121)},
                      {"type": "func","func": Spawnitem2.bind(null,445,0,170,8,290,200,3000)},  //绿色
                      {"type": "func","func": Spawnitem2.bind(null,445,0,170,8,280,3000,5000)},  //绿色
                      {"type": "func","func": Spawnitem2.bind(null,445,0,170,4,570,3000,5000)}],//	



					  
"s-3020-2200-122-0": [{"type": "func","func": skilld_event.bind(null, 122)},                     //紫色
                      {"type": "func","func": Spawnitem2.bind(null,445,0,0,8,280,200,3000)},                     //紫色
                      {"type": "func","func": Spawnitem2.bind(null,445,0,0,4,570,200,3000)},
                      {"type": "func","func": Spawnitem2.bind(null,445,0,170,8,290,3000,5000)}],	

					  
"s-3020-2200-123-0": [{"type": "func","func": skilld_event.bind(null, 123)},
                      {"type": "func","func": Spawnitem3.bind(null,445,0,200,8,450)}],

//"s-3020-9101-122-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "强袭"}],
	   		   

//"s-3020-9101-124-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "前砸"}],
//"s-3020-9101-125-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "转圈"}],
//"s-3020-9101-126-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大前砸"}],



// "s-3020-2201-121-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "2201-121" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
//"s-3020-2201-125-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "2201-125" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
// "s-3020-2201-126-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "2201-126" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
 "s-3020-2201-201-0": [{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
  
  
// "s-3020-6103-203-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "6103-203" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
// "s-3020-6103-202-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "6103-202" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}], 
// "s-3020-6103-201-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "6103-201" },{"type": "func","func": SpawnThing.bind(null,0,0,100,2000)}],  
  "s-3020-2200-127-0": [{"type": "text","sub_type": "message","message": "smashing","message_TW": "跳劈"},
                        {"type": "func","func": Spawnitem2.bind(null,445,0,0,15,200,250,1000)},
                        {"type": "func","func": Spawnitem2.bind(null,445,0,0,10,300,1000,4000)}
  
  ],


"s-3020-2200-128-0": [{"type": "text","sub_type": "message","message": "'Golf (fly)","message_TW": "强袭"}],
"s-3020-2200-129-0": [{"type": "text","sub_type": "message","message": "Vendetta-Straight Skull","message_TW": "点名蓄力"},				
  {"type": "func","func": Spawnitem1.bind(null,445,90,100,0,500,6000)},					
  {"type": "func","func": Spawnitem1.bind(null,445,270,100,0,500,6000)}],
"s-3020-2200-131-0": [{"type": "text","sub_type": "message","message_TW": "咆哮远离"}],

"s-3020-2200-133-1": [{"type": "text","sub_type": "message","message_TW": "点名扩散圈"},
                      {"type": "func","func": Spawnitem2.bind(null,445,0,0,10,300,200,4000)}],

"s-3020-2200-135-0": [{"type": "text","sub_type": "message","message": "skipping rope","message_TW": "准备跳"}],

"s-3020-2200-137-0": [{"type": "text","sub_type": "message","message": "diffusion","message_TW": "扩散圈"}],

"s-3020-2200-139-0": [{"type": "text","sub_type": "message","message": "Shrink","message_TW": "收缩圈"}],

"s-3020-2200-202-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "defence 3秒"}],
"s-3020-2200-203-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "defence 10秒"}],
"s-3020-2200-204-0": [{"type": "text","sub_type": "message","message": "30% transformationp","message_TW": "变身"}]		 
};