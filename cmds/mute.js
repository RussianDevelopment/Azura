const Discord = require("discord.js")

module.exports.run = (client, message, args) => 
{
  let main = message.guild.roles.find(role => role.name === "Main");
  let mute = message.guild.roles.find(role => role.name === "AzuraMute");
    let member = message.mentions.users.first()
    if(message.member.roles.has(main.id))
    {
      if(message.member.roles.has(mute.id)) {
        message.channel.send(`Вы уже проходили проверку, ${message.author.username}: роль присутствует.`)
          } else {
            member.addRole(mute.id);
        message.channel.send(`Проверка пройдена для ${message.author.username}: каналы открыты.`)
          }
     } else {
      message.reply("недостаточно прав.")
     } 

};

module.exports.help = {
  name: "z.mute"
}
