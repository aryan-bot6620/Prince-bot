const fs = require("fs");
module.exports.config = {
  name: "bf",
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
  if(react.includes("bf") ||
     react.includes("Bf") || react.includes("boyfriend") || react.includes("Boyfriend") ||
react.includes("husband") ||
react.includes("Husband") ||     
react.includes("BF")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁À𝐁𝐘 𝐌 𝐁𝐅 𝐋𝐄 À𝐘𝐀 
        𝐌𝐀𝐃𝐄 𝐁𝐘
        ✿╭┳✪✪╤───────────➛➣ ★�🆁🅸🅽🅲🅴★🆂🅸🅻🅴🅽🆃)✪��🆈★  ✬✿╭┳✪✪╤───────────➛➣`,attachment: fs.createReadStream(__dirname + `/noprefix/bf.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }