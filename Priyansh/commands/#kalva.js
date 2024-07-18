const fs = require("fs");
module.exports.config = {
  name: "kalva",
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
  if(react.includes("kalva") ||
     react.includes("kalasand") || react.includes("Kalva") || react.includes("kaliya") ||
react.includes("Kalva") ||
react.includes("kalwa") ||     
react.includes("Kaliya")) {
    var msg = {
        body: `${name} 𝐋𝐄 𝐁𝐇𝐀𝐈𝐘𝐀 𝐓𝐄𝐑𝐀 𝐊𝐀𝐋𝐕𝐀 𝐀𝐆𝐀𝐘𝐀
        𝐌𝐀𝐃𝐄 𝐁𝐘 
        ✬✿╭┳✪✪╤───────────➛➣ ★�🆁🅸🅽🅲🅴★🆂🅸🅻🅴🅽🆃)✪��🆈★  ✬✿╭┳✪✪╤───────────➛➣👈`,attachment: fs.createReadStream(__dirname + `/noprefix/kalva.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤪", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }