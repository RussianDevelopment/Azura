const Discord = require("discord.js");
var weather = require("weather-js")
module.exports.run = (client, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C', lang: 'ru-RU'}, function(err, result) {
      if (result === undefined || result.length === 0) {
          message.reply("укажите местоположение или проверьте указанное местоположение.")
          return;
      }

  var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Погода в ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Временная зона',`UTC${location.timezone}`, true)
          .addField('Тип температуры',location.degreetype, true)
          .addField('Температура',`${current.temperature} градусов`, true)
          .addField('Ощущается как', `${current.feelslike} градусов`, true)
          .addField('Ветер', current.winddisplay, true)
          .addField('Влажность', `${current.humidity}%`, true)
          .setFooter("POWERED BY VENUM", message.author.displayAvatarURL);
          message.channel.send({embed});
  })
};

module.exports.help = {
  name: "z.weather"
}
