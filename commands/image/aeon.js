const GoogleImages = require("google-images");
const { Client, Attachment } = require("discord.js");
const Discord = require("discord.js")
const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const googleImages = new GoogleImages("865f59280d5c25b75", process.env.GOOGLE_API_KEY);

exports.run = async (client, message, args) => {
  try {
    const results = await googleImages.search("Aeon image");
    const reply = !results.length ?
      "No results" :
        {files: [new Discord.MessageAttachment(results[Math.floor(Math.random() * results.length)].url)]}
    message.channel.send(reply);
  }
  catch (e) {
    console.error(e);
    message.channel.send(":ohno: Error Found. Report to Dev for fixing");
  }
}

exports.help = {
  name: "aeon",
  description: "get a random image of aeon",
  usage: "",
  example: "",
  api: "Google Image"
}

exports.conf = {
  aliases: ["aon"],
  cooldown: 3
}