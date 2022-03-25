const fetch = require('node-fetch')
const Discord = require("discord.js")



exports.run = async (client, message, args) => {
    const query = args[0]

    const api = () => fetch(`https://api.mioun.xyz/api/trakteer?name=${query}`).then(res =>res.json())
    const res = await api();
    if(!res.name)return message.channel.send("Not Found")
      let button = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setLabel("Subscribe him/her")
        .setStyle("LINK")
        .setURL(res.links.youtube),
          )
       .addComponents(
           new Discord.MessageButton()
            .setLabel("Please Donate him/her")
            .setStyle("LINK")
            .setURL(`https://trakteer.id/${query}`)
       )
    
        const resultEmbed = new Discord.MessageEmbed()
            .setTitle("Trakteer")
            .setThumbnail(res.avatar)
            .setColor(15548997)
            .addField("Name", res.name)
            .addField("Username", res.username)
            .addField("Occupation", res.occupation)
            .addField("Status", res.status)
            .addField("Goal", `Title: ${res.goals.title}\nDescription:${res.goals.description}\nTarget:${res.goals.target}\nReached:${res.goals.reached}`)
        message.channel.send({components: [button], embeds: [resultEmbed]})
  
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