const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class FergTwitch extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'shady_ferg',
                alias: [],
                group: 'twitch',
                memberName: 'fergtwtich',
                description: 'Direct link to the twitch channel of Ferg',
                details: 'Come drop a follow on the Ferg'
            })
    }

    async run(message, args)
    {
        message.channel.send(json.Users[2].twitch)
    }
}