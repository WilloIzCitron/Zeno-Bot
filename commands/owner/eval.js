const Discord = require("discord.js"),
  { post } = require("node-superfetch");
  
const { Type } = require('@sapphire/type');

exports.run = async (client, message, args) => {
  if (!client.config.developers.includes(message.author.id))
    return message.reply("Only **Developer** can use this command");
  const embed = new Discord.MessageEmbed().addField(
    "Input",
    "```js\n" + args.join(" ") + "```"
  );

  try {
    const code = args.join(" ");
    if (!code) return message.channel.send("Please provide a code.");
    let evaled;

    if (code.includes(`TOKEN`, `DBLTOKEN`, 'token', 'GOOGLE_API_KEY', 'WEBHOOK') || code.includes("process.env") || code.includes("client.token")) {
      evaled = "oh no";
    } else {
      evaled = eval(code);
    }

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled, { depth: 0 });

    let output = clean(evaled);
        mu = Date.now();
    if (output.length > 1024) {
      const { body } = await post("https://hastebin.com/documents").send(output);
      embed.addField("Output", `https://hastebin.com/${body.key}.js`)
        .setColor(0x7289da);
    } else {
      embed.addField("Output", "```js\n" + output + "```").setColor(0x7289da);
      embed.setFooter(`Return Type: ${typeof output} \n Return time: ${Date.now() - mu}mμ`)
    }

    message.channel.send({ embeds: [embed] });
  } catch (error) {
    let err = clean(error);
    if (err.length > 1024) {
      const { body } = await post("https://hastebin.com/documents").send(err);
      embed
        .addField("Output", `https://hastebin.com/${body.key}.js`)
        .setColor("RED");
    } else {
      embed.addField("Output", "```js\n" + err + "```").setColor("RED");
    type = new Type(err);
    embed.setFooter(`Error Type: ${type.toString()}`)
    }

    message.channel.send({ embeds: [embed] });
  }
};

exports.help = {
  name: "eval",
  description: "evaluate some code",
  usage: "eval <code>",
  example: "eval client.commands.size",
  api: ""
};

exports.conf = {
  aliases: ["e"],
  cooldown: 3
};

function clean(string) {
  if (typeof text === "string") {
    return string
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
    return string;
  }
}