
//made by michengs

let player, entity, library, effect;



module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

"s-059-1000-104-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "跳"}],
"s-059-1000-106-0": [{"type": "text","sub_type": "message","message": "Spin","message_TW": "旋转攻击"}],


"s-059-2000-101-0": [{"type": "text","sub_type": "message","message": "Push","message_TW": "推"}],
"s-059-2000-104-0": [{"type": "text","sub_type": "message","message": "BIG AOE","message_TW": "全屏攻击"}],
"s-059-2000-107-0": [{"type": "text","sub_type": "message","message": "Dodge","message_TW": "闪避"}],


"s-059-3000-101-0": [{"type": "text","sub_type": "message","message": "Explo","message_TW": "爆炸"}],
"s-059-3000-102-0": [{"type": "text","sub_type": "message","message": "Pull","message_TW": "拉"}],
"s-059-3000-105-0": [{"type": "text","sub_type": "message","message": "Dodge","message_TW": "闪避"}],
"s-059-3000-110-0": [{"type": "text","sub_type": "message","message": "GET OUT","message_TW": "出"}]
		 
};