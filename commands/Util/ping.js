const Discord = require('discord.js')
const ms = require('ms');
const date = require('date')
const moment = require('moment')

module.exports = {
    name: "ping",
    run: async (client, message, args) => {

     const embed = new Discord.MessageEmbed()
     .setTitle('Pinging')

     const embed2 = new Discord.MessageEmbed()
     .setTitle('Pong')
     .setColor(`#74ab84`)
     .addFields(
         {
             name: "Latency",
             value: `${Date.now() - message.createdTimestamp}ms`,
             inline: false
         },
         {
             name: "API Latency",
             value: `${Math.round(client.ws.ping)}ms`,
             inline: false
         },
         {
             name: "Servers", value: `${client.guilds.cache.map(g=>g.name).join('\n')}`, inline: true
         } 
     )
     .setTimestamp()
     .setFooter(client.user.tag, client.user.displayAvatarURL());

     message.channel.send(embed).then(message => {

     setTimeout(function() {
        
            message.edit(embed2)
        })
    }, 5000);


     message.react( "🏓" )
    }

}