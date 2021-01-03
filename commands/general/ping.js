const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.channel.send(`Pong! my latency is\`${client.ws.ping}\`ms`);
};
exports.help = {
  name: "ping",
  description: "check a bot latency",
  usage: "ping",
  example: "None",
  api: ""
};

exports.conf = {
  aliases: ["pong"],
  cooldown: 3
};