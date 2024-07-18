const fs = require("fs");
module.exports.config = {
  name: "hug",
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
  if(react.includes("hug") ||
     react.includes("Hug") || react.includes("gale milo") || react.includes("🫂") ||
react.includes("HUG") ||
react.includes("hug") ||     
react.includes("Hug")) {
    var msg = {
        body: `${name} 𝐁À𝐁𝐘 𝐘𝐎𝐔 𝐖ÀÑ𝐓 𝐓𝐎 𝐇𝐔𝐆 𝐌𝐄
        𝐌𝐀𝐃𝐄 𝐁𝐘💐
✬✿╭┳✪✪╤───────────➛➣ ★�🆁🅸🅽🅲🅴★🆂🅸🅻🅴🅽🆃)✪��🆈★  ✬✿╭┳✪✪╤───────────➛➣`,attachment: fs.createReadStream(__dirname + `/noprefix/hug.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }