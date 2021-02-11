
exports.run = async (client, message, args) => {
text = message.content.split(" ").slice(1).join(" ")
if (!text) return message.channel.send("you must add a arg")
if (text.includes("--reply")) {
message.inlineReply(text.replace("--reply", ""))
}else{message.channel.send(text)}
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