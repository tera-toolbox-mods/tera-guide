
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
     "ae-0-0-99020000020": [{"type": "text","sub_type": "message","message": "8连击" },
	{"type": "text","sub_type": "MSG","delay": 500,"message": "1" },
	{"type": "text","sub_type": "MSG","delay": 1000,"message": "2" },	
	{"type": "text","sub_type": "MSG","delay": 1500,"message": "3" },	
	{"type": "text","sub_type": "MSG","delay": 2000,"message": "4" },	
	{"type": "text","sub_type": "MSG","delay": 2500,"message": "5" },	
	{"type": "text","sub_type": "MSG","delay": 3000,"message": "6" },	
	{"type": "text","sub_type": "MSG","delay": 3500,"message": "7" } 	
	 ],
	 
	//"ae-0-0-70335": [{"type": "func","func": single_stage_callout.bind(null, "STUN + BACK")}]
		 
};