const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Louietwitch extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'xdeciph16',
                alias: [],
                group: 'twitch',
                memberName: 'louietwitch',
                description: 'The official twitch channel of the resident CHEL sweat.',
                details: 'Go drop a follow for the almighty louie'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[6].twitch)
    }
}