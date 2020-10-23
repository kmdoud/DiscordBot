const channelID = '697930284380979262'
const completed = '✔️'
let registered = false

const registerEvent = client => 
{
    if(registered) {return}
    registered = true
    console.log('REGISTERING EVENTS')
    client.on('messageReactionAdd', (reaction, user) =>
    {
        if(user.bot) {return}
        console.log('HANDLING REACTION')
        const {message} = reaction
        if(message.channel.id === channelID)
        {
            message.delete()
        }
    })
}

module.exports =
{
    commands: ['ticket', 'support'],
    minArgs: 1,
    expectedArgs: '<message>',
    callback: (userMessage, arguements, text, client) =>
    {
        const {guild, member} = userMessage
        const channel = guild.channels.cache.get(channelID)
        channel.send(`A new ticket has been submitted by <@${member.id}> 
        "${text}"
        Click the ${completed} icon when the request has been fufilled.`)
        .then(ticketMessage =>
            {
                ticketMessage.react(check)
                userMessage.reply(`<@${member.id}> Thank you! Your request has been submitted.`)
            })
    },
}