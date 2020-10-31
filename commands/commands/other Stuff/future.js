       //temporary messages 
    // const guild = bot.guilds.cache.get('653415325848829982')
    // const channel = guild.channels.cache.get('768869783700766730')
    // sendMessage(channel, 'Hello World', 3)


    //posts a message in a specified channel with reactions
    //firstMessage(bot, '768587987722174484', 'hello world!!!', ['👍', '🏢'])

    //returns a message with the total number of members in a server
    // command(bot, 'servers', (message) =>
    // {
    //     bot.guilds.cache.forEach((guild) => 
    //     {
    //         message.channel.send
    //         (
    //             `${guild.name} has a total of ${guild.memberCount} members`
    //         )
    //     })
    // })

    //clear all messages within a channel with admin permissions
    // command(bot, ['cc', 'clearchannel'], message =>
    // {
    //     if(message.member.hasPermission(`ADMINISTRATOR`))
    //     {
    //         message.channel.messages.fetch().then(results => 
    //             {
    //               message.channel.bulkDelete(results);      
    //             })
    //     }
    // })

    //change the status of the bot
    // command(bot, 'status', (message) =>
    // {
    //     const content = message.content.replace('!status', '')
    //     bot.user.setPresence
    //     ({
    //         activity: 
    //         {
    //             name: content,
    //             type: 0,
    //         },
    //     })
    // })

    //send user private message response
    //send user private message
    // bot.users.fetch('507233660626403356').then((user) =>
    // {
    //     user.send('Hello World!')
    // })

    //create text channel under specific category
    // command(bot, 'createtextchannel', (message) =>
    // {
    //     var content = message.content.replace('!createtextchannel ', '')
    //     message.guild.channels.create(content, 
    //         {
    //             type: 'text'
    //         }).then((channel) =>
    //         {
    //             console.log(channel)
    //             var categoryId = '768504781051527178'
    //             channel.setParent(categoryId)
    //         })
    // })

    //create voice channel under specific category
    // command(bot, 'creatvoicechannel', (message) =>
    // {
    //     var name = message.content.replace('!createvoicechannel', '')
    //     message.guild.channels.create(name, 
    //         {
    //             type: 'voice'
    //         }).then((channel) => 
    //         {
    //             var categoryId = '768504781051527178'
    //             channel.setParent(categoryId) 
    //             channel.setUserLimit(1)
    //             if(message.content[1] !== '')
    //             {
    //                 channel.setUserLimit(message.content[1])
    //             }
    //             else
    //             {
    //                 channel.setUserLimit(3)
    //             }
    //         })
    // })

    //example embed
    // command(bot, 'embed', (message) => 
    // {
    //     var embed = new discord.MessageEmbed().setTitle('Example Embed')
    //     message.channel.send(embed)
    // })

    // command(bot, 'serverinfo', (message) =>
    // {
    //     const { guild } = message
    //     const { name, region, memberCount, owner, afkTimeout } = guild
    //     const icon = guild.iconURL()
    //     const embed = new discord.MessageEmbed()
    //     .setTitle(`Server info for "${name}"`)
    //     .setThumbnail(icon)
    //     .addFields
    //     (
    //         {
    //             name: 'Region',
    //             value: region
    //         },
    //         {
    //             name: 'Members',
    //             value: memberCount
    //         },
    //         {
    //             name: 'Owner',
    //             value: owner
    //         }
    //     )
    //     message.channel.send(embed)
    // })

    // command(bot, 'help', (message) =>
    // {
    //     message.channel.send(`
    //     These are example commands:
    //     **!help** - Displays help menu
    //     `)

    //     const { prefix } = config
    //     bot.user.setPresence
    //     ({
    //         activity: 
    //         {
    //             name: `"${prefix}help" for help`
    //         }
    //     })
    // })