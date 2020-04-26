var discord = require('discord.js');

exports.playerInfo = (message => 
    {
        var embed = new discord.MessageEmbed()
        var player = message.author.username;
        var status = message.member.title;
        message.channel.send
        (
            {embed: 
                {
                    color: 5137770,
                    title: "Player Information",
                    fields: 
                    [
                        { name: "Player Requested", value: player},
                        {name: "Avatar", value: message.author.avatarURL},
                        {name: "Status", value: status}
                    ]
                }
            }
        )
    })