const fetch = require('node-fetch')
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply('Github Username dont must be empty');
    const api = () => fetch(`https://api.github.com/users/${args[0]}`).then(res => res.json());
    const result = await api();
    if (!result.login) return message.channel.send(`Username \`${args[0]}\` not found`);
    const embed = new Discord.MessageEmbed()
    .setTitle("Github Profile")
    .setColor("RANDOM")
    .setImage(`https://github-profile-trophy.vercel.app/?username=${result.login}`)
    .setURL(result.html_url)
    .setThumbnail(result.avatar_url)
    .addField("General Info", `Name: ${result.login}/${result.name ? result.name: "No name provided."}\nType: ${result.type} \nLocation: ${result.location ? result.location : "no location provided"}\nCompany: ${result.company ? result.company : "no company provided"}\nBio: ${result.bio ? result.bio : "no bio provided"}`)
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