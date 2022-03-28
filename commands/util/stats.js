const si = require('systeminformation');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
function bytesTogGigaBytes(bytes) { 
  const gigs = (bytes / 1073741824).toFixed(2); 
}
    
 const cpu = await si.cpu();
 const os = await si.osInfo();
 const versions = await si.versions();
 const freeRam = await si.mem();
 const totalRam = await si.mem();
 const usedRam = await si.mem();

    const embed = new Discord.MessageEmbed()
    .setTitle('Stats')
    .setColor(0x1d1d1d)
    .addField("CPU", `${cpu.manufacturer} ${cpu.brand} ${cpu.speed}GHz\n`)
    .addField("Cores", `${cpu.cores} (${cpu.physicalCores} Physical)\n`)
    .addField("OS", `${os.distro} ${os.codename} (${os.platform})\n`)
    .addField("RAM", `Total: ${bytesToGigabytes(totalRam.total)} GB\nFree: ${bytesToGigabytes(freeRam.free)} GB\nUsed: ${bytesToGigabytes(usedRam.used)} GB`)
    .addField("Kernel", `${os.kernel} ${os.arch}\n`)
    .addField("Bot", +client.commands.size +" commands \n" +client.users.cache.size +" users | \n" +client.guilds.cache.size +" guilds | \n" +client.channels.cache.size +" channels")
    .addField("Version", `Node: v${versions.node}\n Discord.JS: v${Discord.version}`)
    .addField("Owner", client.users.cache.find(x => x.id === client.config.developers.toString()).tag)
    message.channel.send({ embeds: [embed] })
  
}

exports.help = {
  name: "stats",
  description: "see a bot stats",
  usage: "stats",
  example: ""
}

exports.conf = {
  aliases: ["s"],
  cooldown: 3
}
