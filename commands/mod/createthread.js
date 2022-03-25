
exports.run = async (client, message, args) => {
    const name = message.content.split(" ").slice(1).join(" ")
    if (!message.member.permissions.has('CREATE_PUBLIC_THREADS')) return message.channel.send('you\'re missing the `create public threads` permission.');
    if (!name) return message.channel.send("Thread name must be filled")
    const thread = await message.channel.threads.create({
        name: name,
        autoArchiveDuration: 60,
        reason: `Thread was created by ${message.author.tag}`,
    });
    thread.send(`Thread was created by ${message.author.tag}`)
}


exports.help = {
    name: "createthread",
    description: "creates a new thread",
    usage: "createthread <name>",
    example: "createthread public haha yes",
    api: ""
}

exports.conf = {
    aliases: [],
    cooldown: 3
}