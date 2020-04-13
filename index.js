var discord = require('discord.js');
var json = require('./appsettings.json');
var helloClass = require('./hello.js');
var shadyPlebClass = require('./shadyPleb.js');
var cmdListEmbedClass = require('./commandListEmbed.js');
var tokenClass = require('./token.js');
var bot = new discord.Client();
const cmd = '!';

bot.on('ready', () => 
{
    console.log("ShadyBot is online");
})


bot.on('message', message =>
{
    let args = message.content.slice(cmd.length).split(' ');

    switch(args[0])
    {
        case 'hello':
            helloClass.hello(message);
        break;
        case 'apoc':
            shadyPlebClass.apoc(message);
        break;
        case 'kuges':
            shadyPlebClass.kuges(message);
        break;
        case 'duds':
            shadyPlebClass.duds(message);
        break;
        case 'ferg':
            shadyPlebClass.ferg(message);
        break;
        case 'kenshin':
            shadyPlebClass.kenshin(message);
        break;
        case 'commands':
            cmdListEmbedClass.cmdList(message);
        break;
    }
}
)

console.log(json.Users[0].name)

bot.login(tokenClass.token);
