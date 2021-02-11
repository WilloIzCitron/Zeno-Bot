const Database = require("@replit/database")
const db = new Database()
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    let match = await db.get(`money_${message.author.id}`)
    if(match > 0 || match == 0)
    {
        let currency = await db.get(`currency_${message.guild.id}`) || "ZenoPoint";
        let money1 = await db.get(`money_${message.author.id}`)
        let bank1 = await db.get(`bank_${message.author.id}`)
        const embed = new Discord.MessageEmbed().addField("Money", `${money1} ${currency}`).addField("Bank", `${bank1} ${currency}`);
        return message.channel.send(embed)
    }
    message.channel.send("You need a account")
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
