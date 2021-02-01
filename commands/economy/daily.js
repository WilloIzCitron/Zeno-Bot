const Database = require("@replit/database")
const db = new Database()

exports.run = async (client, message, args) => {
    let match = await db.get(`money_${message.author.id}`)
    let currency = await db.get(`currency_${message.guild.id}`) || "ZenoPoint";
    if(match > 0 || match == 0)
    {
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        currentmoney = await db.get(`money_${message.author.id}`)
        moneychance = getRndInteger(2500, 5000)
        await message.channel.send(`You got a Daily reward, and its has ${moneychance} ${currency}`)
        db.set(`money_${message.author.id}`, currentmoney + moneychance)
    }else return message.channel.send("You need a account")
}

exports.help = {
  name: "daily",
  description: "get a daily reward",
  usage: "",
  example: "",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 86400
}