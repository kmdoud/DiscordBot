var discord = require('discord.js');

exports.playerInfo = (message => 
    {
        var embed = new discord.MessageEmbed()
        var player = message.member.user;
        message.channel.send
        (
            {embed: 
                {
                    color: 5137770,
                    title: "Player Information",
                    fields: 
                    [
                        { name: "PLayer Requested", value: player}
                    ]
                }
            }
        )
    })