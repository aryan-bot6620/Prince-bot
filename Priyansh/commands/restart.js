module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "manhIT",
	description: "Restart the Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`OKYE MY BOSS ~ AADI ~ BABU PLEASE WAIT`, threadID, () => process.exit(1));
}