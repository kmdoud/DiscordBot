const json = require('../../../appsettings.json')

module.exports = 
{
    commands: `hog`,
    permissionError: json.invalidPermission,
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguements, text) =>
    {
        message.channel.send(json.Users[3].bio)
    },
}