/* Copyright (C) 2020 Yusuf Usta.
re-editted by Shadow
Shadow-Bot
*/

const Shadow = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require("fs")
const Spark = require('../spark');
const axios = require('axios');
let wk = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('_asena');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

if (Config.STANDPLK == 'off') {
if (Config.MENUTYPE == 'one' || Config.MENUTYPE == 'One' || Config.MENUTYPE == 'ONE' || Config.MENUTYPE == '1' ) {

Shadow.addCommand({pattern: 'list ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
var url = await axios.get(Spark.THUMBNAIL, { responseType: 'arraybuffer' })
    var CMD_HELP = '';
    if (match[1] === '') {
        Shadow.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var match = [command.pattern];
                }
    
                var HANDLER = '';
    
                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                CMD_HELP += '*📓 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                if (command.desc !== '') CMD_HELP += '*♦️ ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                if (command.usage !== '') CMD_HELP += '*📝 ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

            }
        );
        
        await message.client.sendMessage(
            message.jid, CMD_HELP, MessageType.text , {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Spark.VERIFY, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(url.data)}}}}
        );    
    } else {
        var CMD_HELP = '';
        Shadow.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var cmatch = [command.pattern];
                }
                
                if (cmatch[2] == match[1]) {
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*📓 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += '*♦️ ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += '*💎 ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(
            message.jid, CMD_HELP, MessageType.text,{quoted: message.data}
        );
    }
}));
}
else if (Config.MENUTYPE == 'two' || Config.MENUTYPE == 'Two' || Config.MENUTYPE == 'TWO' || Config.MENUTYPE == '2') {

Shadow.addCommand({pattern: 'list ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
var url = await axios.get(Spark.THUMBNAIL, { responseType: 'arraybuffer' })
    var CMD_HELP = '';
    if (match[1] === '') {
        Shadow.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var match = [command.pattern];
                }
    
                var HANDLER = '';
    
                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                CMD_HELP += '│❐ ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                if (command.desc !== '') CMD_HELP += '│➣ ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                if (command.usage !== '') CMD_HELP += '│➩ ' + command.usage + '\n\n';
                if (command.warn !== '') CMD_HELP += '│☞ ' + command.warn + '\n\n';

            }
        );
let options = {}

var previewHead, previewBody, mediaLink, mediaType, thumbUrl;
if (Spark.PREVIEW.includes(',')) {
var split = Spark.PREVIEW.split(',');
previewHead = split[0];
previewBody = split[1];
mediaLink = split[2];
mediaType = split[3];
thumbUrl = split[4];
 }
 var preUrl = await axios.get(thumbUrl, { responseType: 'arraybuffer' })
 options.contextInfo = {
                 forwardingScore: 5,
                 isForwarded: false,
                 externalAdReply: {
                 title: previewHead,
                 body: previewBody,
                 mediaType: mediaType,
                 thumbnail: Buffer.from(preUrl.data),
                 mediaUrl: mediaLink
              },
            }
options.quoted = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        "orderMessage": {
        	"itemCount" : 2021,
             "status": 1,
           "surface" : 1,
           "message": Spark.VERIFY,
           "orderTitle": "ShadoW",
           "thumbnail": Buffer.from(url.data),
           "sellerJid": '919526808481@s.whatsapp.net' 
        }
      }
    }        
const buttons = [
        { buttonId: 'id2', buttonText: { displayText: 'I love bots♥️' }, type: 1 },
        { buttonId: 'id3', buttonText: { displayText: 'I hate Bots🥵' }, type: 1 },
        ]
    const { imageMessage } = await message.client.prepareMessageMedia(Buffer.from(url.data), MessageType.image, options);
    const buttonMessage = {
        contentText: '```\n' + Config.BOTPLK + '\n\n❐ Command List\n╭────────────────────────────╮\n' + CMD_HELP + '╰────────────────────────────╯\n' + '```',
        footerText: '2021 © SHADOW',
        buttons: buttons,
        headerType: 4,
        imageMessage: imageMessage
    }
       await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, options
             );    
    } else {
        var CMD_HELP = '';
        Shadow.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var cmatch = [command.pattern];
                }
                
                if (cmatch[2] == match[1]) {
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '│❐ ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                if (command.desc !== '') CMD_HELP += '│➣ ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                if (command.usage !== '') CMD_HELP += '│➩ ' + command.usage + '\n\n';
                if (command.warn !== '') CMD_HELP += '│☞ ' + command.warn + '\n\n';

                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(
            message.jid,'```\n' + Config.BOTPLK + '\n\n❐ Command List\n╭────────────────────────────╮\n' + CMD_HELP + '╰────────────────────────────╯\n' + '```', MessageType.text,{quoted: message.data}
        );
    }
}));
}
}
