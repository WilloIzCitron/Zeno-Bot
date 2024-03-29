const fetch = require('node-fetch')
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply('Github Repo don\'t must be empty');
    const api = () => fetch(`https://api.github.com/repos/${args[0]}`).then(res => res.json());
    const result = await api();
    if (!result.full_name) return message.channel.send(`repo \`${args[0]}\` not found`);
    const embed = new Discord.MessageEmbed()
    .setTitle(result.full_name)
    .setURL(result.html_url)
    .setDescription(result.description || "No description provided")
    .addField("General Information", `Fork: ${result.fork ? `Yes, its from ${result.parent.full_name}` : `No`}\nHomepage: ${result.homepage ? `[click here](${result.homepage})` : "No homepage provided"}\nLanguage: ${result.language ? result.language : "no programing language provided"}\nDefault Branch: ${result.default_branch}`)
    .addField("Condition", `Has Download: ${result.has_download === false ? `No` : `Yes`}\nHas Issues: ${result.has_issues ? `Yes` :  `No`}\nArchived: ${result.archived ? `Yes` : `No`}\nDisabled: ${result.disabled ? `Yes` : `No`}`)
    .addField("Counts", `Stars: ${result.stargazers_count} stargazers\nWatching: ${result.watchers_count} watchers\nForks: ${result.forks} forks`)
    .setColor("RANDOM")
    .setThumbnail(result.owner.avatar_url);
    message.channel.send({ embeds: [embed] })
}

exports.help = {
  name: "github_repo",
  description: "fetch a some github repo",
  usage: "github_repo <repo owner/repo name>",
  example: "github_repo anuken/mindustry",
  api: ""
}

exports.conf = {
  aliases: ["gitrepo"],
  cooldown: 3
}