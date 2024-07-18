const fs = require("fs");
module.exports.config = {
  name: "call",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("call") ||
     react.includes("Call") || react.includes("Bot call ao") || react.includes("call ao") ||
react.includes("CALL") ||
react.includes("Cal")) {
    var msg = {
        body: `𝑩𝑨𝑩𝒀 𝑴𝑬𝑰𝑵 𝑪𝑨𝑳𝑳 𝑲À𝑰𝑺𝑬 À𝑼 𝑴 𝑻𝑶 𝑩𝑶𝑻 𝑯𝑼😔🙃👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😔", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }