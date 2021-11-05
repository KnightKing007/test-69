const Discord = require('discord.js')

module.exports = {
    name: 'random',
    description: 'random?',
    async run (client, message, args,) {     
                        
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        function rand() {
            let string; //to get the value at the end
            for(string = ` `; string.length < (10); string += characters[Math.floor(Math.random() * characters.length)]);
            return string;
            }  

             random = new Discord.MessageEmbed()
            .addFields({name: "Your Randomly Generated Password ", value: `\`${rand().slice(1)}\`` },)
            .setColor(`RANDOM`)

            message.channel.send(random); //will return letters between a-i     
    }
}