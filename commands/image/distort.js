const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  user = message.mentions.users.first() || message.author;
  api = `http://api.moe.alvindaldi.my.id/api/distort?image=${user.avatarURL({ size: 2048, format: 'png'})}`
  const attachment = new Discord.MessageAttachment(api, "distort.png");
  return message.channel.send(attachment);
  
}

exports.help = {
  name: "distort",
  description: "generate distort image",
  usage: "distort <user/author>",
  example: "distort  WilloIzVitron#0010",
  api: "api.moe.alvindaldi.my.id"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
