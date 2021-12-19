const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class ClearChannel extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'clearchannel',
                group: 'moderation',
                memberName: 'clearchannel',
                description: 'Remove all messages from a text channel',
                details: 'With the ADMINISTRATOR role, this command will remove all previous messages from a channel',
                clientPermissions: ['MANAGE_MESSAGES'],
                userPermissions: ['ADMINISTRATOR', 'MANAGE_MESSAGES'],
            })
    }

    async run(message)
    {
        message.channel.messages.fetch().then(results => 
        {
            message.channel.bulkDelete(results);
        })
    }
}