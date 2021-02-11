const DIG = require("discord-image-generation");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    let target = message.mentions.users.first() || message.author;
    let img = await new DIG.Delete().getImage(target.avatarURL({ dynamic: false, format: 'png' }));
    let attach = new Discord.MessageAttachment(img, "delete.png");;
    message.channel.send(attach)
}

exports.help = {
    name: "delete",
    description: "Generate a delete image",
    usage: "delete <user>",
    example: "delete WilloIzVitron#0010",
    api: "discord-image-generation"
}

exports.conf = {
    aliases: ["del"],
    cooldown: 5
}
