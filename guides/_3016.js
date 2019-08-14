// RMHM

let 	debuff_tracker_started = false;	

let debuffs_hand = {
    8888888: 3,
};

function start_debuffs(handlers, event, entity, dispatch) {
	
	const abnormality_change = (added, event) => {
		if ( debuffs_hand[event.id]) {

				if (added) {
		
		  console.log('\n ------添加-------  -> ' + event.id);	
				} else {
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
    // First boss
 "h-3016- 76901-100": [{"type": "text","sub_type": "message","message":  'Throw',"message_TW": "大跳 " },
	 {"type": "func","func": start_debuffs}
 ],


};