const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class Seaofthieves extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'ahoy',
                aliases: ['sotassembly', 'sottime'],
                group: 'assembly',
                memberName: 'seaofthieves',
                description: 'Notifies users that a member is playing Sea of Thieves',
                details: 'Sends a message to the entire server that a member is seeing if anyone else wants to play Sea of Thieves',

            })
    }

    async run(message, args)
    {
        message.channel.send(json.Assembly.ahoy)
    }
}