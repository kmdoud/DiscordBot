const json = require('../../../appsettings.json')

module.exports = 
{
    commands: `ping`,
    permissionError: json.invalidPermission,
    callback: (message, arguements, text, client) =>
    {
        message.reply('Calculating ping...').then(resultMessage =>
            {
                const ping = resultMessage.createdTimestamp - message.createdTimestamp
                resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
            })
    },
}