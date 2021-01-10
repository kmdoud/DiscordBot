const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Gemini extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'gemini',
                alias: [],
                group: 'shady',
                memberName: 'gemini',
                description: 'The resident optimist.',
                details: 'Gemini Blaze Bio'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[8].bio)
    }
}