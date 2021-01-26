exports.run = async (client, message, args) => {
message.channel.send("Restarting.....").then( msg => {
    setTimeout(function(){
             msg.edit("Restarted!, im online back soon:tm:");
          }, 10000);
          }).then(client.destroy()).then(client.login(process.env.TOKEN))
}

exports.help = {
  name: "reset",
  description: "reset a bot",
  usage: "",
  example: "",
  api: ""
}

exports.conf = {
  aliases: ['kill', 'exit'],
  cooldown: 3
}