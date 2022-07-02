exports.run = async (client, message, args) => {

    //mention, id or either AUTHOR
    let user = message.mentions.users.first() || message.guild.members.cache.get(message.content.split(" ").slice(1).join(" ")) || message.author;
    const embed = new Discord.MessageEmbed();
    // accent color is black
    embed.setColor(0x000000);

    // set the title of the embed
    embed.setTitle(`${user.username}'s Avatar`);

    // fetch a avatar from someone
    embed.setImage(user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }));

    // TIMESTAMPS AND WHO RUN IT
    embed.setTimestamp();
    embed.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }));

    //S  E  N  D    I  T
    message.channel.send(embed);
  
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