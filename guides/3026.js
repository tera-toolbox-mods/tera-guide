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
let blue = false;
let red = false;
const {SpawnMarker, SpawnVector, SpawnCircle, SpawnSemicircle} = require("../lib");
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
function skilld_event(skillid, handlers, event, entity, dispatch) {	
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

SpawnCircle(false,413,0,0,8,440,0,6000,handlers,event,entity);

 if  (debuff != null) {
handlers['text']({
"sub_type": "message",
"message": (`${boss_skill[skillid].msgt} | ${CK_TipMsg[(qbacting + debuff +1) %2].msgt}`),
"message_TW": (`${boss_skill[skillid].msg} | ${CK_TipMsg[(qbacting + debuff +1) %2].msg}`)
});	
blue = true;
red  = false;
setTimeout(() => blue  = false, 6500);	    //6700
 } 
}
if ([212,215].includes(skillid)) {   // //红内

SpawnCircle(false,413,0,0,8,440,0,6000,handlers,event,entity);

 if  (debuff != null) {
handlers['text']({
"sub_type": "message",
"message": (`${boss_skill[skillid].msgt} | ${CK_TipMsg[(qbacting + debuff) %2].msgt}`),
"message_TW": (`${boss_skill[skillid].msg} | ${CK_TipMsg[(qbacting + debuff) %2].msg}`)
});	
blue = false;
red  = true; 
setTimeout(() => red  = false, 6500);
 }
}
if (skillid === 99020020) { //死亡解除debuff
//debuff = null;
clearTimeout(timer1);
clearTimeout(timer2);
 }
 

  switch(skillid) {

		case 1112:	  
		case 2112:		  
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "Air-conditioned DOT (away)","message_TW": "冰带(闪)"});	
                    break;
                 }
		case 1110:	  
		case 2110:		  
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "Fire DOT (Away)","message_TW": "岩浆(闪)"});	
                    break;
                 }				 
		case 1108:	
		case 2108:			
		case 2158:
		case 1158:			
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "Turn right (repel !!)","message_TW": "右转击退"});	
				  SpawnCircle(false,553,0,0,8,440,0,2000,handlers,event,entity);					  
                    break;
                 }
		case 1109:	  
		case 2109:	  
		case 2159:
		case 1159:			
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "Turn left (repel !!)","message_TW": "左转击退"});	
				  SpawnCircle(false,553,0,0,8,440,0,2000,handlers,event,entity);					  
                    break;
                 }
		case 1120:
		case 2120:			
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "together","message_TW": "集中加血"});					  
                    break;
                 }
		case 1157:
		case 2157:			
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "change","message_TW": "交换"});					  
                    break;
                 }				 
		case 1103:
		case 2103:
        case 1153:				 
        case 2153:		
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "Tail (Flying !!)","message_TW": "毒尾后扫"});
				  SpawnSemicircle(140,260,553,0,0,8,500,0,1500,handlers,event,entity);	
				  SpawnVector(553,0,0,135,500,0,1500,handlers,event,entity);	
				  SpawnVector(553,0,0,260,500,0,1500,handlers,event,entity);				  
                    break;
                 }				  
		case 1118:
		case 2118:			
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "Jump","message_TW": "大跳(闪)"});					  
                    break;	
                 }						
		case 1145:
		case 2145:			
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "stun","message_TW": "眩晕流血"});					  
                    break;
                 }	
		case 2105:
        case 1105: 
		         {
					SpawnCircle(false,553,135,500,8,270,0,3000,handlers,event,entity);						
					SpawnCircle(false,553,315,500,8,270,0,3250,handlers,event,entity);
					SpawnCircle(false,553,45,500,8,270,0,3500,handlers,event,entity);	
					SpawnCircle(false,553,235,500,8,270,0,3750,handlers,event,entity);	
					SpawnCircle(false,553,90,500,8,270,0,4000,handlers,event,entity);
					SpawnCircle(false,553,270,500,8,270,0,4250,handlers,event,entity);	
					SpawnCircle(false,553,0,500,8,270,0,4500,handlers,event,entity);	
					SpawnCircle(false,553,180,500,8,270,0,4750,handlers,event,entity);
                    break;
                 } 
         case 1206:				 
         case 2206:
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "Jump back","message_TW": "后跳(击飛)"});
                    break;
                 }	 
         case 1154:				 
         case 2154:
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "Ice storm","message_TW": "冰风暴"});
				  SpawnCircle(false,553,180,80,8,520,0,5000,handlers,event,entity);
                    break;
                 }				  
         case 1155:				 
         case 2155:
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "Knock down","message_TW": "火焰柱(击倒)"});
                    break;
                 }			 
				 
         case 1137:				 
         case 2137:
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "Knock down","message_TW": "咆哮击倒"});
				  SpawnCircle(false,553,0,0,2,1275,0,13000,handlers,event,entity);				  
                    break;
                 }				 
         case 1138:				 
         case 2138:
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "AOE","message_TW": "AOE"});
                    break;
                 }				 
         case 1139:				 
         case 2139:
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "60°","message_TW": "[温度] 60° (吃冰)"});
                    break;
                 }				 
         case 1140:				 
         case 2140:
		         {
                  handlers['text']({"type": "text","sub_type": "message","message": "40°","message_TW": "[温度] 40° (吃火)"});
                    break;
                 }					 			 
  } 
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
			    debuff = event.id ;	
                if(blue){
				handlers['text']({
				"sub_type": "message",
				"message": (` ${CK_TipMsg[(qbacting + debuff +1) %2].msgt}`),
				"message_TW": (` ${CK_TipMsg[(qbacting + debuff +1) %2].msg}`)
				 });		
				}else if(red){
				 handlers['text']({
				 "sub_type": "message",
				 "message": (` ${CK_TipMsg[(qbacting + debuff) %2].msgt}`),
				 "message_TW": (`${CK_TipMsg[(qbacting + debuff) %2].msg}`)
				 });		
				} 				
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
"s-3026-1000-1112-0": [{"type": "func","func": skilld_event.bind(null, 1112)}],
"s-3026-1000-1110-0": [{"type": "func","func": skilld_event.bind(null, 1110)}],
"s-3026-1000-2112-0": [{"type": "func","func": skilld_event.bind(null, 2112)}],
"s-3026-1000-2110-0": [{"type": "func","func": skilld_event.bind(null, 2110)}],
"s-3026-1000-1108-0": [{"type": "func","func": skilld_event.bind(null, 1108)}],
"s-3026-1000-2108-0": [{"type": "func","func": skilld_event.bind(null, 2108)}],
"s-3026-1000-1158-0": [{"type": "func","func": skilld_event.bind(null, 1158)}],
"s-3026-1000-2158-0": [{"type": "func","func": skilld_event.bind(null, 2158)}],
"s-3026-1000-1109-0": [{"type": "func","func": skilld_event.bind(null, 1109)}],
"s-3026-1000-2109-0": [{"type": "func","func": skilld_event.bind(null, 2109)}],
"s-3026-1000-1159-0": [{"type": "func","func": skilld_event.bind(null, 1159)}],
"s-3026-1000-2159-0": [{"type": "func","func": skilld_event.bind(null, 2159)}],
"s-3026-1000-1120-0": [{"type": "func","func": skilld_event.bind(null, 1120)}],
"s-3026-1000-2120-0": [{"type": "func","func": skilld_event.bind(null, 2120)}],
"s-3026-1000-1157-0": [{"type": "func","func": skilld_event.bind(null, 1157)},{"type": "func","func": start_debuff}],
"s-3026-1000-2157-0": [{"type": "func","func": skilld_event.bind(null, 2157)},{"type": "func","func": start_debuff}],
"s-3026-1000-1103-0": [{"type": "func","func": skilld_event.bind(null, 1103)}],
"s-3026-1000-2103-0": [{"type": "func","func": skilld_event.bind(null, 2103)}],
"s-3026-1000-1118-1": [{"type": "func","func": skilld_event.bind(null, 1118)}],
"s-3026-1000-2118-1": [{"type": "func","func": skilld_event.bind(null, 2118)}],
"s-3026-1000-1145-0": [{"type": "func","func": skilld_event.bind(null, 1145)}],
"s-3026-1000-2145-0": [{"type": "func","func": skilld_event.bind(null, 2145)}],
"s-3026-1000-1105-0": [{"type": "func","func": skilld_event.bind(null, 1105)}],
"s-3026-1000-2105-0": [{"type": "func","func": skilld_event.bind(null, 2105)}],
"s-3026-1000-1206-0": [{"type": "func","func": skilld_event.bind(null, 1206)}],
"s-3026-1000-2206-0": [{"type": "func","func": skilld_event.bind(null, 2206)}],
"s-3026-1000-1206-2": [{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,350,0,3000)}],
"s-3026-1000-2206-2": [{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,350,0,3000)}],
"s-3026-1000-1153-0": [{"type": "func","func": skilld_event.bind(null, 1153)}],
"s-3026-1000-2153-0": [{"type": "func","func": skilld_event.bind(null, 2153)}],
"s-3026-1000-1154-0": [{"type": "func","func": skilld_event.bind(null, 1154)}],   
"s-3026-1000-2154-0": [{"type": "func","func": skilld_event.bind(null, 2154)}],  
"s-3026-1000-1155-0": [{"type": "func","func": skilld_event.bind(null, 1155)}],      
"s-3026-1000-2155-0": [{"type": "func","func": skilld_event.bind(null, 2155)}],      
"s-3026-1000-1137-0": [{"type": "func","func": skilld_event.bind(null, 1137)}],
"s-3026-1000-2137-0": [{"type": "func","func": skilld_event.bind(null, 2137)}],
"s-3026-1000-1138-0": [{"type": "func","func": skilld_event.bind(null, 1138)}],
"s-3026-1000-2138-0": [{"type": "func","func": skilld_event.bind(null, 2138)}],
"s-3026-1000-1139-0": [{"type": "func","func": skilld_event.bind(null, 1139)}],
"s-3026-1000-2139-0": [{"type": "func","func": skilld_event.bind(null, 2139)}],
"s-3026-1000-1140-0": [{"type": "func","func": skilld_event.bind(null, 1140)}],
"s-3026-1000-2140-0": [{"type": "func","func": skilld_event.bind(null, 2140)}],
"s-3026-1000-1212-0": [{"type": "func","func": skilld_event.bind(null, 212)}],  
"s-3026-1000-1215-0": [{"type": "func","func": skilld_event.bind(null, 215)}],      
"s-3026-1000-1213-0": [{"type": "func","func": skilld_event.bind(null, 213)}],
"s-3026-1000-1214-0": [{"type": "func","func": skilld_event.bind(null, 214)}],
"qb-3026-1000-3026005": [{"type": "func","func": skilld_event.bind(null, 3026005)}],
"qb-3026-1000-3026004": [{"type": "func","func": skilld_event.bind(null, 3026004)}],
"qb-3026-1000-3126005": [{"type": "func","func": skilld_event.bind(null, 3126005)}],
"qb-3026-1000-3126004": [{"type": "func","func": skilld_event.bind(null, 3126004)}],
"ae-0-0-99020020": [{"type": "func","func": skilld_event.bind(null, 99020020)}],
"am-3026-1000-30260001": [{"type": "func","func": skilld_event.bind(null, 3026001)}],
"am-3026-1000-30260002": [{"type": "func","func": skilld_event.bind(null, 3026002)}],
"am-3026-1000-31260001": [{"type": "func","func": skilld_event.bind(null, 3126001)}],
"am-3026-1000-31260002": [{"type": "func","func": skilld_event.bind(null, 3126002)}]
};