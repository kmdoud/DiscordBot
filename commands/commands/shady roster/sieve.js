const json = require('@root/appsettings.json')

module.exports = 
{
    commands: `sieve`,
    permissionError: json.invalidPermission,
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguements, text) =>
    {
        message.channel.send(json.Users[7].bio)
    },
}