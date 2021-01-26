const Database = require("@replit/database")
const db = new Database()

exports.run = async (client, message, args) => {
    if(!db.get(`money_${message.author.id}`))return message.channel.send("You need a account")
    else{
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let people = ['Willo', 'Ying', 'Boboiboy', 'Yaya', 'Gopal', 'Adu Du', 'Probe', 'Ejo Jo', 'Fang']
        let rndPeople = people[Math.floor(Math.random() * people.length)];
        let boolgive = [true, false]
        let rndBoolGive = boolgive[Math.floor(Math.random() * boolgive.length)];
        let falsereq = ['no', 'eww disgusting', 'get out', 'yes ||but no||', 'begone beggers', 'go to begging jail \\*bonk*']
        let rndFalseReq = falsereq[Math.floor(Math.random() * falsereq.length)];
        let currentmoney = await db.get(`money_${message.author.id}`)
        let moneychance = getRndInteger(100, 200)
        if(rndBoolGive == false){
            message.channel.send(`**${rndPeople}**: ${rndFalseReq}`)
        }
        if(rndBoolGive == true){
            message.channel.send(`**${rndPeople}**: donates ${moneychance} to ${message.author.username}`)
            db.set(`money_${message.author.id}`, currentmoney + moneychance)
        }
    }
  
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