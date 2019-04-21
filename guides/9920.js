const SPAWN_CIRCLES = true;

// AAHM 
//made by Yuyuko

let counter = 0;//后砸计数 count for back attacks
let timer;//后砸统计重置时间 reset time 
let print = true;//二王HP提示开关 secondboss Health

let SPAWNING_FIRST_CIRCLE_FLOWERS = [];
let SPAWNING_SECOND_CIRCLE_FLOWERS = [];

const TIMER_DELAY = 600;
const ITEM_SPAWNED_ON_SWIPE_ID = 6;//576:trees 556:grass 
const ITEM_SPAWNED_ON_SWIPE_SUB_DELAY = 2500;
const ITEM_SPAWNED_ON_SWIPE_DISTANCE = 150;

const stepone = 2 * Math.PI / 40;//40 flowers in total if u think the flower is too many ,u can change the num to smaller.
const steptwo = 2 * Math.PI / 72;//72 flowers in total

//内圈
//inner flower circle

for(let angle = -Math.PI; angle <= Math.PI; angle += stepone) {
if(!SPAWN_CIRCLES) continue;
SPAWNING_FIRST_CIRCLE_FLOWERS.push({
"type": "spawn",
"id": 548,
"sub_delay": 6000,
"distance": 143,
"offset": angle
});

SPAWNING_SECOND_CIRCLE_FLOWERS.push({
"type": "spawn",
"id": 548,
"sub_delay": 6000,
"distance": 157,
"offset": angle
});
}
//外圈
//outer flower circle

for(let angle = -Math.PI; angle <= Math.PI; angle += steptwo) {
if(!SPAWN_CIRCLES) continue;
SPAWNING_FIRST_CIRCLE_FLOWERS.push({
"type": "spawn",
"id": 548,
"sub_delay": 6000,
"distance": 293,
"offset": angle
});

SPAWNING_SECOND_CIRCLE_FLOWERS.push({
"type": "spawn",
"id": 548,
"sub_delay": 6000,
"distance": 307,
"offset": angle
});
}


//剑舞前戳+逆时针旋转+右手扇形攻击+外到内甜甜圈 
//heart thrust+anticlockwise spin+right swipe+AOEs from out to in

SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "text","class_position":"tank","sub_type": "message","message": "right→>out to in","message_TW": "右→ + 从外到内"});
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "text","class_position":"dps","sub_type": "message","message": "left←>out to in","message_TW": "左← + 从外到内"});
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "text","class_position":"heal","sub_type": "message","message": "left←>out to in","message_TW": "左← + 从外到内"});
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "spawn","id": ITEM_SPAWNED_ON_SWIPE_ID,"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,"offset": -1});
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "spawn","id": ITEM_SPAWNED_ON_SWIPE_ID,"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,"offset": -2.3});

//剑舞前戳+顺时针旋转+左手扇形攻击+内到外甜甜圈
//heart thrust+clockwise spin+left swipe+AOEs from in to out

SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "text","class_position":"tank","sub_type": "message","message": "left←>in to out","message_TW": "左← + 从内到外"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "text","class_position":"dps","sub_type": "message","message": "right→>in to out","message_TW": "右→ + 从内到外"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "text","class_position":"heal","sub_type": "message","message": "right→>in to out","message_TW": "右→ + 从内到外"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "spawn","id": ITEM_SPAWNED_ON_SWIPE_ID,"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,"offset": 1});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "spawn","id": ITEM_SPAWNED_ON_SWIPE_ID,"sub_delay": ITEM_SPAWNED_ON_SWIPE_SUB_DELAY,"distance": ITEM_SPAWNED_ON_SWIPE_DISTANCE,"offset": 2.3});

//一王击飞躲避提示延迟推送
//Ghergof: Knock up mech, AKA 'Your flesh will be deleted' callout

const EVENT_DELAY_FIRST_BOSS_HM = [
{
"type": "text",
"sub_type": "message",
"delay": TIMER_DELAY,
"message": "Dodge!",
"message_TW": "注意躲避"
},
];



//二王血量显示
//secondboss Health tips

function start_boss() {
print = true;
}
function print_fifty(handlers) {
if(print) {
handlers['text']({
"sub_type": "message",
"message": "50%",
"message_TW": "50%"
});
}
print = false;
}	
function print_twenty(handlers) {
if(print) {
handlers['text']({
"sub_type": "message",
"message": "20%",
"message_TW": "20%"
});
}
print = false;
}

