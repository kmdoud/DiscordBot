module.exports = client => 
{
    const channelId = '768927887683747871'

    const updateMembers = guild =>
    {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }

    // client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    // client.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = client.guilds.cache.get('653415325848829982')
    updateMembers(guild)
}