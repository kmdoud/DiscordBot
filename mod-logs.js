const roles = ['Shady']
const channelId = '768869783700766730'

module.exports = (client) =>
{
    client.on('message', message =>{
        const {guild, content, member} = message
        if(member.user.bot)
        {
            return
        }
        const hasRole = member.roles.cache.find((role) =>
        {
            return roles.includes(role.name)
        })
        if(hasRole)
        {
            const channel = guild.channels.cache.get(channelId)
            channel.send(`<@${member.id}> said: "${content}"`)
        }
    })
}