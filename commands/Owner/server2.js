//client.guilds.cache.map(g=>g.name).join('\n')

const Discord = require('discord.js');

module.exports = {
    name: "server2",
    alias: "sl",
    Description: "Sends Bot Invite",
    async run (client, message, args,) {

        const help = new Discord.MessageEmbed()
        .setTitle('Here is a List of servers')
        .setColor(`RANDOM`)
        .addFields({ name: "the bot is in", value: `${client.guilds.cache.map(g=>g.name).join('\n')}`})
    
    }
}