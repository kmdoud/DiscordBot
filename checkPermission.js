var discord = require('discord.js');
var json = require('./appsettings.json');

exports.checkPermission = (message) => {
    let hasRole = message.member.roles.cache.some
    (role => role.name == "Kenshin" || role.name == "BOT" || role.name == "Shady" || role.name == "Sir" || role.name == "warzone");
    
    console.log("hasRole:", hasRole);
    return (hasRole) ? true : false;
}