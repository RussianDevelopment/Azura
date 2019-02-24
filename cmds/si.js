const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let si = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Имя сервера", message.guild.name)
    .addField("Создан", message.guild.createdAt)
    .addField("Вы присоединились", message.member.joinedAt)
    .addField("Участников", message.guild.memberCount)
    .setFooter("Powered by VENUM", message.author.displayAvatarURL);

    message.channel.send(si);
}

module.exports.help = {
  name:"z.si"
}
