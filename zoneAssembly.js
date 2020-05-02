var json = require('./appsettings.json');

exports.warzone = (message) => 
{
    message.channel.send(json.zoneAssembly)
}