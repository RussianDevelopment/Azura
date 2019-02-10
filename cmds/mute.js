const Discord = require("discord.js")

module.exports.run = (client, message, args) => 
{
  let main = message.guild.roles.find(role => role.name === "Main");
  let mute = message.guild.roles.find(role => role.name === "AzuraMute");
    let m = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.roles.has(main.id))
    {
      if(m.roles.has(mute.id)) {
            m.removeRole(mute.id);
        message.channel.send(`${m} был размучен ${message.author}`)
          } else {
            m.addRole(mute.id);
        message.channel.send(`${m} был замучен ${message.author}`)
          }
     } else {
      message.reply("недостаточно прав.")
     } 

};

module.exports.help = {
  name: "z.mute"
}
