const Database = require("discord-mongo-currency")
const people = ['Willo', 'Ying', 'Boboiboy', 'Yaya', 'Gopal', 'Adu Du', 'Probe', 'Ejo Jo', 'Fang', 'Imposter', 'Mythia Batford', 'Hans'];
const falsereq = ['no', 'eww disgusting', 'get out', 'yes ||but no||', 'begone beggers', 'go to begging jail \\*bonk*'];

exports.run = async (client, message, args) => {
    const member = message.member;
    let currency = "ZenoPoint";
        const rndPeople = people[Math.floor(Math.random() * people.length)];
        const rndBoolGive = Math.random() <= 0.5;
        const rndFalseReq = falsereq[Math.floor(Math.random() * falsereq.length)];
        const moneychance = Math.floor(Math.random() * 100) + 100;
        if (!rndBoolGive) return message.channel.send(`**${rndPeople}**: ${rndFalseReq}`);
        await Database.giveCoins(message.member.id, message.guild.id, moneychance);
        return message.channel.send(`**${rndPeople}**: donates ${moneychance} ${currency} to ${message.author.username}`)
}

exports.help = {
  name: "begging",
  description: "beg a money",
  usage: "",
  example: "",
  api: ""
}

exports.conf = {
  aliases: ['beg'],
  cooldown: 10
}
