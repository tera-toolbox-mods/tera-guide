
//made by michengs

let player, entity, library, effect;

	function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
    }
function Spawnitem2(item,degrees,distance, intervalDegrees, radius, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	applyDistance(shield_loc, distance, degrees);
    for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
        handlers['spawn']({
        	"id": item,
        	"sub_delay": times,
        	"distance": radius,
        	"offset": angle
        }, {loc: shield_loc});
    }
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

//1王
"s-454-1000-1101-0": [{"type": "text","class_position":"tank","sub_type": "message","message_TW": "左手"}],
"s-454-1000-1102-0": [{"type": "text","class_position":"tank","sub_type": "message","message_TW": "右手"}],
"s-454-1000-1103-0": [{"type": "text","sub_type": "message","message_TW": "3连闪避"}],
"s-454-1000-1104-0": [{"type": "text","sub_type": "message","message_TW": "旋转6次"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,0,15,200,5000)}],
"s-454-1000-1105-0": [{"type": "text","sub_type": "message","message_TW": "进"}],
"s-454-1000-1106-0": [{"type": "text","sub_type": "message","message_TW": "点名"}],
"s-454-1000-1107-0": [{"type": "text","sub_type": "message","message_TW": "乌龟行动"}],
"s-454-1000-1108-0": [{"type": "text","sub_type": "message","message_TW": "左侧"}],
"s-454-1000-1109-0": [{"type": "text","sub_type": "message","message_TW": "右侧"}],
"s-454-1000-1201-0": [{"type": "text","sub_type": "message","message_TW": "身体撞击"}],
"s-454-1000-1202-0": [{"type": "text","sub_type": "message","message_TW": "乌龟防御动作"}],
"s-454-1000-1203-0": [{"type": "text","sub_type": "message","message_TW": "乌龟眩晕"}],
"s-454-1000-1204-0": [{"type": "text","sub_type": "message","message_TW": "乌龟模式提醒"}],
"s-454-1000-1205-0": [{"type": "text","sub_type": "message","message_TW": "乌龟逃走"}],
"s-454-1000-1206-0": [{"type": "text","sub_type": "message","message_TW": "乌龟大气动作Wait老马"}],
//--------------------------------------------------------------------------------------------------------------------
"s-454-1000-2101-0": [{"type": "text","class_position":"tank","sub_type": "message","message_TW": "左手"}],
"s-454-1000-2102-0": [{"type": "text","class_position":"tank","sub_type": "message","message_TW": "右手"}],
"s-454-1000-2103-0": [{"type": "text","sub_type": "message","message_TW": "3连闪避"}],
"s-454-1000-2104-0": [{"type": "text","sub_type": "message","message_TW": "旋转6次"},
	                  {"type": "func","func": Spawnitem2.bind(null,912,0,0,15,200,5000)}],
"s-454-1000-2105-0": [{"type": "text","sub_type": "message","message_TW": "进"}],
"s-454-1000-2106-0": [{"type": "text","sub_type": "message","message_TW": "点名"}],
"s-454-1000-2107-0": [{"type": "text","sub_type": "message","message_TW": "乌龟行动"}],
"s-454-1000-2108-0": [{"type": "text","sub_type": "message","message_TW": "左侧"}],
"s-454-1000-2109-0": [{"type": "text","sub_type": "message","message_TW": "右侧"}],
"s-454-1000-2201-0": [{"type": "text","sub_type": "message","message_TW": "身体撞击"}],
"s-454-1000-2202-0": [{"type": "text","sub_type": "message","message_TW": "乌龟防御动作"}],
"s-454-1000-2203-0": [{"type": "text","sub_type": "message","message_TW": "乌龟眩晕"}],
"s-454-1000-2204-0": [{"type": "text","sub_type": "message","message_TW": "乌龟模式提醒"}],
"s-454-1000-2205-0": [{"type": "text","sub_type": "message","message_TW": "乌龟逃走"}],
"s-454-1000-2206-0": [{"type": "text","sub_type": "message","message_TW": "乌龟大气动作Wait老马"}],
"s-454-1000-3101-0": [{"type": "text","sub_type": "message","message_TW": "石堆破坏"}],
"s-454-1000-3102-0": [{"type": "text","sub_type": "message","message_TW": "前喷"}],
"s-454-1000-3103-0": [{"type": "text","sub_type": "message","message_TW": "击倒boss"}],
"s-454-1000-3104-0": [{"type": "text","sub_type": "message","message_TW": "破盾不然团灭"}],

