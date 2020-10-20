var discord = require('discord.js');
var json = require('./appsettings.json');

exports.checkPermission = (message) => 
{
    let hasRole = message.member.roles.cache.some
    (
        role => 
        role.name == "Kenshin" || 
        role.name == "Shady" || 
        role.name == "BOT" || 
        role.name == "Slouie" || 
        role.name == "warzone" ||
        role.name == "VIP" ||
        role.name == "Destiny 2" ||
        role.name == "Raid Sherpa" ||
        role.name == "Apex"
    );
    
    console.log("hasRole:", hasRole);
    return (hasRole) ? true : false;
}