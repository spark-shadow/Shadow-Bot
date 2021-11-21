const SparkShadow = require("../events");
const Config = require("../config");
const Spark = require('../spark');
const fs = require('fs');
let wk = Config.WORKTYPE == 'public' ? false : true

  SparkShadow.addCommand(
    { pattern: "menu ?(.*)", fromMe: wk, dontAddCommandList: true },
    async (message, match) => {
      let CMD_HELP = "";
      SparkShadow.commands.map(async (command) => {
        if (
          command.dontAddCommandList === false &&
          command.pattern !== undefined
        ) {
          try {
            var match = command.pattern
              .toString()
              .match(/(\W*)([A-Za-z43ğüşiöç]*)/);
          } catch {
            var match = [command.pattern];
          }
  
          let HANDLER = "";
  
          if (/\[(\W*)\]/.test(Config.HANDLERS)) {
            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
          } else {
            HANDLER = ".";
          }
          CMD_HELP +=
            (match.length >= 3 ? HANDLER + match[2] : command.pattern) +
            (command.desc === ""
              ? "\n\n"
              : " ".repeat(8 - match[2].length) + " : ");
          if (command.desc !== "")
            CMD_HELP += command.desc + (command.usage === "" ? "\n\n" : "\n\n");
        }
      });
      return await message.sendMessage("```" + CMD_HELP + "```");
    }
  );
