require('module-alias/register')
const path = require('path')
const commando = require('discord.js-commando');
var tokenClass = require('@admin/token');
var package = require('@root/package.json');
const config = require('@admin/config.json');
var loadFeatures = require('@root/features/load-features');

const client = new commando.CommandoClient
({
    owner: config.ownerId,
    commandPrefix: config.prefix
})


client.on
('ready', async () => 
{
    console.log(`ShadyBot version: ${package.version} is online!`)
    //load all features
    loadFeatures(client)

    client.registry
    .registerGroups
    ([
        ['assembly', 'Commands used to notify other members about playing a certain game'],
        ['misc', 'Misc'],
        ['moderation', 'Commands that require elevated permissions'],
        ['shady', 'Commands specific to the Shady Plebs'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))
})

//Line 121 is how the bot is able to login to the discord server as a valid user
client.login(tokenClass.token);
