const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'secret';

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
