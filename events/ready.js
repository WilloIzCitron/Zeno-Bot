const db = require("@replit/database");

const db_client = new db();
var currentdate = new Date(); 

const webhook = require("webhook-discord");
 
const Hook = new webhook.Webhook(process.env.WEBHOOK);

const readymsg = new webhook.MessageBuilder()
                .setName("Zeno Bot")
                .setColor("#00FF00")
                .setText("Zeno bot is online!");

const Discord = require("discord.js");
module.exports = (client, message) => {
  console.log(
    client.user.tag +
      " already operational, help with " +
      client.commands.size +
      " commands " +
      client.users.cache.size +
      " users | " +
      client.guilds.cache.size +
      " guilds | " +
      client.channels.cache.size +
      " channels"
  );

  client.user.setActivity(
    client.config.Maintenance ? "MAINTENANCE.." : `Zeno Base | ${+ currentdate.getFullYear() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getDay()} | ${client.config.prefix}`
  );
  Hook.send(readymsg)
};