const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let si = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Имя сервера", message.guild.name, true)
    .addField("Регион", message.guild.region, true)
    .addField("Уровень проверки безопасности", message.guild.verificationLevel, true)
    .addField('Каналов всего', message.guild.channels.size, true)
    .addField("Участников всего", message.guild.memberCount, true)
    .setFooter("Сервер создан:")
    .setTimestamp(message.guild.createdAt);

    message.channel.send(si);
}

module.exports.help = {
  name:"z.si"
}
