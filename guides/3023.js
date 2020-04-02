//made by michengs
let player, entity, library, effect;
let	print = true,
    debuff = null,
    timer1,
    timer3,
    timer4,
    counter = 0;
const {SpawnMarker, SpawnVector, SpawnCircle, SpawnSemicircle} = require("../lib");
const AQ_TipMsg =
{
 0: {msgt: 'IN',     msg: '-----进-----！'}, 
 1: {msgt: 'OUT',     msg: '-----出-----！'}
};

function skilld_event(skillid, handlers, event, ent, dispatch) {	
if (skillid === 99020020) { //死亡解除debuff
debuff = null
clearTimeout(timer1);
}

if ([30231000, 1000,30231001, 1001].includes(skillid)) {    //debuff
debuff  = skillid % 2;
clearTimeout(timer1);
timer1 = setTimeout(()=>{
debuff = null
  }, 70000);	
 }                                                //1蓝 
//											   //0 红
if (skillid === 3119 && debuff != null ) {    //紅色气息
handlers['text']({
"sub_type": "message",
"message": (`${AQ_TipMsg[(debuff + 3) %2].msgt}`),
"message_TW": (`${AQ_TipMsg[(debuff + 3) %2].msg}`)
});	
} else if (skillid === 3220 && debuff != null ) {    //蓝色气息
handlers['text']({
"sub_type": "message",
"message": (`${AQ_TipMsg[debuff].msgt}`),
"message_TW": (`${AQ_TipMsg[debuff].msg}`)
});	
} 
 
 if ([1113, 1114].includes(skillid)) { //4连挥刀预判
clearTimeout(timer3);
counter++;
if(counter >= 4) {
clearTimeout(timer4);
timer4 = setTimeout(()=>{
handlers['text']({
"sub_type": "message",
"message_TW": "4连挥刀准备!",
"message": "quadra kill coming soon！"
});	
  }, 70000);
}
timer3 = setTimeout(()=>{
counter = 0;
  }, 20000);	
 }
}

