// 火神
//made by michengs
let guidecounter = 0 ;//
let guidetimer;//
   function guid_voice(handlers) {   
	  clearTimeout(guidetimer);
      guidecounter++;
    if(guidecounter >= 3) {	
handlers['text']({
"sub_type": "speech",
"delay": 2000,
"message_TW": "proxy频道输入:補助 help 获取更多使用信息!"
});

handlers['text']({
"sub_type": "notification",
"delay": 2000,
"message_TW": "proxy频道输入:補助 help <br>获取更多使用信息!"
});
    }
    guidetimer = setTimeout(()=>{
        guidecounter = 0;
    }, 3000);
}	

module.exports = {

 "h-444-1000-100-0": [{"type": "func","func": guid_voice}],
 "h-444-2000-100-0": [{"type": "func","func": guid_voice}],
 "s-444-1000-101-0": [{"type": "text","sub_type": "speech","message": "锤地 270 重击" }], 
 "s-444-1000-103-0": [{"type": "text","sub_type": "speech","message": "前砸 闪避" }], 
 "s-444-1000-107-0": [{"type": "text","sub_type": "speech","message": "重击 闪避" }], 
 "s-444-1000-108-0": [{"type": "text","sub_type": "speech","message": "丢锤 (晕眩)" }], 
 "s-444-1000-111-0": [{"type": "text","sub_type": "speech","message": "后砸 (慢慢慢慢)" }],  
 "s-444-1000-112-0": [{"type": "text","sub_type": "speech","message": "完美格挡" }],  
 "s-444-1000-113-0": [{"type": "text","sub_type": "speech","message": "点名 (闪避)" }],  
 "s-444-1000-114-0": [{"type": "text","sub_type": "speech","message": "捶地 (秒杀)" }],  
 "s-444-1000-115-0": [{"type": "text","sub_type": "speech","message": "右 蓄力(击飞)" }],  
 "s-444-1000-116-0": [{"type": "text","sub_type": "speech","message": "甜甜圈" }],   
 "s-444-1000-117-0": [{"type": "text","sub_type": "speech","message": "随仇->跳劈 (击倒)" }],  
 "s-444-1000-118-0": [{"type": "text","sub_type": "speech","message": "主仇->跳劈 (击倒)" }],  
 "s-444-1000-119-0": [{"type": "text","sub_type": "speech","message": "右 安全→ (坦左移)" }],  
 "s-444-1000-120-0": [{"type": "text","sub_type": "speech","message": "左 安全← (坦右移)" }],  
 "s-444-1000-121-0": [{"type": "text","sub_type": "speech","message": "左  (4连半月)" }],  
 "s-444-1000-122-0": [{"type": "text","sub_type": "speech","message": "左  第3下加速'" }],  
 "s-444-1000-123-0": [{"type": "text","sub_type": "speech","message": "左  第2下加速" }],  
 "s-444-1000-125-0": [{"type": "text","sub_type": "speech","message": "右 前砸(闪) | 后拉" }],  
 "s-444-1000-131-0": [{"type": "text","sub_type": "speech","message": "左 范围(挡) | 后拉" }],  
 "s-444-1000-135-0": [{"type": "text","sub_type": "speech","message": "完美格挡" }],  
 "s-444-1000-138-0": [{"type": "text","sub_type": "speech","message": "左 蓄力(击飞)" }],  
 "s-444-1000-139-0": [{"type": "text","sub_type": "speech","message": "转圈 (击倒)" }],  
 "s-444-1000-140-0": [{"type": "text","sub_type": "speech","message": "右  (4连半月)" }],  
 "s-444-1000-141-0": [{"type": "text","sub_type": "speech","message": "右  第3下加速" }],  
 "s-444-1000-142-0": [{"type": "text","sub_type": "speech","message": "右  第2下加速" }],  
 "s-444-1000-308-0": [{"type": "text","sub_type": "speech","message": "第1次晕" }],  
 "s-444-1000-309-0": [{"type": "text","sub_type": "speech","message": "第2次晕" }],  
 "s-444-1000-310-0": [{"type": "text","sub_type": "speech","message": "第3次晕" }],  
 "s-444-1000-311-0": [{"type": "text","sub_type": "speech","message": "补师开盾 (右手放锤)" }],  
 "s-444-1000-312-0": [{"type": "text","sub_type": "speech","message": "补师开盾 (左右放锤)" }],  
 "s-444-2000-101-0": [{"type": "text","sub_type": "speech","message": "锤地 270 重击" }], 
 "s-444-2000-103-0": [{"type": "text","sub_type": "speech","message": "前砸 闪避" }],
 "s-444-2000-107-0": [{"type": "text","sub_type": "speech","message": "重击 闪避" }], 
 "s-444-2000-108-0": [{"type": "text","sub_type": "speech","message": "丢锤 (晕眩)" }], 
 "s-444-2000-111-0": [{"type": "text","sub_type": "speech","message": "后砸 (慢慢慢慢)" }],  
 "s-444-2000-112-0": [{"type": "text","sub_type": "speech","message": "完美格挡" }],  
 "s-444-2000-113-0": [{"type": "text","sub_type": "speech","message": "点名 (闪避)" }],  
 "s-444-2000-114-0": [{"type": "text","sub_type": "speech","message": "捶地 (秒杀)" }],  
 "s-444-2000-115-0": [{"type": "text","sub_type": "speech","message": "右 蓄力(击飞)" }],  
 "s-444-2000-116-0": [{"type": "text","sub_type": "speech","message": "甜甜圈" }],   
 "s-444-2000-117-0": [{"type": "text","sub_type": "speech","message": "随仇->跳劈 (击倒)" }],  
 "s-444-2000-118-0": [{"type": "text","sub_type": "speech","message": "主仇->跳劈 (击倒)" }],  
 "s-444-2000-119-0": [{"type": "text","sub_type": "speech","message": "右 安全→ (坦左移)" }],  
 "s-444-2000-120-0": [{"type": "text","sub_type": "speech","message": "左 安全← (坦右移)" }],  
 "s-444-2000-121-0": [{"type": "text","sub_type": "speech","message": "左  (4连半月)" }],  
 "s-444-2000-122-0": [{"type": "text","sub_type": "speech","message": "左  第3下加速'" }],  
 "s-444-2000-123-0": [{"type": "text","sub_type": "speech","message": "左  第2下加速" }],  
 "s-444-2000-125-0": [{"type": "text","sub_type": "speech","message": "右 前砸(闪) | 后拉" }],  
 "s-444-2000-131-0": [{"type": "text","sub_type": "speech","message": "左 范围(挡) | 后拉" }],  
 "s-444-2000-135-0": [{"type": "text","sub_type": "speech","message": "完美格挡" }],  
 "s-444-2000-138-0": [{"type": "text","sub_type": "speech","message": "左 蓄力(击飞)" }],  
 "s-444-2000-139-0": [{"type": "text","sub_type": "speech","message": "转圈 (击倒)" }],  
 "s-444-2000-140-0": [{"type": "text","sub_type": "speech","message": "右  (4连半月)" }],  
 "s-444-2000-141-0": [{"type": "text","sub_type": "speech","message": "右  第3下加速" }],  
 "s-444-2000-142-0": [{"type": "text","sub_type": "speech","message": "右  第2下加速" }],  
 "s-444-2000-308-0": [{"type": "text","sub_type": "speech","message": "第1次晕" }],  
 "s-444-2000-309-0": [{"type": "text","sub_type": "speech","message": "第2次晕" }],  
 "s-444-2000-310-0": [{"type": "text","sub_type": "speech","message": "第3次晕" }],  
 "s-444-2000-311-0": [{"type": "text","sub_type": "speech","message": "补师开盾 (右手放锤)" }],  
 "s-444-2000-312-0": [{"type": "text","sub_type": "speech","message": "补师开盾 (左右放锤)" }]  

};