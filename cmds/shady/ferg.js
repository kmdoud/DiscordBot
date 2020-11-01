const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class FergCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'ferg',
                alias: [],
                group: 'shady',
                memberName: 'ferg',
                description: 'The resident AFK master.',
                details: 'Shady Ferg Bio'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[2].bio)
    }
}