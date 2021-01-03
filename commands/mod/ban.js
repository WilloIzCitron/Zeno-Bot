exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('you missing Ban Members perm');
  const user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(" ").slice(1).join(" "));
  if(!user)return message.channel.send('you missing mention/id');
  if(user.hasPermission('ADMINISTRATOR') || user.roles.highest.hoist === true)return message.channel.send("you cant ban admin or highest role")
  if(user === message.author.id)return message.channel.send("you cant ban yourself")
  reason = message.content.split(" ").slice(2).join(" ")
  if(!reason)return reason = "no reason provided"
  await user.ban({ days: 0, reason: reason })
  message.channel.send(`Successfully ${user.user.tag} is banned with reason: ${reason}`)
  user.send(`You have been banned from ${message.guild.name}:\nModerator: ${message.author.tag}\nReason: ${reason}`)
}

exports.help = {
  name: "ban",
  description: "banning a member / bot",
  usage: "ban <mention/id> [reason]",
  example: "ban username601",
  api: ""
}

exports.conf = {
  aliases: [],
  cooldown: 3
}