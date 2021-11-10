const Discord = require('discord.js');
const fs = require("fs")
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
require('dotenv').config();
const prefix = '+';

const { type } = require('os');


 
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldowns = new Discord.Collection();

 
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}
// client.on('ready', () => {
//   console.log(` ${client.user.tag}  is Online! `);
//   client.user.setActivity(` ${prefix}help | Watching ${client.guilds.cache.size} servers`, { type: "LISTENING" })
// });

// Event handler
fs.readdir('./events/', (err, files) => {
    if (err) throw err
    for (const file of files) {
        if (!file.endsWith('.js')) continue;
        let event = require('./events/' + file);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve('./events/' + file)];
    }
});

client.on('message', async message => {
	let prefix = '+'
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/) || client.commands.find(a => a.aliases && a.aliases.includes(commandFolders));
	const commandFolders = args.shift().toLowerCase();

    const command = client.commands.get(commandFolders) ;

	if (!client.commands.has(commandFolders)) return;

try {
	client.commands.get(commandFolders).run(client, message, args,);
} catch (error) {
	console.error(error);
	message.reply('Error 69 could not run that command :thinking:');
}
})


 




    client.login(process.env.token);