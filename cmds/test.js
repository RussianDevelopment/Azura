var Discord = require('discord.js')
module.exports.run = async (argsUser, message, args,prefix) => {
  var proyden = 0;
  let code = await Math.floor(Math.random()* 9999)
    let ggg = await message.channel.send(`Напишите в канал этот код:`);
    let ggf = await message.channel.send(`${code}`);
const collector = message.channel.createMessageCollector(m => m.author.id == message.author.id, {max: 1, time: 30000})
collector.on('collect', async msg => {
    switch(msg.content) {
        case ggf.content:
            await message.channel.send(`Проверка пройдена для ${message.author}: каналы открыты`)
        default:
        await message.channel.send("x") 
    }
})


//
//
// страшный и не понятный код
//
//


collector.on('end', async () => {
  if(proyden===0){
    message.channel.send(`заменю потом `)
    }
})
}
module.exports.help = {
  name: "z.test%"
}
