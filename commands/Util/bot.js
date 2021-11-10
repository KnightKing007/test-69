const discord = require('discord.js');
const  {moment, utc } = require('moment')
const { prefix } = require("../../config.json")
const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('../../package.json');
const os = require('os');
const ms = require('ms');
const { formatBytes } = require("../../function.js")



module.exports = {
	name: "bot",
	description: "Gives Info about a user",
	async run (client, message, args,) {

        const core = os.cpus()[0];
		const embed = new MessageEmbed()
			.setThumbnail(client.user.displayAvatarURL())
            .setColor("RANDOM")
            .setTitle(`${client.user.username} Info`)
			.addField('General', [
				`**❯ Client:** ${client.user.tag} (${client.user.id})`,
				`**❯ Commands:** ${client.commands.size}`,
				`**❯ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
				`**❯ Prefix:** ${client.prefix} `,
				`**❯ Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
				`**❯ Channels:** ${client.channels.cache.size.toLocaleString()}`,
				`**❯ Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`**❯ Owner:** <@603614402964357131>`,
				`**❯ Node.js:** ${process.version}`,
				`**❯ Version:** v${version}`,
				`**❯ Discord.js:** v${djsversion}`,
				'\u200b'
			])
			.addField('System', [
				`**❯OS:** ${os.version} ${os.release}`,
				`**❯Type:** ${os.type()}`,
				`**❯ Platform:** ${process.platform}`,
				`**❯ Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
				`**❯ CPU:**`,
				`\u3000 Cores: ${os.cpus().length}`,
				`\u3000 Model: ${core.model}`,
				`\u3000 Speed: ${core.speed}MHz`,
				`**❯ Memory:**`,
				`\u3000 Total: ${formatBytes(process.memoryUsage().heapTotal)}`,
				`\u3000 Used: ${formatBytes(process.memoryUsage().heapUsed)}`
			])
			.setTimestamp();

		message.channel.send(embed);
        
  }
}