//2王

"s-454-1001-1102-0": [{"type": "text","sub_type": "message","message": "Back Flip (Fast)","message_TW": "后空翻"}],
"s-454-1001-1104-0": [{"type": "text","sub_type": "message","message": "Frontal Spin!","message_TW": "正面旋转！"}],
"s-454-1001-1105-0": [{"type": "text","sub_type": "message","message": "Tail","message_TW": "尾巴"}],
"s-454-1001-1108-0": [{"type": "text","sub_type": "message","message_TW": "深海鱼源距离粘液场准备动作"}],
"s-454-1001-1109-0": [{"type": "text","sub_type": "message","message_TW": "深海捕获捕获攻击"}],
"s-454-1001-1110-0": [{"type": "text","sub_type": "message","message": "Cyclone! (Slow)","message_TW": "死亡旋轉"}],
"s-454-1001-1113-0": [{"type": "text","sub_type": "message","message_TW": "深海粘液场"}],
"s-454-1001-1101-0": [{"type": "text","sub_type": "MSG","message_TW": "1101违规攻击"}],
"s-454-1001-1103-0": [{"type": "text","sub_type": "MSG","message_TW": "1103严重攻击1heavyatk 01老话"}],
"s-454-1001-1105-0": [{"type": "text","sub_type": "MSG","message_TW": "1105严重攻击尾部时差backatk老话"}],
"s-454-1001-1106-0": [{"type": "text","sub_type": "MSG","message_TW": "1106严重攻击尾声左转roundatk 01老话"}],
"s-454-1001-1107-0": [{"type": "text","sub_type": "MSG","message_TW": "1107深海攻击尾声roundatk 02"}],
"s-454-1001-1111-0": [{"type": "text","sub_type": "MSG","message_TW": "1111深海鱼会前+突进攻击activemove"}],
"s-454-1001-1112-0": [{"type": "text","sub_type": "MSG","message_TW": "1112深海气象台grogy老话"}],
"s-454-1001-1210-0": [{"type": "text","sub_type": "MSG","message_TW": "1210深海3回转+突击movetk 01愤怒"}],
"s-454-1001-1211-0": [{"type": "text","sub_type": "MSG","message_TW": "1211深海鱼会前+突进攻击activemove愤怒"}],
"s-454-1001-1212-0": [{"type": "text","sub_type": "MSG","message_TW": "1212深海气象台grogy愤怒"}],
"s-454-1001-1214-0": [{"type": "text","sub_type": "MSG","message_TW": "1214深度Active Move愤怒"}],
//--------------------------------------------------------------------------------------------------------------------
"s-454-1001-2102-0": [{"type": "text","sub_type": "message","message": "Back Flip (Fast)","message_TW": "后空翻"}],
"s-454-1001-2104-0": [{"type": "text","sub_type": "message","message": "Frontal Spin!","message_TW": "正面旋转！"}],
"s-454-1001-2105-0": [{"type": "text","sub_type": "message","message": "Tail","message_TW": "尾巴"}],
"s-454-1001-2108-0": [{"type": "text","sub_type": "message","message_TW": "深海鱼源距离粘液场准备动作"}],
"s-454-1001-2109-0": [{"type": "text","sub_type": "message","message_TW": "深海捕获捕获攻击"}],
"s-454-1001-2110-0": [{"type": "text","sub_type": "message","message": "Cyclone! (Slow)","message_TW": "死亡旋轉"}],
"s-454-1001-2113-0": [{"type": "text","sub_type": "message","message_TW": "深海粘液场"}],
"s-454-1001-2101-0": [{"type": "text","sub_type": "MSG","message_TW": "2101违规攻击"}],
"s-454-1001-2103-0": [{"type": "text","sub_type": "MSG","message_TW": "2103严重攻击1heavyatk 01老话"}],
"s-454-1001-2105-0": [{"type": "text","sub_type": "MSG","message_TW": "2105严重攻击尾部时差backatk老话"}],
"s-454-1001-2106-0": [{"type": "text","sub_type": "MSG","message_TW": "2106严重攻击尾声左转roundatk 01老话"}],
"s-454-1001-2107-0": [{"type": "text","sub_type": "MSG","message_TW": "2107深海攻击尾声roundatk 02"}],
"s-454-1001-2111-0": [{"type": "text","sub_type": "MSG","message_TW": "2111深海鱼会前+突进攻击activemove"}],
"s-454-1001-2112-0": [{"type": "text","sub_type": "MSG","message_TW": "2112深海气象台grogy老话"}],
"s-454-1001-2210-0": [{"type": "text","sub_type": "MSG","message_TW": "2210深海3回转+突击movetk 01愤怒"}],
"s-454-1001-2211-0": [{"type": "text","sub_type": "MSG","message_TW": "2211深海鱼会前+突进攻击activemove愤怒"}],
"s-454-1001-2212-0": [{"type": "text","sub_type": "MSG","message_TW": "2212深海气象台grogy愤怒"}],
"s-454-1001-2214-0": [{"type": "text","sub_type": "MSG","message_TW": "2214深度Active Move愤怒"}],
"s-454-1001-3103-0": [{"type": "text","sub_type": "MSG","message_TW": "3103严重的准备动作"}],
"s-454-1001-3104-0": [{"type": "text","sub_type": "MSG","message_TW": "3104严重发射恐惧动作"}],
"s-454-1001-3105-0": [{"type": "text","sub_type": "MSG","message_TW": "3105深海前占卜场"}],
"s-454-1001-3102-0": [{"type": "text","sub_type": "message","message_TW": "大跳跃攻击"}],

