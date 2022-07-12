const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class fortnite extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'fortnite',
                aliases: ['fortassembly', 'forttime'],
                group: 'assembly',
                memberName: 'fortnite',
                description: 'Notifies all members that someone wants to play Fortnite',
                details: 'Sends a notification to all members of the server that someone wants to play NHL and to join in.',
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Assembly.fortnite)
    }
}