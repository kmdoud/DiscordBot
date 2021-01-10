const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Duds extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'duds',
                alias: ['dudley'],
                group: 'shady',
                memberName: 'duds',
                description: 'The resident swine slayer.',
                details: 'Shady Duds Bio'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[1].bio)
    }
}