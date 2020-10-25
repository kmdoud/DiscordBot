var discord = require('discord.js');
var bot = new discord.Client();

var token = require('./token.js');
var welcome = require('./welcome.js');
var tokenClass = require('./token.js');
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


bot.on
('ready', () => 
{
    console.log(`ShadyBot version: ${package.version} is online!`)
    //sends message to user when added to server
    welcome(bot);    
    //member count
    memberCount(bot);
    //automatic polls
    poll(bot)
    //send private message to user
    privateMessage(bot, 'ping', 'pong')
    //roll claim
    roleClaim(bot)
    //dyamically add and delete voice channels
    scalingChannels(bot)
    //load all commands
    loadCommands(bot)

})

//Line 121 is how the bot is able to login to the discord server as a valid user
bot.login(tokenClass.token);
