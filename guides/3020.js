//made by michengs

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

"s-3020-1200-101-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "火球"}],
"s-3020-1200-102-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "照明"}],
"s-3020-1200-103-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "暗照明"}],
"s-3020-1200-104-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "冰风暴"}],
"s-3020-1200-105-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "逃离炸弹"}],
"s-3020-1200-106-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "暗光(投射)"}],
"s-3020-1200-201-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "魔法"}],
"s-3020-1200-202-0": [{"type": "text","sub_type": "MSG","message": "Spin","message_TW": "后冲"}],


"s-3020-1900-101-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "人类 男 祭师_惩罚 光"}],
"s-3020-1900-102-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "人类 男 祭师_惩罚 帷幕"}],
"s-3020-1900-103-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "人类 男 祭师_治愈的 风"}],
"s-3020-1900-104-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "人类 男 祭师_恢复场发射体"}],
"s-3020-1900-105-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "人类 男 祭师_毁灭"}],
"s-3020-1900-106-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "人类 男 祭师_毁灭 发射体"}],
"s-3020-1900-107-0": [{"type": "text","sub_type": "MSG","message": "Dodge","message_TW": "人类 男 祭师_毁灭 发射体2"}],



"s-3020-2200-101-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_combo1_노말"}],
"s-3020-2200-102-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_combo1R_공용"}],
"s-3020-2200-103-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_combo2_노말"}],
"s-3020-2200-104-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_combo2R_공용"}],
"s-3020-2200-105-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_combo3_노말"}],
"s-3020-2200-106-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_combo3R_공용"}],
"s-3020-2200-107-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_combo4_노말"}],
"s-3020-2200-108-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_blastslash_노말"}],
"s-3020-2200-109-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_sideslash_노말"}],
"s-3020-2200-120-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_차지4_SelfBuffOn_공용"}],
"s-3020-2200-121-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_차지1_SelfBuffOn_공용"}],
"s-3020-2200-122-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_차지2_SelfBuffOn_공용"}],
"s-3020-2200-123-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_차지3_SelfBuffOn_공용"}],
"s-3020-2200-124-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_근폭_combo1_노말"}],
"s-3020-2200-125-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_원폭_WhirlwindStart_노말"}],
"s-3020-2200-126-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_큰근폭_blastSlashShot_노말"}],
"s-3020-2200-127-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_DownBlow_노말"}],
"s-3020-2200-128-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_SoulStrike_노말"}],
"s-3020-2200-129-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_ThrowAxe_노말"}],
"s-3020-2200-131-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_도끼회수_ShockingShoutStart_공용"}],
"s-3020-2200-132-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_모드체인지_defenceStart_공용"}],
"s-3020-2200-133-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_도끼점프_DownBlow_공용"}],
"s-3020-2200-134-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_큰원폭_WhirlwindStart_노말"}],
"s-3020-2200-135-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "해적단장_도끼신호_ShockingShoutStart_공용"}],
"s-3020-2200-136-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "위치알려주는발사체"}],
"s-3020-2200-137-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "안-밖"}],
"s-3020-2200-138-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "안-밖(발사체)"}],
"s-3020-2200-139-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "밖-안"}],
"s-3020-2200-201-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "登场"}],
"s-3020-2200-202-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "defence 3秒"}],
"s-3020-2200-203-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "defence 10秒"}],
"s-3020-2200-204-0": [{"type": "text","sub_type": "MSG","message": "Jump","message_TW": "改变模式"}]		 
};