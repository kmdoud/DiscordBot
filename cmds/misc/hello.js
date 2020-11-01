require('module-alias/register')
const commando = require('discord.js-commando');
const json = require('@root/appsettings')

module.exports = class HelloCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'hello',
                group: 'misc',
                memberName: 'hello',
                description: 'Simple response from the Bot for testing',
            })
    }

    async run(message, args)
    {
        message.reply(json.hello)
    }
}