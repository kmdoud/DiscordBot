var discord = require('discord.js');
var json = require('../appsettings.json');

class PlayerInfo 
{
    constructor(name, favoriteGame, department, occupation, bio)
    {
        this.name = name
        this.favoriteGame = favoriteGame
        this.department = department
        this.occupation = occupation
        this.bio = bio
    }

   testplayerData() 
    {
        return exports.player = (message => 
            {
                var embed = new discord.MessageEmbed()
                message.channel.send
                (
                    {embed: 
                        {
                            color: 5136987,
                            title: name,
                            fields: 
                            [
                                { name: "Name", value: name},
                                { name: "Favorite Game", value: favoriteGame},
                                { name: 'Department', value: department},
                                { name: 'Occupation', value: occupation},
                                { name: 'Bio', value: bio}
                            ]
                        }
                    }
                )
            }
        )
    }
}
module.exports = PlayerInfo;

// exports.player = (message => 
//     {
//         var embed = new discord.MessageEmbed()
//         message.channel.send
//         (
//             {embed: 
//                 {
//                     color: 5136987,
//                     title: name,
//                     fields: 
//                     [
//                         { name: "Name", value: name},
//                         { name: "Favorite Game", value: favoriteGame},
//                         { name: 'Department', value: department},
//                         { name: 'Occupation', value: occupation},
//                         { name: 'Bio', value: bio}
//                     ]
//                 }
//             }
//         )
//     }
// )
    

