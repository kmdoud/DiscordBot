var discord = require('discord.js');
var bot = new discord.Client();

exports.welcomeMessage = (bot.on('guildMemberAdd', (member) => 
{
    var channel = member.guild.channels.find(channel => channel.name === "hq")
    if(!channel)
    return;

    //The string below is passed the member object by string interpolation, so the normal single quotes are replaced by the backtick character (located above the tab key)
    channel.send(`Welcome young grasshopper, ${member} here you will learn to master the Shade in all its glory!`);
}))