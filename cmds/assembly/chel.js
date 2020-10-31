const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class ChelAssemblyCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'chel',
                aliases: ['chelassembly', 'cheltime'],
                group: 'assembly',
                memberName: 'chel',
                description: 'Notifies all members that someone wants to play NHL',
                details: 'Sends a notification to all members of the server that someone wants to play NHL and to join in.',
            })
    }

    async run(message, args)
    {
        message.channel.send(json.chelAssembly)
    }
}