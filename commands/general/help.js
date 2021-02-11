const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = client.config.prefix;

  if (!args[0]) {
    let module = client.helps.array();

    if (!client.config.developers.includes(message.author.id))
      module = client.helps.array().filter(x => !x.hide);
    const embed = new Discord.MessageEmbed()
      .setColor(0x1d1d1d)
      .setTimestamp(new Date())
      .setDescription(
        `Using \`${prefix}help [command]\` to get more specific information about a command.`
      )
      .setAuthor(`${client.user.tag} Help`, client.user.avatarURL());
    for (const mod of module)
      embed.addField(`${mod.name}`, mod.cmds.map(x => `\`${x}\``).join(" , "));

    return message.channel.send(embed);
  }
  let cmd = args[0]
  if (
    client.commands.has(cmd) ||
    client.commands.get(client.aliases.get(cmd))
  ) {
    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    let name = command.help.name;
    let desc = command.help.description;
    let cooldown = command.conf.cooldown + " seconds";
    let aliases = command.conf.aliases.join(", ") || "There are no aliases for this command.";
    let usage = command.help.usage || "There are no usage for this command.";
    let example = command.help.example || "There are no examples for this command.";
    let usingapi = command.help.api || "There are no APIs used by this command."
    let embed = new Discord.MessageEmbed()
      .setColor(0x7289da)
      .setTitle(name)
      .setDescription(desc)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
        "[] means optional, <> means required. Don't include these while typing a command."
      )
      .addField("Cooldown", cooldown)
      .addField("Aliases", aliases, true)
      .addField("Usage", usage, true)
      .addField("Example Usage", example, true)
      .addField("API", usingapi, true)
    return message.channel.send(embed);
  }
  return message.channel.send("I can't find the command you're looking for, perhaps you did a typo?");
};

exports.help = {
  name: "help",
  description: "command list with information.",
  usage: "help [command]",
  example: "help ping",
  api: ""
};

exports.conf = {
  aliases: ["?", "h"],
  cooldown: 3
};
