# This project requires a few additions after it is cloned

The first step is create a new file in the admin directory named token.js, and include the following code snippet
IMPORTANT!!! --The token will need to be retreived from the owner of the bot.--

    exports.token = '****THE TOKEN WILL BE PLACED HERE****';

The next will be to install relative file paths using the following command within the terminal
    To access the terminal press "CTRL+SHIFT+`"
    Type the following command: npm install module-alias

Finally the token.js file needs to be added to the "required" files at the beginning of the kenshinBot.js file as pictured below.

    const Discord = require('discord.js');
    const client = new Discord.Client();
    var tokenClass = require('@admin/token.js');