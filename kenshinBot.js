const cmd = '!';
var discord = require('discord.js');
var bot = new discord.Client();
var token = require('./token.js')
var package = require('./package.json');
var tokenClass = require('./token.js');
var helloClass = require('./hello.js');
var json = require('./appsettings.json');
var shadyPlebClass = require('./shadyPleb.js');
var apexAssemblyClass = require('./apexAssembly.js');
var chelAssemblyClass = require('./chelAssembly.js');
var zoneAssemblyClass = require('./zoneAssembly.js');
var checkPermissionClass = require('./checkPermission.js');
var invalidPermissionClass = require('./invalidPermission');
var playerInfoClass = require('./embeds/playerInfoEmbed.js');
var cmdListEmbedClass = require('./embeds/commandListEmbed.js');
var sirMasterProgrammerClass = require('./sirMasterProgrammer.js')

 

bot.on
('ready', () => 
{
    console.log(`ShadyBot version: ${package.version} is online!`);
})

bot.on
('guildMemberAdd', (member) => 
{
    var channel = member.guild.channels.find(channel => channel.name === "announcements")

    //The string below is passed the member object by string interpolation, so the normal single quotes are replaced by the backtick character (located above the tab key)
    var welcomeMessage = channel.send(`Welcome young grasshopper, ${member} here you will learn to master the Shade in all its glory!`);
    console.log(welcomeMessage);
})
/*The following code block is the bulk of the commands that can actually received by the bot.
Depending on the command passed into whatever channel in the server that is prefaced with the '!' character*/ 
bot.on
('message', message =>
    {
        //this line takes the command that is passed in and seperates the ! from the rest of the text
        //Which is then stored in the 'args' variable
        let args = message.content.slice(cmd.length).split(' ');

        /*line 40 calls the checkPermission() method, passing in the message along with the info of the sender
        Which will see if the user possesses the correct role to be able to call any command
        Otherwise they are sent the 'invalidPermissions' message found in the appsettings.json file */
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
                if(hasRole) {message.channel.send(json.code);}
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
            break;
            case 'apex':
                if(hasRole) {apexAssemblyClass.apex(message);}
                else {invalidMessage;}
            break;
            case 'SirProgrammer':
                if(hasRole) {sirMasterProgrammerClass.hq(message);}
                else {invalidMessage;}
            break;
            case 'twitch16':
                if(hasRole) {message.channel.send(json.twitch16);} 
            break;
            case 'version':
                if(hasRole) {message.channel.send(package.version);}
                else {invalidMessage;}
            break;
            case 'authors':
                if(hasRole) {message.channel.send(json.authors);}
            break;
            case 'twitch8':
                if(hasRole) {message.channel.send(json.twitch8);} 
            break;
            case 'twitch3':
                if(hasRole) {message.channel.send(json.twitch3);} 
            break;
            case 'twitchferg':
                if(hasRole) {message.channel.send(json.twitchferg);} 
            break;
        }
    }
)
/*Lines 110-117 are used for debugging purposes
These lines ensure that the correct user is being passed as an object from the appsettings.json file */
console.log(`${json.Users[0].name} is user 0`)
console.log(`${json.Users[1].name} is user 1`)
console.log(json.Users[2].name)
console.log(json.Users[3].name)
console.log(json.Users[4].name)
console.log(json.Users[5].name)
console.log(json.Users[6].name)
console.log(json.Users[7].name)


//Line 121 is how the bot is able to login to the discord server as a valid user
bot.login(tokenClass.token);
