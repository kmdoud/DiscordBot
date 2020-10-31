const commando = require('discord.js-commando')

module.exports = class BanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'ban',
                group: 'moderation',
                memberName: 'ban',
                description: 'Ban member from the server',
                argsType: 'single',
                clientPermissions: ['BAN_MEMBERS'],
                userPermissions: ['BAN_MEMBERS']
            })
    }

    async run(message)
    {
        const target = message.mentions.users.first()
        if(!target)
        {
            message.reply(`Please specify someone to ban.`)
            return
        }
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.ban()
            message.channel.send(`${tag} User has been banned`)

    }
}