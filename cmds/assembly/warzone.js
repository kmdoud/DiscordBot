const commando = require('discord.js-commando')
const json = require('@root/appsettings');

module.exports = class Zone extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'zone',
                aliases: ['warzone', 'cod'],
                group: 'assembly',
                memberName: 'zone',
                description: 'Calling all plebs lets hit Verdansk',
                details: 'Sends a notice to all server members that someone is play CoD Warzone'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.zoneAssembly);
    }
}