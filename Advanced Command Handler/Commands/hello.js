var json = require('../../appsettings.json');

module.exports = 
{
    commands: `hello`,
    permissionError: json.invalidPermission,
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguements, text) =>
    {
        message.channel.send(json.hello)
    },
}