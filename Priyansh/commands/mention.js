module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100010492052172") {
    var aid = ["100010492052172"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝚆𝙾 𝙱𝚄𝚂𝚈 𝙷 𝙼𝚄𝙹𝙷𝙴 𝙱𝙾𝙻𝙾 𝙺𝚈𝙰 𝙱𝙾𝙻𝙽𝙰 𝙷?", "𝙺𝚈𝙰 𝙷𝚄𝙰 𝙱𝙾𝚂𝚂 𝙺𝙾 𝚀 𝙱𝙾𝙻𝙰 𝚁𝙷𝙴 𝙷𝙾?", "𝚆𝙾 𝚂𝙷𝙰𝚈𝙰𝙳 𝙱𝚄𝚂𝚈 𝙷𝙾𝙶𝙴", "𝙱𝙾 𝙱𝚄𝚂𝚈 𝙷𝙰𝙸𝙼 𝙰𝙱𝙷𝙸 𝙰𝙿𝙽𝙴 𝚆𝙾𝚁𝙺 𝙼𝙴𝙸𝙽 𝙼𝚄𝙹𝙷𝙴 𝙱𝙾𝙻 𝙳𝙾 𝙼𝙰𝙸𝙽 𝙱𝙾𝙻 𝙳𝙾𝙶𝙰 𝙱𝙾𝚂𝚂 𝙺𝙾"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }