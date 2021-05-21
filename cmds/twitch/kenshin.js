const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Codeorkenshin extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'spgkenshin',
                alias: ['code', 'faded'],
                group: 'twitch',
                memberName: 'spg_kenshin',
                description: 'The official twitch channel of the FEARLESS leader of the Shady Plebs.',
                details: 'You can call me kenshin'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[4].twitch)
    }
}