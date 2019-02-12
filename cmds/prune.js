const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("отсутствуют права");
  if(!args[0]) return message.reply("Нельзя очистить меньше 1 знака.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Очищено ${args[0]} сообщение(ий)`).then(msg => msg.delete(2000));
  });
}

module.exports.help = {
  name: "z.prune"
}
