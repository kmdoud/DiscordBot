const {MessageEmbed} = require('discord.js')
const commando = require('discord.js-commando')
var json = require('@root/appsettings');
var tickets = '769701592932810792';

module.exports = class BotInfo extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'botinfo',
                group: 'misc',
                memberName: 'botinfo',
                description: 'Displays bot information'
            })
    }

    async run(message)
    {
        const embed = new MessageEmbed()	
        .setColor('#ff00ff')
        .setTitle('ShadyBot Command List')
        .setURL('https://youtube.com/channel/UCVs6yJddN4f4MPK1ILij8OA')
        .setAuthor('Brought to you by your Fearless Leader: Kenshin', 'https://i.imgur.com/wSTFkRM.png', 'https://www.twitch.tv/code_tk')
        .setDescription(`Hello, I am ShadyBot \n Listed below are all the commands that you can ask me for.\n If there is a command you do not see, but would like to, please post a message in the <#${tickets}> channel and my creator will make it happen!`)
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields
        (
            { name: 'Embeds', value: '!botinfo' },
            { name: 'Commands', value: json.commandList1 + json.commandList2}
        )
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Shady Pleb Gaming', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(embed)
    }
}