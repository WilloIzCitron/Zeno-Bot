const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  text = message.content.split(" ").slice(1).join(" ") || "sample text";
  const attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${encodeURIComponent(text)}&raw=1`, "trumptweet.png");
  return message.channel.send(attachment);
  
}

exports.help = {
  name: "trumptweet",
  description: "making a trumptweet image",
  usage: "trumptweet <text>",
  example: "trumptweet i lose",
  api: "Nekobot API"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}
