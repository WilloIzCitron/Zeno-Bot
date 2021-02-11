const Database = require("@replit/database")
const db = new Database()

exports.run = async (client, message, args) => {
    let match = await db.get(`money_${message.author.id}`)
    let currency = await db.get(`currency_${message.guild.id}`) || "ZenoPoint";
    if (match > 0 || match == 0)
    {
        const currentmoney = await db.get(`money_${message.author.id}`)
        const moneychance = Math.floor(Math.random() * 2500) + 2500;
        db.set(`money_${message.author.id}`, currentmoney + moneychance);
        return message.channel.send(`You got a Daily reward, and now it has ${moneychance} ${currency}`)
    }
    return message.channel.send("You need a account")
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
