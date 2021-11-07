const Discord = require('discord.js');
const client = new Discord.Client();
console.log(client);

module.exports = (Discord, client, message) => {
//     const prefix = '+'
//     if(message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const cmd = args.shift().toLowerCase();

//     const command = client.commands.get(cmd);

//     if(command) command.execute(client, message, args, Discord)
// }

client.on('message', async message => {
	let prefix = '+'
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandFolders = args.shift().toLowerCase();
	if (!client.commands.has(commandFolders)) return;

try {
	client.commands.get(commandsFolders).run(client, message, args,);
} catch (error) {
	console.error(error);
	message.reply('Error 69 could not run that command :thinking:');
}
})
}