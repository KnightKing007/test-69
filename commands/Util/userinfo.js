const Discord = require('discord.js');

module.exports = {
    name: "userinfo",
    Description: "sends the Users Info",
    async run (client, message, args,) {
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      
      let status;
        switch (user.presence.status) {
            case "online":
                status = "<:Online:850337096878522411> online";
                break;
            case "dnd":
                status = "<:DND:850337101912211496> dnd";
                break;
            case "idle":
                status = "<:idle:850337100238290994> idle";
                break;
            case "offline":
                status = "<:offline:850337097377382410> offline";
                break;
        }
      const userinfo = new Discord.MessageEmbed()
      .setTitle(`${user.user.username} stats`)
      .setColor(`#f3f3f3`)
      .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
      .addFields(
          {
              name: "Name: ",
              value: user.user.username,
              inline: true
          },
          {
              name: "#️⃣ Discriminator: ",
              value: `#${user.user.discriminator}`,
              inline: true
          },
          {
              name: "🆔 ID: ",
              value: user.user.id,
          },
          {
              name: "Current Status: ",
              value: status,
              inline: true
          },
          {
              name: "Activity: ",
              value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
              inline: true
          },
          {
              name: 'Avatar link: ',
              value: `[Click Here](${user.user.displayAvatarURL()})`
          },
          {
              name: 'Creation Date: ',
              value: user.user.createdAt.toLocaleDateString("en-us"),
              inline: true
          },
          {
              name: 'Joined Date: ',
              value: user.joinedAt.toLocaleDateString("en-us"),
              inline: true
          },
          {
              name: 'User Roles: ',
              value: user.roles.cache.map(role => role.toString()).join(" ,"),
              inline: false
          }
      )
      await message.channel.send(userinfo);
    }

     
}