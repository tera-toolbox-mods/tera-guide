// 
//made by michengs
let notice_guide = true;
let player, entity, library, effect;
let power = true;
let Level = 0;
let powerMsg = '';

function guid_voice(handlers) {   
if(notice_guide) {
handlers['text']({
"sub_type": "message",
"delay": 2000,
"message_TW": "获取更多信息 proxy频道输入:補助 help"
});

handlers['text']({
"sub_type": "notification",
"delay": 2000,
"message_TW": "获取更多信息 proxy频道输入:補助 help"
});
}
notice_guide = false;

}		

function start_boss() {
power = false;
Level = 0;
powerMsg = '';
}

function action_boss() {
power = true;
Level = 0;
powerMsg = '';
}

function action_level_boss() {
Level = 0;
}

function power_attack(handlers) {
if(power) {	
 Level++;
powerMsg = `{` + Level + `} `;
handlers['text']({
"sub_type": "message",
"message_TW": powerMsg
});
}
}


const stepone = 2 * Math.PI / 20;//40 
let SPAWNING_FIRST_CIRCLE_FLOWERS = [];
for(let angle = -Math.PI; angle <= Math.PI; angle += stepone) {
	SPAWNING_FIRST_CIRCLE_FLOWERS.push({
	    "type": "spawn",
        "id": 553,
        "sub_delay": 3000,
        "distance": 260,
        "offset": angle
	});
}

const sign_distances = [25, 50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500]; //平分线B
let rings_left_right = [];
let rings_front_left_back = [];
let rings_front_right_back = [];
let rings_back_left = [];
let rings_back_right = [];

for (let distance of sign_distances) {
    rings_left_right.push({
    	"type": "spawn",
    	"id": 553,	
    	"sub_delay": 5000,
    	"distance": distance,
    	"offset": -1.57
    },
	{
    	"type": "spawn",
    	"id": 553,	
    	"sub_delay": 5000,
    	"distance": distance,
    	"offset": 1.57
    });
	
    rings_front_left_back.push({
    	"type": "spawn",
    	"id": 553,		
    	"sub_delay": 8000,
    	"distance": distance,
    	"offset": 0
    },
	{
    	"type": "spawn",
    	"id": 553,	
    	"sub_delay": 8000,
    	"distance": distance,
    	"offset": 3.14
    },
		{
		"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 8000,
		"distance": 200,
		"ownerName": "SAFE SPOT",
		"message": "SAFE",
		"offset": 1.57
	},
	{
		"type":"spawn",
		"sub_type": "item",
		"id": 98260,
		"sub_delay": 8000,
		"distance": 200,
		"offset": 1.57});

    rings_front_right_back.push({
    	"type": "spawn",
    	"id": 553,		
    	"sub_delay": 8000,
    	"distance": distance,
    	"offset": 0
    },
	{
    	"type": "spawn",
    	"id": 553,	
    	"sub_delay": 8000,
    	"distance": distance,
    	"offset": 3.14
    },
		{
		"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 8000,
		"distance": 200,
		"ownerName": "SAFE SPOT",
		"message": "SAFE",
		"offset": -1.57
	},
	{
		"type":"spawn",
		"sub_type": "item",
		"id": 98260,
		"sub_delay": 8000,
		"distance": 200,
		"offset": -1.57});

    rings_back_right.push({
			"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 8000,
		"distance": 320,
		"ownerName": "SAFE SPOT",
		"message": "SAFE",
		"offset": -2.7
	},
	{
		"type":"spawn",
		"sub_type": "item",
		"id": 98260,
		"sub_delay": 8000,
		"distance": 320,
		"offset": -2.7
	
	});	
    rings_back_left.push({
			"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 8000,
		"distance": 320,
		"ownerName": "SAFE SPOT",
		"message": "SAFE",
		"offset": 2.7
	},
	{
		"type":"spawn",
		"sub_type": "item",
		"id": 98260,
		"sub_delay": 8000,
		"distance": 320,
		"offset": 2.7
	
	});					
}		




module.exports = {



 "h-982-1000-100": [{"type": "func","func": guid_voice}],
 

 
 

	
 //一王
 
 
  "s-982-1000-106-0": [{"type": "text","sub_type": "message","message": "重击" }],
  "s-982-1000-107-0": [{"type": "text","sub_type": "message","message": "后喷击退" }],
  "s-982-1000-108-0": [{"type": "text","sub_type": "message","message": "点名击飞" }], 
  "s-982-1000-109-0": [{"type": "text","sub_type": "message","message": "滚石" }],
  "s-982-1000-110-0": [{"type": "text","sub_type": "message","message": "滚石" }],
  "s-982-1000-301-0": [{"type": "text","sub_type": "message","message": "食人花眩晕" }], 
  "s-982-1000-307-0": [{"type": "text","sub_type": "message","message": "笼子禁锢" }],
  "s-982-1000-309-0": [{"type": "text","sub_type": "message","message": "1朵花-鉴定!!" }],
  "s-982-1000-310-0": [{"type": "text","sub_type": "message","message": "2朵花-鉴定!!" }], 
  "s-982-1000-116-0": [{"type": "text","sub_type": "message","message": "全屏攻击!!" }],
  "s-982-1000-312-0": [{"type": "text","sub_type": "message","message": "金色花!!" }],

 
  //二王
  
  "s-982-2000-105-0": [{"type": "text","sub_type": "message","message": "翻滚" }], 
  "s-982-2000-113-0": [{"type": "text","sub_type": "message","message": "双手眩晕" }],
  "s-982-2000-114-0": [{"type": "text","sub_type": "message","message": "三连地板靠近" }].concat(SPAWNING_FIRST_CIRCLE_FLOWERS),
  "s-982-2000-116-0": [{"type": "text","sub_type": "message","message": "前砸 后砸" }].concat(rings_left_right), 
  "s-982-2000-301-0": [{"type": "text","sub_type": "message","message": "捶地远离 旋转击退" }].concat(SPAWNING_FIRST_CIRCLE_FLOWERS),
  "s-982-2000-302-0": [{"type": "text","sub_type": "message","message": "旋转靠近 捶地击飞" }].concat(SPAWNING_FIRST_CIRCLE_FLOWERS), 
//三王
  "h-982-3000-99": [{"type": "func","func": start_boss}],
 
  "s-982-3000-118-0": [{"type": "text","sub_type": "message","message": "三连击左-右-喷" },
   {"type": "func","func": power_attack} 
  ],
  "s-982-3000-143-0": [{"type": "text","sub_type": "message","message": "左后" },
     {"type": "func","func": power_attack} 
  ],
  "s-982-3000-145-0": [{"type": "text","sub_type": "message","message": "左后" },
     {"type": "func","func": power_attack} 
  ], 
  "s-982-3000-146-0": [{"type": "text","sub_type": "message","message": "左后扩散" },
     {"type": "func","func": power_attack} 
  ].concat(rings_back_right),
  "s-982-3000-154-0": [{"type": "text","sub_type": "message","message": "左后扩散" },
     {"type": "func","func": power_attack} 
  ].concat(rings_back_right),
  "s-982-3000-144-0": [{"type": "text","sub_type": "message","message": "右后" }], 
  "s-982-3000-147-0": [{"type": "text","sub_type": "message","message": "右后" },
     {"type": "func","func": power_attack} 
  ],
  "s-982-3000-148-0": [{"type": "text","sub_type": "message","message": "右后扩散" },
     {"type": "func","func": power_attack} 
  ].concat(rings_back_left),
  "s-982-3000-155-0": [{"type": "text","sub_type": "message","message": "右后扩散" },
     {"type": "func","func": power_attack} 
  ].concat(rings_back_left),
  "s-982-3000-161-0": [{"type": "text","sub_type": "message","message": "后砸 前砸" },
     {"type": "func","func": power_attack} 
  ],
  "s-982-3000-162-0": [{"type": "text","sub_type": "message","message": "后砸 前砸" },
     {"type": "func","func": power_attack} 
  ],
  "s-982-3000-213-0": [{"type": "text","sub_type": "message","message": "尾巴" },
     {"type": "func","func": power_attack} 
  ],
  "s-982-3000-215-0": [{"type": "text","sub_type": "message","message": "尾巴" },
     {"type": "func","func": power_attack} 
  ], 
  "s-982-3000-139-0": [{"type": "text","sub_type": "message","message": "右边安全" }].concat(rings_front_right_back),
  "s-982-3000-150-0": [{"type": "text","sub_type": "message","message": "右边安全" }].concat(rings_front_right_back),
  "s-982-3000-141-0": [{"type": "text","sub_type": "message","message": "左边安全" }].concat(rings_front_left_back), 
  "s-982-3000-152-0": [{"type": "text","sub_type": "message","message": "左边安全" }].concat(rings_front_left_back),
  "s-982-3000-300-0": [{"type": "text","sub_type": "message","message": "一次觉醒 推人" },
  {"type": "func","func": action_boss}],
  "s-982-3000-399-0": [{"type": "text","sub_type": "message","message": "二次觉醒 推人" },
  {"type": "func","func": action_level_boss}], 
  "s-982-3000-360-0": [{"type": "text","sub_type": "message","message": "爆炸爆炸" },
  {"type": "func","func": action_level_boss}] 





};