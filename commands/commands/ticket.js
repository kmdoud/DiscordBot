const channelId = '769701592932810792'
const completed = '✔️'
let registered = false

const registerEvent = (client) => 
{
  if (registered) 
  {
    return
  }

  registered = true

  console.log('REGISTERING EVENTS')

  client.on('messageReactionAdd', (reaction, user) => 
  {
    if (user.bot) 
    {
      return
    }

    console.log('HANDLING REACTION')
    const { message } = reaction
    if (message.channel.id === channelId) 
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
  callback: (userMessage, arguments, text, client) => 
  {
    const { guild, member } = userMessage

    registerEvent(client)

    const channel = guild.channels.cache.get(channelId)
    channel
      .send(
        `A new ticket has been creaated by <@${member.id}>
    
"${text}"
Click the ${completed} icon when this issue has been resolved.`
      )
      .then((ticketMessage) => {
        ticketMessage.react(completed)

        userMessage.reply(`Your ticket has been received! My creator will be in touch with you shortly.`)
      })
  },
}