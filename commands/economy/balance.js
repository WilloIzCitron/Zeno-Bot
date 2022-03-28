const Database = require('discord-mongo-currency')
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.member;
 
    const match = await Database.findUser(member.id, message.guild.id); // Get the user from the database.
        let currency ="ZenoPoint";
        let money = match.coinsInWallet
        let bank = match.coinsInBank
        let emptybank = match.bankSpace
        const embed = new Discord.MessageEmbed().addField("Money", `${money} ${currency}`).addField("Bank", `${bank}/${emptybank}`);
        return message.channel.send({embeds: [embed]})
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
