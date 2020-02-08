//made by michengs

let player, entity, library, effect;
let	print = true;
let hp = [];
function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
}
	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 延迟 时间）
function Spawnitem2(item,degree,distance, intervalDegrees, radius, delay, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
    let	degrees = 360 - degree;	
	applyDistance(shield_loc, distance, degrees);
    for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
        handlers['spawn']({
        	"id": item,
			"delay": delay,			
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});
    }
}	


function skilld_event(skillid, handlers, event, ent, dispatch) {
	
	
	if (print && [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].includes(skillid)) {
		print = false;
					}	
if (skillid === 127) {
if (!print){
handlers['text']({
"sub_type": "message",
"message_TW": "跳劈远离!!!",
"message": "dps"
});			
}else{
handlers['text']({
"sub_type": "message",
"message_TW": "跳劈靠近!!!",
"message": "dps"
});			
}		
}	
}

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

"h-3020-2200-1": [{"type": "func","func": skilld_event.bind(null, 1)}],
"h-3020-2200-2": [{"type": "func","func": skilld_event.bind(null, 2)}],
"h-3020-2200-3": [{"type": "func","func": skilld_event.bind(null, 3)}],
"h-3020-2200-4": [{"type": "func","func": skilld_event.bind(null, 4)}],
"h-3020-2200-5": [{"type": "func","func": skilld_event.bind(null, 5)}],
"h-3020-2200-6": [{"type": "func","func": skilld_event.bind(null, 6)}],
"h-3020-2200-7": [{"type": "func","func": skilld_event.bind(null, 7)}],
"h-3020-2200-8": [{"type": "func","func": skilld_event.bind(null, 8)}],
"h-3020-2200-9": [{"type": "func","func": skilld_event.bind(null, 9)}],
"h-3020-2200-10": [{"type": "func","func": skilld_event.bind(null, 10)}],
"h-3020-2200-11": [{"type": "func","func": skilld_event.bind(null, 11)}],
"h-3020-2200-12": [{"type": "func","func": skilld_event.bind(null, 12)}],
"h-3020-2200-13": [{"type": "func","func": skilld_event.bind(null, 13)}],
"h-3020-2200-14": [{"type": "func","func": skilld_event.bind(null, 14)}],
"h-3020-2200-15": [{"type": "func","func": skilld_event.bind(null, 15)}],
"h-3020-2200-16": [{"type": "func","func": skilld_event.bind(null, 16)}],
"h-3020-2200-17": [{"type": "func","func": skilld_event.bind(null, 17)}],
"h-3020-2200-18": [{"type": "func","func": skilld_event.bind(null, 18)}],
"h-3020-2200-19": [{"type": "func","func": skilld_event.bind(null, 19)}],
"h-3020-2200-20": [{"type": "func","func": skilld_event.bind(null, 20)}],
"h-3020-2200-21": [{"type": "func","func": skilld_event.bind(null, 21)}],
"h-3020-2200-22": [{"type": "func","func": skilld_event.bind(null, 22)}],
"h-3020-2200-23": [{"type": "func","func": skilld_event.bind(null, 23)}],
"h-3020-2200-24": [{"type": "func","func": skilld_event.bind(null, 24)}],
"h-3020-2200-25": [{"type": "func","func": skilld_event.bind(null, 25)}],
"h-3020-2200-26": [{"type": "func","func": skilld_event.bind(null, 26)}],
"h-3020-2200-27": [{"type": "func","func": skilld_event.bind(null, 27)}],
"h-3020-2200-28": [{"type": "func","func": skilld_event.bind(null, 28)}],
"h-3020-2200-29": [{"type": "func","func": skilld_event.bind(null, 29)}],
"h-3020-2200-30": [{"type": "func","func": skilld_event.bind(null, 30)}],

"s-3020-2200-108-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "晕"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,150,15,125,200,3000)],


"s-3020-2200-120-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "进-出-进"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,0,15,275,200,3000)},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,250,3000,5000)},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,200,5000,8000)}],

"s-3020-2200-121-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "出-进-出"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,250,200,4000)},  //
                      {"type": "func","func": Spawnitem2.bind(null,553,0,0,15,275,4000,5000)},   //
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,450,5000,8000)}],//

"s-3020-2200-122-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "进-出-出"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,0,15,275,200,4000)},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,250,4000,5000)},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,125,15,450,5000,8000)}],

"s-3020-9101-122-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "强袭"}],
	   		   
//"s-3020-2200-125-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "靠近"}],//跳劈转圈

//"s-3020-2200-127-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名跳劈"}],//30以后砸
"s-3020-2200-127-0": [{"type": "func","func": skilld_event.bind(null, 127)}],
"s-3020-2200-128-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "强袭"}],
"s-3020-2200-129-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名蓄力"}],
"s-3020-2200-131-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "咆哮远离"}],

"s-3020-2200-133-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "点名扩散圈"},
                      {"type": "func","func": Spawnitem2.bind(null,553,0,0,15,300,200,3000)}],

"s-3020-2200-135-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "准备跳"}],

"s-3020-2200-137-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "扩散圈"}],

"s-3020-2200-139-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "收缩圈"}],

"s-3020-2200-202-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "defence 3秒"}],
"s-3020-2200-203-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "defence 10秒"}],
"s-3020-2200-204-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "变身"}]		 
};