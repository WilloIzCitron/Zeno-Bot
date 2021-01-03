const Database = require("@replit/database")
const db = new Database()
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if(!db.get(`money_${message.author.id}`))return message.channel.send("You need a account")
    else{
        let money1 = await db.get(`money_${message.author.id}`)
        let bank1 = await db.get(`bank_${message.author.id}`)
        const embed = new Discord.MessageEmbed()
        embed.addField("Money", money1)
        embed.addField("Bank", bank1);
        message.channel.send(embed)
    }
}

exports.help = {
  name: "balance",
  description: "see a balance of economy account",
  usage: "",
  example: "",
  api: ""
}

exports.conf = {
  aliases: ["bal"],
  cooldown: 5
}
