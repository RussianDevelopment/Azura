var Discord = require('discord.js')
module.exports.run = async (argsUser, message, args,prefix) => {
  let code = await Math.floor(Math.random()* 9999)
    let ggg = await message.channel.send(`Напишите в канал этот код: ${code}`)
const collector = message.channel.createMessageCollector(m => m.author.id == message.author.id, {max: 1, time: 30000})
collector.on('collect', async msg => {
    switch(msg.content) {
        case ggg.content:
            await message.channel.send(`Проверка пройдена для ${message.author}: каналы открыты`)
        break;
        default:
            await message.channel.send('Код неверный, попробуйте снова. ')
        break;
    }
})

collector.on('end', async () => {
    message.channel.send(`Время подтверждения истекло. `)
})
}
module.exports.help = {
  name: "z.test%"
}
