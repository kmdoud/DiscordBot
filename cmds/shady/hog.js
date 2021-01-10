const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Hog extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'hog',
                alias: [],
                group: 'shady',
                memberName: 'hog',
                description: 'The resident Warzone Gulag Champion.',
                details: 'Shady Hog Bio'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[3].bio)
    }
}