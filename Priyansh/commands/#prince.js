const fs = require("fs");
module.exports.config = {
  name: "prince",
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
  if(react.includes("Prince") ||
     react.includes("prince") || react.includes("aryan") || react.includes("Aryan") ||
react.includes("Silent prince") ||
react.includes("ARYAN")) {
    var msg = {
        body: `💐𝑩À𝑩𝑼 𝑴𝑬𝑹𝑬 𝑩𝑶𝑺𝑺 𝑲𝑶 𝑷𝑹𝑬𝑺𝑨𝑵 𝑴𝑻 𝑲𝑹𝑶 𝑽𝑶 𝑨𝑩𝑯𝑰 𝑩𝑼𝑺𝒀 𝑯𝑨𝑰𝑵 𝑴𝑼𝑱𝑯𝑬 𝑩𝑨𝑻𝑨𝑶 𝑲𝒀𝑨 𝑲𝑨𝑨𝑴 𝑯𝑨𝑰 𝑴 𝑼𝑵𝑯𝑬 𝑩𝑻𝑨 𝑫𝑼𝑵𝑮𝑨😘`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }