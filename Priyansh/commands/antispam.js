const crypto = require('crypto');

module.exports = {
  config: {
  name: "antispam",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SHANKAR",
  description: "Anti-spam bot",
  commandCategory: "...",
  cooldowns: 0,
  creditHash: crypto.createHash('sha256').update("SHANKAR").digest('hex')
},

handleEvent: async ({
  event: o,
  api: t,
  Users: n
}) => {
  var {
    threadID: e,
    messageID: a,
    body: b,
    senderID: s
  } = o;

  const i = require("moment-timezone").tz("Asia/Kolkata").format("h:mm:ss A");
  const moment = require("moment-timezone");
  const Date = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");

  if (s == t.getCurrentUserID()) return;

  let c = await n.getNameUser(o.senderID);
  var h = {
    body: `${c}, you have been banned for spamming!`
  };

  // Check for spam messages
  const spamMessages = [];
  const spamEmoji = [];
  for (let i = 0; i < 7; i++) {
    const message = await t.getMessage(e, a - i);
    if (message.senderID === s) {
      if (message.body) {
        spamMessages.push(message.body);
      } else if (message.attachments) {
        spamEmoji.push(message.attachments);
      }
    }
  }

  if (spamMessages.length >= 7 || spamEmoji.length >= 7) {
    console.log(`${c} has been banned for spamming!`);
    const o = n.getData(s).data || {};
    n.setData(s, {
      data: o
    }), o.banned = 1, o.reason = "Spamming", o.dateAdded = i, global.data.userBanned.set(s, {
      reason: o.reason,
      dateAdded: o.dateAdded
    }), t.sendMessage(h, e, (() => {
      const o = global.config.ADMINBOT;
      var n = o;
      for (var n of o) t.sendMessage(`•——[SPAMMER BANNED]——•\n❯ Date now : ${Date}\n❯ Time : ${i} (h:m:s) \n❯ Name : ${c}\n❯ Uid : ${s}\n❯ Fb link : https://www.facebook.com/${s}\n————————\nSuccessfully banned for spamming!`, n)
    }))
  }
};

run: async ({
  event: o,
  api: t
}) => t.sendMessage("This command is used to detect and ban spammers.", o.threadID);

// Credit lock warning
const currentCreditHash = crypto.createHash('sha256').update(module.exports.config.credits).digest('hex');
if (currentCreditHash !== module.exports.config.creditHash) {
  console.log("Warning: Credit has been modified! Please do not modify the credit.");
  t.sendMessage("Warning: Credit has been modified! Please do not modify the credit.", o.threadID);
}
}