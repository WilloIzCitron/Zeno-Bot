const Database = require("discord-mongo-currency")


exports.run = async (client, message, args) => {
    let currency = await "ZenoPoint";
    if (match > 0 || match == 0)
    {
        const moneychance = Math.floor(Math.random() * 2500) + 2500;
        await Database.giveCoins(message.member.id, message.guild.id, moneychance);
        return message.channel.send(`You got a Daily reward, and now it has ${moneychance} ${currency}`)
    }
    return message.channel.send("You need an account")
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
