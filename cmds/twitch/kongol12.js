const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Apoctwitch extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'kongol12',
                alias: ['apoctwitch'],
                group: 'twitch',
                memberName: 'kongol12',
                description: 'The twitch channel of apoc',
                details: 'Shady Apoc has his very own twitch channel, go check him out!'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[0].twitch)
    }
}