const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class CreateChannel extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'createchannel',
                aliases: ['createchannel', 'create'],
                group: 'moderation',
                memberName: 'createchannel',
                description: 'Create a voice or text channel',
                details: 'With ADMINISTRATOR rights, a channel can be created as long as the user as ADMIN rights in the server',
                clientPermissions: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
                userPermissions: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
                argsType: 'multiple'
            })
    }

    async run(message, args)
    {
        message.guild.channels.create(args[0], 
            {
                type: 'text'
            }).then((channel) =>
            {
                console.log('ARGS:', args)
                var categoryId = 0;
                
                 switch(args[1])
                 {
                     case '1': categoryId = '704712885443493918'; break;
                     case '2': categoryId = '768504781051527178'; break;
                     case '3': categoryId = '653415325848829983'; break;
                     case '4': categoryId = '704713966198325288'; break;
                     case '5': categoryId = '704712707957325824'; break;
                     case '6': categoryId = '704713710345650246'; break;
                     default: categoryId = '0'; break;
                 }
                /* 
                704712885443493918 Welcome
                768504781051527178 Bot
                653415325848829983 HQ
                704713966198325288 RANDO
                704712707957325824 Sports
                704713710345650246 PC
                */
                channel.setParent(categoryId)
            })
    }
}