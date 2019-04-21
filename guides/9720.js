// AANM
//made by Yuyuko

let counter = 0;
let timer;

const TIMER_DELAY = 600;

const ITEM_SPAWNED_ON_SWIPE_ID = 513;
const ITEM_SPAWNED_ON_SWIPE_SUB_DELAY = 2500;
const ITEM_SPAWNED_ON_SWIPE_DISTANCE = 150;

//一王击飞躲避提示延迟推送
// fistboss: Knock up mech, AKA 'Your flesh will be deleted' callout
let guidecounter = 0 ;//
let guidetimer;//
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
"sub_type": "message",
"delay": 2000,
"message_TW": "proxy频道输入:補助 help <br>获取更多使用信息!"
});
    }
    guidetimer = setTimeout(()=>{
        guidecounter = 0;
    }, 3000);
}	
const EVENT_DELAY_FIRST_BOSS_NM = [
{
"type": "text",
"sub_type": "message",
"delay": TIMER_DELAY,
"message": "Dodge!",
"message_TW": "注意躲避"
},
];

//三王后砸前置计数
// thirdboss: counter of back attacks

function back_attack_NM(handlers) {
clearTimeout(timer);
counter++;
if(counter >= 2) {
handlers['text']({
"sub_type": "message",
"message": "Back attack",
"message_TW": "后砸"
});
}
timer = setTimeout(()=>{
counter = 0;
}, 3000);
}

module.exports = {
 "h-720-1000-100": [{"type": "func","func": guid_voice}],
//一王 不愤怒
//firstboss, not enraged

//后跳+内外圈,安全区域：站里面+站外面
//Backstep+donuts, stay in, get out

"s-720-1000-1117-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "站里面↑+站外面↓"}],

//原地抬腿+内外圈,安全区域：站外面+站里面
//Stomp+donuts, get out, stay in

"s-720-1000-1116-0": [{"type": "text","sub_type": "message","message": "get out↓ + stay in↑","message_TW": "站外面↓+站里面↑"}],

//剑戳地2下+后方挥盾
//ground thrust 2x+shield swing

"s-720-1000-1109-0": [{"type": "text","sub_type": "message","message": "back attack","message_TW": "后方攻击"}],

//一王 愤怒
//firstboss, enraged

//后跳+内外圈,安全区域：站里面+站外面
//Backstep+donuts, stay in, get out

"s-720-1000-2117-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "站里面↑+站外面↓"}],

//原地抬腿+内外圈,安全区域：站外面+站里面
//Stomp+donuts, get out, stay in

"s-720-1000-2116-0": [{"type": "text","sub_type": "message","message": "get out↓ + stay in↑","message_TW": "站外面↓+站里面↑"}],

//剑戳地2下+后方挥盾
//ground thrust 2x+shield swing

"s-720-1000-2109-0": [{"type": "text","sub_type": "message","message": "back attack","message_TW": "后方攻击"}],

//一王特殊技能
//firstboss special attack

//击飞攻击
//knockup attack

"s-720-1000-1300-0": EVENT_DELAY_FIRST_BOSS_NM,

//二王 不愤怒
//secondboss, not enraged

//转圈攻击（1106）
//Spin attack

"s-720-2000-1106-0": [{"type": "text","sub_type": "message","message": "Spin attack","message_TW": "转圈攻击"}],

//后方攻击（1105）
//Back attack

"s-720-2000-1105-0": [{"type": "text","sub_type": "message","message": "Back attack","message_TW": "后方攻击"}],

//点名大跳晕人
//Random aggro stun

"s-720-2000-1104-0": [{"type": "text","sub_type": "message","message": "Random jump","message_TW": "点名大跳"}],

//眩晕攻击
//Stun attack

"s-720-2000-1110-0": [{"type": "text","sub_type": "message","message": "Stun attack","message_TW": "眩晕攻击"}],

//BOSS右手边划刀,安全区域：坦右,打左
//right hand side swing, tank goes to right, dps goes to left

"s-720-2000-1112-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"dps","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"heal","sub_type": "message","message": "left←","message_TW": "左←"}],

