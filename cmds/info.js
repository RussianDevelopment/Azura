const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
const addCommas = (int) => `\`${int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}\``;
       const embed = new Discord.RichEmbed() 
        .setTitle(`Бот ${client.user.tag.slice(0, -5)}`)
        .setThumbnail(client.user.avatarURL)
        .addField(`Пинг API :ping_pong:`, `${addCommas(Math.round(client.ping))} ms`, true)
        .addField(`Пинг ${client.user.tag.slice(0, -5)}'ы :ping_pong:`, `${addCommas(Date.now() - message.createdTimestamp)}ms`, true)
        .addField('ОЗУ :gear:', `${addCommas(Math.round(process.memoryUsage().rss / 1024 / 1024 ))}/\`1,024 МБ\``, true)
        .addField(`Юзеры :bust_in_silhouette:`, `${addCommas(client.users.size)} users`, true)
        .addField(`Каналы :keyboard:`, `${addCommas(client.channels.size)} channels`, true)
        .addField(`Сервера :desktop:`, `${addCommas(client.guilds.size)} servers`, true)
        .addField(`Эмодзи :joy:`, `${addCommas(client.emojis.size)} emojis`, true)
        .addField(`Голосовые каналы :microphone:`, `${addCommas(client.voiceConnections.size)} channels`, true)
        .addField(`Время работы :stopwatch:`, `${addCommas(Math.round(client.uptime / (1000 * 60 * 60)))} hours, ${addCommas(Math.round(client.uptime / (1000 * 60)) % 60)} minutes`, true)
        .addField(`Включен :on:`, client.readyAt.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow', hour12: false}), true)
        .addField(`Авторизация :key:`, client.user.tag, true)
        .setColor('af00ff');
message.channel.send({embed}); 
}
module.exports.help = {
  name: "z.info"
}
