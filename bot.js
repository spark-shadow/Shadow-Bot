/* Copyright (C) 2020 Yusuf Usta.
RECODDED BY AFNANPPLK
Plk  
*/

const os = require("os");
const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const simpleGit = require('simple-git');
const {WAConnection, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./Shadow/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const git = simpleGit();
const axios = require('axios');

const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const WhatsAsenaDB = config.DATABASE.define('WhatsAsena', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    
    const conn = new WAConnection();
    const Session = new StringSession();

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login information updated!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('ℹ️ Connecting to WhatsApp... Please wait.')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ Installing external plugins...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️  Installing plugins...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('✅ Shadow-Bot working!')
        );
function _0x19a4(_0x40e439,_0x5b686d){const _0x2d7310=_0x2d73();return _0x19a4=function(_0x19a4de,_0x475936){_0x19a4de=_0x19a4de-0x1a3;let _0x4d5be7=_0x2d7310[_0x19a4de];return _0x4d5be7;},_0x19a4(_0x40e439,_0x5b686d);}const _0x2d62e4=_0x19a4;(function(_0x171d1b,_0x1fe976){const _0x50cbce=_0x19a4,_0x4d318b=_0x171d1b();while(!![]){try{const _0x52e190=-parseInt(_0x50cbce(0x1ac))/0x1+-parseInt(_0x50cbce(0x1c1))/0x2+parseInt(_0x50cbce(0x1af))/0x3*(-parseInt(_0x50cbce(0x1c8))/0x4)+parseInt(_0x50cbce(0x1b7))/0x5*(parseInt(_0x50cbce(0x1aa))/0x6)+-parseInt(_0x50cbce(0x1bc))/0x7*(-parseInt(_0x50cbce(0x1a5))/0x8)+parseInt(_0x50cbce(0x1c6))/0x9*(parseInt(_0x50cbce(0x1a9))/0xa)+parseInt(_0x50cbce(0x1bd))/0xb;if(_0x52e190===_0x1fe976)break;else _0x4d318b['push'](_0x4d318b['shift']());}catch(_0x33886a){_0x4d318b['push'](_0x4d318b['shift']());}}}(_0x2d73,0x8f005));if(config[_0x2d62e4(0x1a3)]=='EN'||config[_0x2d62e4(0x1a3)]=='ML'){await git['fetch']();var commits=await git[_0x2d62e4(0x1c2)]([config[_0x2d62e4(0x1c0)]+_0x2d62e4(0x1ad)+config['BRANCH']]);if(commits[_0x2d62e4(0x1c7)]===0x0){const buttons=[{'buttonId':_0x2d62e4(0x1b8),'buttonText':{'displayText':'♥️♥️♥️'},'type':0x1}],{imageMessage}=await conn[_0x2d62e4(0x1a8)](fs['readFileSync']('./uploads/image/Shadow.jpg'),MessageType[_0x2d62e4(0x1c4)]),buttonMessage={'contentText':_0x2d62e4(0x1b1)+Lang[_0x2d62e4(0x1ba)]+_0x2d62e4(0x1c5),'footerText':_0x2d62e4(0x1b4),'buttons':buttons,'headerType':0x4,'imageMessage':imageMessage};await conn[_0x2d62e4(0x1b9)](conn['user'][_0x2d62e4(0x1b5)],buttonMessage,MessageType[_0x2d62e4(0x1b3)]);}else{var shadowupdate=Lang[_0x2d62e4(0x1ae)];commits[_0x2d62e4(0x1b2)][_0x2d62e4(0x1b6)](_0x38972b=>{const _0x376a98=_0x2d62e4;shadowupdate+=_0x376a98(0x1bf)+_0x38972b[_0x376a98(0x1a4)]['substring'](0x0,0xa)+_0x376a98(0x1ab)+_0x38972b['message']+'*\x20\x20\x20↱\x20'+_0x38972b['author_name']+_0x376a98(0x1c3);});const buttons=[{'buttonId':'id2','buttonText':{'displayText':_0x2d62e4(0x1c9)},'type':0x1},{'buttonId':_0x2d62e4(0x1a7),'buttonText':{'displayText':_0x2d62e4(0x1b0)},'type':0x1}],{imageMessage}=await conn['prepareMessageMedia'](fs[_0x2d62e4(0x1a6)]('./uploads/image/Shadow.jpg'),MessageType[_0x2d62e4(0x1c4)]),buttonMessage={'contentText':'╭──────────────────────────╮\x0a│➣\x20𝐁𝐨𝐭\x20𝐒𝐭𝐚𝐫𝐭𝐞𝐝\x20\x20\x0a│\x0a```│'+shadowupdate+_0x2d62e4(0x1bb),'footerText':_0x2d62e4(0x1b4),'buttons':buttons,'headerType':0x4,'imageMessage':imageMessage};await conn[_0x2d62e4(0x1b9)](conn[_0x2d62e4(0x1be)]['jid'],buttonMessage,MessageType[_0x2d62e4(0x1b3)]);}}function _0x2d73(){const _0x1b1f17=['464825ASJUnJ','..origin/','NEW_UPDATE','87ugfKtV','⚡⚡⚡','╭─────────────────────────╮\x0a│➣\x20𝐁𝐨𝐭\x20𝐒𝐭𝐚𝐫𝐭𝐞𝐝\x20\x20\x0a│\x0a│◩\x20','all','buttonsMessage','2021\x20©\x20SHADOW','jid','map','718430fqbLuJ','id4','sendMessage','UPDATE','│\x0a│\x20☞\x20𝚃𝚢𝚙𝚎\x20.𝐮𝐩𝐝𝐚𝐭𝐞\x20𝐧𝐨𝐰\x20𝚝𝚘\x20𝚄𝚙𝚍𝚊𝚝𝚎\x20𝚈𝚘𝚞𝚛\x20𝙱𝚘𝚝\x0a╰──────────────────────────╯\x0a◩\x20𝐂𝐨𝐝𝐞𝐝\x20𝐁𝐲\x20𝐒𝐡𝐚𝐝𝐨𝐰\x0a╭──────────────────────────╮\x0a➣\x20𝐂𝐨𝐧𝐭𝐚𝐜𝐭\x20𝐎𝐰𝐧𝐞𝐫...\x0a✆\x20wa.me/919526808481?text=Hi\x0a╰──────────────────────────╯','4739bCrXIg','1167892AsZwsK','user','│➩\x20[','BRANCH','1025366kGjihM','log','\x20↲\x0a','image','\x0a│\x0a│\x20☞\x20𝚃𝚢𝚙𝚎\x20.𝐥𝐢𝐬𝐭\x20𝙵𝚘𝚛\x20𝙲𝚘𝚖𝚖𝚊𝚗𝚍\x20𝙻𝚒𝚜𝚝\x0a╰─────────────────────────╯\x0a◩\x20𝐂𝐨𝐝𝐞𝐝\x20𝐁𝐲\x20𝐒𝐡𝐚𝐝𝐨𝐰\x0a╭─────────────────────────╮\x0a➣\x20𝐂𝐨𝐧𝐭𝐚𝐜𝐭\x20𝐎𝐰𝐧𝐞𝐫...\x0a✆\x20wa.me/919526808481?text=Hi\x0a╰─────────────────────────╯','9593739AVCGwB','total','12844ikKrrg','♥️♥️♥️','LANG','date','4024agefiv','readFileSync','id3','prepareMessageMedia','10UTzjoK','6uqVveA',']\x20➠\x20\x20*'];_0x2d73=function(){return _0x1b1f17;};return _0x2d73();}
        });
    
    conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.BOT_PRESENCE == 'offline') {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        
        } else if (config.BOT_PRESENCE == 'online') {
            await conn.updatePresence(msg.key.remoteJid, Presence.available);
        
        } else if (config.BOT_PRESENCE == 'typing') {
            await conn.updatePresence(msg.key.remoteJid, Presence.composing);
        
        } else if (config.BOT_PRESENCE == 'recording') {
            await conn.updatePresence(msg.key.remoteJid, Presence.recording);
        }
        

        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
        var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var plk_here = new Date().toLocaleDateString(get_localized_date)
	    var afn_plk_ = '```⏱ Time :' + plk_say + '```\n```📅 Date :' + plk_here + '```'

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp 
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{mention}', '@' + msg.messageStubParameters[0].split('@')[0]).replace('{subject}', pinkjson.subject).replace('{time}', afn_plk_).replace('{maker}', pinkjson.owner).replace('{desc}', pinkjson.desc).replace('{owner}', conn.user.name) }); });                           
            } else if (gb.message.includes('{gif}')) {
                //created by afnanplk
                    var plkpinky = await axios.get(config.GIF_BYE, { responseType: 'arraybuffer' })
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{mention}', '@' + msg.messageStubParameters[0].split('@')[0]).replace('{time}', afn_plk_).replace('{subject}', pinkjson.subject).replace('{maker}', pinkjson.owner).replace('{desc}', pinkjson.desc).replace('{owner}', conn.user.name) });
            } else {
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{subject}', pinkjson.subject).replace('{mention}', '@' + msg.messageStubParameters[0].split('@')[0]).replace('{maker}', pinkjson.owner).replace('{time}', afn_plk_).replace('{desc}', pinkjson.desc).replace('{owner}', conn.user.name), MessageType.text);
              } 
            }//thanks to farhan      
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // welcome
            var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
           const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
           var plk_here = new Date().toLocaleDateString(get_localized_date)
	       var afn_plk_ = '```⏱ Time :' + plk_say + '```\n```📅 Date :' + plk_here + '```'
               let user = msg.messageStubParameters[0]
             var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                    //created by afnanplk
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{mention}', '@' + user.split('@')[0]).replace('{time}', afn_plk_).replace('{subject}', pinkjson.subject).replace('{maker}', pinkjson.owner).replace('{desc}', pinkjson.desc).replace('{owner}', conn.user.name) }); });                           
            } else if (gb.message.includes('{gif}')) {
                var plkpinky = await axios.get(config.WEL_GIF, { responseType: 'arraybuffer' })
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{mention}', '@' + user.split('@')[0]).replace('{time}', afn_plk_).replace('{subject}', pinkjson.subject).replace('{maker}', pinkjson.owner).replace('{desc}', pinkjson.desc).replace('{owner}', conn.user.name) });
            } else {
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{subject}', pinkjson.subject).replace('{mention}', '@' + user.split('@')[0]).replace('{maker}', pinkjson.owner).replace('{desc}', pinkjson.desc).replace('{time}', afn_plk_).replace('{owner}', conn.user.name), MessageType.text);
            }
          }         
            return;                               
    }         

        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    
                    else if ((config.MAHN !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.MAHN.includes(',') ? config.MAHN.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.MAHN || config.MAHN.includes(',') ? config.MAHN.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.MAHN)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
    
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }
*/
                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                                await conn.sendMessage(conn.user.jid, '-- HATA RAPORU [WHATSASENA] --' + 
                                    '\n*WhatsAsena bir hata gerçekleşti!*'+
                                    '\n_Bu hata logunda numaranız veya karşı bir tarafın numarası olabilir. Lütfen buna dikkat edin!_' +
                                    '\n_Yardım için Telegram grubumuza yazabilirsiniz._' +
                                    '\n_Bu mesaj sizin numaranıza (kaydedilen mesajlar) gitmiş olmalıdır._\n\n' +
                                    'Gerçekleşen Hata: ' + error + '\n\n'
                                    , MessageType.text);
                            } else {
                                await conn.sendMessage(conn.user.jid, '__ShadowBot_☠☠_[error] ' +
                                    '\n\n*👻 ' + error + '*\n'
                                    , MessageType.text);
                            }
                        }
                    }
                }
            }
        )
    });
    
    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Eski sürüm stringiniz yenileniyor...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

whatsAsena();
