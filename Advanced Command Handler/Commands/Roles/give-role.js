module.exports = 
{
    commands: 'giverole',
    minArgs: 2,
    expectedArgs: "<Target user's @> <The role name>",
    permissions: 'ADMINISTRATOR',
    callback: (message, arguements) =>
    {
        const targetUser = message.mentions.users.first()
        if(!targetUser)
        {
            message.reply(`Please specify someone to grant a role.`)
            return
        }
        arguements.shift()
        const roleName = arguements.join(' ')
        const {guild} = message
        const role = guild.roles.cache.find((role) =>
        {
            return role.name === roleName
        })
        if(!role)
        {
            message.reply(`Please specify a verified role to grant.`)
            return
        }
        const member = guild.members.cache.get(targetUser.id)
        member.roles.add(role)
        message.reply(`<@${member.id}> now has the ${role} role`)
    }
}