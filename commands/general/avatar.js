const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    //mention, id or either AUTHOR
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.member;
    const embed = new Discord.MessageEmbed();
    var resolution = Number(args[1]);
    if (!resolution) {
      resolution = 1024;
    }
    // accent color is black
    embed.setColor(0x000000);

    //create a buttons for functionality can be install a user avatar
    const buttons = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
          .setLabel("WEBP")
          .setStyle("LINK")
          .setURL(user.displayAvatarURL({ dynamic: true, size: resolution, format: 'webp' })),
          new Discord.MessageButton()
          .setLabel("JPEG")
          .setStyle("LINK")
          .setURL(user.displayAvatarURL({ dynamic: true, size: resolution, format: 'jpg' })),
          new Discord.MessageButton()
          .setLabel("PNG")
          .setStyle("LINK")
          .setURL(user.displayAvatarURL({ dynamic: true, size: resolution, format: 'png' })),
          new Discord.MessageButton()
          .setLabel("GIF (For animated avatars)")
          .setStyle("LINK")
          .setURL(user.displayAvatarURL({ dynamic: true, size: resolution, format: 'gif' })),
        )

    // set the title of the embed
    embed.setTitle(`${user.username}'s Avatar with ${resolution}x${resolution}`);

    // fetch a avatar from someone animated pfp can animates it 
    embed.setImage(user.displayAvatarURL({ dynamic: true, size: resolution }));

    // TIMESTAMPS and footer (its discord.js v13 setFooter mostly deprecated)
    embed.setTimestamp();
    embed.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, size: 1024 }));

    //S  E  N  D    I  T
    message.channel.send({embeds: [embed], components: [buttons]});
  
}

exports.help = {
  name: "avatar",
  description: "get a profile from someone",
  usage: "zen!avatar [mention or id] [resolution]",
  example: "zen!avatar @zen",
  api: ""
}

exports.conf = {
  aliases: ['av', 'pfp', 'profile'],
  cooldown: 3
}