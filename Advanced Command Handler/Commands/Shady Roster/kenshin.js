const json = require('../../../appsettings.json')

module.exports = 
{
    commands: `kenshin`,
    permissionError: json.invalidPermission,
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguements, text) =>
    {
        message.channel.send(json.Users[4].bio)
    },
}