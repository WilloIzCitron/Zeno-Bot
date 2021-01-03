const Database = require("@replit/database")
const db = new Database()

exports.run = async (client, message, args) => {
    if(!db.get(`money_${message.author.id}`))return message.channel.send("You need a account")
    else{
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        currentmoney = await db.get(`money_${message.author.id}`)
        moneychance = getRndInteger(2500, 5000)
        await message.channel.send(`You got a Daily reward, and its has ${moneychance} of a money`)
        db.set(`money_${message.author.id}`, currentmoney + moneychance)
    }
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