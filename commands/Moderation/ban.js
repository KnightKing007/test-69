const discord = require('discord.js')
const { Description } = require('../Util/help')

module.exports = {
    name: "Ban",
    Description: "Bans a member",
    async run (client, messages, args,){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.Ban();
            message.channel.send("${<@member.id>} Has been Ban");
        }else{
            message.channel.send('Could not kick the specified user pog¯\_(ツ)_/¯ ')
        }
    }

}