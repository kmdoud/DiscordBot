var discord = require('discord.js');
var json = require('../appsettings.json');

exports.cmdList = (message => 
    {
        var embed = new discord.MessageEmbed()
        message.channel.send
        (
            {embed: 
                {
                    color: 5421360,
                    title: "Command List",
                    fields: 
                    [
                        { name: "Responses:", value:json.commandList1 + json.commandList2},
                        { name: "Embeds:", value: "!commands"}
                    ]
                }
            }
        )
    })