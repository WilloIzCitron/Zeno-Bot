const Database = require("@replit/database")
const db = new Database()
const Discord = require("discord.js")
const profetion = ["Mindustry-chan artist", "Zeno Bot Developer", "Discord Employee", "Doctor", "Air Force Soldier", "Naval Soldier", "Developer", "Teacher"];

exports.run = async (client, message, args) => {
    let match = await db.get(`money_${message.author.id}`)
    let currency = await db.get(`currency_${message.guild.id}`) || "ZenoPoint";
    if (match)
    {
        const currentmoney = await db.get(`money_${message.author.id}`)
        const moneychance = Math.floor(Math.random() * 500) + 500;
        const rdmprofetion = profetion[Math.floor(Math.random() * profetion.length)];
        db.set(`money_${message.author.id}`, currentmoney + moneychance);
        return message.channel.send(`${message.author.username} worked as ${rdmprofetion} and got ${moneychance} ${currency}`);
    }
    return message.channel.send("You need an account")
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
