# node.js-tts
一个简单的文本到语音模组
用于proxy TTS转换
# 用法
将文件解压放入 proxy/node_modules里面注意重命名为:voice

rate 为语速，-10 ~ 10，-10最慢，10最快

const voice = require('voice')

let message = "Hello！"

let rate = 5

voice.speak('Hello!',rate)




