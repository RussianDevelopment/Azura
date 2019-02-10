const Discord = require("discord.js")

module.exports.run = (client, message, args) => 
{
  let main = message.guild.roles.find(role => role.name === "Main");
  let mute = message.guild.roles.find(role => role.name === "AzuraMute");
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.roles.has(main.id))
    {
      if(message.member.roles.has(mute.id)) {
            member.removeRole(mute.id);
        message.channel.send(`${member} был размучен ${message.author}`)
          } else {
            member.addRole(mute.id);
        message.channel.send(`${member} был замучен ${message.author}`)
          }
     } else {
      message.reply("недостаточно прав.")
     } 

};

module.exports.help = {
  name: "z.mute"
}
