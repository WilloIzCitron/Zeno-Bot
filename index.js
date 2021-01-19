const bot_modules = require("./bot_modules/bot_modules.js");
const DBL = require("dblapi.js");
const Database = require("@replit/database")
const db = new Database()
const client = new bot_modules({ fetchAllMembers: true });
const dblclient = new DBL(process.env.DBLTOKEN, client);
require("./bot_modules/modules.js")(client);
require("./bot_modules/events.js")(client);
const express = require("express");
const path = require("path");
const app = express();
const Discord = require("discord.js");
require("./bot_modules/replymodule.js")

const webhook = require("webhook-discord");
 
const Hook = new webhook.Webhook(process.env.WEBHOOK);
 
const exitmsg = new webhook.MessageBuilder()
                .setName("Zeno Bot")
                .setColor("#FF0000")
                .setText("Zeno bot has been restarted!");



client.package = require("./package.json");
client.nodefetch = require("node-superfetch");
client.fetch = require("node-fetch");
client.on("warn", console.warn);
client.on("error", console.error);
client.login(process.env.TOKEN);

dblclient.on('posted', () => {
  console.log('Server count posted!');
});

dblclient.on('error', e => {
 console.log(`Oops! ${e}`);
});

process.on('exit', (code) => {
  Hook.send(exitmsg);
  console.log(code)
});

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(3000);