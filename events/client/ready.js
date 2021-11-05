module.exports = async (client) => {
    client.user.setActivity('Rebooting...', { type: 'STREAMING', url: "https://www.twitch.tv/knight_king22" });

    setTimeout(function() {
        client.user.setActivity(`${client.guilds.cache.size} guilds`, { type: 'WATCHING', });
    }, 8000);

    console.log(` ${client.user.tag}  is Online! `);
}