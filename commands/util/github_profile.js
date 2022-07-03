const fetch = require('node-fetch')
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    let arg = args[0]
    if (!arg) return message.reply("don\'t must be empty")
    const api = () => fetch(`https://api.github.com/users/${arg}`).then(res => res.json());
    const result = await api();
    if (!result.login) return message.channel.send(`Username \`${arg}\` not found`);
    const embed = new Discord.MessageEmbed()
    .setTitle(result.login)
    .setDescription(`${result.bio ? result.bio : "no bio provided"}`)
    .setColor("RANDOM")
    //.setImage(`https://github-profile-trophy.vercel.app/?username=${result.login}`) currently not working
    .setURL(result.html_url)
    .setThumbnail(result.avatar_url)
    .addField("General Info", `Name: ${result.name || "No name provided."}\nType: ${result.type} \nLocation: ${result.location || "no location provided"}\nCompany: ${result.company || "no company provided"}\nTwitter Username: ${result.twitter_username || "no Twitter Username provided"}`)
    .addField("Counts", `Public Repos: ${result.public_repos || "there are no repos."}\nPublic Gists: ${result.public_gists || "there are no gists."}\nFollowers: ${result.followers || "No followers"}\nFollowing: ${result.following || "No following"}`);
    message.channel.send({ embeds: [embed] })
}

exports.help = {
  name: "github_profile",
  description: "Fetch a github profile",
  usage: "github_profile <username>",
  example: "github_profile WilloIzCitron",
  api: "api.github.com"
}

exports.conf = {
  aliases: ["gitprofile"],
  cooldown: 5
}