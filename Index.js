const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '+';
require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


//command handler
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})
 

client.login(process.env.token);