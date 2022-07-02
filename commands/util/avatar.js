const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    //mention, id(actually deleted nerd) or either AUTHOR
    let user = message.mentions.users.first();
    if (!user) return user = message.author;
    const embed = new Discord.MessageEmbed();
    // accent color is black
    embed.setColor(0x000000);

    // set the title of the embed
    embed.setTitle(`${user.username}'s Avatar`);

    // fetch a avatar from someone
    embed.setImage(user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }));

    // TIMESTAMPS
    embed.setTimestamp();

    //S  E  N  D    I  T
    message.channel.send({embeds: [embed]});
  
}

exports.help = {
  name: "avatar",
  description: "get a profile from someone",
  usage: "zen!avatar [mention or id]",
  example: "zen!avatar @zen",
  api: ""
}

exports.conf = {
  aliases: ['av', 'pfp', 'profile'],
  cooldown: 3
}