'use strict';

var child_process = require('child_process');
var path = require('path');
var voice = exports;
const { exec } = require('child_process');
const iconv = require('./gbk');
voice.speak = function(message,rate) {
 	exec(`powershell.exe Add-Type -AssemblyName System.speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Rate =${rate} ; $speak.Speak([Console]::In.ReadToEnd()); exit`).stdin.end(iconv.encode(message, 'gbk'));
};
