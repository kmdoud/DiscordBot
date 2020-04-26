var checkPermissionClass = require('./checkPermission.js');
var json = require('./appsettings.json');

exports.hello = (message) =>
{
    var result = checkPermissionClass.checkPermission(message)
    if(result.code === 0)
    {
        message.channel.send(json.hello)
    }
}