//3王

"s-454-1002-1102-0": [{"type": "text","class_position":"tank","sub_type": "message","message_TW": "前砸"}],
"s-454-1002-1103-0": [{"type": "text","sub_type": "message","message_TW": "点名"}],
"s-454-1002-1104-0": [{"type": "text","sub_type": "message","message_TW": "范围攻击"}],
"s-454-1002-1107-0": [{"type": "text","sub_type": "message","message": "Back Hit! (Fast)","message_TW": "后击！"}],
"s-454-1002-1108-0": [{"type": "text","sub_type": "message","message_TW": "后击！"}],
"s-454-1002-1112-0": [{"type": "text","sub_type": "message","message": "Jump (Fast)","message_TW": "跳跃"}],
//"s-454-1002-1101-0": [{"type": "text","sub_type": "MSG","message_TW": "1101奥尔卡基本攻击1atk 01老话"}],
"s-454-1002-1105-0": [{"type": "text","sub_type": "MSG","message_TW": "1105上加旋转攻击heavyatk 02匹马"}],
"s-454-1002-1106-0": [{"type": "text","sub_type": "message","message_TW": "左侧攻击"}],
"s-454-1002-1109-0": [{"type": "text","sub_type": "MSG","message_TW": "1109奥加卡广泛攻击modealram"}],
"s-454-1002-1110-0": [{"type": "text","sub_type": "message","message_TW": "齒輪掃圈"}],
//"s-454-1002-1150-0": [{"type": "text","sub_type": "MSG","message_TW": "1150移动奥卡activemove诺马"}],
"s-454-1002-1210-0": [{"type": "text","sub_type": "MSG","message_TW": "1210上车前进攻击activemove愤怒"}],
"s-454-1002-1212-0": [{"type": "text","sub_type": "MSG","message_TW": "1212奥加加跳跃攻击backmove愤怒"}],
"s-454-1002-1250-0": [{"type": "text","sub_type": "MSG","message_TW": "1250移动奥加卡activemove愤怒"}],
//----------------------------------------------------------------------------------------------------------------------------
"s-454-1002-2102-0": [{"type": "text","class_position":"tank","sub_type": "message","message_TW": "前砸"}],
"s-454-1002-2103-0": [{"type": "text","sub_type": "message","message_TW": "点名"}],
"s-454-1002-2104-0": [{"type": "text","sub_type": "message","message_TW": "范围攻击"}],
"s-454-1002-2107-0": [{"type": "text","sub_type": "message","message": "Back Hit! (Fast)","message_TW": "后击！"}],
"s-454-1002-2108-0": [{"type": "text","sub_type": "message","message_TW": "后击！"}],
"s-454-1002-2112-0": [{"type": "text","sub_type": "message","message": "Jump (Fast)","message_TW": "跳跃"}],
//"s-454-1002-2101-0": [{"type": "text","sub_type": "MSG","message_TW": "2101奥尔卡基本攻击1atk 01老话"}],
"s-454-1002-2105-0": [{"type": "text","sub_type": "MSG","message_TW": "2105上加旋转攻击heavyatk 02匹马"}],
"s-454-1002-2106-0": [{"type": "text","sub_type": "message","message_TW": "左侧攻击"}],
"s-454-1002-2109-0": [{"type": "text","sub_type": "MSG","message_TW": "2109奥加卡广泛攻击modealram"}],
"s-454-1002-2110-0": [{"type": "text","sub_type": "message","message_TW": "齒輪掃圈"}],
//"s-454-1002-2150-0": [{"type": "text","sub_type": "MSG","message_TW": "2150移动奥卡activemove诺马"}],
"s-454-1002-2210-0": [{"type": "text","sub_type": "MSG","message_TW": "2210上车前进攻击activemove愤怒"}],
"s-454-1002-2212-0": [{"type": "text","sub_type": "MSG","message_TW": "2212奥加加跳跃攻击backmove愤怒"}],
"s-454-1002-2250-0": [{"type": "text","sub_type": "MSG","message_TW": "2250移动奥加卡activemove愤怒"}],
//-----------------------------------------------------------------------------------------------------------------------------
"s-454-1002-3105-0": [{"type": "text","sub_type": "message","message": "Get in","message_TW": "进"}],
"s-454-1002-3117-0": [{"type": "text","sub_type": "message","message": "In Out In","message_TW": "进 出 进"}],
"s-454-1002-3110-0": [{"type": "text","sub_type": "message","message": "Pizza mech","message_TW": "披萨机制"}],
"s-454-1002-3101-0": [{"type": "text","sub_type": "MSG","message_TW": "3101突进全歼机1号主longmove"}],
"s-454-1002-3102-0": [{"type": "text","sub_type": "MSG","message_TW": "3102突进全歼机2号主longmove"}],
"s-454-1002-3103-0": [{"type": "text","sub_type": "MSG","message_TW": "3103突进全歼机3号主longmove"}],
"s-454-1002-3104-0": [{"type": "text","sub_type": "MSG","message_TW": "3104奥加突进全歼机4号主longmove"}],
"s-454-1002-3106-0": [{"type": "text","sub_type": "message","message_TW": "全場切割檢定"}],
"s-454-1002-3108-0": [{"type": "text","sub_type": "MSG","message_TW": "3108让我们全军覆没"}],
"s-454-1002-3111-0": [{"type": "text","sub_type": "MSG","message_TW": "3111奥尔卡最后一击"}],
"s-454-1002-3112-0": [{"type": "text","sub_type": "MSG","message_TW": "3112奥加卡最后挣扎"}],
"s-454-1002-3113-0": [{"type": "text","sub_type": "message","message_TW": "破盾"}],
"s-454-1002-3115-0": [{"type": "text","sub_type": "message","message_TW": "爆走模式"}],
"s-454-1002-3116-0": [{"type": "text","sub_type": "MSG","message_TW": "3116奥尔卡周边冲击波爆炸版heavyatk 01"}],
"s-454-1002-3118-0": [{"type": "text","sub_type": "MSG","message_TW": "3118传记具体召唤"}],
"s-454-1002-3119-0": [{"type": "text","sub_type": "message","message_TW": "水浪檢定"}],
"s-454-1002-3120-0": [{"type": "text","sub_type": "MSG","message_TW": "3120传记具体召唤（上级）"}],
"s-454-1002-3205-0": [{"type": "text","sub_type": "MSG","message_TW": "3205上街图案时周围"}],

