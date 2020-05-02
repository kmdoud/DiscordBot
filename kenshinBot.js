const cmd = '!';
var discord = require('discord.js');
var bot = new discord.Client();
var tokenClass = require('./token.js');
var helloClass = require('./hello.js');
var json = require('./appsettings.json');
var shadyPlebClass = require('./shadyPleb.js');
var chelAssemblyClass = require('./chelAssembly.js');
var zoneAssemblyClass = require('./zoneAssembly.js');
var checkPermissionClass = require('./checkPermission.js');
var invalidPermissionClass = require('./invalidPermission');
var playerInfoClass = require('./embeds/playerInfoEmbed.js');
var cmdListEmbedClass = require('./embeds/commandListEmbed.js');

bot.on
('ready', () => 
{
    console.log("ShadyBot is online!");
})

bot.on
('guildMemberAdd', (member) => 
{
    var channel = member.guild.channels.find(channel => channel.name === "announcements")

    //The string below is passed the member object by string interpolation, so the normal single quotes are replaced by the backtick character (located above the tab key)
    var welcomeMessage = channel.send(`Welcome young grasshopper, ${member} here you will learn to master the Shade in all its glory!`);
    console.log(welcomeMessage);
})

bot.on
('message', message =>
    {
        let args = message.content.slice(cmd.length).split(' ');


        let hasRole = checkPermissionClass.checkPermission(message)
        var invalidMessage = invalidPermissionClass.invalidPermission;
        switch(args[0])
        {
            case 'hello':
                if(hasRole) {helloClass.hello(message);} 
                else {invalidMessage;}
            break;
            case 'apoc':
                if(hasRole) {shadyPlebClass.apoc(message);}
                else {invalidMessage;}
            break;
            case 'kuges':
                if(hasRole) {shadyPlebClass.kuges(message);}
                else {invalidMessage;}
            break;
            case 'duds':
                if(hasRole) {shadyPlebClass.duds(message);}
                else {invalidMessage;}
            break;
            case 'ferg':
                if(hasRole) {shadyPlebClass.ferg(message);}
                else {invalidMessage;}
            break;
            case 'kenshin':
                if(hasRole) {shadyPlebClass.kenshin(message);}
                else {invalidMessage;}
            break;
            case 'commands':
                if(hasRole) {cmdListEmbedClass.cmdList(message);}
                else {invalidMessage;}
            break;
            case 'player':
                if(hasRole) {playerInfoClass.playerInfo(message);}
                else {invalidMessage;}
            break;
            case 'twitch':
                if(hasRole) {message.channel.send(json.twitch);}
                else {invalidMessage;}
            break;
            case 'sieve':
                if(hasRole){shadyPlebClass.sieve(message);}
                else {invalidMessage;}
            break;
            case 'louie':
                if(hasRole) {shadyPlebClass.louie(message);}
                else{invalidMessage;}
            break;
            case 'hog':
                if(hasRole) {shadyPlebClass.hog(message);}
                else {invalidMessage;}
            break;
            case 'discord':
                if(hasRole) {message.channel.send(json.discord);}
                else {invalidMessage;}
            break;
            case 'chel':
                if(hasRole) {chelAssemblyClass.chel(message);}
                else {invalidMessage;}
            break;
            case 'zone':
                if(hasRole) {zoneAssemblyClass.warzone(message);}
                else {invalidMessage;}

        }
    }
)

console.log(json.Users[0].name)
console.log(json.Users[1].name)
console.log(json.Users[2].name)
console.log(json.Users[3].name)
console.log(json.Users[4].name)
console.log(json.Users[5].name)
console.log(json.Users[6].name)
console.log(json.Users[7].name)

bot.login(tokenClass.token);
