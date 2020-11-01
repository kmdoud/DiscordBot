const commando = require('discord.js-commando')

module.exports =class BotReset extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'reset',
                group: 'misc',
                description: 'Set the Bots status',
                details: 'Change the status of the bot',
                memberName: 'reset',
                userPermissions: ['ADMINISTRATOR']
            })
    }

    async run()
    {
        const content = 'helper, type !commands'
        this.client.user.setPresence
        ({
            activity: 
            {
                name: content,
                type: 0,
            },
        })
    }
}