//------------------------------------------特殊
"s-454-4010-1101-0": [{"type": "text","sub_type": "MSG","message_TW": "1101奥尔卡的神电水势模式第一阶段"}],
"s-454-4010-1102-0": [{"type": "text","sub_type": "MSG","message_TW": "1102奥加卡水势模式施展动作"}],
"s-454-4010-1103-0": [{"type": "text","sub_type": "MSG","message_TW": "1103奥尔卡的神殿水势模式"}],
"s-454-4010-1104-0": [{"type": "text","sub_type": "MSG","message_TW": "1104奥尔卡的神电范围攻击"}],
"s-454-4010-1105-0": [{"type": "text","sub_type": "MSG","message_TW": "1105奥尔卡的神殿中央水势模式2步"}],
"s-454-4010-1106-0": [{"type": "text","sub_type": "MSG","message_TW": "1106奥尔卡的神殿中央水势模式3个步骤"}],
"s-454-4010-1107-0": [{"type": "text","sub_type": "MSG","message_TW": "1107奥尔卡的神殿中央水势模式4个步骤"}],
"s-454-4010-1108-0": [{"type": "text","sub_type": "MSG","message_TW": "1108奥尔卡的神殿中央水势模式5步"}],
"s-454-4010-1109-0": [{"type": "text","sub_type": "MSG","message_TW": "1109奥尔卡的神殿突进后场"}],
"s-454-4010-2101-0": [{"type": "text","sub_type": "MSG","message_TW": "2101深海鱼图案1"}],
"s-454-4010-2102-0": [{"type": "text","sub_type": "MSG","message_TW": "2102深海鱼图案2"}],
"s-454-4010-2103-0": [{"type": "text","sub_type": "MSG","message_TW": "2103深海鱼图案3"}],
"s-454-4010-3101-0": [{"type": "text","sub_type": "MSG","message_TW": "3101巨大的乌龟喷出毒气"}],
"s-454-4010-3102-0": [{"type": "text","sub_type": "MSG","message_TW": "3102巨大的乌龟不出毒气"}],


"s-454-401-1101-0": [{"type": "text","sub_type": "MSG","message_TW": "-1101奥加电具体进攻模式"}],
"s-454-401-1102-0": [{"type": "text","sub_type": "MSG","message_TW": "-1102奥加卡水势模式施展动作"}],
"s-454-401-1103-0": [{"type": "text","sub_type": "MSG","message_TW": "-1103奥尔卡的神殿水势模式"}],
"s-454-401-1104-0": [{"type": "text","sub_type": "MSG","message_TW": "-1104奥尔卡的神电电站攻击时动作"}],
"s-454-401-1105-0": [{"type": "text","sub_type": "MSG","message_TW": "-1105奥尔卡的神电电站"}]



		 
};

