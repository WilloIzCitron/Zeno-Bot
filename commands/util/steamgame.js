const sgb = require("steam-game-browser");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let param = args[0];
  let steamgame = message.content.split(" ").slice(2).join(" ");
  if(param != "name" && param != "id") return message.channel.send("Invalid parameter");
  // Search a game by name
  if ((param === "name")) {
    if (!steamgame) return message.channel.send("Please provide a game name/id!");
    sgb.searchByName(steamgame, (err, data) => {
      if (err) return message.channel.send(err); // If the game isn't found or you didn't add a string
      if (data == null)
        return message.channel.send("the game is currently not available/sale");
      embed = new Discord.MessageEmbed()
        .setTitle(data.name)
        .setURL(data.url)
        .setDescription(data.short_description)
        .setImage(data.header_image)
        .addField("Developer", data.developers[0], true)
        .addField("Publisher", data.publishers[0], true);
      embed.addField(
        "Price",
        data.is_free
          ? `[Free](https://store.steampowered.com/app/${data.steam_appid})`
          : "[" +
              data.price_overview.final_formatted +
              "](https://store.steampowered.com/app/" +
              data.steam_appid +
              ")",
        true
      );
      message.channel.send({ embeds: [embed] });
    });
  } 
  if ((param === "id")) {
    if (!steamgame) return message.channel.send("Please provide a game name/id!");
    sgb.searchById(steamgame, (err, data) => {
      if (err) return message.channel.send(err); // If the game isn't found or you didn't add a string
      if (data == null)
        return message.channel.send("the game is currently not available/sale");
      embed = new Discord.MessageEmbed()
        .setTitle(data.name)
        .setURL(data.url)
        .setDescription(data.short_description)
        .setImage(data.header_image)
        .addField("Developer", data.developers[0], true)
        .addField("Publisher", data.publishers[0], true);
      embed.addField(
        "Price",
        data.is_free
          ? `[Free](https://store.steampowered.com/app/${data.steam_appid})`
          : "[" +
              data.price_overview.final_formatted +
              "](https://store.steampowered.com/app/" +
              data.steam_appid +
              ")",
        true
      );
      message.channel.send({ embeds: [embed] });
    });
  }
};

exports.help = {
  name: "steamgame",
  description: "fine steam game by name and by id",
  usage: "zen!steamgame <name/id> <game name>",
  example: "zen!steamgame <name> Factorio",
  api: "api.steampowered.com/ISteamApps/GetAppList/v2",
};

exports.conf = {
  aliases: [],
  cooldown: 3,
};
