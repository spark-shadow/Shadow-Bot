const Shadow = require('../../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../../config');
let wk = Config.WORKTYPE == 'public' ? false : true

Shadow.addCommand({pattern: 'test ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

      const rows = [
        { title: "MENU", rowId:"" },
        { title: "LIST", rowId:"" },
        { title: "DOWNLOAD COMMANDS", rowId:"" },
        { title: "MISC COMMANDS", rowId:"" },
        { title: "HEROKU COMMANDS", rowId:"" },
      ]

      const sections = [{ title: "🎈ꪶ Տꫝ𝔞𝔇ꪮᗯ ꫂ🎈", rows: rows }]

      const listButton = {
        buttonText: "SELECT",
        description: "Bot Commands",
        sections: sections,
        listType: 1,
      }
await message.client.sendMessage(message.jid, listButton, MessageType.listMessage, { quoted: message.data })
}));

Shadow.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   

const type = Object.keys(message.message)[0]
selectedButton = (type == 'buttonsResponseMessage') ? message.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? message.message.listResponseMessage.title : ''

if (responseButton === 'MENU') {
    await message.sendMessage(message.jid, `*TESTING 1*`, MessageType.text, { quoted: message.data })
} else if (responseButton === 'LIST') {
    await message.sendMessage(message.jid, `*TESTING 2*`, MessageType.text, { quoted: message.data })
}
}));
