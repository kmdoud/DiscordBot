const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class DeleteChannel extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'delchannel',
                aliases: ['deletechannel', 'delchannel'],
                group: 'moderation',
                memberName: 'delchannel',
                description: 'Delete a voice or text channel',
                details: 'With ADMINISTRATOR rights, a channel can be deleted from the server',
                clientPermissions: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
                userPermissions: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
            })
    }

    async run(message, args)
    {
        message.channel.delete()
    }
}