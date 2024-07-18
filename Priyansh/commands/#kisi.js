const fs = require("fs");
module.exports.config = {
  name: "kisi",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("😕") ||
     react.includes("😜") || react.includes("🫣") || react.includes("😐") ||
react.includes("😼") ||
react.includes("🤨")) {
    var msg = {
        body: `AGar Kisi Ke Ke PaS TamiZ ka Number He To Please 🥺 Muje seNd KaRe Kyu Ki Sab KehTe He TaMiz se Bat KaRo  😝🙃👈😆`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }