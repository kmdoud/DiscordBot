const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';
const cmd = '!';

bot.on('ready', () => 
{
    console.log("ShadyBot is online");
})


bot.on('message', message =>
{
    let args = message.content.substring(cmd.length).split(" ");
    //let args = message.content.remove(cmd).split(" ");

    switch(args[0])
    {
        case 'hello':
            message.channel.send('Hello! I am ShadyBot, how can I assist you?')
        break;
        case 'apoc':
            message.channel.send('Shady Apoc aka Glen is a member of the Shady Plebs, he enjoys pushing the enemy in FPS games, sporting the grinder class in Chel, and being a massive pile of sarrich')
        break;
        case 'kuges':
            message.channel.send('Shady Kuges aka kuges is a memeber of the Shady Plebs, he enjoys sucking at all FPS games, roaming the Dreadnaught for hours, and smoking that sticky icky')
        break;
        case 'duds':
            message.channel.send('OCD theDUDS aka duds is a member of the Shady Plebs, he enjoys tending the fields. Eating supper, and playing broomball')
        break;
        case 'ferg':
            message.channel.send('Shady FERG aka Ferg is a member of the Shady Plebs, he enjoys his newborn child, going AFK for months at a time, and telling kuges how he sucks balls')
        break;
        case 'kenshin':
            message.channel.send('Shady Kenshin aka faded kenshin is the Fearless Leader of the Shady Plebs, his hobbies include trolling, talking shit through messages, and getting comms banned for extended periods of time');
        break;
    }
}
)

bot.login(token);