//BOSS左手边划刀,安全区域：坦左,打右
//left hand side swing, tank goes to left, dps goes to right

"s-720-2000-1111-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"dps","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"heal","sub_type": "message","message": "right→","message_TW": "右→"}],

//二王 愤怒
//secondboss,enraged

//转圈攻击（2106）
//Spin attack

"s-720-2000-2106-0": [{"type": "text","sub_type": "message","message": "Spin attack","message_TW": "转圈攻击"}], 

//愤怒后方攻击（2105）
//enraged back attack

"s-720-2000-2105-0": [{"type": "text","sub_type": "message","message": "back attack","message_TW": "后方攻击"}], 

//点名大跳晕人
//Random aggro stun

"s-720-2000-2104-0": [{"type": "text","sub_type": "message","message": "Random aggro jump","message_TW": "点名大跳"}],	

//BOSS右手边划刀,安全区域：坦右,打左
//right hand side swing, tank goes to right, dps goes to left

"s-720-2000-2112-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"dps","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"heal","sub_type": "message","message": "left←","message_TW": "左←"}],

//BOSS左手边划刀,安全区域：坦左,打右
//left hand side swing, tank goes to left, dps goes to right

"s-720-2000-2111-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"dps","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"heal","sub_type": "message","message": "right→","message_TW": "右→"}],

//眩晕攻击
//Stun attack

"s-720-2000-2110-0": [{"type": "text","sub_type": "message","message": "Stun attack","message_TW": "眩晕攻击"}],

//二王特殊技能
//secondboss, special attacks

//红色鉴定,安全区域：15M外
//Red, stay 15m away

"s-720-2000-3119-0": [{"type": "text","sub_type": "message","message": "red: get out↓","message_TW": "红色：外↓"}],

//蓝色鉴定,安全区域：15M内（3220）
//Blue, stay near within 15m

"s-720-2000-3220-0": [{"type": "text","sub_type": "message","message": "blue: stay in↑","message_TW": "蓝色：内↑"}],

//眩晕圈（3116）+外圈伤害（3118）
//stun+donut

"s-720-2000-3116-0": [{"type": "text","sub_type": "message","message": "dodge + stay in↑","message_TW": "躲避+内↑"}],

//点名喷长条毒（3107）
//random aggro poison（3107）

//三王 不愤怒
//thirdboss, unenraged

//进场的推人红圈
//pushback when engaging

"s-720-3000-1315-0": [{"type": "text","sub_type": "message","message": "Pushback","message_TW": "开场推人"}],

//点名大跳晕人（1107）
//random aggro stun

"s-720-3000-1107-0": [{"type": "text","sub_type": "message","message": "Random jump","message_TW": "点名大跳"}],

//点名出剑刃风暴,手里握篮球挥篮球（1120）,剑刃风暴（1121）
//random aggro, holding blue orb, energy beam

"s-720-3000-1204-0": [{"type": "text","sub_type": "message","message": "energy beam","message_TW": "点名剑气"}],

//剑舞前戳+逆时针旋转+右手扇形攻击 注：坦右边安全,打左边安全请自行更改
//heart thrust+anticlockwise spin+right swipe

"s-720-3000-1109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"dps","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"heal","sub_type": "message","message": "left←","message_TW": "左←"},

// Courtesy of Kasea ;)
{
"type": "spawn",
"id": ITEM_SPAWNED_ON_SWIPE_ID,
"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
"offset": -1
},
{
"type": "spawn",
"id": ITEM_SPAWNED_ON_SWIPE_ID,
"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
"offset": -2.3
}
],

//剑舞前戳+顺时针旋转+左手扇形攻击 注：坦左边安全,打右边安全请自行更改
//heart thrust+clockwise spin+left swipe

"s-720-3000-1111-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"dps","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"heal","sub_type": "message","message": "right→","message_TW": "右→"},

