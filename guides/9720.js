// AANM
//made by Yuyuko

let counter = 0;
let timer;

const TIMER_DELAY = 600;

const ITEM_SPAWNED_ON_SWIPE_ID = 556;
const ITEM_SPAWNED_ON_SWIPE_SUB_DELAY = 2500;
const ITEM_SPAWNED_ON_SWIPE_DISTANCE = 150;

//一王击飞躲避提示延迟推送
// fistboss: Knock up mech, AKA 'Your flesh will be deleted' callout

const EVENT_DELAY_FIRST_BOSS_NM = [
{
        "type": "text",
        "sub_type": "notification",
        "delay": TIMER_DELAY,
        "message": "Dodge!",
		"message_TW": "&#x6CE8;&#x610F;&#x8EB2;&#x907F;"
    },
];

//三王后砸前置计数
// thirdboss: counter of back attacks

   function back_attack_NM(handlers) {
	  clearTimeout(timer);
      counter++;
    if(counter >= 2) {
        handlers['text']({
            "sub_type": "notification",
			"message": "Back attack",
            "message_TW": "&#x540E;&#x7838;"
        });
    }
    timer = setTimeout(()=>{
        counter = 0;
    }, 3000);
}

module.exports = {

//一王 不愤怒
//firstboss, not enraged

    //后跳+内外圈,安全区域：站里面+站外面
	//Backstep+donuts, stay in, get out
	
     "s-720-1000-1117": [{"type": "text","sub_type": "notification","message": "stay in&#x2191; + get out&#x2193;","message_TW": "&#x7AD9;&#x91CC;&#x9762;&#x2191;+&#x7AD9;&#x5916;&#x9762;&#x2193;"}],
	
	//原地抬腿+内外圈,安全区域：站外面+站里面
	//Stomp+donuts, get out, stay in
	
	 "s-720-1000-1116": [{"type": "text","sub_type": "notification","message": "get out&#x2193; + stay in&#x2191;","message_TW": "&#x7AD9;&#x5916;&#x9762;&#x2193;+&#x7AD9;&#x91CC;&#x9762;&#x2191;"}],
    
	//剑戳地2下+后方挥盾
	//ground thrust 2x+shield swing
	
	 "s-720-1000-1109": [{"type": "text","sub_type": "notification","message": "back attack","message_TW": "&#x540E;&#x65B9;&#x653B;&#x51FB;"}],

//一王 愤怒
//firstboss, enraged

	//后跳+内外圈,安全区域：站里面+站外面
	//Backstep+donuts, stay in, get out
	
     "s-720-1000-2117": [{"type": "text","sub_type": "notification","message": "stay in&#x2191; + get out&#x2193;","message_TW": "&#x7AD9;&#x91CC;&#x9762;&#x2191;+&#x7AD9;&#x5916;&#x9762;&#x2193;"}],
	
	//原地抬腿+内外圈,安全区域：站外面+站里面
	//Stomp+donuts, get out, stay in
	
	 "s-720-1000-2116": [{"type": "text","sub_type": "notification","message": "get out&#x2193; + stay in&#x2191;","message_TW": "&#x7AD9;&#x5916;&#x9762;&#x2193;+&#x7AD9;&#x91CC;&#x9762;&#x2191;"}],
    
	//剑戳地2下+后方挥盾
	//ground thrust 2x+shield swing
	
	 "s-720-1000-2109": [{"type": "text","sub_type": "notification","message": "back attack","message_TW": "&#x540E;&#x65B9;&#x653B;&#x51FB;"}],
	 
//一王特殊技能
//firstboss special attack
	 
	 //击飞攻击
	 //knockup attack
	 
	 "s-720-1000-1300": EVENT_DELAY_FIRST_BOSS_NM,

//二王 不愤怒
//secondboss, not enraged

    //转圈攻击（1106）
	//Spin attack
	
	"s-720-2000-1106": [{"type": "text","sub_type": "notification","message": "Spin attack","message_TW": "&#x8F6C;&#x5708;&#x653B;&#x51FB;"}],
	
    //后方攻击（1105）
	//Back attack
	
    "s-720-2000-1105": [{"type": "text","sub_type": "notification","message": "Back attack","message_TW": "&#x540E;&#x65B9;&#x653B;&#x51FB;"}],
	
	//点名大跳晕人
	//Random aggro stun
	
    "s-720-2000-1104": [{"type": "text","sub_type": "notification","message": "Random jump","message_TW": "&#x70B9;&#x540D;&#x5927;&#x8DF3;"}],
   
   //眩晕攻击
   //Stun attack
   
	"s-720-2000-1110": [{"type": "text","sub_type": "notification","message": "Stun attack","message_TW": "&#x7729;&#x6655;&#x653B;&#x51FB;"}],
	
	//BOSS右手边划刀,安全区域：坦右,打左
	//right hand side swing, tank goes to right, dps goes to left

	"s-720-2000-1112": [{"type": "text","class_position":"tank","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"},
	                    {"type": "text","class_position":"dps","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"},
	                    {"type": "text","class_position":"heal","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"}],

	//BOSS左手边划刀,安全区域：坦左,打右
	//left hand side swing, tank goes to left, dps goes to right
	
	"s-720-2000-1111": [{"type": "text","class_position":"tank","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"},
	                    {"type": "text","class_position":"dps","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"},
	                    {"type": "text","class_position":"heal","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"}],

//二王 愤怒
//secondboss,enraged

    //转圈攻击（2106）
	//Spin attack
	
	"s-720-2000-2106": [{"type": "text","sub_type": "notification","message": "Spin attack","message_TW": "&#x8F6C;&#x5708;&#x653B;&#x51FB;"}], 
	
    //愤怒后方攻击（2105）
	//enraged back attack
	
    "s-720-2000-2105": [{"type": "text","sub_type": "notification","message": "back attack","message_TW": "&#x540E;&#x65B9;&#x653B;&#x51FB;"}], 
	
	//点名大跳晕人
	//Random aggro stun
	
    "s-720-2000-2104": [{"type": "text","sub_type": "notification","message": "Random aggro jump","message_TW": "&#x70B9;&#x540D;&#x5927;&#x8DF3;"}],	
	
	//BOSS右手边划刀,安全区域：坦右,打左
	//right hand side swing, tank goes to right, dps goes to left
	
	"s-720-2000-2112": [{"type": "text","class_position":"tank","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"},
	                    {"type": "text","class_position":"dps","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"},
	                    {"type": "text","class_position":"heal","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"}],
						
	//BOSS左手边划刀,安全区域：坦左,打右
	//left hand side swing, tank goes to left, dps goes to right
	
	"s-720-2000-2111": [{"type": "text","class_position":"tank","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"},
	                    {"type": "text","class_position":"dps","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"},
	                    {"type": "text","class_position":"heal","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"}],

	//眩晕攻击
    //Stun attack
	
	"s-720-2000-2110": [{"type": "text","sub_type": "notification","message": "Stun attack","message_TW": "&#x7729;&#x6655;&#x653B;&#x51FB;"}],

//二王特殊技能
//secondboss, special attacks

    //红色鉴定,安全区域：15M外
	//Red, stay 15m away
	
	"s-720-2000-3119": [{"type": "text","sub_type": "notification","message": "red: get out&#x2193;","message_TW": "&#x7EA2;&#x8272;&#xFF1A;&#x5916;&#x2193;"}],
	
    //蓝色鉴定,安全区域：15M内（3220）
	//Blue, stay near within 15m
	
	"s-720-2000-3220": [{"type": "text","sub_type": "notification","message": "blue: stay in&#x2191;","message_TW": "&#x84DD;&#x8272;&#xFF1A;&#x5185;&#x2191;"}],
	
    //眩晕圈（3116）+外圈伤害（3118）
	//stun+donut
	
    "s-720-2000-3116": [{"type": "text","sub_type": "notification","message": "dodge + stay in&#x2191;","message_TW": "&#x8EB2;&#x907F;+&#x5185;&#x2191;"}],
	
	//点名喷长条毒（3107）
	//random aggro poison（3107）

//三王 不愤怒
//thirdboss, unenraged

    //进场的推人红圈
	//pushback when engaging
	
     "s-720-3000-1315": [{"type": "text","sub_type": "notification","message": "Pushback","message_TW": "&#x5F00;&#x573A;&#x63A8;&#x4EBA;"}],
	 
	//点名大跳晕人（1107）
	//random aggro stun
	
    "s-720-3000-1107": [{"type": "text","sub_type": "notification","message": "Random jump","message_TW": "&#x70B9;&#x540D;&#x5927;&#x8DF3;"}],
	
	//点名出剑刃风暴,手里握篮球挥篮球（1120）,剑刃风暴（1121）
	//random aggro, holding blue orb, energy beam
	
    "s-720-3000-1204": [{"type": "text","sub_type": "notification","message": "energy beam","message_TW": "&#x70B9;&#x540D;&#x5251;&#x6C14;"}],
	
    //剑舞前戳+逆时针旋转+右手扇形攻击 注：坦右边安全,打左边安全请自行更改
	//heart thrust+anticlockwise spin+right swipe
	
    "s-720-3000-1109": [{"type": "text","class_position":"tank","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"},
	                    {"type": "text","class_position":"dps","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"},
	                    {"type": "text","class_position":"heal","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"},
	
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
	
	"s-720-3000-1111": [{"type": "text","class_position":"tank","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"},
	                    {"type": "text","class_position":"dps","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"},
	                    {"type": "text","class_position":"heal","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"},
   
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
   
	"s-720-3000-1113": [{"type": "text","sub_type": "notification","message": "front, back slam","message_TW": "&#x524D;&#x540E;&#x7838;"}],
	
    //旋转攻击
	//spinning attack
	
	"s-720-3000-1115": [{"type": "text","sub_type": "notification","message": "spinning attack","message_TW": "&#x65CB;&#x8F6C;&#x653B;&#x51FB;"}],
	
    //2连斜上挥（1104）后接的后砸（1119）
	//golf swing x2 + back slam
	
	"s-720-3000-1104": [{"type": "func","func": back_attack_NM}],
	
	//后闪+旋转or前后砸
	//teleport back+ spin or front, back slam
	
	"s-720-3000-1202": [{"type": "text","sub_type": "notification","message": "spin or front,back slam","message_TW": "&#x65CB;&#x8F6C;or&#x524D;&#x540E;&#x7838;"}],
	
//三王 愤怒
//thirdboss, enraged

	//点名出剑刃风暴,手里握篮球挥篮球（1204）,剑刃风暴（1121）
	//random aggro, holding blue orb, energy beam
	
    "s-720-3000-2204": [{"type": "text","sub_type": "notification","message": "enraged:energy beam","message_TW": "&#x6124;&#x6012;&#xFF1A;&#x70B9;&#x540D;&#x5251;&#x6C14;"}],
    
	//剑舞前戳+逆时针旋转+右手扇形攻击 注：坦右边安全,打左边安全请自行更改
	//heart thrust+anticlockwise spin+right swipe
	
    "s-720-3000-2109": [{"type": "text","class_position":"tank","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"},
	                    {"type": "text","class_position":"dps","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"},
	                    {"type": "text","class_position":"heal","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"},
	
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
	
	"s-720-3000-2111": [{"type": "text","class_position":"tank","sub_type": "notification","message": "left&#x2190;","message_TW": "&#x5DE6;&#x2190;"},
	                    {"type": "text","class_position":"dps","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"},
	                    {"type": "text","class_position":"heal","sub_type": "notification","message": "right&#x2192;","message_TW": "&#x53F3;&#x2192;"},
	
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
	
	"s-720-3000-2113": [{"type": "text","sub_type": "notification","message": "front, back slam","message_TW": "&#x524D;&#x540E;&#x7838;"}],
	
    //愤怒2连斜上挥（2104）后接的后砸（2119）
	//golf swing x2 + back slam
	"s-720-3000-2104": [{"type": "func","func": back_attack_NM}],
	
    //旋转攻击
	//spinning attack
	
	"s-720-3000-2115": [{"type": "text","sub_type": "notification","message": "spinning attack","message_TW": "&#x65CB;&#x8F6C;&#x653B;&#x51FB;"}],
	
	//点名大跳晕人（1107）
	//random aggro stun
	
    "s-720-3000-2107": [{"type": "text","sub_type": "notification","message": "Random jump","message_TW": "&#x70B9;&#x540D;&#x5927;&#x8DF3;"}],
	
    //后闪+旋转or前后砸
	//teleport back+ spin or front, back slam
	
	"s-720-3000-2202": [{"type": "text","sub_type": "notification","message": "spin or front,back slam","message_TW": "&#x65CB;&#x8F6C;or&#x524D;&#x540E;&#x7838;"}],

//三王特殊技能
//thirdboss, special attacks
 
	//召唤分身出点名剑气
	//clones, random aggro, energy beam
	
	"s-720-3000-1400": [{"type": "text","sub_type": "notification","message": "beam","message_TW": "&#x53EC;&#x5524;&#x5206;&#x8EAB;&#xFF1A;&#x70B9;&#x540D;&#x5251;&#x6C14;"}],
	
	//召唤分身出旋转攻击
	//clones, random aggro, spin attack
	
    "s-720-3000-1401": [{"type": "text","sub_type": "notification","message": "spin","message_TW": "&#x53EC;&#x5524;&#x5206;&#x8EAB;&#xFF1A;&#x65CB;&#x8F6C;&#x653B;&#x51FB;"}]

};