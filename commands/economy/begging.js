const Database = require("@replit/database")
const db = new Database()
const people = ['Willo', 'Ying', 'Boboiboy', 'Yaya', 'Gopal', 'Adu Du', 'Probe', 'Ejo Jo', 'Fang'];
const falsereq = ['no', 'eww disgusting', 'get out', 'yes ||but no||', 'begone beggers', 'go to begging jail \\*bonk*'];

exports.run = async (client, message, args) => {
    let match = await db.get(`money_${message.author.id}`)
    let currency = await db.get(`currency_${message.guild.id}`) || "ZenoPoint";
    if (match > 0 || match == 0)
    {
        const rndPeople = people[Math.floor(Math.random() * people.length)];
        const rndBoolGive = Math.random() <= 0.5;
        const rndFalseReq = falsereq[Math.floor(Math.random() * falsereq.length)];
        const currentmoney = await db.get(`money_${message.author.id}`)
        const moneychance = Math.floor(Math.random() * 100) + 100;
        if (!rndBoolGive) return message.channel.send(`**${rndPeople}**: ${rndFalseReq}`);
        db.set(`money_${message.author.id}`, currentmoney + moneychance
        return message.channel.send(`**${rndPeople}**: donates ${moneychance} ${currency} to ${message.author.username}`)
    }
    return message.channel.send("You need an account")
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
