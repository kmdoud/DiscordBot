var discord = require('discord.js');
var helloClass = require('./hello.js');
var json = require('./appsettings.json');
var shadyPlebClass = require('./shadyPleb.js');
var playerInfoClass = require('./embeds/playerInfoEmbed.js');
var checkPermissionClass = require('./checkPermission.js');
var cmdListEmbedClass = require('./embeds/commandListEmbed.js');
var welcomeMessageClass = require('./welcomeMessage.js');
var tokenClass = require('./token.js');
var bot = new discord.Client();
const cmd = '!';

bot.on('ready', () => 
{
    console.log("ShadyBot is online");
})

welcomeMessageClass.welcomeMessage;

bot.on
('message', message =>
    {
        let args = message.content.slice(cmd.length).split(' ');


        switch(args[0])
        {
            case 'hello':
                checkPermissionClass.checkPermission(message)
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
            case 'player':
                playerInfoClass.playerInfo(message);
            break;

        }
    }
)

console.log(json.Users[3].name)

bot.login(tokenClass.token);
