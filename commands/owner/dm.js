const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if (!client.config.developers.includes(message.author.id))
        return message.reply("Only **Developer** can use this command");
    let user = message.mentions.members.first()
    let ctx = message.content.split(" ").slice(2).join(" ")
    if(!user)return message.channel.send("you need a userid")
    if(!ctx)return message.channel.send("type a context")
    let embed = new Discord.MessageEmbed()
        .setTitle("DM Send")
        .setDescription(`you send a DM to ${user.user.username}`)
    message.channel.send(embed)
    user.send(ctx)
}

exports.help = {
  name: "dm",
  description: "dm a specific user **DONT ABUSE IT**",
  usage: "dm <userid> <context>",
  example: "dm 123456 hi",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
