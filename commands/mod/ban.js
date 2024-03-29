exports.run = async (client, message, args) => {
  if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('you\'re missing the `ban members` permission.');
  const user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(" ").slice(1).join(" "));
  if (!user) return message.channel.send('you were missing at least a mention/id');
  if (user.permissions.has('ADMINISTRATOR') || user.roles.highest.hoist) return message.channel.send("you can't ban an admin or highest role")
  if (user === message.author.id) return message.channel.send("you can't ban yourself nerd")
  const reason = message.content.split(" ").slice(3).join(" ") || "no reason provided";
  const time = Number(message.content.split(" ").slice(2)) || 0;
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
