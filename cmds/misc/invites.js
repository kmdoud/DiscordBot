const commando = require('discord.js-commando')
const json = require('@root/appsettings')

module.exports = class InviteTracker extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'invites',
                aliases: ['invite'],
                group: 'misc',
                memberName: 'invite',
                description: 'Counts who has invited members to the server.',
                details: 'Tracks the issuer of an invite into the server, and how many people have joined from that users link.'
            })
    }

    async run(message, args)
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