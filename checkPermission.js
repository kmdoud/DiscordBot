var discord = require('discord.js');
var json = require('./appsettings.json');

exports.checkPermission = (message) => {
    if (!message.member.hasPermission("Kenshin" || "Shady" || "BOT", explicit = true)) 
    {
        return { code: 1, message: message.channel.send(json.invalidPermission) }
    }
    else {
        return { code: 0, message: null }
    }
}