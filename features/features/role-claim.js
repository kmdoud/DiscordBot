var firstMessage = require('@utilities/first-message');
const { GuildMember } = require('discord.js');

module.exports = (client) => 
{
    const channelId = '768869783700766730'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = 
  {
    chel : 'chel',
    apex : 'apex',
    destiny : 'destiny',
    warzone : 'warzone',
  }

  const reactions = []

  let emojiText = 'Click a reaction to claim a role\n\n'
  for (const key in emojis) 
  {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
    emojiText += `${emoji} = ${role}\n`
  }

  firstMessage(client, channelId, emojiText, reactions)

  const handleReaction = (reaction, user, add) => 
  {
    if (user.id === '697908927949439097') 
    {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) 
    {
      return
    }
    /*RETURNING UNDEFINED SINCE IMPLEMENTING COMMANDO */
    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.fetch({query: user.username, limit: 1}).then(console.log)
    console.log(member)
    //var member = getMember(guild, user);

    if (add) 
    {
      //console.log(testingkd)
      //testingkd.roles.add(role)
    } 
    else 
    {
      //member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => 
  {
    if (reaction.message.channel.id === channelId) 
    {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => 
  {
    if (reaction.message.channel.id === channelId) 
    {
      handleReaction(reaction, user, false)
    }
  })

  // async function getMember(guild, user)
  // {
  //     let results = await guild.members.fetch({query: user.username, limit: 1}).then(console.log('SUCCESSMESSAGE')).catch(console.error);
  //     console.log(results)
  // }
}