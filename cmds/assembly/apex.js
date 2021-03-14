const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class ApexAssembly extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'apex',
                aliases: ['apexassembly', 'apextime'],
                group: 'assembly',
                memberName: 'apex',
                description: 'Notifies users that a member is playing Apex Legends',
                details: 'Sends a message to the entire server that a member is seeing if anyone else wants to play Apex Legends',

            })
    }

    async run(message, args)
    {
        message.channel.send(json.apexAssembly)
    }
}