const fs = require("fs");
module.exports.config = {
  name: "chocolate",
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
  if(react.includes("chocolate") ||
     react.includes("Chocolate") || react.includes("candy") || react.includes("Candy") ||
react.includes("sweets") ||
react.includes("Sweets") ||     
react.includes("CHOCOLATE")) {
    var msg = {
        body: `${name} 𝑳𝑶 𝑩𝑨𝑩𝒀 ✬𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄 𝐊𝐇𝐀𝐎🥰✿`,attachment: fs.createReadStream(__dirname + `/noprefix/chocolate.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }