const fs = require("fs");
module.exports.config = {
	name: "pooja",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "arif babu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "arif",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("riya")==0 || event.body.indexOf("@Riya Rajput")==0 || event.body.indexOf("Riya Rajput")==0 || event.body.indexOf("RIYA")==0) {
		var msg = {
				body: "𝐌𝐘 𝐂𝐔𝐓𝐄 𝐁𝐀𝐁𝐘 𝐑𝐈𝐘𝐀",
				attachment: fs.createReadStream(__dirname + `/noprefix/dk.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }