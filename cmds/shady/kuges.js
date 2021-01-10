const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Kuges extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'kuges',
                alias: [],
                group: 'shady',
                memberName: 'kuges',
                description: 'The resident Destiny Guru.',
                details: 'Shady Kuges Bio'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[5].bio)
    }
}