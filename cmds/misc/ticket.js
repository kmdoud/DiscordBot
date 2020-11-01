const commando = require('discord.js-commando')
const json = require('@root/appsettings')
const client = new commando.CommandoClient
const channelId = '769701592932810792'
const completed = '✔️'

const registerEvent = (client) => 
{
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
        console.log('deleting message')
      message.delete()
    }
  })
}

module.exports = class TicketCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'ticket',
                group: 'misc',
                memberName: 'ticket',
                description: 'Submit and idea to add to the Bot',
                details: 'Any ideas that you want to add to the functionality of the ShadyBot please submit and I will do my best to make it happen',
                argsType: 'single'
            })
    }

    async run(message, args)
    {
        const { guild, member } = message
        registerEvent(client)
    
        const channel = guild.channels.cache.get(channelId)
        channel
          .send(`A new ticket has been created by <@${member.id}>\n"${args}"
          Click the ${completed} icon when this issue has been resolved.`)
          .then((ticketMessage) => 
          {
            ticketMessage.react(completed)
            message.reply(`Your ticket has been received! My creator will be in touch with you shortly.`)

          })
    }

    
}