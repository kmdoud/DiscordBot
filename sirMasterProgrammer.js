var json = require('./appsettings.json');

exports.hq = (message) => 
{
    message.channel.send(json.sirMasterProgrammer)
}