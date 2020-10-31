var discord = require('discord.js');
var json = require('@root/appsettings.json');
var sdybotwishlist = '697930284380979262';

    exports.exampleEmbed = new discord.MessageEmbed()
	.setColor('#ff00ff')
	.setTitle('ShadyBot Command List')
	.setURL('https://youtube.com/channel/UCVs6yJddN4f4MPK1ILij8OA')
	.setAuthor('Brought to you by your Fearless Leader: Kenshin', 'https://i.imgur.com/wSTFkRM.png', 'https://www.twitch.tv/code_tk')
    .setDescription(`Hello, I am ShadyBot \n Listed below are all the commands that you can ask me for.\n If there is a command you do not see, but would like to, please post a message in the <#${sdybotwishlist}> channel and my creator will make it happen!`)
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields
    (
		{ name: 'Embeds', value: '!commands' },
		{ name: 'Commands', value: json.commandList1 + json.commandList2}
	)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Shady Pleb Gaming', 'https://i.imgur.com/wSTFkRM.png');