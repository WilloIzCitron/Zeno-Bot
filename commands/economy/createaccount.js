const Database = require("discord-mongo-currency")


exports.run = async (client, message, args) => {
      const member = message.member
      await Database.createUser(member.id, message.guild.id).then( message.channel.send("OK. account created, this account is serverside."));

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
