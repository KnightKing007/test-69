const Discord = require('discord.js')

module.exports = {
    name: "invite",
    alias: "inv",
    Description: "Sends Bot Invite",
    async run (client, message, args,) {

        const help = new Discord.MessageEmbed()
        .setTitle('here is the Invite link')
        .setColor(`RANDOM`)
        .setDescription(`[Click-Here](https://discord.com/oauth2/authorize?client_id=736129026669674557&scope=bot&permissions=8) to invite me!`)
        //.setDescription(`[Click-Here](${process.env.INVITE}) to invite me!`)

        //.addField("Title here, no hyperlinks allowed", "Main text here, so you can put a hyperlink here [like so.](https://example.com)");
        
        

        await message.channel.send(help)
    }
}

//https://discord.com/oauth2/authorize?client_id=736129026669674557&scope=bot&permissions=8