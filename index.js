const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Njk3OTA4OTI3OTQ5NDM5MDk3.Xo-IeQ.SXFSUO08QJdPB1dXVqm-qp7Y48E';

bot.on('ready', () => 
{
    console.log("ShadyBot is online");
})

bot.on('message', msg =>
{
    if(msg.content === '!hello')
    {
        msg.reply('Hello! I am ShadyBot, how can I assist you today?');
    }
}
)

bot.login(token);