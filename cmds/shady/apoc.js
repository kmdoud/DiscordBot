const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class ApocCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'apoc',
                alias: ['sarich', 'apocalicadic'],
                group: 'shady',
                memberName: 'apoc',
                description: 'The resident APEX sweat.',
                details: 'Shady Apoc Bio'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[0].bio)
    }
}