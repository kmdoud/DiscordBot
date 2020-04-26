var json = require('./appsettings.json');
exports.apoc = (message => {message.channel.send(json.Users[0].bio)})
exports.duds = (message => {message.channel.send(json.Users[1].bio)})
exports.hog = (message => {message.channel.send(json.Users[2].bio)})
exports.ferg = (message => {message.channel.send(json.Users[3].bio)})
exports.kenshin = (message => {message.channel.send(json.Users[4].bio)})
exports.kuges = (message => {message.channel.send(json.Users[5].bio)})
exports.louie = (message => {message.channel.send(json.Users[6].bio)})
exports.sieve = (message => {message.channel.send(json.Users[7].bio)})