const Discord = require('discord.js')
const { description } = require('../music/Leave')

module.exports = {
    name: "help",
    Description: "sends the help command",
    async run (client, message, args,) {

        const help = new Discord.MessageEmbed()
        .setTitle(' Here are some commands you can use!')
        .setColor(`RANDOM`)
        .addFields(
            { name: "Moderation", value: "`Ban | Unban | kick | Warn | Warnings | reset-Warnings | Purge | Snipe ` ",},
            { name: "Music", value: "`Play | Leave |` ~~skip, Queue~~",},
            { name: "Utility", value: "`Eval Ping | Userinfo `",},
        )

        await message.reply(help)
    }
}