//client.guilds.cache.map(g=>g.name).join('\n')

const Discord = require('discord.js');



module.exports = {
    name: "server2",
    alias: "sl",
    Description: "Sends Bot Invite",
    async run (client, message, args,) {

        const owners = [   
            "603614402964357131",
        "824986284480397373"
        ]
        let msg = message.author.id
        if(!owners.includes(msg)) {
        message.channel.send('you cannot use this command!!');
        return;
        
        }console.log(msg)

        const help = new Discord.MessageEmbed()
        .setTitle('Here is a List of servers')
        .setColor(`RANDOM`)
        .addFields({ name: "the bot is in", value: `${client.guilds.cache.map(g=>g.name).join('\n')}`})

        message.reply (help)
    
    }
}