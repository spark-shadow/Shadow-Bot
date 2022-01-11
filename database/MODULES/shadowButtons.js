const { MessageType, Mimetype  } = require('@adiwajshing/baileys')

const shadowButton = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      message.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
    };

module.exports = { shadowButton }
