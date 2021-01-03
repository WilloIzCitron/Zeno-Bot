exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('you missing Kick Members perm');
  const user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(" ").slice(1).join(" "));
  if(!user)return message.channel.send('you missing mention/id');
  if(user.hasPermission('ADMINISTRATOR') || user.roles.highest.hoist === true)return message.channel.send("you cant kick admin or highest role")
  if(user === message.author.id)return message.channel.send("you cant kick yourself")
  await user.kick("kicked by bot")
  message.channel.send(`Successfully ${user.user.tag} is kicked`)
  user.send(`You has been kicked from ${message.guild.name}:\nModerator: ${message.author}`)
}

exports.help = {
  name: "kick",
  description: "kicking a member / bot",
  usage: "kick <mention/id>",
  example: "kick username601",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
