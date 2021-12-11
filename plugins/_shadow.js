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

function _0x57be(){var _0x134b00=['length','THUMBNAIL','desc','list\x20?(.*)','test','2021\x20©\x20SHADOW','```','match','6554ndjLrt','sendMessage','buttonsMessage','│➣\x20','╰────────────────────────────╯\x0a','6WTwqpR','919526808481@s.whatsapp.net','toString','NOT_FOUND','jid','warn','```\x0a','from','36GMRpLf','32qHUWaV','I\x20hate\x20Bots🥵','1304168RbWMEL','510RxTgal','status@broadcast','dontAddCommandList','BOTPLK','ShadoW','│❐\x20','commands','81928CELOgG','usage','id3','prepareMessageMedia','id2','get','HANDLERS','│☞\x20','\x0a\x0a❐\x20Command\x20List\x0a╭────────────────────────────╮\x0a','12271nsGHLx','129480QzsEeS','1244353larktJ','arraybuffer','I\x20love\x20bots♥️','868170iXVRXI','client','text','map','data','│➩\x20','addCommand','9mueEZG','pattern'];_0x57be=function(){return _0x134b00;};return _0x57be();}function _0x1438(_0x1ad747,_0x162355){var _0x57beae=_0x57be();return _0x1438=function(_0x1438af,_0x195e69){_0x1438af=_0x1438af-0xc0;var _0x463e16=_0x57beae[_0x1438af];return _0x463e16;},_0x1438(_0x1ad747,_0x162355);}var _0x1d9474=_0x1438;(function(_0x40ecf9,_0x10674e){var _0x140f94=_0x1438,_0x167ba7=_0x40ecf9();while(!![]){try{var _0x1d2308=parseInt(_0x140f94(0xd3))/0x1+parseInt(_0x140f94(0xf2))/0x2*(-parseInt(_0x140f94(0xc0))/0x3)+parseInt(_0x140f94(0xc9))/0x4*(-parseInt(_0x140f94(0xdd))/0x5)+-parseInt(_0x140f94(0xcc))/0x6*(parseInt(_0x140f94(0xdc))/0x7)+-parseInt(_0x140f94(0xcb))/0x8*(-parseInt(_0x140f94(0xe8))/0x9)+-parseInt(_0x140f94(0xe1))/0xa+parseInt(_0x140f94(0xde))/0xb*(parseInt(_0x140f94(0xc8))/0xc);if(_0x1d2308===_0x10674e)break;else _0x167ba7['push'](_0x167ba7['shift']());}catch(_0x28d17e){_0x167ba7['push'](_0x167ba7['shift']());}}}(_0x57be,0x20e76),Shadow[_0x1d9474(0xe7)]({'pattern':_0x1d9474(0xed),'fromMe':wk,'dontAddCommandList':!![]},async(_0x564d1a,_0x2e27ed)=>{var _0x8a90f5=_0x1d9474,_0x57e990=await axios[_0x8a90f5(0xd8)](Spark[_0x8a90f5(0xeb)],{'responseType':_0x8a90f5(0xdf)}),_0x56a429='';if(_0x2e27ed[0x1]===''){Shadow[_0x8a90f5(0xd2)]['map'](async _0x261c5b=>{var _0xbfc27e=_0x8a90f5;if(_0x261c5b[_0xbfc27e(0xce)]||_0x261c5b[_0xbfc27e(0xe9)]===undefined)return;try{var _0x2ad513=_0x261c5b[_0xbfc27e(0xe9)][_0xbfc27e(0xc2)]()[_0xbfc27e(0xf1)](/(\W*)([A-Za-zğüşiöç1234567890]*)/);}catch{var _0x2ad513=[_0x261c5b[_0xbfc27e(0xe9)]];}var _0x57424d='';/\[(\W*)\]/[_0xbfc27e(0xee)](Config[_0xbfc27e(0xd9)])?_0x57424d=Config[_0xbfc27e(0xd9)][_0xbfc27e(0xf1)](/\[(\W*)\]/)[0x1][0x0]:_0x57424d='.';_0x56a429+='│❐\x20'+(_0x2ad513[_0xbfc27e(0xea)]>=0x3?_0x57424d+_0x2ad513[0x2]:_0x261c5b[_0xbfc27e(0xe9)])+(_0x261c5b[_0xbfc27e(0xec)]===''?'\x0a\x0a':'\x0a');if(_0x261c5b['desc']!=='')_0x56a429+=_0xbfc27e(0xf5)+_0x261c5b[_0xbfc27e(0xec)]+(_0x261c5b[_0xbfc27e(0xc5)]===''?'\x0a\x0a':'\x0a');if(_0x261c5b['usage']!=='')_0x56a429+='│➩\x20'+_0x261c5b[_0xbfc27e(0xd4)]+'\x0a\x0a';if(_0x261c5b[_0xbfc27e(0xc5)]!=='')_0x56a429+=_0xbfc27e(0xda)+_0x261c5b[_0xbfc27e(0xc5)]+'\x0a\x0a';});let _0x5cf832={};_0x5cf832['quoted']={'key':{'fromMe':![],'participant':'0@s.whatsapp.net','remoteJid':_0x8a90f5(0xcd)},'message':{'orderMessage':{'itemCount':0x7e5,'status':0x1,'surface':0x1,'message':Spark['VERIFY'],'orderTitle':_0x8a90f5(0xd0),'thumbnail':Buffer['from'](_0x57e990['data']),'sellerJid':_0x8a90f5(0xc1)}}};const _0x315037=[{'buttonId':_0x8a90f5(0xd7),'buttonText':{'displayText':_0x8a90f5(0xe0)},'type':0x1},{'buttonId':_0x8a90f5(0xd5),'buttonText':{'displayText':_0x8a90f5(0xca)},'type':0x1}],{imageMessage:_0x1ac988}=await _0x564d1a[_0x8a90f5(0xe2)][_0x8a90f5(0xd6)](Buffer[_0x8a90f5(0xc7)](_0x57e990[_0x8a90f5(0xe5)]),MessageType['image'],_0x5cf832),_0x59bb9c={'contentText':_0x8a90f5(0xc6)+Config[_0x8a90f5(0xcf)]+_0x8a90f5(0xdb)+_0x56a429+_0x8a90f5(0xf6)+_0x8a90f5(0xf0),'footerText':_0x8a90f5(0xef),'buttons':_0x315037,'headerType':0x4,'imageMessage':_0x1ac988};await _0x564d1a[_0x8a90f5(0xe2)]['sendMessage'](_0x564d1a[_0x8a90f5(0xc4)],_0x59bb9c,MessageType[_0x8a90f5(0xf4)],_0x5cf832);}else{var _0x56a429='';Shadow['commands'][_0x8a90f5(0xe4)](async _0xf41a1a=>{var _0x46654c=_0x8a90f5;if(_0xf41a1a[_0x46654c(0xce)]||_0xf41a1a[_0x46654c(0xe9)]===undefined)return;try{var _0x2ae222=_0xf41a1a['pattern'][_0x46654c(0xc2)]()[_0x46654c(0xf1)](/(\W*)([A-Za-zğüşiöç1234567890]*)/);}catch{var _0x2ae222=[_0xf41a1a[_0x46654c(0xe9)]];}if(_0x2ae222[0x2]==_0x2e27ed[0x1]){var _0x5a7332='';/\[(\W*)\]/[_0x46654c(0xee)](Config[_0x46654c(0xd9)])?_0x5a7332=Config['HANDLERS'][_0x46654c(0xf1)](/\[(\W*)\]/)[0x1][0x0]:_0x5a7332='.';_0x56a429+=_0x46654c(0xd1)+(_0x2e27ed[_0x46654c(0xea)]>=0x3?_0x5a7332+_0x2e27ed[0x2]:_0xf41a1a[_0x46654c(0xe9)])+(_0xf41a1a['desc']===''?'\x0a\x0a':'\x0a');if(_0xf41a1a['desc']!=='')_0x56a429+=_0x46654c(0xf5)+_0xf41a1a[_0x46654c(0xec)]+(_0xf41a1a['warn']===''?'\x0a\x0a':'\x0a');if(_0xf41a1a[_0x46654c(0xd4)]!=='')_0x56a429+=_0x46654c(0xe6)+_0xf41a1a[_0x46654c(0xd4)]+'\x0a\x0a';if(_0xf41a1a[_0x46654c(0xc5)]!=='')_0x56a429+=_0x46654c(0xda)+_0xf41a1a['warn']+'\x0a\x0a';}});if(_0x56a429==='')_0x56a429+=Lang[_0x8a90f5(0xc3)];await _0x564d1a[_0x8a90f5(0xe2)][_0x8a90f5(0xf3)](_0x564d1a[_0x8a90f5(0xc4)],_0x8a90f5(0xc6)+Config[_0x8a90f5(0xcf)]+'\x0a\x0a❐\x20Command\x20List\x0a╭────────────────────────────╮\x0a'+_0x56a429+_0x8a90f5(0xf6)+_0x8a90f5(0xf0),MessageType[_0x8a90f5(0xe3)],{'quoted':_0x564d1a[_0x8a90f5(0xe5)]});}}));
}
}
