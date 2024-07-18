const fs = require("fs");
module.exports.config = {
  name: "kheer",
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
  if(react.includes("kheer") ||
     react.includes("KHEER") || react.includes("Kheer") || react.includes("khir") ||
react.includes("Khir") ||
react.includes("kher") ||     
react.includes("Kher")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐊𝐇𝐄𝐄𝐑 𝐊𝐇𝐀𝐎 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒
✬✿╭┳✪✪╤───────────➛➣ ★�🆁🅸🅽🅲🅴★🆂🅸🅻🅴🅽🆃)✪��🆈★  ✬✿╭┳✪✪╤───────────➛➣ S𝐄`,attachment: fs.createReadStream(__dirname + `/noprefix/kheer.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }