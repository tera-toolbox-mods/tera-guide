
//made by michengs

let player, entity, library, effect;



module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},







 "s-467-46703-213-0": [{"type": "text","sub_type": "message","message":  'back attack',"message_TW": "后方攻击" }], 	//晕 
	 
 "s-467-46704-205-0": [{"type": "text","sub_type": "message","delay":2500,"message":  'Pushback - Iframe',"message_TW": "吹飛" }], 	//延迟击退 3000
 //"s-467-46704-206-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "206" }], 	 
// "s-467-46704-207-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "207" }], 	 






 "s-467-46704-208-0": [{"type": "text","sub_type": "message","message":  'laser',"message_TW": "镭射" },
                      {"type": "text","sub_type": "message","delay": 13000,"message":  'Pushback - Iframe',"message_TW": "击退" }], 	//激光 14
 "s-467-46704-209-0": [{"type": "text","sub_type": "message","message":  'tank',"message_TW": "确认坦克" }],
 
 "s-467-46704-210-0": [{"type": "text","sub_type": "message","message":  'laser',"message_TW": "镭射" },
                      {"type": "text","sub_type": "message","delay": 21000,"message":  'Pushback - Iframe',"message_TW": "击退" }],     //激光逆顺22
					  
 "s-467-46704-211-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "内>外扩散" },
                       {"type": "text","sub_type": "message","delay": 3000,"message":  'Throw',"message_TW": "闪"}],  //内外扩散 2000	

 "s-467-46704-212-0": [{"type": "text","sub_type": "message","message":  'Out to in Wave',"message_TW": "外>内扩散" },
                       {"type": "text","sub_type": "message","delay": 3000,"message":  'Throw',"message_TW": "闪"}], 	 //外内扩散
 
 "s-467-46704-213-0": [{"type": "text","sub_type": "message","message":  'Circle - Iframe',"message_TW": "红圈" },
                       {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_TW": "闪"},  
                       {"type": "text","sub_type": "message","delay": 4000,"message":  'Throw',"message_TW": "顺"}], 	 //红圈顺
					   
 "s-467-46704-214-0": [{"type": "text","sub_type": "message","message":  'Circle - Iframe',"message_TW": "红圈" },
                       {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_TW": "闪"},  
                       {"type": "text","sub_type": "message","delay": 4000,"message":  'Throw',"message_TW": "逆"}], 	 //红圈逆
					   
 "s-467-46704-215-0": [{"type": "text","sub_type": "message","message":  'Circle - Iframe',"message_TW": "红圈" },
                       {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_TW": "闪"}], 	 //红圈  逆+顺+逆
					   
 "s-467-46704-216-0": [{"type": "text","sub_type": "message","message":  'Circle - Iframe',"message_TW": "红圈" },
                       {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_TW": "闪"}], 	 //红圈  顺+逆+顺
					   					   
 "s-467-46704-217-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "红圈" },
                       {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_TW": "闪"}], 	 //红圈 顺+
					   
 "s-467-46704-219-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "内>外+外>内扩散" },
                       {"type": "text","sub_type": "message","delay": 3000,"message":  'Throw',"message_TW": "闪"}]	  //内外圈   外内圈 2000

		 
};