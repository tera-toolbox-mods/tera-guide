
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

 //"h-467-46701-100": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "100" }], 	  
  
// "s-467-46701-101-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "101" }], 	 
	 
// "s-467-46704-101-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "101" }], 	 
 //"s-467-46704-102-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "102" }], 	 
 //"s-467-46704-103-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "103" }], 	 
 //"s-467-46704-104-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "104" }], 	 
 //"s-467-46704-105-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "105" }], 	 
// "s-467-46704-106-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "106" }], 	 
// "s-467-46704-107-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "107" }], 	 
// "s-467-46704-108-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "108" }], 	 
// "s-467-46704-109-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "109" }], 	 
// "s-467-46704-200-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "200" }], 	 
// "s-467-46704-201-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "201" }], 	  
// "s-467-46704-202-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "202" }], 	 
// "s-467-46704-203-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "203" }], 	 
// "s-467-46704-204-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "204" }], 













 "s-467-46703-213-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "后方攻击" }], 	//晕 
	 
 "s-467-46704-205-0": [{"type": "text","sub_type": "message","delay":2500,"message":  'Throw',"message_TW": "吹飛" }], 	//延迟击退 3000
 //"s-467-46704-206-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "206" }], 	 
// "s-467-46704-207-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "207" }], 	 






 "s-467-46704-208-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "镭射" },
                      {"type": "text","sub_type": "message","delay": 13000,"message":  'Throw',"message_TW": "击退" }], 	//激光 14
 "s-467-46704-209-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "确认坦克" }],
 
 "s-467-46704-210-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "镭射" },
                      {"type": "text","sub_type": "message","delay": 21000,"message":  'Throw',"message_TW": "击退" }],     //激光逆顺22
					  
 "s-467-46704-211-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "内>外扩散" },
                       {"type": "text","sub_type": "message","delay": 3000,"message":  'Throw',"message_TW": "闪"}],  //内外扩散 2000	

 "s-467-46704-212-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "外>内扩散" },
                       {"type": "text","sub_type": "message","delay": 3000,"message":  'Throw',"message_TW": "闪"}], 	 //外内扩散
 
 "s-467-46704-213-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "红圈" },
                       {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_TW": "闪"},  
                       {"type": "text","sub_type": "message","delay": 4000,"message":  'Throw',"message_TW": "顺"}], 	 //红圈顺
					   
 "s-467-46704-214-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "红圈" },
                       {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_TW": "闪"},  
                       {"type": "text","sub_type": "message","delay": 4000,"message":  'Throw',"message_TW": "逆"}], 	 //红圈逆
					   
 "s-467-46704-215-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "红圈" },
                       {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_TW": "闪"}], 	 //红圈  逆+顺+逆
					   
 "s-467-46704-216-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "红圈" },
                       {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_TW": "闪"}], 	 //红圈  顺+逆+顺
					   					   
 "s-467-46704-217-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "红圈" },
                       {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_TW": "闪"}], 	 //红圈 顺+
					   
 "s-467-46704-219-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "内>外+外>内扩散" },
                       {"type": "text","sub_type": "message","delay": 3000,"message":  'Throw',"message_TW": "闪"}]	  //内外圈   外内圈 2000

		 
};