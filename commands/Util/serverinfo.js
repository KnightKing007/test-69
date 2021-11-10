const Discord = require('discord.js');

const moment = require('moment');

const filterLevels = {
    DISABLED: 'Off',
    MEMBERS_WITHOUT_ROLES: 'No Role',
    ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°）╯︵ ┻━┻',
    VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};

module.exports = {
    name: "server",
    Description: "sends the Users Info",
    async run (client, message, args,) { 
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;

        const embed = new Discord.MessageEmbed()
            .setDescription(`**Server Info**`)
            .setColor('BLACK')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addField('General', [
                `**Name:** ${message.guild.name}`,
                `**ID:** ${message.guild.id}`,
                `**Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
                `**Region:** ${regions[message.guild.region]}`,
                `**Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
                `**Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
                `**Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,
                `**Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`,
                '\u200b'
            ])
            .addField('Statistics', [
                `**Role Count:** ${roles.length}`,
                `**Emoji Count:** ${emojis.size}`,
                `**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
                `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
                `**Member Count:** ${message.guild.memberCount}`,
                `**Humans:** ${members.filter(member => !member.user.bot).size}`,
                `**Bots:** ${members.filter(member => member.user.bot).size}`,
                `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
                `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
                `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
                '\u200b'
            ])
            .addField('Presence', [
                `**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
                `**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
                `**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
                `**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
                '\u200b'
            ])
            .addField(`Roles [${roles.length - 1}]`, roles.join(', '))
    
            .setTimestamp();
        message.channel.send(embed);
    }

}



// module.exports = {
//     name: "server",
//     Description: "sends the Users Info",
//     async run (client, message, args,) { 
        
//         let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
//         const guild = client.guilds.cache.get("770653517370228776");


//         console.log(`guild : ${guild}`);
//         console.log(`guild.owner : ${guild.owner}`);
//         console.log(`guild.channels : ${guild.channels}`);
//         console.log(`guild.roles : ${guild.roles}`);

//         console.log(`guild.channels : ${guild.channels}`);
//         console.log(`guild.roles : ${guild.roles}`);
//         console.log(`guild.channels.size : ${guild.channels.size}`);
//         console.log(`guild.roles.size : ${guild.roles.size}`);

//         const role = client.guilds.cache.map(guild => guild.roles.cache.size)

//         const userinfo = new Discord.MessageEmbed()
      

//       .setTitle(`${guild.name} Info`)
//       .setColor(`#f3f3f3`)
//       .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
//       .addFields(
//           {
//               name: "Server Owner ",
//               value: `${guild.owner.user.username}#${guild.owner.user.discriminator}`,
//               inline: true
//           },
//           {
//               name: "Channels",
//               value: `${guild.channels.size}`,
//               inline: true
//           },
//           {
//               name: "Roles ",
//               value: role,
//           },
//         //    {
//         //      name: "Current Status: ",
//         //      value: status,
//         //      inline: true
//         //  },
//         //   {
//         //       name: "Activity: ",
//         //       value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
//         //       inline: true
//         //   },
//         //   {
//         //       name: 'Avatar link: ',
//         //       value: `[Click Here](${user.user.displayAvatarURL()})`
//         //   },
//         //   {
//         //       name: 'Creation Date: ',
//         //       value: user.user.createdAt.toLocaleDateString("en-us"),
//         //       inline: true
//         //   },
//         //   {
//         //       name: 'Joined Date: ',
//         //       value: user.joinedAt.toLocaleDateString("en-us"),
//         //       inline: true
//         //   },
//         //   {
//         //       name: 'User Roles: ',
//         //       value: user.roles.cache.map(role => role.toString()).join(" ,"),
//         //       inline: false
//         //   }
//       )
//       await message.channel.send(userinfo);
//     }

     
// }