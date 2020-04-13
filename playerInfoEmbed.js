var discord = require('discord.js');

exports.playerInfo = (message => 
    {
        var embed = new discord.MessageEmbed()
        message.channel.send
        (
            {embed: 
                {
                    color: 7775130,
                    title: "Player Information",
                    fields: 
                    [
                        { name: "PLayer Requested", value:"Testing Player Information Embed"}
                    ]
                }
            }
        )
    })