const axios = require("axios");
module.exports.config = {
    name: "ai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Priyansh Rajput",
    description: "BlackBoxAi by Priyansh",
    commandCategory: "ai",
    usages: "[ask]",
    cooldowns: 2,
    dependecies: {
        "axios": "1.4.0"
    }
};

module.exports.run = async function ({ api, event, args }) {

  const { threadID, messageID } = event;

  const prompt = encodeURIComponent(args.join(" "));

  if (!args[0]) return api.sendMessage("Please type a message...", threadID, messageID );
  
  api.sendMessage("Searching for an answer, please wait...", threadID, messageID);

  try{

    api.setMessageReaction("⌛", event.messageID, () => { }, true);

    const res = await axios.get(`https://blackboxai-tlh1.onrender.com/api/blackboxai?query=${prompt}`);

    const data = res.data.priyansh;

    api.sendMessage(data, event.threadID, event.messageID);

    api.setMessageReaction("✅", event.messageID, () => { }, true);
}
  catch (error) {
    console.error('Error fetching package.json:', error);
  api.sendMessage("An error occurred while fetching data. Please try again later.", event.threadID, event.messageID);
  }
};