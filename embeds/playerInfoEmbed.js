var discord = require('discord.js');

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
                        { name: ":", value:""},
                        { name: ":", value: ""}
                    ]
                }
            }
        )
    })