const Shadow = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command...*"
let wk = Config.WORKTYPE == 'public' ? false : true
   
   
   Shadow.addCommand({ pattern: 'ttplist', fromMe: wk, desc: 'ttp maker list'}, (async (message, match) => {

        var ttinullimage = await axios.get(`https://i.imgur.com/TFyoCTs.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔════════════════════╗
║           🌀╚TTP PACK╝🌀
╚════════════════════╝
╔════════════════════╗
╠══➢ #01ttp      Your Text
║
╠══➢ #02ttp      Your Text
║
╠══➢ #03ttp      Your Text
║
╠══➢ #04ttp      Your Text
║
╠══➢ #05ttp      Your Text
║
╠══➢ #06ttp      Your Text
║
╠══➢ #07ttp      Your Text
║
╠══➢ #08ttp      Your Text
║
╠══➢ #09ttp      Your Text
║
╠══➢ #10ttp       Your Text
║
╠══➢ #11ttp       Your Text
║
╠══➢ #12ttp       Your Text
║
╠══➢ #13ttp       Your Text
║
╠══➢ #14ttp       Your Text
║
╠══➢ #15ttp       Your Text
║
╠══➢ #16ttp       Your Text
║
╠══➢ #17ttp       Your Text
║
╠══➢ #18ttp       Your Text
║
╠══➢ #19ttp       Your Text
║
╠══➢ #20ttp       Your Text
║
╠══➢ #21ttp       Your Text
║
╠══➢ #22ttp       Your Text
║
╠══➢ #23ttp       Your Text
║
╠══➢ #24ttp       Your Text
║
╠══➢ #25ttp       Your Text
║
╠══➢ #26ttp       Your Text
║
╠══➢ #27ttp       Your Text
║
╠══➢ #28ttp       Your Text
║
╠══➢ #29ttp       Your Text
║
╠══➢ #30ttp       Your Text
║
╠══➢ #31ttp       Your Text
║
╠══➢ #32ttp       Your Text
║
╠══➢ #33ttp       Your Text
║
╠══➢ #34ttp       Your Text
║
╠══➢ #35ttp       Your Text
║
╠══➢ #36ttp       Your Text
║
╠══➢ #37ttp       Your Text
║
╠══➢ #38ttp       Your Text
║
╠══➢ #39ttp       Your Text
║
╠══➢ #40ttp       Your Text
║
║
║▷Creator: Shadow
╚════════════════════╝
`,quoted: message.data})

    }));
   
   
     Shadow.addCommand({ pattern: '01ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
   
   Shadow.addCommand({ pattern: '02ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
   
   Shadow.addCommand({ pattern: '03ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/wroom?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
   
   Shadow.addCommand({ pattern: '04ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/surfboard?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
   
   Shadow.addCommand({ pattern: '05ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/orlando?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
   
   Shadow.addCommand({ pattern: '06ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
   
   Shadow.addCommand({ pattern: '07ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/minions?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
   
   Shadow.addCommand({ pattern: '08ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hbd?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
   
   Shadow.addCommand({ pattern: '09ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sunshine?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
   
   Shadow.addCommand({ pattern: '10ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
   
   Shadow.addCommand({ pattern: '11ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})
    }));
      
     Shadow.addCommand({ pattern: '12ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/glow?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
      
      Shadow.addCommand({ pattern: '13ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/army?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
      Shadow.addCommand({ pattern: '14ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/casino?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
      
      Shadow.addCommand({ pattern: '15ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/star?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ',quoted: message.data})

    }));
      
      
      Shadow.addCommand({ pattern: '16ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/shrek?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
      Shadow.addCommand({ pattern: '17ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
    
    Shadow.addCommand({ pattern: '18ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sugar?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
    
    Shadow.addCommand({ pattern: '19ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/fireworks?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
    
    Shadow.addCommand({ pattern: '20ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/trance?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
    Shadow.addCommand({ pattern: '21ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hbd2?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
    
    Shadow.addCommand({ pattern: '22ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
    
      Shadow.addCommand({ pattern: '23ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/alien?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
    
    Shadow.addCommand({ pattern: '24ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/happy?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   Shadow.addCommand({ pattern: '25ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/zilch?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      Shadow.addCommand({ pattern: '26ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/prime?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   Shadow.addCommand({ pattern: '27ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sports?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      Shadow.addCommand({ pattern: '28ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sound?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      Shadow.addCommand({ pattern: '29ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/usa?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   Shadow.addCommand({ pattern: '30ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/cereal?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   Shadow.addCommand({ pattern: '31ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/neon?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      Shadow.addCommand({ pattern: '32ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/fun?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   
   Shadow.addCommand({ pattern: '33ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/chrome?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   
   Shadow.addCommand({ pattern: '34ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/smurf?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   
   Shadow.addCommand({ pattern: '35ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/booking?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   Shadow.addCommand({ pattern: '36ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/husky?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   Shadow.addCommand({ pattern: '37ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hockey?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   Shadow.addCommand({ pattern: '38ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      Shadow.addCommand({ pattern: '39ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/toothpaste?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN + '\n\n   ```Coded by Shadow``` ' ,quoted: message.data})

    }));
      
   Shadow.addCommand({ pattern: '40ttp ?(.*)', fromMe: wk,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN + '\n\n ```Coded by Shadow``` ' ,quoted: message.data})

    }));
