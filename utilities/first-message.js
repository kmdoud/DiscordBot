const addReactions = (message, reactions) =>
{
    if(reacions)
    {
        message.react(reactions[0])
        reactions.shift()
        if (reactions.length > 0 )
        {
            setTimeout(() => addReactions(message, reactions), 750)
        }
    }
}

module.exports = async (client, id, text, reactions = []) =>
{
    if(!text)
    {
        console.log(`Message cannot be undefined: channel:${id}`)
        return
    }
    const channel = await client.channels.fetch(id)

    channel.messages.fetch().then((messages) =>
    {
        if (messages.size === 0)
        {
            channel.send(text).then((message) =>
                {
                    addReactions(message, reactions)
                })
        }
        else
        {
            for (const message of messages)
            {
                message[1].edit(text)
                addReactions(message[1], reactions) 
            }
        }
    })
}