const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  const username = args[0];
  const text = message.content.split(" ").slice(2).join(" ") || "sample text";
  const attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=tweet&username=${encodeURIComponent(username)}&text=${encodeURIComponent(text)}&raw=1`, "trumptweet.png");
  message.channel.send({files: [attachment]})
}

exports.help = {
  name: "tweet",
  description: "generate a tweet image",
  usage: "tweet <twiter username> <context>",
  example: "tweet WilloIzCitron Hi",
  api: "Nekobot API"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
