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
if (Config.MENUTYPE == 'one') {

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
else if (Config.MENUTYPE == 'two') {

var _0x5616bf=_0x3e9d;(function(_0x54054a,_0x5a7404){var _0x2e3fab=_0x3e9d,_0x3a1348=_0x54054a();while(!![]){try{var _0x537134=-parseInt(_0x2e3fab(0xf6))/0x1+-parseInt(_0x2e3fab(0x10a))/0x2*(-parseInt(_0x2e3fab(0xf7))/0x3)+-parseInt(_0x2e3fab(0x101))/0x4+parseInt(_0x2e3fab(0xe5))/0x5*(parseInt(_0x2e3fab(0xf8))/0x6)+parseInt(_0x2e3fab(0x110))/0x7*(-parseInt(_0x2e3fab(0xfd))/0x8)+-parseInt(_0x2e3fab(0xf5))/0x9+parseInt(_0x2e3fab(0xfc))/0xa;if(_0x537134===_0x5a7404)break;else _0x3a1348['push'](_0x3a1348['shift']());}catch(_0x466440){_0x3a1348['push'](_0x3a1348['shift']());}}}(_0x276e,0xa9cac),Shadow[_0x5616bf(0x109)]({'pattern':'list\x20?(.*)','fromMe':wk,'dontAddCommandList':!![]},async(_0x3b17a6,_0x2db3da)=>{var _0x379cef=_0x5616bf,_0x40a566=await axios[_0x379cef(0xfe)](Spark[_0x379cef(0xe4)],{'responseType':_0x379cef(0xe7)}),_0x67d40='';if(_0x2db3da[0x1]===''){Shadow[_0x379cef(0x103)]['map'](async _0x59faa8=>{var _0x19af41=_0x379cef;if(_0x59faa8[_0x19af41(0xf3)]||_0x59faa8['pattern']===undefined)return;try{var _0x4acac3=_0x59faa8[_0x19af41(0xef)][_0x19af41(0x108)]()[_0x19af41(0xff)](/(\W*)([A-Za-zğüşiöç1234567890]*)/);}catch{var _0x4acac3=[_0x59faa8['pattern']];}var _0x1a571f='';/\[(\W*)\]/[_0x19af41(0x10e)](Config['HANDLERS'])?_0x1a571f=Config['HANDLERS'][_0x19af41(0xff)](/\[(\W*)\]/)[0x1][0x0]:_0x1a571f='.';_0x67d40+='│❐\x20'+(_0x4acac3['length']>=0x3?_0x1a571f+_0x4acac3[0x2]:_0x59faa8[_0x19af41(0xef)])+(_0x59faa8['desc']===''?'\x0a\x0a':'\x0a');if(_0x59faa8[_0x19af41(0x104)]!=='')_0x67d40+=_0x19af41(0x113)+_0x59faa8[_0x19af41(0x104)]+(_0x59faa8['warn']===''?'\x0a\x0a':'\x0a');if(_0x59faa8['usage']!=='')_0x67d40+=_0x19af41(0x105)+_0x59faa8[_0x19af41(0xf9)]+'\x0a\x0a';if(_0x59faa8[_0x19af41(0xeb)]!=='')_0x67d40+=_0x19af41(0x114)+_0x59faa8[_0x19af41(0xeb)]+'\x0a\x0a';});let _0x3a6c44={};_0x3a6c44[_0x379cef(0xe6)]={'key':{'fromMe':![],'participant':_0x379cef(0xe3),'remoteJid':_0x379cef(0x106)},'message':{'orderMessage':{'itemCount':0x7e5,'status':0x1,'surface':0x1,'message':Spark[_0x379cef(0xe2)],'orderTitle':_0x379cef(0xe8),'thumbnail':Buffer[_0x379cef(0xfb)](_0x40a566[_0x379cef(0xfa)]),'sellerJid':'919526808481@s.whatsapp.net'}}};const _0x525920=[{'buttonId':_0x379cef(0xec),'buttonText':{'displayText':_0x379cef(0xf0)},'type':0x1},{'buttonId':_0x379cef(0x115),'buttonText':{'displayText':_0x379cef(0xf2)},'type':0x1}],{imageMessage:_0x15cefa}=await _0x3b17a6[_0x379cef(0x102)]['prepareMessageMedia'](fs['readFileSync'](_0x379cef(0x10d)),MessageType[_0x379cef(0xf4)],_0x3a6c44),_0x1e4b9f={'contentText':_0x379cef(0xed)+Config[_0x379cef(0x107)]+_0x379cef(0x116)+_0x67d40+_0x379cef(0x10c)+_0x379cef(0xf1),'footerText':_0x379cef(0x10f),'buttons':_0x525920,'headerType':0x4,'imageMessage':_0x15cefa};await _0x3b17a6[_0x379cef(0x102)][_0x379cef(0x100)](_0x3b17a6[_0x379cef(0xe9)],_0x1e4b9f,MessageType[_0x379cef(0x111)],_0x3a6c44);}else{var _0x67d40='';Shadow[_0x379cef(0x103)][_0x379cef(0xea)](async _0x582fde=>{var _0x284759=_0x379cef;if(_0x582fde['dontAddCommandList']||_0x582fde['pattern']===undefined)return;try{var _0x229a1a=_0x582fde['pattern'][_0x284759(0x108)]()['match'](/(\W*)([A-Za-zğüşiöç1234567890]*)/);}catch{var _0x229a1a=[_0x582fde['pattern']];}if(_0x229a1a[0x2]==_0x2db3da[0x1]){var _0x2efbdc='';/\[(\W*)\]/[_0x284759(0x10e)](Config[_0x284759(0x10b)])?_0x2efbdc=Config[_0x284759(0x10b)]['match'](/\[(\W*)\]/)[0x1][0x0]:_0x2efbdc='.';_0x67d40+='│❐\x20'+(_0x2db3da['length']>=0x3?_0x2efbdc+_0x2db3da[0x2]:_0x582fde[_0x284759(0xef)])+(_0x582fde[_0x284759(0x104)]===''?'\x0a\x0a':'\x0a');if(_0x582fde[_0x284759(0x104)]!=='')_0x67d40+='│➣\x20'+_0x582fde[_0x284759(0x104)]+(_0x582fde[_0x284759(0xeb)]===''?'\x0a\x0a':'\x0a');if(_0x582fde['usage']!=='')_0x67d40+=_0x284759(0x105)+_0x582fde['usage']+'\x0a\x0a';if(_0x582fde[_0x284759(0xeb)]!=='')_0x67d40+=_0x284759(0x114)+_0x582fde[_0x284759(0xeb)]+'\x0a\x0a';}});if(_0x67d40==='')_0x67d40+=Lang[_0x379cef(0xee)];await _0x3b17a6[_0x379cef(0x102)][_0x379cef(0x100)](_0x3b17a6[_0x379cef(0xe9)],_0x379cef(0xed)+Config[_0x379cef(0x107)]+_0x379cef(0x116)+_0x67d40+_0x379cef(0x10c)+_0x379cef(0xf1),MessageType[_0x379cef(0x112)],{'quoted':_0x3b17a6[_0x379cef(0xfa)]});}}));function _0x3e9d(_0x54b306,_0x52f94a){var _0x276ee7=_0x276e();return _0x3e9d=function(_0x3e9dae,_0x4e734e){_0x3e9dae=_0x3e9dae-0xe2;var _0x501cd9=_0x276ee7[_0x3e9dae];return _0x501cd9;},_0x3e9d(_0x54b306,_0x52f94a);}function _0x276e(){var _0x331e57=['BOTPLK','toString','addCommand','70138tzlKSh','HANDLERS','╰────────────────────────────╯\x0a','./uploads/image/Thumbnail.jpg','test','2021\x20©\x20SHADOW','7ZNDWPo','buttonsMessage','text','│➣\x20','│☞\x20','id3','\x0a\x0a❐\x20Command\x20List\x0a╭────────────────────────────╮\x0a','VERIFY','0@s.whatsapp.net','THUMBNAIL','2238025JHfXHr','quoted','arraybuffer','ShadoW','jid','map','warn','id2','```\x0a','NOT_FOUND','pattern','I\x20love\x20bots♥️','```','I\x20hate\x20Bots🥵','dontAddCommandList','image','6321150fGNNsu','367461cguwag','63GmyAGF','6HWLcJE','usage','data','from','30246740IqPsNU','10115184axVEKJ','get','match','sendMessage','4716204RdMEfn','client','commands','desc','│➩\x20','status@broadcast'];_0x276e=function(){return _0x331e57;};return _0x276e();}
}
}