//三王后砸前置计数
//thirdboss: counter of back attacks
function back_attack_HM(handlers) {
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

//三王色鉴,针对色盲玩家的特别帮助
//thirdboss: color marks in cage
/* ------------------------------------------- */
let colour_to_use = null;
const COLOURS_OFFSETS = {
"red": 0,
"yellow": 2.5,
"blue": -2.5,
};

function set_clockwise(clockwise, handlers, _, third_boss_entity) {
setTimeout(()=> {
// Get the colour rotation
const colour_rotation = clockwise ? ["red", "yellow", "blue"] : ["blue", "yellow", "red"];

// Loop thru the three cage rotations
for(let i = 0; i < 3; i++) {
let current_colour = colour_rotation[(colour_rotation.indexOf(colour_to_use) + i) % 3];

handlers['spawn']({
"sub_type": "item",
"id": 369,
"delay": i * 2600,
"sub_delay": (i + 1) * 3000,
"distance": 150,
"offset": COLOURS_OFFSETS[current_colour]
}, third_boss_entity);
handlers['spawn']({
"sub_type": "build_object",
"id": 1,
"ownerName": "yuyuko",
"message": "safe",
"delay": i * 2600,
"sub_delay": (i + 1) * 3000,
"distance": 150,
"offset": COLOURS_OFFSETS[current_colour]
}, third_boss_entity);
}

// clear out clockwise
setTimeout(()=> {
clockwise = null;
}, 12000);
}, 1000);
}

function change_colour(colour) {
colour_to_use = colour;
}
/* ------------------------------------------- */


module.exports = {

//一王 不愤怒
//firstboss, not enraged

//后跳+内外圈,安全区域:站里面+站外面
//Backstep+donuts, stay in, get out

"s-920-1000-1117-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "站里面↑+站外面↓"}],

//原地抬腿+内外圈,安全区域:站外面+站里面
//Stomp+donuts, get out, stay in

"s-920-1000-1116-0": [{"type": "text","sub_type": "message","message": "get out↓ + stay in↑","message_TW": "站外面↓+站里面↑"}],

//剑戳地2下+后方挥盾
//ground thrust 2x+shield swing

"s-920-1000-1109-0": [{"type": "text","sub_type": "message","message": "back attack","message_TW": "后方攻击"}],

//三圈顺序:全+外+内 站里面站外面
//Massive In-Out Big AoE+Outer AoE+Inner AoE

"s-920-1000-1130-0": [{"type": "text","sub_type": "message","message": "full>outer>inner","message_TW": "伤害顺序：全>外>内"}],


//一王愤怒
//firstboss, enraged

//后跳+内外圈,安全区域:站里面+站外面
//Backstep+donuts, stay in, get out

"s-920-1000-2117-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "站里面↑+站外面↓"}],

//原地抬腿+内外圈,安全区域:站外面+站里面
//Stomp+donuts, get out, stay in

"s-920-1000-2116-0": [{"type": "text","sub_type": "message","message": "get out↓ + stay in↑","message_TW": "站外面↓+站里面↑"}],

//剑戳地2下+后方挥盾
//ground thrust 2x+shield swing

"s-920-1000-2109-0": [{"type": "text","sub_type": "message","message": "back attack","message_TW": "后方攻击"}],

//愤怒时 三圈顺序:全+内+外
//enraged Massive In-Out Big AoE+Inner AoE+Outer AoE

"s-920-1000-2130-0": [{"type": "text","sub_type": "message","message": "full>inner>outer","message_TW": "伤害顺序：全>内>外"}],

//一王特殊技能
//firstboss special attack

//击飞攻击
//knockup attack

"s-920-1000-1300-0": EVENT_DELAY_FIRST_BOSS_HM,
	 
//二王 不愤怒
//secondboss, not enraged

//点名转身划刀
//target one player then turn aroud with swing

"s-920-2000-1108-0": [{"type": "text","sub_type": "message","message": "Target swing","message_TW": "点名划刀攻击"}],

//点名转身划刀,左手边伤害
//target one player then turn aroud with left swing

"s-920-2000-1113-0": [{"type": "text","sub_type": "message","message": "right hand swing","message_TW": "左手伤害"}],

//点名转身划刀,右手边伤害
//target one player then turn aroud with right swing

"s-920-2000-1114-0": [{"type": "text","sub_type": "message","message": "left hand swing","message_TW": "右手伤害"}],

//转圈攻击（1106）
//Spin attack

"s-920-2000-1106-0": [{"type": "text","sub_type": "message","message": "Spin attack","message_TW": "转圈攻击"}],

//后方攻击（1105）
//Back attack

"s-920-2000-1105-0": [{"type": "text","sub_type": "message","message": "Back attack","message_TW": "后方攻击"}],

//点名大跳晕人
//Random aggro stun

"s-920-2000-1104-0": [{"type": "text","sub_type": "message","message": "Random jump","message_TW": "点名大跳"}],


//眩晕攻击
//Stun attack

"s-920-2000-1110-0": [{"type": "text","sub_type": "message","message": "Stun attack","message_TW": "眩晕攻击"}],

//BOSS右手边划刀,安全区域：坦右,打左
//right hand side swing, tank goes to right, dps goes to left

"s-920-2000-1112-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"dps","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"heal","sub_type": "message","message": "left←","message_TW": "左←"}],

