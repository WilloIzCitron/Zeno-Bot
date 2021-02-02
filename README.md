# Zeno bot
<center>
 
[![Discord Bots](https://top.gg/api/widget/status/784224401545101344.svg)](https://top.gg/bot/784224401545101344)[![Discord Bots](https://top.gg/api/widget/servers/784224401545101344.svg)](https://top.gg/bot/784224401545101344) [![Discord Bots](https://top.gg/api/widget/owner/784224401545101344.svg)](https://top.gg/bot/784224401545101344) [![Discord Bots](https://top.gg/api/widget/upvotes/784224401545101344.svg)](https://top.gg/bot/784224401545101344)

<img class="fit-picture"
     src="https://cdn.discordapp.com/avatars/784224401545101344/e53e85d57afba36e309b5ec3e94434e9.png?size=1024"
     alt="Zeno bot" width="250" height="250">
</center>

## About

Zeno Bot is a bot made in Indonesia, Zeno Bot is taken from [ZenoBot by ListPremier](https://www.zenobot.com/), zeno bot has More commands and develop more command and more,  Zenobot has more features, its is Image gen, moderation and more. and adding more api if you want. support a developer for new commands and category, and invite Zeno Bot for enjoyments

## Setting Up
### Environment configuration
```env
TOKEN=<your token>
DBLTOKEN=<Discord bot list token> //its used for server count
WEbHOOK=<webhook discord> //its used for status
```
### JSON Based Configuration
```json
{
    "developers": ["<your bot developer its array>"],
    "prefix": "<your prefix>",
    "Maintenance": false
}
```
## Additional Content
for additional content its event or command
### Command
```js
exports.run = async (client, message, args) => {
//your code here
  
}

exports.help = {
  name: "", //Command Name
  description: "", // Command Description
  usage: "",// Usage of this command
  example: "",// example of command usage
  api: ""// API Used on this command
}

exports.conf = {
  aliases: [],// command aliases
  cooldown: 3 // command cooldown
}
```
and command for pull request and feature request

### Event
```js
var currentdate = new Date(); 

const Discord = require("discord.js");
module.exports = (client, message) => {

};
```
## Got Bug? and Want To Request?
bug report and feature request in Github and i added on [Trello](https://trello.com/b/ZmaGAwz3/zeno-bot)
