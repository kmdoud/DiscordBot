var discord = require('discord.js');
var json = require('../appsettings.json');

exports.cmdList = (message => 
    {
        var embed = new discord.MessageEmbed()
        message.channel.send
        (
            {embed: 
                {
                    color: 5136987,
                    title: "",
                    fields: 
                    [
                        { name: "Name", value:json.Users[0].name},
                        { name: ":", value: ""}
                    ]
                }
            }
        )
    })