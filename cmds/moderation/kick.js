const commando = require('discord.js-commando')

module.exports = class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'kick',
                group: 'moderation',
                memberName: 'kick',
                description: 'Remove member from the server',
                argsType: 'single',
                clientPermissions: ['KICK_MEMBERS'],
                userPermissions: ['KICK_MEMBERS']
            })
    }

    async run(message)
    {
        const target = message.mentions.users.first()
        if(!target)
        {
            message.reply(`Please specify someone to kick.`)
            return
        }
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()
            message.channel.send(`${tag} User has been kicked`)

    }
}