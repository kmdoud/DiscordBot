const cmd = '!';
var discord = require('discord.js');
var bot = new discord.Client();
var token = require('./token.js');
var welcome = require('./welcome.js');
var tokenClass = require('./token.js');
var helloClass = require('./hello.js');
var package = require('./package.json');
var json = require('./appsettings.json');
const config = require('./Admin/config.json');
const command = require('./Commands/command');
var shadyPlebClass = require('./shadyPleb.js');
var apexAssemblyClass = require('./apexAssembly.js');
var chelAssemblyClass = require('./chelAssembly.js');
var raidAssemblyClass = require('./raidAssembly.js');
var zoneAssemblyClass = require('./zoneAssembly.js');
var checkPermissionClass = require('./checkPermission.js');
var invalidPermissionClass = require('./invalidPermission');
var cmdListEmbedClass = require('./embeds/commandListEmbed.js');
var sirMasterProgrammerClass = require('./sirMasterProgrammer.js');
var firstMessage = require('./Edits and Reactions/first-message.js');
var privateMessage = require('./Private Messages/private-message.js');
const roleClaim = require('./Roles on Reaction/role-claim.js');

 

bot.on
('ready', () => 
{
    console.log(`ShadyBot version: ${package.version} is online!`)
    //sends message to user when added to server
    welcome(bot);
    //response command
    command(bot, 'ping', (message) => 
    {
        //let hasRole = checkPermissionClass.checkPermission(message)
        //var invalidMessage = invalidPermissionClass.invalidPermission;
        message.channel.send('pong')
    })

    //posts a message in a specified channel with reactions
    firstMessage(bot, '768587987722174484', 'hello world!!!', ['👍', '🏢'])

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
    command(bot, ['cc', 'clearchannel'], message =>
    {
        if(message.member.hasPermission(`ADMINISTRATOR`))
        {
            message.channel.messages.fetch().then(results => 
                {
                  message.channel.bulkDelete(results);      
                })
        }
    })

    //change the status of the bot
    command(bot, 'status', (message) =>
    {
        const content = message.content.replace('!status', '')
        bot.user.setPresence
        ({
            activity: 
            {
                name: content,
                type: 0,
            },
        })
    })

    //send user private message response
    privateMessage(bot, 'ping', 'pong')
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
    command(bot, 'creatvoicechannel', (message) =>
    {
        var name = message.content.replace('!createvoicechannel', '')
        message.guild.channels.create(name, 
            {
                type: 'voice'
            }).then((channel) => 
            {
                var categoryId = '768504781051527178'
                channel.setParent(categoryId) 
                channel.setUserLimit(1)
                if(message.content[1] !== '')
                {
                    channel.setUserLimit(message.content[1])
                }
                else
                {
                    channel.setUserLimit(3)
                }
            })
    })

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

    command(bot, 'help', (message) =>
    {
        message.channel.send(`
        These are example commands:
        **!help** - Displays help menu
        `)

        const { prefix } = config
        bot.user.setPresence
        ({
            activity: 
            {
                name: `"${prefix}help" for help`
            }
        })
    })

    roleClaim(bot)
})

/*The following code block is the bulk of the commands that can actually received by the bot.
Depending on the command passed into whatever channel in the server that is prefaced with the '!' character*/ 

/*
These lines ensure that the correct user is being passed as an object from the appsettings.json file */
console.log(`${json.Users[0].name} is user 0`)
console.log(`${json.Users[1].name} is user 1`)
console.log(`${json.Users[2].name} is user 2`)
console.log(`${json.Users[3].name} is user 3`)
console.log(`${json.Users[4].name} is user 4`)
console.log(`${json.Users[5].name} is user 5`)
console.log(`${json.Users[6].name} is user 6`)
console.log(`${json.Users[7].name} is user 7`)
console.log(`${json.Users[8].name} is user 8`)

//Line 121 is how the bot is able to login to the discord server as a valid user
bot.login(tokenClass.token);
