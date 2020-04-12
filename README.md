# This project requires one addition after it is cloned

The first step is create a new file in the root directory named token.js, and include the following code snippet

    exports.token = '****THE TOKEN WILL BE PLACED HERE****';

Then the token.js file needs to be added to the "required" files at the beginning of the index.js file as pictured below.

    const Discord = require('discord.js');
    const helloClass = require('./hello.js');
    var tokenClass = require('./token.js');
    const bot = new Discord.Client();
    const cmd = '!';

The token will need to be retreived from the owner of the bot. This can be found at https://discordapp.com/developers/applications

