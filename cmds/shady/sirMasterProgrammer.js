const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class SirMasterProgrammer extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'sirmasterprogrammer',
                aliases: ['sir', 'butsir'],
                group: 'shady',
                memberName: 'sirmasterprogrammer',
                description: 'The Slou daddy doing programming things.',
                details: 'Just the sir showing off those coding skills',
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[6].SirMasterProgrammer)
    }
}