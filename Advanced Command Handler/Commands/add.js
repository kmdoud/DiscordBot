const json = require('../../appsettings.json')

module.exports = 
{
    commands: ['add', 'addition'],
    expectedArgs: '<num1> <num2>',
    permissionError: json.invalidPermission,
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguements, text) =>
    {
        const num1 = +arguements[0]
        const num2 = +arguements[1]
        message.reply(`The sum is ${num1 + num2}`)
    },
    permissions: [],
    requiredRoles: [],
}