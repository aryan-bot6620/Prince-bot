const fs = require("fs");
module.exports.config = {
  name: "miss",
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
  if(react.includes("miss") ||
     react.includes("Miss") || react.includes("Miss") || react.includes("yaad") ||
react.includes("Yaad") ||
react.includes("miss") ||     
react.includes("MISS")) {
    var msg = {
        body: `${name} 𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐒𝐎 𝐌𝐔𝐂𝐇 𝐁𝐀𝐁𝐘
        𝐌𝐀𝐃𝐄 𝐁𝐘
✬✿╭┳✪✪╤───────────➛➣ ★�🆁🅸🅽🅲🅴★🆂🅸🅻🅴🅽🆃)✪��🆈★  ✬✿╭┳✪✪╤───────────➛➣`,attachment: fs.createReadStream(__dirname + `/noprefix/miss.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }