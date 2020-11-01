const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class KenshinCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'kenshin',
                alias: ['code', 'faded'],
                group: 'shady',
                memberName: 'kenshin',
                description: 'The FEARLESS leader of the Shady Plebs.',
                details: 'Shady Kenshin Bio'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[4].bio)
    }
}