require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '+';
 
const fs = require('fs');
const { type } = require('os');
 
client.commands = new Discord.Collection();
 
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}
client.on('ready', () => {
  console.log(` ${client.user.tag}  is Online! `);
	client.user.setActivity(' +help', { type: "LISTENING" })
});


client.on('message', async message => {
	let prefix = '+'
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandFolders = args.shift().toLowerCase();
	if (!client.commands.has(commandFolders)) return;

try {
	client.commands.get(commandFolders).run(client, message, args,);
} catch (error) {
	console.error(error);
	message.reply('Error 69 could not run that command :thinking:');
}
})


 




    client.login(process.env.token);