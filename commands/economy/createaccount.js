const Database = require("@replit/database")
const db = new Database()

exports.run = async (client, message, args) => {
    let match = await db.get(`money_${message.author.id}`)
    if (match) {
      db.set(`money_${message.author.id}`, 0);
      db.set(`bank_${message.author.id}`, 0);
      return message.channel.send("OK. account created, this account is global.")
    }
    message.channel.send("you already have an account")
    }


exports.help = {
  name: "createaccount",
  description: "creates an economy account",
  usage: "",
  example: "",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 5
}
