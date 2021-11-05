const Discord = require('discord.js');

module.exports = {
    name: "server",
    Description: "sends the Users Info",
    async run (client, message, args,) { 
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const guild = client.guilds.cache.get("770653517370228776");


        console.log(`guild : ${guild}`);
        console.log(`guild.owner : ${guild.owner}`);
        console.log(`guild.channels : ${guild.channels}`);
        console.log(`guild.roles : ${guild.roles}`);

        console.log(`guild.channels : ${guild.channels}`);
        console.log(`guild.roles : ${guild.roles}`);
        console.log(`guild.channels.size : ${guild.channels.size}`);
        console.log(`guild.roles.size : ${guild.roles.size}`);

        const userinfo = new Discord.MessageEmbed()

      .setTitle(`${guild.name} Info`)
      .setColor(`#f3f3f3`)
      .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
      .addFields(
          {
              name: "Server Owner ",
              value: `${guild.owner.user.username}#${guild.owner.user.discriminator}`,
              inline: true
          },
          {
              name: "Channels",
              value: `${guild.channels.size}`,
              inline: true
          },
          {
              name: "Roles ",
              value: guild.roles.size,
          },
        //    {
        //      name: "Current Status: ",
        //      value: status,
        //      inline: true
        //  },
        //   {
        //       name: "Activity: ",
        //       value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
        //       inline: true
        //   },
        //   {
        //       name: 'Avatar link: ',
        //       value: `[Click Here](${user.user.displayAvatarURL()})`
        //   },
        //   {
        //       name: 'Creation Date: ',
        //       value: user.user.createdAt.toLocaleDateString("en-us"),
        //       inline: true
        //   },
        //   {
        //       name: 'Joined Date: ',
        //       value: user.joinedAt.toLocaleDateString("en-us"),
        //       inline: true
        //   },
        //   {
        //       name: 'User Roles: ',
        //       value: user.roles.cache.map(role => role.toString()).join(" ,"),
        //       inline: false
        //   }
      )
      await message.channel.send(userinfo);
    }

     
}