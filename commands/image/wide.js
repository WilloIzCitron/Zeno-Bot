const Discord = require("discord.js")
const Canvas = require("canvas");

exports.run = async (client, message, args) => {
    let target = message.mentions.users.first();
    let levels = args[1] || 360;
    if (levels < 360) return message.channel.send('it must be greater than 360');
    if (levels > 10000) return message.channel.send(`\"zamn, you make it crash!\" \n- WilloIzCitron`);
    const canvas = Canvas.createCanvas(Number(levels), 240)
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage(target.displayAvatarURL({ format: "png" }))
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const a = new Discord.MessageAttachment(canvas.toBuffer(), `Wide ${target.username}.png`)
    message.channel.send({files: [a]})
}

exports.help = {
    name: "wide",
    description: "Generate a wide image, it need user mention for generate wide",
    usage: "wide <user> [size]",
    example: "wide WilloIzVitron#0010",
    api: ""
}

exports.conf = {
    aliases: [],
    cooldown: 5
}
