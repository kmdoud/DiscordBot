const commando = require('discord.js-commando');

module.exports = class Add extends commando.Command
{
    constructor(client)
    {
        super(client, 
            {
                name: 'add',
                aliases: ['addition', 'sum'],
                autoAliases: false,
                group: 'misc',
                memberName: 'add',
                description: 'Adds numbers together',
                details: 'This command serves as an example template for the complete format used by Commando and its commandInfo attributes',
                examples: ['!add 1 2'],
                guildOnly: false,
                ownerOnly: false,
                clientPermissions: ['VIEW_CHANNEL'],
                userPermissions: ['VIEW_CHANNEL'],
                nsfw: false,
                defaultHandling: true,
                argsType: 'multiple'
            })
    }

    async run(message, args)
    {
        console.log('ARGS:', args)
        let sum = 0
        for(var arg of args)
        {
            sum += parseInt(arg)
        }
        message.reply(`The sum is ${sum}`)
    }
}