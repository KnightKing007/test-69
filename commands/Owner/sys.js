const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'sys',
    description: 'random?',
    async run (client, message, args,) { 

        const ToTalSeconds = (client.uptime / 1000);
        const Days = Math.floor(ToTalSeconds / 86400);
        const Hours = Math.floor(ToTalSeconds / 3600);
        const Minutes = Math.floor(ToTalSeconds / 60);
        const Seconds = Math.floor(ToTalSeconds % 60);
        const Uptime = `${Days} Days, ${Hours} Hours, ${Minutes} Minutes & ${Seconds} Seconds`;
        const MemoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
        const RamUsed = Math.round(process.cpuUsage().system) / 1024;
        const RamUsage = Math.trunc(RamUsed);
        const BotPlatform = process.platform;
        const MemoryUsed = Math.trunc(MemoryUsage);
        const Os = require('os');
        const OsHostName = Os.hostname();
        const SystemPing = Math.round(client.ws.ping);
        const embed = new Discord.MessageEmbed()
            .setColor('#b700ff')
            .setTitle("Bot's Live Status")
            .addField(" \u200B ", "**Bot Uptime** : ` " + `${Uptime}` + " `")
            .addField(" \u200B ", "** Bot's Hot Name** :  ` " + OsHostName + " `")

            .addField(" \u200B ", "**CPU Usage** :  ` " + RamUsage + "Mb `")
            .addField(" \u200B ", "**Memory Usage** :  ` " + MemoryUsed + "Mb `")
            .addField(" \u200B ", "**Bot Platform** :  ` " + BotPlatform + " `")
            .addField(" \u200B ", "**System Ping** :  ` " + SystemPing + " `")
            .addField(" \u200B ", "**Channels** : ` " + `${client.channels.cache.size}` + " `")
            .addField(" \u200B ", "**Servers** : ` " + `${client.guilds.cache.size}` + " `")
            .addField(" \u200B ", "**Users** : ` " + `${client.users.cache.size}` + " `")
        message.channel.send(embed);
    }
}