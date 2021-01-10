const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Codetk extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'codetk',
                alias: ['code', 'faded'],
                group: 'twitch',
                memberName: 'codetk',
                description: 'The official twitch channel of the FEARLESS leader of the Shady Plebs.',
                details: 'You can call me codeORkenshin'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[4].twitch)
    }
}