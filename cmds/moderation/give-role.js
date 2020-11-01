const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class GiveRoleCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'giverole',
                aliases: ['give', 'addrole'],
                group: 'moderation',
                memberName: 'giverole',
                description: 'Grant a role to a user',
                details: 'With the ADMINISTRATOR permission, a predefined role can be added to a member of the server.',
                clientPermissions: ['MANAGE_ROLES'],
                userPermissions: ['ADMINISTRATOR', 'MANAGE_ROLES'],
                argsType: 'multiple'
            })
    }

    async run(message, args)
    {
        console.log('args:', args)
        const targetUserId = args[0].substr(3,18)
        const {guild} = message
        const member = guild.members.cache.get(targetUserId)
        if(!targetUserId)
        {
            message.reply(`Please specify someone to grant a role.`)
            return
        }
        //args.shift()
        const roleName = args[1]
        const role = guild.roles.cache.find((role) =>
        {
            return role.name === roleName
        })
        if(!role)
        {
            message.reply(`Please specify a verified role to grant.`)
            return
        }
        //const member = guild.members.cache.get(targetUser.id)
        member.roles.add(role)
        message.reply(`<@${member.id}> now has the ${role} role`)
    }
}