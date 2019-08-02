
//made by michengs

let player, entity, library, effect;

let bossBuffs = [],
	count = -1,
	counts = 0,	
	shining = true,
	gage_tracker_started = false,
	debuff_tracker_started = false;	
	
const BossActions_TW = {
    213: {truth: '大实话 -> 破盾',     lie: '吹牛 -> 跑远'},   // "My shield will save me!" (shield)
    212: {truth: '大实话 -> b远离',     lie: '吹牛 -> b靠进'},          // "I will kill you all!" (aoe around boss)
    218: {truth: '大实话 -> p远离',     lie: '吹牛 -> p靠近'}           // "One of you must die!" (aoe around player)
};

const BossActions = {
    213: {truth: 'Truth -> Break shield',     lie: 'Lie -> Puddles (run away)'},   // "My shield will save me!" (shield)
    212: {truth: 'Truth -> Stay outside',     lie: 'Lie -> Stay inside'},          // "I will kill you all!" (aoe around boss)
    218: {truth: 'Truth -> Stay outside',     lie: 'Lie -> Stay inside'}           // "One of you must die!" (aoe around player)
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

   
 if (skillid === 666 ) {
	
handlers['text']({
"sub_type": "message",
"message": bossBuffs	
});	
}    
   
 if (skillid === 213 ) {
	
handlers['text']({
"sub_type": "message",
"message": (isTellingTruth() ? BossActions[213].truth : BossActions[213].lie),	
"message_TW": (isTellingTruth() ? BossActions_TW[213].truth : BossActions_TW[213].lie)	
});	
}  
 if (skillid === 212 ) {
	
handlers['text']({
"sub_type": "message",
"message": (isTellingTruth() ? BossActions[212].truth : BossActions[212].lie),	
"message_TW": (isTellingTruth() ? BossActions_TW[212].truth : BossActions_TW[212].lie)	
});	
}    
 if (skillid === 218 ) {
	
handlers['text']({
"sub_type": "message",
"message": (isTellingTruth() ? BossActions[218].truth : BossActions[218].lie),
"message_TW": (isTellingTruth() ? BossActions_TW[218].truth : BossActions_TW[218].lie)		
});	
}   


}

    function isTellingTruth() {  //判斷是否吹牛
        let ones = count % 10;
        let tens = Math.floor((count % 100) / 10);

        if (bossBuffs.includes(ones) || bossBuffs.includes(tens))
        {
            return false;
        }         
        return true;
    }

function start_boss() {
    bossBuffs = [];
	count = -1;
	counts = 0;	
	shining = true;
	gage_tracker_started = false;
	debuff_tracker_started = false;	
}

function start_time() {	

	if (shining){	
    if (count === 100 ) {
	 count = -1;
        } 
    count++;
   shining = false;
   setTimeout(() => shining = true, 500);	
	}

}

function start_gage(handlers, event, entity, dispatch) {
	const gage_change = (added, event) => { 
      start_time()
 // console.log('\n --------------------  -> '  + 'count-> '+ count);		
		
	};
	if (!gage_tracker_started) {
	dispatch.hook('S_DUNGEON_EVENT_GAGE', 1, gage_change.bind(null, true));
		gage_tracker_started = true;
	}	
}

let debuffs_hand = {
    470046: 3,
    470047: 6,
    470048: 9
};

function start_debuffs(handlers, event, entity, dispatch) {
	
	const abnormality_change = (added, event) => {
		if ( debuffs_hand[event.id]) {

				if (added) {
         if (!bossBuffs.includes(debuffs_hand[event.id])) bossBuffs.push(debuffs_hand[event.id]);
		    counts++;
		 //  console.log('\n ------添加-------  -> ' + counts);	
				} else {
            let index = bossBuffs.indexOf(debuffs_hand[event.id]);
            if (index > -1) bossBuffs.splice(index, 1); 
			//  console.log('\n -----------  -> ' + bossBuffs);	
			
				}

		}
	};
		if (!debuff_tracker_started) {
		dispatch.hook('S_ABNORMALITY_BEGIN', 3, abnormality_change.bind(null, true));
		dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));
		debuff_tracker_started = true;
	}	
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	
			
	},
 "h-470-1000-100": [ {"type": "func","func": start_boss}],  
					
 "h-470-1000-99": [ {"type": "func","func": start_gage},
                    {"type": "func","func": start_debuffs}					
					],  									
 "s-470-1000-1105-0": [{"type": "text","sub_type": "message","message":  "jump","message_TW": "大跳" }], 	
 "s-470-1000-1106-0": [{"type": "text","sub_type": "message","message":  'smash',"message_TW": "点名球砸" }], 	 
 "s-470-1000-1120-0": [{"type": "text","sub_type": "message","message":  'pull',"message_TW": "拉人 " }], 	
 "s-470-1000-1114-0": [{"type": "text","sub_type": "message","message":  'spray',"message_TW": "点名喷" }], 	
 "s-470-1000-1201-0": [{"type": "text","sub_type": "message","message":  'stun',"message_TW": "眩暈" }], 	
 "s-470-1000-1307-0": [{"type": "text","sub_type": "message","message":  'bomb',"message_TW": "炸彈" }], 	//炸彈 2人------------判断
 "s-470-1000-2105-0": [{"type": "text","sub_type": "message","message":  'jump',"message_TW": "大跳" }], 
 "s-470-1000-2106-0": [{"type": "text","sub_type": "message","message":  'smash',"message_TW": "点名球砸" }], 	 
 "s-470-1000-2107-0": [{"type": "text","sub_type": "message","message":  'stun',"message_TW": "眩暈" }],
 "s-470-1000-2114-0": [{"type": "text","sub_type": "message","message":  'bomb',"message_TW": "点名喷" }],  
 "s-470-1000-3106-0": [{"type": "text","sub_type": "message","message":  '100',"message_TW": "星星位 " },  
  {"type": "func","func": skilld_event.bind(null, 000)}
 
 ], 	
 
 "s-470-1000-3213-0": [{"type": "func","func": skilld_event.bind(null, 213)}], 	//3213     保护膜 假----------判断
 "s-470-1000-3212-0": [{"type": "func","func": skilld_event.bind(null, 212)}],	//假         杀光附近----------判断
 "s-470-1000-3218-0": [{"type": "func","func": skilld_event.bind(null, 218)}],	//假         杀一個----------判断 
 



  "ab-470-1000-470046": [{"type": "func","func": skilld_event.bind(null, 46)}], 
  "ab-470-1000-470047": [{"type": "func","func": skilld_event.bind(null, 47)}], 
  "ab-470-1000-470048": [{"type": "func","func": skilld_event.bind(null, 48)}], 

  "qb-470-600-470053": [{"type": "text","sub_type": "message","message_TW": "开始" }], 
 
 
  "qb-470-1000-470019": [{"type": "text","sub_type": "message","message_TW": "判别" },  
  {"type": "func","func": skilld_event.bind(null, 666)}
  ]
 
 
 
 
 
};