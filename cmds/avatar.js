const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (args.join(" ") == "") { //Начало.
      let er = new Discord.RichEmbed() //Начало ембеда.
      .setTitle("Ошибка")
      .setColor("RANDOM")
      .setDescription("Пользователь не был упомянут."); //Конец ембеда.
        message.channel.send(er);
        return;
    } else {
        let user = message.mentions.users.first(); //Пинг.
        let image = user.displayAvatarURL; //Фото.
        let embed = new Discord.RichEmbed() //Начало ембеда.
            .setAuthor(`${user.username}#${user.discriminator}`)
            .setColor("#ff0000")
            .setImage(image); //Конец ембеда.
        message.channel.send(embed); //Итог.
    }
}

module.exports.help = {
  name:"z.avatar"
}
