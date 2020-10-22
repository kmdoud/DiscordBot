const json = require('../../../appsettings.json')

module.exports = 
{
    commands: `ping`,
    permissionError: json.invalidPermission,
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguements, text) =>
    {
        message.reply('pong')
    },
}