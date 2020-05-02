var json = require('./appsettings.json');

exports.hello = (message) =>
{
  message.channel.send(json.hello)
}