// DW-Guide

    let	print = false;
    let circlecount = 0;
	
	function skilld_event(skillid, handlers, event, ent, dispatch) {


	if ([1311, 1313, 1315, 1317].includes(skillid)) {
            circlecount = 0;
            handlers['text']({"sub_type": "message","message":  'OUT',"message_TW": "出"});			
				                                    }
	if ([1312, 1313, 1316, 1318].includes(skillid)) {
            circlecount = 0;
            handlers['text']({"sub_type": "message","message":  'IN',"message_TW": "进"});			
				                                    }

	if ([1306, 1307, 1308, 1309, 1310].includes(skillid)) {
             circlecount += (skillid - 1306) + 1;
            handlers['text']({"sub_type": "message","message": `${circlecount} - ${(circlecount & 1) ? "odd - red" : "even - blue"}`,"message_TW": `${circlecount} - ${(circlecount & 1) ? "基数 - 红" : "偶数 - 蓝"}`});			
				                                    }
													
	if ([1319, 1320, 1321, 1322, 1323].includes(skillid)) {
             circlecount += (skillid - 1306) + 1;
             circlecount += (skillid - 1319) + 1;			 
            handlers['text']({"sub_type": "message","message": `${circlecount} - ${(circlecount & 1) ? "odd - red" : "even - blue"}`,"message_TW": `${circlecount} - ${(circlecount & 1) ? "基数 - 红" : "偶数 - 蓝"}`});			
				                                    }



	if ([21311, 21314].includes(skillid)) { 
            handlers['text']({"sub_type": "message","message":  'IN then OUT',"message_TW": '进 then 出'});			
				                                    }	
	
	if ([21312, 21313].includes(skillid)) { 
            handlers['text']({"sub_type": "message","message":  'OUT then IN',"message_TW": '出 then 进'});			
				                                    }		
	
	if ([21303].includes(skillid)) { 
	if(print) {
handlers['text']({
"sub_type": "message",
"message": "Hit ALL",
"message_TW": "打所有"
});
} else {
 handlers['text']({"sub_type": "message","message_TW": '打投掷'});
}			
				                                    }		
}
function start_boss30() {
print = true;
}
function start_boss99() {
print = false;
}
module.exports = {
    // First boss
		
 "s-466-46601-1105-0": [{"type": "text","sub_type": "message","message":  'stun',"message_TW": "晕" }],  
 "s-466-46601-2105-0": [{"type": "text","sub_type": "message","message":  'stun',"message_TW": "晕" }],  
 "s-466-46601-1106-0": [{"type": "text","sub_type": "message","message":  'tail',"message_TW": "尾气后喷" }],  
 "s-466-46601-2106-0": [{"type": "text","sub_type": "message","message":  'tail',"message_TW": "尾气后喷" }],  
 "s-466-46601-1109-0": [{"type": "text","class_position":"tank","sub_type": "message","message":  'front attack',"message_TW": "前砸(坦)" }],  
 "s-466-46601-2109-0": [{"type": "text","class_position":"tank","sub_type": "message","message":  'front attack',"message_TW": "前砸(坦)" }], 
 "s-466-46601-1110-0": [{"type": "text","sub_type": "message","message_TW": "甩尾(中毒)" }],  
 "s-466-46601-2110-0": [{"type": "text","sub_type": "message","message_TW": "甩尾(中毒)" }], 
 "s-466-46601-1311-0": [{"type": "func","func": skilld_event.bind(null, 1311)}], 	
 "s-466-46601-1313-0": [{"type": "func","func": skilld_event.bind(null, 1313)}], 						
 "s-466-46601-1315-0": [{"type": "func","func": skilld_event.bind(null, 1315)}], 	
 "s-466-46601-1317-0": [{"type": "func","func": skilld_event.bind(null, 1317)}], 						
 "s-466-46601-1312-0": [{"type": "func","func": skilld_event.bind(null, 1312)}], 	
 "s-466-46601-1314-0": [{"type": "func","func": skilld_event.bind(null, 1314)}], 
 "s-466-46601-1316-0": [{"type": "func","func": skilld_event.bind(null, 1316)}], 	
 "s-466-46601-1318-0": [{"type": "func","func": skilld_event.bind(null, 1318)}], 
 "s-466-46601-1306-0": [{"type": "func","func": skilld_event.bind(null, 1306)}], 	
 "s-466-46601-1307-0": [{"type": "func","func": skilld_event.bind(null, 1307)}], 
 "s-466-46601-1308-0": [{"type": "func","func": skilld_event.bind(null, 1308)}], 						
 "s-466-46601-1309-0": [{"type": "func","func": skilld_event.bind(null, 1309)}], 	
 "s-466-46601-1310-0": [{"type": "func","func": skilld_event.bind(null, 1310)}], 
 "s-466-46601-1319-0": [{"type": "func","func": skilld_event.bind(null, 1319)}], 	
 "s-466-46601-1320-0": [{"type": "func","func": skilld_event.bind(null, 1320)}], 
 "s-466-46601-1321-0": [{"type": "func","func": skilld_event.bind(null, 1321)}], 	
 "s-466-46601-1322-0": [{"type": "func","func": skilld_event.bind(null, 1322)}], 
 "s-466-46601-1323-0": [{"type": "func","func": skilld_event.bind(null, 1323)}], 
//--------------------------------------------------
 "h-466-46602-99": [{"type": "func","func": start_boss99}],
 "h-466-46602-30": [{"type": "func","func": start_boss30}],
 
 
 "qb-466-46621-466050": [{"type": "text","sub_type": "notification","message":  'Don\'t hit RED',"message_TW": "红(顺) | (蓝+白" }],
 "qb-466-46621-466051": [{"type": "text","sub_type": "notification","message":  'Don\'t hit WHITE',"message_TW": "白(顺) | (红+蓝)" }],
 "qb-466-46621-466052": [{"type": "text","sub_type": "notification","message":  'Don\'t hit BLUE',"message_TW": "蓝(顺) | (红+白)" }],//------------
 "qb-466-46622-466054": [{"type": "text","sub_type": "notification","message":  'Hit RED',"message_TW": "红(逆)" }],
 "qb-466-46622-466055": [{"type": "text","sub_type": "notification","message":  'Hit WHITE',"message_TW": "白(逆)" }],  //--------------------
 "qb-466-46622-466056": [{"type": "text","sub_type": "notification","message":  'Hit BLUE',"message_TW": "蓝(逆)" }], 
 "s-466-46602-1116-0": [{"type": "text","sub_type": "message","message":  'pull',"message_TW": "拉人(群体)" }], 
 "s-466-46602-2116-0": [{"type": "text","sub_type": "message","message":  'pull',"message_TW": "拉人(群体)" }], 
 "s-466-46602-1223-0": [{"type": "text","sub_type": "message","message":  'Double RED',"message_TW": "红圈" }],  
 "s-466-46602-1113-0": [{"type": "text","sub_type": "message","message":  'LASER!!!!!!',"message_TW": "激光" }], 	
 "s-466-46602-2113-0": [{"type": "text","sub_type": "message","message":  'LASER!!!!!!',"message_TW": "激光" }], 												
 "s-466-46602-1311-0": [{"type": "func","func": skilld_event.bind(null, 21311)}], 	//
 "s-466-46602-1314-0": [{"type": "func","func": skilld_event.bind(null, 21314)}], //
 "s-466-46602-1312-0": [{"type": "func","func": skilld_event.bind(null, 21312)}], 	//
 "s-466-46602-1313-0": [{"type": "func","func": skilld_event.bind(null, 21313)}],//
 "s-466-46602-1303-0": [{"type": "func","func": skilld_event.bind(null, 21303)}] 	
};