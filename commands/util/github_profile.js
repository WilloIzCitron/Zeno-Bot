const fetch = require('node-fetch')
const Discord = require("discord.js")
const Database = require("@replit/database")
const db = new Database()

exports.run = async (client, message, args) => {
    let linked = await db.get(`github_${message.author.id}`)
    let arg = args[0]
    if(!arg)return message.reply("dont must be empty")
    const api = () => fetch(`https://api.github.com/users/${arg}`).then(res => res.json());
    const result = await api();
    if (!result.login) return message.channel.send(`Username \`${arg}\` not found`);
    const embed = new Discord.MessageEmbed()
    .setTitle(result.login)
    .setDescription(`${result.bio ? result.bio : "no bio provided"}`)
    .setColor("RANDOM")
    .setImage(`https://github-profile-trophy.vercel.app/?username=${result.login}`)
    .setURL(result.html_url)
    .setThumbnail(result.avatar_url)
    .addField("General Info", `Name: ${result.name ? result.name: "No name provided."}\nType: ${result.type} \nLocation: ${result.location ? result.location : "no location provided"}\nCompany: ${result.company ? result.company : "no company provided"}\nTwitter Username: ${result.twitter_username ? result.twitter_username : "no Twitter Username provided"}`)
    .addField("Counts", `Public Repos: ${result.public_repos ? result.public_repos : "there is no repos."}\nPublic Gists: ${result.public_gists ? result.public_gist : "there is no gists."}\nFollowers: ${result.followers ? result.followers : "No followers"}\nFollowing: ${result.following ? result.following : "No following"}`);
    message.channel.send(embed)
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