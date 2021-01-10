const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Sieve extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'sieve',
                alias: [],
                group: 'shady',
                memberName: 'sieve',
                description: 'The resident MUNEH chaser.',
                details: 'Shady Sieve Bio'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[7].bio)
    }
}