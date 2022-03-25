exports.run = async (client, message, args) => {
    const option = (args[0] === 'true');
    const name = message.content.split(" ").slice(2).join(" ")
    if (!message.member.permissions.has('MANAGE_THREADS')) return message.channel.send('you\'re missing the `manage threads` permission.');
    //console.log(option)
    //console.log(name)
    const thread = message.channel.threads.cache.find(x => x.name === name);
    await thread.setArchived(option);
    message.channel.send(`Thread ${thread.name} is ${thread.archived ? 'archived' : 'active'}`)
}


exports.help = {
    name: "archivethread",
    description: "archive a message thread",
    usage: "archivethread <option> <name>",
    example: "archivethread true lol",
    api: ""
}

exports.conf = {
    aliases: [],
    cooldown: 3
}