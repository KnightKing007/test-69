const discord = require('discord.js')


module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    async run (client, message, args,){

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')
        

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        if(!member) return message.reply("provide a user to kick")
        if(member.id === message.member.id) return message.channel.send('You cannot Kick yourself ¯\\_(ツ)_/¯');
        if(!member.kickable) return message.channel.send('could not kick that user');
 
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send(` <@${member.id}> Has been Kicked`);
        }else{
            message.channel.send('Could not kick the specified user ¯\\_(ツ)_/¯ ')
        }
        
        
        
    }
}