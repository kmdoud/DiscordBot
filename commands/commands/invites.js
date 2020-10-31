module.exports = 
{
    commands: 'invites',
    callback: (message) =>
    {
        const {guild} = message
        guild.fetchInvites().then((invites) =>
        {
            const inviteCounter = {}
            invites.forEach((invite) =>
            {
                const {uses, inviter} = invite
                const {username, discriminator} = inviter
                console.log(uses, username, discriminator)
                const name = `${username}#${discriminator}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
            })

            let replyText = 'Invites:'
            const sortedInvites = Object.keys(inviteCounter).sort((a,b) => inviteCounter[b] - inviteCounter[a])
            console.log(sortedInvites)
            for(const invite of sortedInvites)
            {
                const count = inviteCounter[invite]
                replyText += `\n${invite} has invited ${count} member(s) to the Server!`
            }
            message.reply(replyText)
        })
    }
}