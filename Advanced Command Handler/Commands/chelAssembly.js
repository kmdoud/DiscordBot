const json = require('../../../appsettings.json')

module.exports = 
{
    commands: `chel`,
    permissionError: json.invalidPermission,
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguements, text) =>
    {
        message.channel.send(json.chelAssembly)
    },
}