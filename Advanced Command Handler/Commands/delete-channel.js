const json = require('../../appsettings.json');

module.exports = 
{
    commands: ['deletechannel','delchannel'],
    maxArgs: 0,
    permissionError: json.invalidPermission,
    permissions:'ADMINISTRATOR',
    callback: (message, arguements, text) =>
    {
        message.channel.delete()
    },
}