const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  text = message.content.split(" ").slice(1).join(" ")
  if(!text)return message.channel.send("you must fill a text")
  api = `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}&raw=1`
  const attachment = new Discord.MessageAttachment(api, "trumptweet.png");
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
