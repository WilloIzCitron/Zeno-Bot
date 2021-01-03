const Database = require("@replit/database")
const db = new Database()

exports.run = async (client, message, args) => {
    let match = await db.get(`money_${message.author.id}`)
    if(match => 0)return message.channel.send("you already create account")
    else{
    db.set(`money_${message.author.id}`, 0);
    db.set(`bank_${message.author.id}`, 0);
    message.channel.send("account created, this account its globaly")
    }
}

exports.help = {
  name: "createaccount",
  description: "creates a economy account",
  usage: "",
  example: "",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 5
}