function start_boss_eighty(handlers) {
if(print) {
handlers['text']({
"sub_type": "message",
"message": "80%",
"message_TW": "4连挥刀准备!!"
});
}		
print = false;	
}
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},	
    // First boss 
    "h-3023-1000-80": [{"type": "func","func": start_boss_eighty}], 
    "s-3023-1000-104-0": [{"type": "text","sub_type": "message","message":  'jump',"message_TW": "点名-跳劈" }],
    "s-3023-1000-105-0": [{"type": "text","sub_type": "message","message":  'back',"message_TW": "后方攻击" }],
    "s-3023-1000-110-0": [{"type": "text","sub_type": "message","message":  'stun',"message_TW": "晕" },
						  {"type": "func","func": SpawnCircle.bind(null,false,445,0,175,10,225,0,6000)}],
    "s-3023-1000-111-0": [{"type": "text","sub_type": "message","message":  '↓ left pull',"message_TW": "↓ 左拉" },
						  {"type": "func","func": SpawnVector.bind(null,445,270,200,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,270,200,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,0,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,0,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,300,270,200,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,180,500,270,200,0,2000)}],
    "s-3023-1000-112-0": [{"type": "text","sub_type": "message","message":  'right pull ↓',"message_TW": "右拉 ↓" },
						  {"type": "func","func": SpawnVector.bind(null,445,90,200,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,90,200,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,0,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,0,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,300,90,200,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,180,500,90,200,0,2000)}],
    "s-3023-1000-113-0": [{"type": "text","sub_type": "message","message":  '↓ left pull',"message_TW": "↓ 左拉" },
	                      {"type": "func","func": skilld_event.bind(null, 1113)},
						  {"type": "func","func": SpawnVector.bind(null,445,270,200,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,270,200,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,0,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,0,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,300,270,200,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,180,500,270,200,0,2000)}],
    "s-3023-1000-114-0": [{"type": "text","sub_type": "message","message":  'right pull ↓',"message_TW": "右拉 ↓" },
	                      {"type": "func","func": skilld_event.bind(null, 1114)},
						  {"type": "func","func": SpawnVector.bind(null,445,90,200,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,90,200,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,0,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,0,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,0,300,90,200,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,445,180,500,90,200,0,2000)}],
    "s-3023-1000-115-0": [{"type": "text","sub_type": "message","message":  'back attack',"message_TW": "蓄力后扫" },
						  {"type": "func","func": SpawnSemicircle.bind(null,90,270,445,0,0,20,160,0,2000)},
						  {"type": "func","func": SpawnSemicircle.bind(null,90,270,445,0,0,12,220,0,2000)},
						  {"type": "func","func": SpawnSemicircle.bind(null,90,270,445,0,0,10,300,0,2000)}
	],
    "s-3023-1000-116-0": [{"type": "text","sub_type": "message","message":  'get out',"message_TW": "爆炸" },
						  {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,8,500,0,6000)}],
    "am-3023-1000-30231001": [{"type": "func","func": skilld_event.bind(null, 1001)}],
    "am-3023-1000-30231000": [{"type": "func","func": skilld_event.bind(null, 1000)}],
	"ae-0-0-99020020": [{"type": "func","func": skilld_event.bind(null, 99020020)}], //复生
	"ae-0-0-30231000": [{"type": "func","func": skilld_event.bind(null, 30231000)}],	//开始红色
	"ae-0-0-30231001": [{"type": "func","func": skilld_event.bind(null, 30231001)}],	//开始蓝色	
    "s-3023-1000-3107-0": [{"type": "text","sub_type": "message","message":  'smash',"message_TW": "重击" },
						   {"type": "func","func": SpawnVector.bind(null,445,90,80,10,1000,0,4000)},
						   {"type": "func","func": SpawnVector.bind(null,445,270,80,350,1000,0,4000)}		
	],
    "s-3023-1000-3115-0": [{"type": "text","sub_type": "message","message":  'spin',"message_TW": "旋转攻击" },
						   {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,10,320,0,3500)}],
    "s-3023-1000-3116-0": [{"type": "text","sub_type": "message","message":  'spin',"message_TW": "旋转攻击准备" },
						   {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,10,320,0,5000)}],
    "s-3023-1000-3119-0": [{"type": "func","func": skilld_event.bind(null, 3119)},
						   {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,8,575,0,4000)}],
    "s-3023-1000-3220-0": [{"type": "func","func": skilld_event.bind(null, 3220)},
						   {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,8,575,0,4000)}],
    // 2王
    "s-3023-2000-164-0": [{"type": "text","sub_type": "message","message":  'Counter attack (bleeding)',"message_TW": "蓄力反击(流血)" }],
    "s-3023-2000-166-0": [{"type": "text","sub_type": "message","message":  'turn-back',"message_TW": "转身点名" }],
    "s-3023-2000-175-0": [{"type": "text","sub_type": "message","message":  'debuff',"message_TW": "沉默" }],
    "s-3023-2000-178-0": [{"type": "text","sub_type": "message","message":  ' scratching',"message_TW": "毒抓" }],
    "s-3023-2000-181-0": [{"type": "text","sub_type": "message","message":  'Insert the floor',"message_TW": "插地板(直线)" },
						  {"type": "func","func": SpawnVector.bind(null,445,90,80,10,1000,0,4000)},
						  {"type": "func","func": SpawnVector.bind(null,445,270,80,350,1000,0,4000)}],
    "s-3023-2000-182-0": [{"type": "text","sub_type": "message","message":  'Knock down',"message_TW": "踩地(击倒)" }],
    "s-3023-2000-185-0": [{"type": "text","sub_type": "message","message":  'big jump',"message_TW": "大跳" },
                          {"type": "func","func": skilld_event.bind(null, 185)},
						  {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,10,500,0,6000)},
						  {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,8,750,0,6000)}],
     "s-3023-2000-202-0": [{"type": "text","sub_type": "message","message":  'BACKSTAB',"message_TW": "后擒" },
						  {"type": "func","func": SpawnVector.bind(null,445,90,80,180,500,0,3000)},
						  {"type": "func","func": SpawnVector.bind(null,445,270,80,180,500,0,3000)}],
     "s-3023-2000-207-0": [{"type": "text","sub_type": "message","message":  'Phantom x5(bleed)',"message_TW": "幻影x5(流血)" }],	 
     "s-3023-2000-212-0": [{"type": "text","sub_type": "message","message":  'Flash (bleed)',"message_TW": "闪现(流血)" }],	 
};