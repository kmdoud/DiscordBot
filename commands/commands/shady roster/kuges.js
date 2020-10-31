const json = require('@root/appsettings.json')

module.exports = 
{
    commands: `kuges`,
    permissionError: json.invalidPermission,
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguements, text) =>
    {
        message.channel.send(json.Users[5].bio)
    },
}