//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "Radhika",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ///////@prem-babu3608
	description: "THIS BOT IS MR PREM BABU",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("RADHE") ||
     react.includes("radha") || react.includes("radhe radhe") || react.includes("Krishna") ||
react.includes("SHYAM") ||
react.includes("RADHE RADHE")) {
		var msg = {
				body: `‌🙏 राधे राधे 🙏`,attachment: fs.createReadStream(__dirname + `/AADI/XX.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
