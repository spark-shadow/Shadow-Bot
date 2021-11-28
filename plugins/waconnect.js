const ShadoW = require('../events');

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');

const qrcode = require('qrcode')
const fs = require('fs');

    ShadoW.addCommand({pattern: 'tmp$', fromMe: true, desc: 'testing', dontAddCommandList: true}, (async (message, match) => {   

  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [3, 3234, 9]
 conn.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await message.client.sendMessage(message.jid,buffer,MessageType.image,{caption:'Scan QR to become a bot\n*Rules:*\nQR will be changed every 30 seconds'})
    	setTimeout(() => {
       	message.client.deleteMessage(message.jid, bot.key)
       },30000)
    })
    conn.on('connecting', () => {
    })
    conn.on('open', () => {
    	conn.sendMessage(
      conn.user.jid,
      'Shadow:::' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );


    process.exit(0);
  });
  await conn.connect()
}))
