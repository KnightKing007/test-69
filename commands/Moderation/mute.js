const ms = require('ms');

module.exports = {
    name: "mute",
    description: "this mutes a person",

    async run (client, message, args,){
        const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'hoomans');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);
            if(!memberTarget) return message.reply("provide a user to Mute")
            if(memberTarget.id === message.member.id) return message.reply('You cannot mute yourself ¯\\_(ツ)_/¯');

            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`@${memberTarget.user.id} Has been Muted Succesfully!!`);
                return
            }
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Has been Succesfully!! muted for ${ms(ms(args[1]))}`);
        
            setTimeout(function (){
                memberTarget.roles.remove(muteRole.id);
                
            }, ms(args[1]));
        } else {
            message.channel.send('User not found');
        }

        
    }
}