const fs = require('fs');
// const command = require(`./commands/${folder}/${file}`);

module.exports = (client, Discord ) =>{

const commandFolders = fs.readdirSync('../commands');
console.log("Folders are :" , commandFolders);

for (const folder of commandFolders) {
    console.log("The folder is", folder);
    const commandFiles = fs.readdirSync(`../commands/${folder}`).filter(file => file.endsWith('.js'));
    console.log("The command files are", commandFiles);
    for (const file of commandFiles) {
        console.log("The file is", file);
        const command = require(`../commands/${folder}/${file}`);
        console.log("Command is :", command);
        const {name} = command;
        console.log("Name of command is :", name);
        client.commands.set(name, command);
    }
  }
}
//     const command_files = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));

//     for (const file of command_files) {
//         const command = require(`./commands/${folder}/${file}`);
//         if(command.name){
//          client.commands.set(command.name, command);
//         } else {
//             continue;
//         }
//     }
// }
