

// AAHM 
//made by Yuyuko



const SPAWN_CIRCLES = true;
const stepone = 2 * Math.PI / 40;//40 flowers in total  if u think the flower is too many ,u can change the num to smaller.
const steptwo = 2 * Math.PI / 72;//72 flowers in total
//内圈
let SPAWNING_FIRST_CIRCLE_FLOWERS = [];
let SPAWNING_SECOND_CIRCLE_FLOWERS = [];
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

SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "text","class_position":"tank","sub_type": "message","message": "right→>out to in","message_TW": "右→ + 从外到内"});
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "text","class_position":"dps","sub_type": "message","message": "left←>out to in","message_TW": "左← + 从外到内"});
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "text","class_position":"heal","sub_type": "message","message": "left←>out to in","message_TW": "左← + 从外到内"});
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "spawn","id": 6,"sub_delay": 2500,"distance": 150,"offset": -1});
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "spawn","id": 6,"sub_delay": 2500,"distance": 150,"offset": -2.3});


//剑舞前戳+顺时针旋转+左手扇形攻击+内到外甜甜圈


SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "text","class_position":"tank","sub_type": "message","message": "left←>in to out","message_TW": "左← + 从内到外"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "text","class_position":"dps","sub_type": "message","message": "right→>in to out","message_TW": "右→ + 从内到外"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "text","class_position":"heal","sub_type": "message","message": "right→>in to out","message_TW": "右→ + 从内到外"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "spawn","id": 6,"sub_delay": 2500,"distance": 150,"offset": 1});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "spawn","id": 6,"sub_delay": 2500,"distance": 150,"offset": 2.3});



//三王后砸前置计数
//thirdboss: counter of back attacks
let counter = 0;//后砸计数 count for back attacks
let timer;//后砸统计重置时间 reset time 

   function back_attack_HM(handlers) {
	  clearTimeout(timer); //3秒内的判定有效
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
    
 "h-920-1000-100": [{"type": "text","sub_type": "notification","delay": 2000,"message": "proxy频道输入:補助 help <br>获取更多使用信息!"}],

//一王

"s-920-1000-117-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_TW": "站里面↑+站外面↓"}],
"s-920-1000-116-0": [{"type": "text","sub_type": "message","message": "get out↓ + stay in↑","message_TW": "站外面↓+站里面↑"}],
"s-920-1000-109-0": [{"type": "text","sub_type": "message","message": "back attack","message_TW": "后方攻击"}],
"s-920-1000-130-0": [{"type": "text","sub_type": "message","message": "full>inner>outer","message_TW": "伤害顺序：全>内>外"}],
"s-920-1000-300-0": [{"type": "text","sub_type": "message","delay": 600,"message": "Dodge!","message_TW": "注意躲避"}],

//二王 
"s-920-2000-106-0": [{"type": "text","sub_type": "message","message": "Spin attack","message_TW": "转圈攻击"}],
"s-920-2000-105-0": [{"type": "text","sub_type": "message","message": "back attack","message_TW": "后方攻击"}], 
"s-920-2000-104-0": [{"type": "text","sub_type": "message","message": "Random jump","message_TW": "点名大跳"}],
//BOSS右手边划刀,安全区域：坦右,打左
"s-920-2000-112-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right→","message_TW": "右→"},
                     {"type": "text","class_position":"dps","sub_type": "message","message": "left←","message_TW": "左←"},
                     {"type": "text","class_position":"heal","sub_type": "message","message": "left←","message_TW": "左←"}],
//BOSS左手边划刀,安全区域：坦左,打右
"s-920-2000-111-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left←","message_TW": "左←"},
                     {"type": "text","class_position":"dps","sub_type": "message","message": "right→","message_TW": "右→"},
                     {"type": "text","class_position":"heal","sub_type": "message","message": "right→","message_TW": "右→"}],

"s-920-2000-110-0": [{"type": "text","sub_type": "message","message": "Stun attack","message_TW": "眩晕攻击"}],
"s-920-2000-108-0": [{"type": "text","sub_type": "message","message": "Target swing","message_TW": "点名划刀攻击"}],
"s-920-2000-113-0": [{"type": "text","sub_type": "message","message": "right hand swing","message_TW": "左手伤害"}],
"s-920-2000-114-0": [{"type": "text","sub_type": "message","message": "left hand swing","message_TW": "右手伤害"}],
"s-920-2000-119-0": [{"type": "text","sub_type": "message","message": "red: get out↓","message_TW": "红色：外↓"}],
"s-920-2000-220-0": [{"type": "text","sub_type": "message","message": "blue: stay in↑","message_TW": "蓝色：内↑"}],
"s-920-2000-116-0": [{"type": "text","sub_type": "message","message": "dodge + stay in↑","message_TW": "躲避+内↑"}],
"s-920-2000-107-0": [{"type": "text","sub_type": "message","message": "dodge + stay in↑","message_TW": "点名喷长条毒"}],

//二王HP血量检测
"h-920-2000-50": [{"type": "text","sub_type": "message","message": "50%"}],
"h-920-2000-20": [{"type": "text","sub_type": "message","message": "20%"}],


//三王 

//进场的推人红圈

"s-920-3000-315-0": [{"type": "text","sub_type": "message","message": "Pushback","message_TW": "开场推人"}],
"s-920-3000-204-0": [{"type": "text","sub_type": "message","message": "enraged:energy beam","message_TW": "愤怒：点名剑气"}],
"s-920-3000-113-0": [{"type": "text","sub_type": "message","message": "front, back slam","message_TW": "前后砸"}],
"s-920-3000-115-0": [{"type": "text","sub_type": "message","message": "spinning attack","message_TW": "旋转攻击"}],
"s-920-3000-107-0": [{"type": "text","sub_type": "message","message": "Random jump","message_TW": "点名大跳"}],
"s-920-3000-202-0": [{"type": "text","sub_type": "message","message": "spin or front,back slam","message_TW": "旋转or前后砸"}],
"s-920-3000-120-0": [{"type": "text","sub_type": "message","message": "energy beam","message_TW": "剑气攻击"}],
"s-920-3000-400-0": [{"type": "text","sub_type": "message","message": "beam","message_TW": "召咄分身：点名剑气"}],
"s-920-3000-401-0": [{"type": "text","sub_type": "message","message": "spin","message_TW": "召咄分身：旋转攻击"}],

//2连斜上挥（1104）后接的后砸（1119）

"s-920-3000-104-0": [{"type": "func","func": back_attack_HM}],

//剑舞前戳+逆时针旋转+右手扇形攻击+外到内甜甜圈 注:坦右边安全,打左边安全请自行更改

"s-920-3000-109-0": SPAWNING_FIRST_CIRCLE_FLOWERS,

//剑舞前戳+顺时针旋转+左手扇形攻击+内到外甜甜圈 注:坦左边安全,打右边安全请自行更改

"s-920-3000-111-0": SPAWNING_SECOND_CIRCLE_FLOWERS,	

//三王色鉴颜色位置标识
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
	
    "s-920-3000-317-0": [{"type": "func","func": set_clockwise.bind(null, false)}],
    
	// 顺时针色鉴
    
	"s-920-3000-318-0": [{"type": "func","func": set_clockwise.bind(null, true)}]

    /* -------------------------------- */
};
