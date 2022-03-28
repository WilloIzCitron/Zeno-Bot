const Database = require("discord-mongo-currency")
const Discord = require("discord.js")
const profession = ["Mindustry-chan artist", "Zeno Bot Developer", "Discord Employee", "Doctor", "Air Force Soldier", "Naval Soldier", "Developer", "Teacher", "Babysitter", "Gangster"];

exports.run = async (client, message, args) => {
    let currency = "ZenoPoint";
    const moneychance = Math.floor(Math.random() * 500) + 500;
    const rdmprofession = profession[Math.floor(Math.random() * profession.length)];
    if (rdmprofession === "Gangster"){
        const bonusmoneychance = (20 / 100) * moneychance;
        await Database.giveCoins(message.member.id, message.guild.id, bonusmoneychance);
        return message.channel.send(`${message.author.username} worked as Gangster and got ${bonusmoneychance} ${currency} for 20% bonus`);
    } else {
      await Database.giveCoins(message.member.id, message.guild.id, moneychance);
      return message.channel.send(`${message.author.username} worked as ${rdmprofession} and got ${moneychance} ${currency}`);
    }
}

exports.help = {
  name: "work",
  description: "work to get a money",
  usage: "",
  example: "",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 3600
}
