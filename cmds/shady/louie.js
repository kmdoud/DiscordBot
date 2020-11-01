const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class LouieCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'louie',
                alias: [],
                group: 'shady',
                memberName: 'louie',
                description: 'The resident CHEL sweat.',
                details: 'Xdeciph16 Bio'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[6].bio)
    }
}