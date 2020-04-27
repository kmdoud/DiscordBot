var discord = require('discord.js');
var json = require('../appsettings.json');

exports.cmdList = (message => 
    {
        var embed = new discord.MessageEmbed()
        message.channel.send
        (
            {embed: 
                {
                    color: 3447003,
                    title: "Command List",
                    fields: 
                    [
                        { name: "Responses:", value:json.commandList},
                        { name: "Embeds:", value: "!commands"}
                    ]
                }
            }
        )
    })