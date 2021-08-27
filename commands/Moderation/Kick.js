const discord = require('discord.js')
const { Description } = require('../Util/help')

module.exports = {
    name: "Kick",
    Description: "Kicks a member",
    async run (client, messages, args,){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("${<@member.id>} Has been Kicked");
        }else{
            message.channel.send('Could not kick the specified user pog¯\_(ツ)_/¯ ')
        }
    }

}