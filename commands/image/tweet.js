const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  username = args[0]
  text = message.content.split(" ").slice(2).join(" ")
  if(!text)return message.channel.send("you must fill a text")
  api = `https://nekobot.xyz/api/imagegen?type=tweet&username=${username}&text=${text}&raw=1`
  const attachment = new Discord.MessageAttachment(api, "trumptweet.png");
  return message.channel.send(attachment);
  
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