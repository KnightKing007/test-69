const Discord = require('discord.js')
const ms = require('ms');
const date = require('date')
const moment = require('moment')

module.exports = {
    name: "ping",
    run: async (client, message, args) => {

     const embed = new Discord.MessageEmbed()
     .setTitle('Pong')
     .setColor('RANDOM')
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
     )
     .setTimestamp()
     .setFooter(client.user.tag, client.user.displayAvatarURL());
     message.channel.send(embed)
     message.react( "🏓" )
    }

}