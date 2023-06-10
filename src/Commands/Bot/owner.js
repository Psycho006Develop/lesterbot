const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Psycho006`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</Psycho006>#6950`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Psycho006`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://github.com/Psycho006Develop](https://github.com/Psycho006Develop)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 