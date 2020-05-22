var json = require('./appsettings.json');

exports.apex = (message) => 
{
    message.channel.send(json.apexAssembly)
}