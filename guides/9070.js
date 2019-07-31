
//made by michengs

let player, entity, library, effect;
let boss =false;
let bossBuffs = [],
    meterValue = 0,
	debuff_tracker_started = false;	
	
const BossActions = {
    208: {truth: 'Truth -> 破盾',     lie: 'Lie -> 跑远'},   // "My shield will save me!" (shield)
    212: {truth: 'Truth -> 远离',     lie: 'Lie -> 靠进'},          // "I will kill you all!" (aoe around boss)
    218: {truth: 'Truth -> 远离',     lie: 'Lie -> 靠近'}           // "One of you must die!" (aoe around player)
};
function skilld_event(skillid, handlers, event, ent, dispatch) {

/*
     switch(skillid)
          {   
                case 46:
   if (!bossBuffs.includes(3)) bossBuffs.push(3);                  
                    break;
                    case 47:
   if (!bossBuffs.includes(6)) bossBuffs.push(6);
                    break;
                    case 48:      
   if (!bossBuffs.includes(9)) bossBuffs.push(9);
                    break;
   }
 */  
   
  if (skillid === 46 ) {
   if (!bossBuffs.includes(3)) bossBuffs.push(3); 
}    
   
  if (skillid === 47 ) {
   if (!bossBuffs.includes(6)) bossBuffs.push(6); 
}   
   
  if (skillid === 48 ) {
   if (!bossBuffs.includes(9)) bossBuffs.push(9); 
}   
   
   
   
   
   
 if (skillid === 208 ) {
	
handlers['text']({
"sub_type": "message",
"message": (isTellingTruth() ? BossActions[208].truth : BossActions[208].lie)	
});	
}  
 if (skillid === 212 ) {
	
handlers['text']({
"sub_type": "message",
"message": (isTellingTruth() ? BossActions[212].truth : BossActions[212].lie)	
});	
}    
 if (skillid === 218 ) {
	
handlers['text']({
"sub_type": "message",
"message": (isTellingTruth() ? BossActions[218].truth : BossActions[218].lie)	
});	
}    

}

    function isTellingTruth() {
        let ones = meterValue % 10;
        let tens = Math.floor((meterValue % 100) / 10);

        if (bossBuffs.includes(ones) || bossBuffs.includes(tens))
        {
            return false;
        }         
        return true;
    }



function start_boss() {
boss =true;
}

function start_fifthfloor(handlers, event, entity, dispatch) {
	const abnormality_change = (event) => {
        meterValue = event.value;
	};
	dispatch.hook('S_DUNGEON_EVENT_GAGE', 1, abnormality_change);
}
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	
			
	},


 
 //"h-470-1000-99": [{"type": "func","func": start_fifthfloor}],
	  
 "s-470-1000-1105-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "大跳 " }], 	
 "s-470-1000-1106-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "点名球砸" }], 	 
 "s-470-1000-1120-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "拉人 " }], 	
 "s-470-1000-1114-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "点名喷" }], 	
 "s-470-1000-1201-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "眩暈" }], 	
 "s-470-1000-1307-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "炸彈" }], 	//炸彈 2人------------判断
 

 
 
 
 "s-470-1000-2105-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "大跳" }], 
 "s-470-1000-2106-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "点名球砸" }], 	 
 "s-470-1000-2107-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "眩暈" }],
 "s-470-1000-2114-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "点名喷" }],  
 

 




 "s-470-1000-3106-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "星星位 " }], 	
 
 
 "s-470-1000-3208-0": [{"type": "func","func": skilld_event.bind(null, 208)}], 	//3213     保护膜 假----------判断
 "s-470-1000-3212-0": [{"type": "func","func": skilld_event.bind(null, 212)}],	//假         杀光附近----------判断
 "s-470-1000-3218-0": [{"type": "func","func": skilld_event.bind(null, 218)}],	//假         杀一個----------判断 
 



  "ab-470-1000-470046": [{"type": "func","func": skilld_event.bind(null, 46)}], 
  "ab-470-1000-470047": [{"type": "func","func": skilld_event.bind(null, 47)}], 
  "ab-470-1000-470048": [{"type": "func","func": skilld_event.bind(null, 48)}], 

  "qb-470-600-470053": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "开始" }], 
 
 
  "qb-470-1000-470019": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "判别" },
       {"type": "func","func": start_fifthfloor}            
  ]
 
 
 
 
 
};