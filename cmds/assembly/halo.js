const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Halo extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'halo',
                aliases: ['spartans'],
                group: 'assembly',
                memberName: 'halo',
                description: 'Notifies all members that someone wants to play Halo Infinite',
                details: 'Sends a notification to all members of the server that someone wants to play NHL and to join in.',
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Assembly.halo)
    }
}