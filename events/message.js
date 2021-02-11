const Discord = require("discord.js"),
  cooldowns = new Discord.Collection(), db = require("@replit/database");

const db_client = new db();
module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type === "dm" || !message.content.startsWith(prefix)) return;
  let prefix = client.config.prefix;
  if (message.content === "zeno prefix" || message.content === `<@784224401545101344>`)
    return message.channel.send(
      `Hello, **${message.author.tag}**, My prefix on this server is \`${client.config.prefix}\``
    );

  if (
    client.config.Maintenance &&
    !client.config.developers.includes(message.author.id)
  )
    return message.channel.send({
      embed: {
        color: 0x1d1d1d,
        description: `**Maintenance**\nTo increase the stability of the bot.\nOn the moment our maintenance will turn off order access, and you cannot use it for a while because there is an unacceptable thing happens.\nMaintenance will take more than 24 hours!`
      }
    });

  let args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  let a = message.author;

  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }

  let commandFile =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (!commandFile) return;

  if (!cooldowns.has(commandFile.help.name))
    cooldowns.set(commandFile.help.name, new Discord.Collection());

  const member = message.member,
    now = Date.now(),
    timestamps = cooldowns.get(commandFile.help.name),
    cooldownAmount = (commandFile.conf.cooldown || 3) * 1000;

  if (!timestamps.has(member.id)) {
    if (!client.config.developers.includes(message.author.id)) {
      timestamps.set(member.id, now);
    }
  } else {
    const expirationTime = timestamps.get(member.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(
        `Please wait **${timeLeft.toFixed(
          1
        )}** seconds to try the command again.`
      );
    }

    timestamps.set(member.id, now);
    setTimeout(() => timestamps.delete(member.id), cooldownAmount);
  }

  try {
    if (!commandFile) return;
    commandFile.run(client, message, args);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(`${a.tag} (${a.id}) using a command: ${cmd} on ${message.guild.name} (${message.guild.id})`);
  }
};
