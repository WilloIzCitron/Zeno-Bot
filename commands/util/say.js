
exports.run = async (client, message, args) => {
  const text = message.content.split(" ").slice(1).join(" ") || "please add a text";
  if (text.includes("--reply")) {
    return message.reply(text.replace(/\-\-reply/g, ""))
  } else if (text.includes("--dm")) {
    return message.author.send(text.replace(/\-\-dm/g, ""))
  } else if (text.includes("--silent")) {
    message.delete()
    message.channel.send(text.replace(/\-\-silent/g, ""))
  } else
  return message.channel.send(text);
}

exports.help = {
  name: "say",
  description: "send a text command there is a parameter --reply to reply to the message, --dm to dm the user, --silent to send the message silently",
  usage: "say <arg> or say <arg> [parameters]",
  example: "say hey",
  api: ""
}

exports.conf = {
  aliases: ['echo'],
  cooldown: 3
}
