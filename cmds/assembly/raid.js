const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Raid extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'raid',
                aliases: ['destiny', 'd2', 'd2raid'],
                group: 'assembly',
                memberName: 'raid',
                description: 'Assemble the Plebs, its time to RRAAAIIIDDDDD',
                details: 'Sends a message to all members of the server letting them know someone is playing Destiny',
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Assembly.raid)
    }
}