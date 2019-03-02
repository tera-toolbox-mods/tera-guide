
//made by michengs

let player, entity, library, effect;

function single_stage_callout(message, handlers, event, entity) {
	
		handlers['text']({
	        "sub_type": "notification",
			"message": `${entity.stage}`,
		});
	
	if (entity.stage == 0) {
		handlers['text']({
	        "sub_type": "message",
			"message": message,
		});
	}
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

  //  "ae-0-0-70330": [	{"type": "func","func": back_attack_HM}],
  
	//"ae-0-0-70335": [{"type": "func","func": single_stage_callout.bind(null, "STUN + BACK")}]
		 
};