var discord = require('discord.js');
var client = new discord.Client();

var welcome = require('./welcome.js');
var tokenClass = require('./Admin/token');
var package = require('./package.json');
var json = require('./appsettings.json');
var poll = require('./Automatic Polls/poll');
const config = require('./Admin/config.json');
const memberCount = require('./Member Count/member-count');
const roleClaim = require('./Roles on Reaction/role-claim.js');
var cmdListEmbedClass = require('./embeds/commandListEmbed.js');
const sendMessage = require('./Temporary Messages/send-message');
var firstMessage = require('./Edits and Reactions/first-message.js');
var privateMessage = require('./Private Messages/private-message.js');
var scalingChannels = require('./Advanced Command Handler/Commands/scaling-channel.js');
var loadCommands = require('./Advanced Command Handler/Commands/load-commands');
var advancedPolls = require('./advanced-poll');
var modLogs = require('./mod-logs')


client.on
('ready', () => 
{
    console.log(`ShadyBot version: ${package.version} is online!`)
    //sends message to user when added to server
    welcome(client);    
    //member count
    memberCount(client);
    //automatic polls
    poll(client)
    //send private message to user
    privateMessage(client, 'ping', 'pong')
    //roll claim
    //roleClaim(client)
    //dyamically add and delete voice channels
    scalingChannels(client)
    //load all commands
    loadCommands(client)
    //advanced poll
    advancedPolls(client)
    //moderator logs
    modLogs(client)
})

//Line 121 is how the bot is able to login to the discord server as a valid user
client.login(tokenClass.token);