//BOSS左手边划刀,安全区域：坦左,打右
//left hand side swing, tank goes to left, dps goes to right

"s-920-2000-1111-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"dps","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"heal","sub_type": "message","message": "right→","message_TW": "右→"}],

//二王 愤怒
//secondboss,enraged

//转圈攻击（1106）
//Spin attack

"s-920-2000-2106-0": [{"type": "text","sub_type": "message","message": "Spin attack","message_TW": "转圈攻击"}],

//愤怒后方攻击（2105）
//enraged back attack

"s-920-2000-2105-0": [{"type": "text","sub_type": "message","message": "back attack","message_TW": "后方攻击"}], 

//点名大跳晕人
//Random aggro stun

"s-920-2000-2104-0": [{"type": "text","sub_type": "message","message": "Random jump","message_TW": "点名大跳"}],

//BOSS右手边划刀,安全区域：坦右,打左
//right hand side swing, tank goes to right, dps goes to left

"s-920-2000-2112-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"dps","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"heal","sub_type": "message","message": "left←","message_TW": "左←"}],

//BOSS左手边划刀,安全区域：坦左,打右
//left hand side swing, tank goes to left, dps goes to right

"s-920-2000-2111-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left←","message_TW": "左←"},
{"type": "text","class_position":"dps","sub_type": "message","message": "right→","message_TW": "右→"},
{"type": "text","class_position":"heal","sub_type": "message","message": "right→","message_TW": "右→"}],

//眩晕攻击
//Stun attack

"s-920-2000-2110-0": [{"type": "text","sub_type": "message","message": "Stun attack","message_TW": "眩晕攻击"}],

//点名转身划刀
//target one player then turn aroud with swing

"s-920-2000-2108-0": [{"type": "text","sub_type": "message","message": "Target swing","message_TW": "点名划刀攻击"}],

//点名转身划刀,左手边伤害
//target one player then turn aroud with left swing

"s-920-2000-2113-0": [{"type": "text","sub_type": "message","message": "right hand swing","message_TW": "左手伤害"}],

//点名转身划刀,右手边伤害
//target one player then turn aroud with right swing

"s-920-2000-2114-0": [{"type": "text","sub_type": "message","message": "left hand swing","message_TW": "右手伤害"}],


//二王特殊技能
//secondboss, special attacks

//红色鉴定,安全区域：15M外
//Red, stay 15m away

"s-920-2000-3119-0": [{"type": "text","sub_type": "message","message": "red: get out↓","message_TW": "红色：外↓"}],

//蓝色鉴定,安全区域：15M内（3220）
//Blue, stay near within 15m

"s-920-2000-3220-0": [{"type": "text","sub_type": "message","message": "blue: stay in↑","message_TW": "蓝色：内↑"}],

//眩晕圈（3116）+外圈伤害（3118）
//stun+donut

"s-920-2000-3116-0": [{"type": "text","sub_type": "message","message": "dodge + stay in↑","message_TW": "躲避+内↑"}],

//点名喷长条毒（3107）
//random aggro poison（3107）


//二王HP血量检测
//secondboss Health tips

//BOSS血量低于50%后,左右划刀变成双面
//50%

"h-920-2000-99": [{"type": "func","func": start_boss}],
"h-920-2000-50": [{"type": "func","func": print_fifty}],

//BOSS血量20%后,会有概率出现连续鉴定
//20%

"h-920-2000-21": [{"type": "func","func": start_boss}],
"h-920-2000-20": [	{"type": "func","func": print_twenty}],

//三王 不愤怒
//thirdboss, unenraged

//进场的推人红圈
//pushback when engaging

"s-920-3000-1315-0": [{"type": "text","sub_type": "message","message": "Pushback","message_TW": "开场推人"}],

//点名大跳晕人（1107）
//random aggro stun

"s-920-3000-1107-0": [{"type": "text","sub_type": "message","message": "Random jump","message_TW": "点名大跳"}],

//点名出剑刃风暴（1204）
//random target energy beam
"s-920-3000-1204-0": [{"type": "text","sub_type": "message","message": "energy beam","message": "点名剑气"}],

//剑舞前戳+逆时针旋转+右手扇形攻击+外到内甜甜圈 注:坦右边安全,打左边安全请自行更改
//heart thrust+anticlockwise spin+right swipe+AOEs from out to in

"s-920-3000-1109-0": SPAWNING_FIRST_CIRCLE_FLOWERS,	

