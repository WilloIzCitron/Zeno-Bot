const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  const user = message.mentions.users.first() || message.author;
  const attachment = new Discord.MessageAttachment(`http://api.moe.alvindaldi.my.id/api/distort?image=${user.avatarURL({ size: 2048, format: 'png'})}`, "distort.png");
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
