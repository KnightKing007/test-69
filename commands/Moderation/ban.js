const discord = require('discord.js')


module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    async run (client, message, args,){

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')
        

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        if(!member) return message.reply("provide a user to ban")
        if(member.id === message.author.id) return message.channel.send('You cannot ban yourself ¯\\_(ツ)_/¯');
        if(!member.bannable) return message.channel.send('could not ban that user');
 
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(` <@${member.id}> Has been banned`);
        }else{
            message.channel.send('Could not ban the specified user ¯\\_(ツ)_/¯ ')
        }
        
    }
     
}