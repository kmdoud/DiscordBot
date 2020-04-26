var discord = require('discord.js');

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
                        { name: "Responses:", value:"!hello \n !apoc \n !duds \n !ferg \n !kenshin \n !kuges \n !louie \n !sieve \n !hog \n !twitch"},
                        { name: "Embeds:", value: "!commands"}
                    ]
                }
            }
        )
    })