// Courtesy of Kasea ;)
{
"type": "spawn",
"id": ITEM_SPAWNED_ON_SWIPE_ID,
"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
"offset": 1
},
{
"type": "spawn",
"id": ITEM_SPAWNED_ON_SWIPE_ID,
"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
"offset": 2.3
}
],

//前后砸
//front, back slam

"s-720-3000-1113-0": [{"type": "text","sub_type": "message","message": "front, back slam","message_TW": "前后砸"}],

//旋转攻击
//spinning attack

"s-720-3000-1115-0": [{"type": "text","sub_type": "message","message": "spinning attack","message_TW": "旋转攻击"}],

//2连斜上挥（1104）后接的后砸（1119）
//golf swing x2 + back slam

"s-720-3000-1104-0": [{"type": "func","func": back_attack_NM}],

//后闪+旋转or前后砸
//teleport back+ spin or front, back slam

"s-720-3000-1202-0": [{"type": "text","sub_type": "message","message": "spin or front,back slam","message_TW": "旋转or前后砸"}],

//三王 愤怒
//thirdboss, enraged

//点名出剑刃风暴,手里握篮球挥篮球（1204）,剑刃风暴（1121）
//random aggro, holding blue orb, energy beam

"s-720-3000-2204-0": [{"type": "text","sub_type": "message","message": "enraged:energy beam","message_TW": "愤怒：点名剑气"}],

//剑舞前戳+逆时针旋转+右手扇形攻击 注：坦右边安全,打左边安全请自行更改
//heart thrust+anticlockwise spin+right swipe

"s-720-3000-2109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"dps","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"heal","sub_type": "message","message": "left←","message_TW": "左←"},

// Courtesy of Kasea ;)
{
"type": "spawn",
"id": ITEM_SPAWNED_ON_SWIPE_ID,
"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
"offset": -1
},
{
"type": "spawn",
"id": ITEM_SPAWNED_ON_SWIPE_ID,
"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
"offset": -2.3
}
],

//剑舞前戳+顺时针旋转+左手扇形攻击 注：坦左边安全,打右边安全请自行更改
//heart thrust+clockwise spin+left swipe

"s-720-3000-2111-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"dps","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"heal","sub_type": "message","message": "right→","message_TW": "右→"},

// Courtesy of Kasea ;)
{
"type": "spawn",
"id": ITEM_SPAWNED_ON_SWIPE_ID,
"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
"offset": 1
},
{
"type": "spawn",
"id": ITEM_SPAWNED_ON_SWIPE_ID,
"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,
"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,
"offset": 2.3
}
],

//前后砸
//front, back slam

"s-720-3000-2113-0": [{"type": "text","sub_type": "message","message": "front, back slam","message_TW": "前后砸"}],

//愤怒2连斜上挥（2104）后接的后砸（2119）
//golf swing x2 + back slam
"s-720-3000-2104-0": [{"type": "func","func": back_attack_NM}],

//旋转攻击
//spinning attack

"s-720-3000-2115-0": [{"type": "text","sub_type": "message","message": "spinning attack","message_TW": "旋转攻击"}],

//点名大跳晕人（1107）
//random aggro stun

"s-720-3000-2107-0": [{"type": "text","sub_type": "message","message": "Random jump","message_TW": "点名大跳"}],

//后闪+旋转or前后砸
//teleport back+ spin or front, back slam

"s-720-3000-2202-0": [{"type": "text","sub_type": "message","message": "spin or front,back slam","message_TW": "旋转or前后砸"}],

//三王特殊技能
//thirdboss, special attacks

//召唤分身出点名剑气
//clones, random aggro, energy beam

"s-720-3000-1400-0": [{"type": "text","sub_type": "message","message": "beam","message_TW": "召咄分身：点名剑气"}],

//召唤分身出旋转攻击
//clones, random aggro, spin attack

"s-720-3000-1401-0": [{"type": "text","sub_type": "message","message": "spin","message_TW": "召咄分身：旋转攻击"}]

};