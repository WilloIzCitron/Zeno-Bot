exports.run = async (client, message, args) => {
  if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('you were missing `Kick Members` permission');
  const user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(" ").slice(1).join(" "));
  if (!user) return message.channel.send('you were missing at least a mention/id');
  if (user.permissions.has('ADMINISTRATOR') || user.roles.highest.hoist) return message.channel.send("you can't kick admin or highest role")
  if (user === message.author.id) return message.channel.send("you can't kick yourself")
  await user.kick("kicked by bot")
  message.channel.send(`Successfully ${user.user.tag} is kicked`)
  user.send(`You have been kicked from ${message.guild.name}:\nModerator: ${message.author}`)
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
