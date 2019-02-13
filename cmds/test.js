var Discord = require('discord.js')
const proyden === 0;
module.exports.run = async (argsUser, message, args,prefix) => {
  let code = await Math.floor(Math.random()* 9999)
    let ggg = await message.channel.send(`Напишите в канал этот код: ${code}`)
const collector = message.channel.createMessageCollector(m => m.author.id == message.author.id, {max: 1, time: 30000})
collector.on('collect', async msg => {
if(message.content === code){
            await message.channel.send(`Проверка пройдена для ${message.author}: каналы открыты`)
        proyden = 1;
  } else {
            await message.channel.send('Код неверный, попробуйте снова. ')
    }
})

collector.on('end', async () => {
  if(proyden===0){
    message.channel.send(`Время подтверждения истекло. `)
    }
})
}
module.exports.help = {
  name: "z.test%"
}