//剑舞前戳+顺时针旋转+左手扇形攻击+内到外甜甜圈 注:坦左边安全,打右边安全请自行更改
//heart thrust+clockwise spin+left swipe+AOEs from in to out

"s-920-3000-1111-0": SPAWNING_SECOND_CIRCLE_FLOWERS,

//前后砸
//front, back slam

"s-920-3000-1113-0": [{"type": "text","sub_type": "message","message": "front, back slam","message_TW": "前后砸"}],

//旋转攻击
//spinning attack

"s-920-3000-1115-0": [{"type": "text","sub_type": "message","message": "spinning attack","message_TW": "旋转攻击"}],

//2连斜上挥（1104）后接的后砸（1119）
//golf swing x2 + back slam

"s-920-3000-1104-0": [{"type": "func","func": back_attack_HM}],

//后闪+旋转or前后砸
//teleport back+ spin or front, back slam

"s-920-3000-1202-0": [{"type": "text","sub_type": "message","message": "spin or front,back slam","message_TW": "旋转or前后砸"}],

//蓝球+镭射
//target energy beam（almost tank ?_?）

"s-920-3000-1120-0": [{"type": "text","sub_type": "message","message": "energy beam","message_TW": "剑气攻击"}],

//三王 愤怒
//thirdboss, enraged

//点名出剑刃风暴,手里握篮球挥篮球（1204）,剑刃风暴（1121）
//random aggro, holding blue orb, energy beam

"s-920-3000-2204-0": [{"type": "text","sub_type": "message","message": "enraged:energy beam","message_TW": "愤怒：点名剑气"}],

//剑舞前戳+逆时针旋转+右手扇形攻击+外到内甜甜圈 注:坦右边安全,打左边安全请自行更改
//heart thrust+anticlockwise spin+right swipe+AOEs from out to in

"s-920-3000-2109-0": SPAWNING_FIRST_CIRCLE_FLOWERS,

//剑舞前戳+顺时针旋转+左手扇形攻击+内到外甜甜圈 注:坦左边安全,打右边安全请自行更改
//heart thrust+clockwise spin+left swipe+AOEs from in to out

"s-920-3000-2111-0": SPAWNING_SECOND_CIRCLE_FLOWERS,	

//前后砸
//front, back slam

"s-920-3000-2113-0": [{"type": "text","sub_type": "message","message": "front, back slam","message_TW": "前后砸"}],

//2连斜上挥（1104）后接的后砸（1119）
//golf swing x2 + back slam

"s-920-3000-2104-0": [{"type": "func","func": back_attack_HM}],

//旋转攻击
//spinning attack

"s-920-3000-2115-0": [{"type": "text","sub_type": "message","message": "spinning attack","message_TW": "旋转攻击"}],

//点名大跳晕人（1107）
//random aggro stun

"s-920-3000-2107-0": [{"type": "text","sub_type": "message","message": "Random jump","message_TW": "点名大跳"}],

//后闪+旋转or前后砸
//teleport back+ spin or front, back slam

"s-920-3000-2202-0": [{"type": "text","sub_type": "message","message": "spin or front,back slam","message_TW": "旋转or前后砸"}],

//蓝球+镭射
//target energy beam（almost tank ?_?）

"s-920-3000-2120-0": [{"type": "text","sub_type": "message","message": "energy beam","message_TW": "剑气攻击"}],

//三王特殊技能
//thirdboss, special attacks

//召唤分身出点名剑气
//clones, random aggro, energy beam

"s-920-3000-1400-0": [{"type": "text","sub_type": "message","message": "beam","message_TW": "召咄分身：点名剑气"}],

//召唤分身出旋转攻击
//clones, random aggro, spin attack

"s-920-3000-1401-0": [{"type": "text","sub_type": "message","message": "spin","message_TW": "召咄分身：旋转攻击"}],

//三王色鉴颜色位置标识
//color marks in cage
/* -------------------------------- */ 
// 红色 red
"ae-0-0-9203037": [{"type": "text","sub_type": "message","message": "Red","message_TW": "红色"},
{"type": "func","func": change_colour.bind(null, 'red')}],

// 黄色 yellow
"ae-0-0-9203038": [{"type": "text","sub_type": "message","message": "Yellow","message_TW": "黄色"},
{"type": "func","func": change_colour.bind(null, 'yellow')}],


// 蓝色 blue
"ae-0-0-9203039": [{"type": "text","sub_type": "message","message": "Blue","message_TW": "蓝色"},
{"type": "func","func": change_colour.bind(null, 'blue')}],

// 逆时针色鉴
// anti-clockwise

"s-920-3000-1317-0": [{"type": "func","func": set_clockwise.bind(null, false)}],

// 顺时针色鉴
// clockwise

"s-920-3000-1318-0": [{"type": "func","func": set_clockwise.bind(null, true)}]

    /* -------------------------------- */
};
