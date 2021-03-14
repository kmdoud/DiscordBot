const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Kugestwitch extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'kuges814',
                alias: [],
                group: 'twitch',
                memberName: 'kugestwitch',
                description: 'The official twitch channel of the resident Destiny Guru.',
                details: 'Go drop a follow for the Shady Kuges'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[5].twitch)
    }
}