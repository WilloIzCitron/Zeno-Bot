const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const server = message.guild;
const emojis = message.guild.emojis.cache
 .map((e) => `${e}`)
 .join(' ');
const owner = await message.guild.fetchOwner();
const embed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle(server.name)
.setThumbnail(server.iconURL({ dynamic: true, format: 'png', size: 1024 }))
.addField('Owner', owner.toString(), true)
//region was deprecated in v12.3.0
//.addField('Region', server.region, true)
//endregion
.addField('Members', server.memberCount.toString(), true)
.addField('Channels', server.channels.cache.size.toString(), true)
.addField('Roles', server.roles.cache.size.toString(), true)
.addField('Created', server.createdAt.toLocaleString(), false)
//list a emojis not count
.addField('Emojis', emojis, false)
.setFooter(`ID: ${server.id}`);
//sending a embed use {embeds: [embed]} damn djs v13
message.channel.send({ embeds: [embed] });


  
}

exports.help = {
  name: "serverinfo",
  description: "see info about the server",
  usage: "serverinfo",
  example: "serverinfo",
  api: ""
}

exports.conf = {
  aliases: ["si"],
  cooldown: 3
}