const bot_modules = require("./bot_modules/bot_modules.js");
require("dotenv").config({ path: '.env' })
const DBL = require("dblapi.js");
const client = new bot_modules({ fetchAllMembers: true, partials: ["CHANNEL"], intents: ["GUILDS", "GUILD_MESSAGES"] });
const dblclient = new DBL(process.env.DBLTOKEN, client);
require("./bot_modules/modules.js")(client);
require("./bot_modules/events.js")(client);
const mongoCurrency = require('discord-mongo-currency');
 
mongoCurrency.connect(`mongodb+srv://admin:${process.env.MONGODB_URI_PASS}@main.nohln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
const express = require("express");
const path = require("path");
const app = express();
const Discord = require("discord.js");
const axios = require("axios")

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

process.on('exit', function() {
});

app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});
app.listen(3000);
