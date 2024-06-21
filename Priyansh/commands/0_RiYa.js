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
	if (event.body.indexOf("@Dr💊 Bhukhd")==0 || event.body.indexOf("@Chułbułıı Chørıı")==0 || event.body.indexOf("@Shruti Ahuja")==0 || event.body.indexOf("@Sardarni Jatti")==0) {
		var msg = {
				body: "𝐈𝐌 𝐂𝐔𝐓𝐄 𝐁𝐀𝐁𝐘 🥰😘",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk4.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }