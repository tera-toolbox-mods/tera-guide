
//made by michengs

let player, entity, library, effect;

let boss = 01;

function skilld_event(skillid, handlers, event, ent, dispatch) {
	
	
if (skillid === 203 && boss === 01 ) {
 counter = 0;		
handlers['text']({
"sub_type": "message",
"message_TW": "死亡+1!!"
});	



setTimeout(function () {
	if (boss === 01){
handlers['text']({
"sub_type": "message",
"message_TW": "坦位!",
"message": "tank"
});	
}
		   }, 10000);























}
}


module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},


 

 
 

	  
 "s-470-1000-1105-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "大跳" }], 	
 "s-470-1000-1106-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "点名球砸" }], 	 
 "s-470-1000-1120-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "拉人 " }], 	
 "s-470-1000-1114-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "点名喷" }], 	
 "s-470-1000-1201-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "眩暈" }], 	
 "s-470-1000-1307-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "炸彈" }], 	//炸彈 2人------------判断
 
 
// "s-470-1000-1309-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "远离 " }], 	//309 -------------?
// "s-470-1000-1311-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "靠近 " }], 	//311 ------------?
 
 
 
 "s-470-1000-2105-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "大跳" }], 
 "s-470-1000-2106-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "点名球砸" }], 	 
 "s-470-1000-2107-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "眩暈" }],
 "s-470-1000-2114-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "点名喷" }],  
 

 




 "s-470-1000-3106-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "星星位 " }], 	
 
 
// "s-470-1000-3208-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "保护膜远离" }], 	//3213      3208 假----------判断
// "s-470-1000-3212-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "殺光附件人 " }]	//假         杀光附近----------判断
 
 
 


 

  "qb-470-600-470053": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "开始" }], 
 
 
  "qb-470-1000-470019": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "判别" }
                   
  ]
 
 
 
 
 
};