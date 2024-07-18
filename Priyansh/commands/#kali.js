const fs = require("fs");
module.exports.config = {
  name: "kali",
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
  if(react.includes("kali") ||
     react.includes("Kali") || react.includes("KALI") || react.includes("KALOO") ||
react.includes("kaluti") ||
react.includes("Kaluti") ||     
react.includes("kalu")) {
    var msg = {
        body: `${name} 𝐀𝐋𝐄 𝐁À𝐀𝐏 𝐋𝐄 𝐘𝐄𝐇  𝐊À𝐋𝐈 𝐇𝐀𝐈
        𝐌𝐀𝐃𝐄 𝐁𝐘💐
✬✿╭┳✪✪╤───────────➛➣ ★�🆁🅸🅽🅲🅴★🆂🅸🅻🅴🅽🆃)✪��🆈★  ✬✿╭┳✪✪╤───────────➛➣`,attachment: fs.createReadStream(__dirname + `/noprefix/kali.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }