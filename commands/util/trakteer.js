const fetch = require('node-fetch')
const Discord = require("discord.js")



exports.run = async (client, message, args) => {
    const loadingEmbed = new Discord.MessageEmbed()
    .setTitle("Loading...")

    const errorEmbed = new Discord.MessageEmbed()
    .setTitle("404 Not Found")

    const APIErrorEmbed = new Discord.MessageEmbed()
    .setTitle("API was detected a error")
    
    const query = args[0]

    const msg = await message.channel.send({embeds: [loadingEmbed]})
    const api = () => fetch(`https://api.mioun.xyz/api/trakteer?name=${query}`).then(res =>res.json())
    const body = await api();

    
    if(!body.name)return msg.edit({embeds: [errorEmbed]})
      let button = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setLabel("Subscribe him/her")
        .setStyle("LINK")
        .setURL(body.links.youtube),
        )
        .addComponents(
           new Discord.MessageButton()
            .setLabel("Please Donate him/her")
            .setStyle("LINK")
            .setURL(`https://trakteer.id/${query}`)
       )
    
        const resultEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle("Trakteer")
            .setThumbnail(body.avatar)
            .setColor(15548997)
            .addField("Name", body.name)
            .addField("Username", body.username)
            .addField("Occupation", body.occupation)
            .addField("Status", body.status)
            .addField("Goal", `Title: ${body.goals.title}\nDescription:${body.goals.description}\nTarget:${body.goals.target ? body.goals.target : "Not Included"}\nReached:${body.goals.reached ? body.goals.reached : "Not Included"}`)
        msg.edit({components: [button], embeds: [resultEmbed]})
  
}

exports.help = {
  name: "trakteer",
  description: "fetch a trakteer accounts",
  usage: "zen!trakteer <query>",
  example: "zen!trakteer yahbegitulah",
  api: "api.mioun.xyz"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}