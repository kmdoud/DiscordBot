var json = require('./appsettings.json');

exports.chel = (message) => 
{
    message.channel.send(json.chelAsseembly)
}