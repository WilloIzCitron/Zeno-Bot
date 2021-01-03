const { exec } = require("child_process");
const { MessageEmbed } = require("discord.js");
const hastebin = require("hastebin-gen");
//
exports.run = (client, msg, args) => {
  if (!client.config.developers.includes(msg.author.id))
    return msg.reply("Only **Developer** can use this command");
  if (!args.join(" "))
    return args.missing(msg, "No code to execute. Try again", this.help);
  const mu = Date.now();
  const command = `\`\`\`bash\n${args.join(" ")}\`\`\``;
  const emb = new MessageEmbed()
    .setColor("#81FF00")
    .addField("📥 INPUT", command);
  exec(args.join(" "), async (error, stdout, stderr) => {
    if (stdout) {
      let output = `\`\`\`bash\n${stdout}\`\`\``;
      if (stdout.length > 1024) {
        output = await hastebin(stdout, { extension: "js"});
      }
      emb.addField("📤OUTPUT", output);
    } else if (stderr) {
      emb.setColor("#FF0000");
      let error = `\`\`\`bash\n${stderr}\`\`\``;
      if (stderr.length > 1024) {
        error = await client.util.hastebin(stderr);
      }
      emb.addField(":stop_sign:ERROR", error);
    } else {
      emb.addField(
        "📤OUPUT",
        "```bash\n# Command executed successfully but produced no output.```"
      );
    }
    return msg.channel.send(emb.setFooter(`⏱️ ${Date.now() - mu}mμ`));
  });
};

exports.conf = {
  aliases: ["$", "bash"],
  clientPerm: "",
  authorPerm: ""
};

exports.help = {
  name: "exec",
  description: "",
  usage: "exec <acode_to_exec>",
  example: ["exec ls"],
  api: ""
};
