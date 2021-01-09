const Database = require("@replit/database")
const db = new Database()
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if(!db.get(`money_${message.author.id}`))return message.channel.send("You need a account")
    else{
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        currentmoney = await db.get(`money_${message.author.id}`)
        moneychance = getRndInteger(500, 1000)
        profetion = ["Mindustry-chan artist", "Zeno Bot Developer", "Discord Employee", "Doctor", "Air Force Soldier", "Naval Soldier", "Developer", "Teacher"]
        rdmprofetion = profetion[Math.floor(Math.random() * profetion.length)];
        message.channel.send(`${message.author.username} worked as ${rdmprofetion} and got ${moneychance} as work salary`)
        db.set(`money_${message.author.id}`, currentmoney + moneychance)
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