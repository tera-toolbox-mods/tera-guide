//made by michengs
let player, entity, library, effect;
let	print = true;
let debuff = null ;
let timer1;
let timer2;
let timer3;
let timer4;
let timer5;
let qbacting = null;
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
const CK_TipMsg =
{
 0: {msgt: 'IN',     msg: '进'}, 
 1: {msgt: 'OUT',     msg: '出'}
};
const debuff_TipMsg =
{
 0: {msg: '------准备切换红色-------!'},
 1: {msg: '------准备切换蓝色-------'}
};
const boss_skill =
{
 213: {msg: '左手', msgt: 'left'},
 214: {msg: '右手', msgt: 'right'},
 212: {msg: '右手', msgt: 'right'},
 215: {msg: '左手', msgt: 'left'}
};
function skilld_event(skillid, handlers, event, ent, dispatch) {	
if ([3026004,3126004,3026005,3126005].includes(skillid)) {   // //愤怒0  恐惧1
qbacting = skillid % 2;	
//qbacting = null   
}
if ([3026001,3126001,3026002,3126002].includes(skillid)) {   // //蓝色0  红色1
//debuff = skillid % 2;	
clearTimeout(timer1);
clearTimeout(timer2);
clearTimeout(timer3);
clearTimeout(timer4);
clearTimeout(timer5);
 timer1 = setTimeout(()=>{
 if  (debuff != null) {
handlers['text']({
"sub_type": "message",
"message_TW": "警告  debuff最后20s"
});	
 }
  }, 70000);  
 timer2 = setTimeout(()=>{
 if  (debuff != null) {
handlers['text']({
"sub_type": "notification",
"message_TW": (`${debuff_TipMsg[debuff % 2].msg} `)
});	
handlers['text']({
"sub_type": "message",
"message": "debuff 50s",
"message_TW": "倒计时50s"
});	
 }
  }, 40000);  
 timer3 = setTimeout(()=>{
 if  (debuff != null) {
handlers['text']({
"sub_type": "message",
"message": "warning    debuff 15s",
"message_TW": "警告    debuff最后15s"
});	
 }
  }, 75000);  
 timer4 = setTimeout(()=>{
 if  (debuff != null) {
handlers['text']({
"sub_type": "message",
"message": "warning    debuff 10s",
"message_TW": "警告    debuff最后10s"
});	
 }
  }, 80000);  
 timer5 = setTimeout(()=>{
 if  (debuff != null) {
handlers['text']({
"sub_type": "message",
"message": "warning    debuff 5s",
"message_TW": "警告    debuff最后5s"
});	
 }
  }, 85000);   
}
if ([213,214].includes(skillid)) {   // //蓝内
 if  (debuff != null) {
handlers['text']({
"sub_type": "message",
"message": (`${boss_skill[skillid].msgt} | ${CK_TipMsg[(qbacting + debuff +1) %2].msgt}`),
"message_TW": (`${boss_skill[skillid].msg} | ${CK_TipMsg[(qbacting + debuff +1) %2].msg}`)
});	
 } 
}
if ([212,215].includes(skillid)) {   // //红内
 if  (debuff != null) {
handlers['text']({
"sub_type": "message",
"message": (`${boss_skill[skillid].msgt} | ${CK_TipMsg[(qbacting + debuff) %2].msgt}`),
"message_TW": (`${boss_skill[skillid].msg} | ${CK_TipMsg[(qbacting + debuff) %2].msg}`)
});	
 }
}
if (skillid === 99020020) { //死亡解除debuff
//debuff = null;
clearTimeout(timer1);
clearTimeout(timer2);
}
/*
if (skillid === 157) { //debuff
 if  (debuff != null) {
handlers['text']({
"sub_type": "message",
"delay": 2000,
"message": debuffs_targe[debuff]
 });	 
}
}
*/
}
// NULL % 2 =0
// 1 % 2 =1
//0 % 2 =0
//2 % 2 =0 
let debuff_tracker_started = false;
let debuffs_targe = {
	30260001: "火焰debuff",
	30260002: "寒冰debuff",
	31260001: "火焰debuff",
	31260002: "寒冰debuff"	
};
function start_debuff(handlers, event, entity, dispatch) {
	const abnormality_change = (added, event) => {
		if ((player.isMe(event.target) || player.playersInParty.includes(event.target.toString())) && debuffs_targe[event.id]) {
				if (added) {
			setTimeout(() =>  debuff = event.id, 500);			   
				} else {
                  debuff = null
				}
		}
	};
	if (!debuff_tracker_started) {
		dispatch.hook('S_ABNORMALITY_BEGIN', 4, abnormality_change.bind(null, true));
		dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));
		debuff_tracker_started = true;
	}
}
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},
"s-3126-1000-1112-0": [{"type": "text","sub_type": "message","message": "Ice()","message_TW": "冰带(闪)"}],
"s-3126-1000-1110-0": [{"type": "text","sub_type": "message","message": "fire","message_TW": "岩浆(闪)"}],
"s-3126-1000-2112-0": [{"type": "text","sub_type": "message","message": "Ice()","message_TW": "冰带(闪)"}],
"s-3126-1000-2110-0": [{"type": "text","sub_type": "message","message": "fire","message_TW": "岩浆(闪)"}],
"s-3126-1000-1108-0": [{"type": "text","sub_type": "message","message": "beat back","message_TW": "右转击退"}],
"s-3126-1000-2108-0": [{"type": "text","sub_type": "message","message": "beat back","message_TW": "右转击退"}],
"s-3126-1000-1158-0": [{"type": "text","sub_type": "message","message": "beat back","message_TW": "右转击退"}],
"s-3126-1000-2158-0": [{"type": "text","sub_type": "message","message": "beat back","message_TW": "右转击退"}],
"s-3126-1000-1109-0": [{"type": "text","sub_type": "message","message": "beat back","message_TW": "左转击退"}],
"s-3126-1000-2109-0": [{"type": "text","sub_type": "message","message": "beat back","message_TW": "左转击退"}],
"s-3126-1000-1159-0": [{"type": "text","sub_type": "message","message": "beat back","message_TW": "左转击退"}],
"s-3126-1000-2159-0": [{"type": "text","sub_type": "message","message": "beat back","message_TW": "左转击退"}],
"s-3126-1000-1120-0": [{"type": "text","sub_type": "message","message": "together","message_TW": "咆哮集中"}],
"s-3126-1000-2120-0": [{"type": "text","sub_type": "message","message": "together","message_TW": "咆哮集中"}],
"s-3126-1000-1157-0": [{"type": "text","sub_type": "message","message": "change","message_TW": "交换"},{"type": "func","func": start_debuff}],
"s-3126-1000-2157-0": [{"type": "text","sub_type": "message","message": "change","message_TW": "交换"},{"type": "func","func": start_debuff}],
"s-3126-1000-1103-0": [{"type": "text","sub_type": "message","message": "tail","message_TW": "毒尾后扫"}],
"s-3126-1000-2103-0": [{"type": "text","sub_type": "message","message": "tail","message_TW": "毒尾后扫"}],
"s-3126-1000-1118-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大跳无敌闪"}],
"s-3126-1000-2118-1": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大跳无敌闪"}],
//"s-3126-1000-118-2": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "闪"}],
//"s-3126-1000-118-2": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "闪"}],
"s-3126-1000-1145-0": [{"type": "text","sub_type": "message","message": "stun","message_TW": "眩晕流血"}],
"s-3126-1000-2145-0": [{"type": "text","sub_type": "message","message": "stun","message_TW": "眩晕流血"}],
"s-3126-1000-1206-0": [{"type": "text","sub_type": "message","message": "Jump back","message_TW": "后跳扫 | 击飞"}],
"s-3126-1000-2206-0": [{"type": "text","sub_type": "message","message": "Jump back","message_TW": "后跳扫 | 击飞"}],
"s-3126-1000-1206-2": [{"type": "func","func": Spawnitem2.bind(null,553,0,0,15,350,200,3000)}],
"s-3126-1000-2206-2": [{"type": "func","func": Spawnitem2.bind(null,553,0,0,15,350,200,3000)}],
"s-3126-1000-1153-0": [{"type": "text","sub_type": "message","message": "tail","message_TW": "毒尾后扫| 击倒"}],
"s-3126-1000-2153-0": [{"type": "text","sub_type": "message","message": "tail","message_TW": "毒尾后扫| 击倒"}],
"s-3126-1000-1154-0": [{"type": "text","sub_type": "message","message": "Ice storm","message_TW": "冰风暴| 持续伤害"}],   //30不可防
"s-3126-1000-2154-0": [{"type": "text","sub_type": "message","message": "Ice storm","message_TW": "冰风暴| 持续伤害"}],   //30不可防
"s-3126-1000-1155-0": [{"type": "text","sub_type": "message","message": "Knock down","message_TW": "火焰柱| 击倒"}],      //30不可防
"s-3126-1000-2155-0": [{"type": "text","sub_type": "message","message": "Knock down","message_TW": "火焰柱| 击倒"}],      //30不可防
"s-3126-1000-1137-0": [{"type": "text","sub_type": "message","message": "Knock down","message_TW": "咆哮击倒"},{"type": "func","func": Spawnitem2.bind(null,553,0,0,2,1275,200,13000)}],
"s-3126-1000-2137-0": [{"type": "text","sub_type": "message","message": "Knock down","message_TW": "咆哮击倒"},{"type": "func","func": Spawnitem2.bind(null,553,0,0,2,1275,200,13000)}],
"s-3126-1000-1138-0": [{"type": "text","sub_type": "message","message": "AOE","message_TW": "AOE"}],
"s-3126-1000-2138-0": [{"type": "text","sub_type": "message","message": "AOE","message_TW": "AOE"}],
"s-3126-1000-1139-0": [{"type": "text","sub_type": "message","message": "60°","message_TW": "[温度] 60° 全体(吃冰)"}],
"s-3126-1000-2139-0": [{"type": "text","sub_type": "message","message": "60°","message_TW": "[温度] 60° 全体(吃冰)"}],
"s-3126-1000-1140-0": [{"type": "text","sub_type": "message","message": "40","message_TW": "[温度] 40° 全体(吃火)"}],
"s-3126-1000-2140-0": [{"type": "text","sub_type": "message","message": "40","message_TW": "[温度] 40° 全体(吃火)"}],
"s-3126-1000-1212-0": [{"type": "func","func": skilld_event.bind(null, 212)},{"type": "func","func": Spawnitem2.bind(null,445,0,0,8,425,200,6000)}],  
"s-3126-1000-1215-0": [{"type": "func","func": skilld_event.bind(null, 215)},{"type": "func","func": Spawnitem2.bind(null,445,0,0,8,425,200,6000)}],      
"s-3126-1000-1213-0": [{"type": "func","func": skilld_event.bind(null, 213)},{"type": "func","func": Spawnitem2.bind(null,445,0,0,8,425,200,6000)}],
"s-3126-1000-1214-0": [{"type": "func","func": skilld_event.bind(null, 214)},{"type": "func","func": Spawnitem2.bind(null,445,0,0,8,425,200,6000)}],
"qb-3126-1000-3026005": [{"type": "func","func": skilld_event.bind(null, 3026005)}],//吃同色恐惧
"qb-3126-1000-3026004": [{"type": "func","func": skilld_event.bind(null, 3026004)}],//吃异色愤怒
"qb-3126-1000-3126005": [{"type": "func","func": skilld_event.bind(null, 3126005)}],//吃同色恐惧
"qb-3126-1000-3126004": [{"type": "func","func": skilld_event.bind(null, 3126004)}],//吃异色愤怒
"ae-0-0-99020020": [{"type": "func","func": skilld_event.bind(null, 99020020)}],
"am-3126-1000-30260001": [{"type": "func","func": skilld_event.bind(null, 3026001)}],//红色
"am-3126-1000-30260002": [{"type": "func","func": skilld_event.bind(null, 3026002)}],//蓝色
"am-3126-1000-31260001": [{"type": "func","func": skilld_event.bind(null, 3126001)}],//红色
"am-3126-1000-31260002": [{"type": "func","func": skilld_event.bind(null, 3126002)}]//蓝色
};