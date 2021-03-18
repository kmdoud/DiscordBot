const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class KenshinBuild extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'kenshin-build',
                alias: ['build', 'setup'],
                group: 'builds',
                memberName: 'kenshin-build',
                description: 'Current setup as of 03/18/21',
                details: 'Here are the major components of my pc build'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[4].build)
    }
}