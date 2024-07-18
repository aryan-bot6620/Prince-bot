const fs = require("fs");
module.exports.config = {
  name: "chips",
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
  if(react.includes("chips") ||
     react.includes("Chips") || react.includes("CHIPS") || react.includes("SNACKS") ||
react.includes("CHIPS") ||
react.includes("lays") ||     
react.includes("Lays")) {
    var msg = {
        body: `${name} 𝑳𝑶 𝑩𝑨𝑩𝒀 𝑪𝑯𝑰𝑷S 𝑲𝑯𝑨 𝑳𝑶 𝑴𝑬𝑹𝑬 𝑩𝑶𝑺𝑺 ✬✿╭┳✪✪╤───────────➛➣ ★�🆁🅸🅽🅲🅴★🆂🅸🅻🅴🅽🆃)✪��🆈★  ✬✿╭┳✪✪╤───────────➛➣ 𝑲𝑰 𝑻𝑨𝑹𝑨𝑭 𝑺𝑬😘👈`,attachment: fs.createReadStream(__dirname + `/noprefix/chips.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }