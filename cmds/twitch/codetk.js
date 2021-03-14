const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Codetk extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'codetk',
                alias: ['codetwitch', 'codetk'],
                group: 'twitch',
                memberName: 'twitch',
                description: 'Link to kenshins twitch channel',
                details: 'The affiliate kenshins twitch channel'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.code)
    }
}