
//made by michengs

let player, entity, library, effect;
let bossBuffs = [],
    meterValue = 13;

	
const BossActions = {
    208: {truth: 'Truth -> Break shield',     lie: 'Lie -> Puddles (run away)'},   // "My shield will save me!" (shield)
    212: {truth: 'Truth -> Stay outside',     lie: 'Lie -> Stay inside'},          // "I will kill you all!" (aoe around boss)
    218: {truth: 'Truth -> Stay outside',     lie: 'Lie -> Stay inside'}           // "One of you must die!" (aoe around player)
};

const secondBossActions =
{
    1104: {msg: 'Frontal Spin!'},
    2104: {msg: 'Frontal Spin!'}, 
    2102: {msg: 'Back Slip (Fast)'},
    1102: {msg: 'Back Slip (Slow)'},
    2105: {msg: 'Tail'},
};


function skilld_event(skillid, handlers, event, ent, dispatch) {
	
	
 if (skillid === 208 ) {
	
handlers['text']({
"sub_type": "message",
"message": (isTellingTruth() ? BossActions[208].truth : BossActions[208].lie)	
});	
handlers['text']({
"sub_type": "message",
"message": 	bossBuffs
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

let debuffs_hand = {
	3000012:  {truth: 'Truth -> Break shield',     lie: 'Lie -> Puddles (run away)'}
};
//let debuff_tracker_started = false;	

function start_debuffs(handlers, event, entity, dispatch) {
	const abnormality_change = (added, event) => {

   debuffs = event.id
			
 console.log('\n S_ABNORMALITY_REFRESH  -> ' + event.id);


		
	};


		dispatch.hook('S_ABNORMALITY_BEGIN', 3, abnormality_change.bind(null, true));
		//dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));

}





/*

function start_debuffs(handlers, event, entity, dispatch) {
	const abnormality_change = (added, event) => {
		if ((player.isMe(event.target) || player.playersInParty.includes(event.target.toString())) && debuffs_hand[event.id]) {

				if (added) {
					handlers['text']({
			        	"sub_type": "notification",
						"message": debuffs_hand[event.id].lie
			        });
				} else {
					handlers['text']({
			        	"sub_type": "notification",
						"message": "ICE"
			        });
				}

		}
	};


		dispatch.hook('S_ABNORMALITY_BEGIN', 3, abnormality_change.bind(null, true));
		dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));

}


/*


    dispatch.hook('S_ABNORMALITY_BEGIN', 3, (event) => {
        if (!enabled || !boss) return;
                
        if (boss.id - event.target == 0) {
            //console.log('\n S_ABNORMALITY_BEGIN  -> ' + event.id);
            
            if (BossAbnormals[event.id]) {
                if (!bossBuffs.includes(BossAbnormals[event.id])) bossBuffs.push(BossAbnormals[event.id]);
            }
        }
    })

    dispatch.hook('S_ABNORMALITY_END', 1, (event) => {
        if (!enabled || !boss) return;
                
        if (boss.id - event.target == 0) {
            //console.log('\n S_ABNORMALITY_END  -> ' + event.id);
            
            let index = bossBuffs.indexOf(BossAbnormals[event.id]);
            if (index > -1) bossBuffs.splice(index, 1);            
        }
    })





let BossAbnormals = {
    470046: 3,
    470047: 6,
    470048: 9
};
let debuff_tracker_started = false;	
function start_debuffs(handlers, event, entity, dispatch) {
	const abnormality_change = (added, event) => {
		if ((player.isMe(event.target) || player.playersInParty.includes(event.target.toString())) && BossAbnormals[event.id]) {

				if (added) {
                if (!bossBuffs.includes(BossAbnormals[event.id])) bossBuffs.push(BossAbnormals[event.id]);
				} else {
            let index = bossBuffs.indexOf(BossAbnormals[event.id]);
            if (index > -1) bossBuffs.splice(index, 1);   
				}

		}
	};

	if (!debuff_tracker_started) {
		dispatch.hook('S_ABNORMALITY_BEGIN', 3, abnormality_change.bind(null, true));
		dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));
		debuff_tracker_started = true;
	}
}



*/





module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

  //  "ae-0-0-70330": [	{"type": "func","func": back_attack_HM}],

	 
	 //不死
     "ae-0-0-3000022": [{"type": "text","sub_type": "msgcp","message_TW": '666'},
	 {"type": "func","func": start_debuffs}

	 ],

	 //飛馬
     "ae-0-0-3000012": [{"type": "text","sub_type": "msgcp","message_TW": '6776'},
	 {"type": "func","func": skilld_event.bind(null, 207)}
	 
	 ] 	 

		 
};