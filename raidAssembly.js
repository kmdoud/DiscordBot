var json = require('./appsettings.json');

exports.raid = (message) => 
{
    message.channel.send(json.raid)
}