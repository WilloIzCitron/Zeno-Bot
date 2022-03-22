const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("invite Zeno Bot")
    .setDescription('Non Admin Perm: [Click Me](https://discord.com/oauth2/authorize?client_id=784224401545101344&scope=bot&permissions=335973414) \n Admin Perm(not recommended): [Click me](https://discord.com/oauth2/authorize?client_id=784224401545101344&scope=bot&permissions=8)')
    message.reply({embeds: [embed]})
}

exports.help = {
  name: "invite",
  description: "Show a invite link",
  usage: "invite",
  example: "",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 3
}