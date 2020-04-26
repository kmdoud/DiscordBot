var json = require('./appsettings.json');

exports.invalidPermission = (message => {message.channel.send(json.invalidPermission)}); 