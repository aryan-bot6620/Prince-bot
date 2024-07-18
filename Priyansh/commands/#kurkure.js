const fs = require("fs");
module.exports.config = {
  name: "kurkure",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("kurkure") ||
     react.includes("Kurkure") || react.includes("kurkura") || react.includes("Kurkur") ||
react.includes("kurkure") ||
react.includes("kurkura") ||     
react.includes("tedhe medhe")) {
    var msg = {
        body: `${name} 𝑳𝑶 𝑴𝑬𝑹𝑰 𝑱𝑨𝑨𝑵 𝑲À𝑹𝑨𝑹𝑬 𝑲𝑨𝑹À𝑹𝑬 𝑲𝑼𝑹𝑲𝑼𝑹𝑬 𝑲𝑯𝑨𝑶👈`,attachment: fs.createReadStream(__dirname + `/noprefix/kurkure.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }