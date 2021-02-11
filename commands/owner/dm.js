const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if (!client.config.developers.includes(message.author.id))
        return message.reply("Only **Developer** can use this command");
    let user = client.users.cache.get(args.slice(1).join(" "))
    let ctx = message.content.split(" ").slice(2).join(" ")
    if (!args[1]) return message.channel.send("you need a user id")
    if (!typeof args[1] == Number) return message.channel.send("it must be a number")
    //if (!user) return message.channel.send("We could find an user") //its need a log only
    if (!ctx) return message.channel.send("type a context")
    let embed = new Discord.MessageEmbed()
        .setTitle("DM Sent")
        .setDescription(`you sent a DM`)
    message.channel.send(embed)
    user.send(ctx)
}

exports.help = {
  name: "dm",
  description: "dm a specific user **don\'t ABUSE IT**",
  usage: "dm <userid> <context>",
  example: "dm 123456 hi",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
