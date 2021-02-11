exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('you were missing manage nickname perm');
  const user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(" ").slice(1).join(" "));
  if (!user) return message.channel.send('you were missing mention/id');
  if (user.hasPermission('ADMINISTRATOR') || user.roles.highest.hoist === true) return message.channel.send("you cant change admin's nickname or member has highest role's nickname")
  nickname = message.content.split(" ").slice(2).join(" ")
  if (!nickname) return message.channel.send("nickname needed")
  await user.setNickname(nickname)
  message.channel.send(`Successfully ${user.user.tag} has changed nickname to ${nickname}`)
  
}

exports.help = {
  name: "setnickname",
  description: "change nickname",
  usage: "setnickname <userind/mention> <new nick>",
  example: "setinckname willo man",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
