const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Vote Zeno Bot on top.gg")
    .setDescription('[Click Me](https://top.gg/bot/784224401545101344/vote)')
    message.channel.send(embed)
}

exports.help = {
  name: "vote",
  description: "Show a vote link",
  usage: "vote",
  example: "",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 3
}