const Database = require("@replit/database")
const db = new Database()

exports.run = async (client, message, args) => {
 let arg = message.content.split(" ").slice(1).join(" ")
 if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('you were missing Manage Guild perm');
 if (!arg) return message.channel.send("You must fill a new currency")
 if (arg.length > 40) { message.channel.send("its too long, the maximum of currency name is 40")
 }else if (arg.length > 40) { message.channel.send("its too long, the maximum of currency name is 40")
 }else{
     db.set(`currency_${message.guild.id}`, arg)
     message.channel.send(`currency added, now currency on this server is ${arg}`)
 }
}

exports.help = {
  name: "change_currency",
  description: "changing a Zeno bot's currency on this server/guild is need 24 hour to change it back but you cant use custom emoji as currency",
  usage: "change_currency <new server currency>",
  example: "change_currency Bobux",
  api: ""
}

exports.conf = {
  aliases: ["change-currency"],
  cooldown: 86400
}