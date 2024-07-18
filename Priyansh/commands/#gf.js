const fs = require("fs");
module.exports.config = {
  name: "gf",
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
  if(react.includes("gf") ||
     react.includes("GF") || react.includes("GIRLFRIEND") || react.includes("girlfriend") ||
react.includes("biwi") ||
react.includes("Biwi") ||     
react.includes("Gf")) {
    var msg = {
        body: `${name} lO GF HAJIR HAI JAAN😂👈`,attachment: fs.createReadStream(__dirname + `/noprefix/gf.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }