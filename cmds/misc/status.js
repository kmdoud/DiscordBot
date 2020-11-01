const commando = require('discord.js-commando')

module.exports =class BotStatus extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'status',
                group: 'misc',
                description: 'Set the Bots status',
                details: 'Change the status of the bot',
                memberName: 'status',
                userPermissions: ['ADMINISTRATOR']
            })
    }

    async run(message, args)
    {
        const content = args
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