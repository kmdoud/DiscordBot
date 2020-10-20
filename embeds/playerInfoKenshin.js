var discord = require('discord.js');
var json = require('../appsettings.json');
const info = require('./playerInfoEmbed');

class kenshinInfo 
{
    constructor(name , favoriteGame, department, occupation, bio)
    {
        name = json.Users[4].name,
        favoriteGame = json.Users[4].favoriteGame,
        department = json.Users[4].department,
        occupation = json.Users[4].occupation,
        bio = json.Users[4].bio
    }
}
