
exports.run = async (client, message, args) => {
  const text = message.content.split(" ").slice(1).join(" ") || "please add a text";
  if (text.includes("--reply")) {
    return message.reply(text.replace(/\-\-reply/g, ""))
  }
  return message.channel.send(text);
}

exports.help = {
  name: "say",
  description: "send a text command",
  usage: "say <arg> or say  <arg> --reply",
  example: "say hey",
  api: ""
}

exports.conf = {
  aliases: ['echo'],
  cooldown: 3
}
