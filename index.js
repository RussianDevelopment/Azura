const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
let reg = require("./data/reg.json")

const config = require('./data/config.js');

var login = config.login;

//
//
//Set up
//
//

client.on("ready", async () => {
  console.log(`AZURA\n\nBot developers: Ripple & Fluiser\n\nServers: ${client.guilds.size}`);
  console.log(`Working.`);
  client.user.setActivity("activity of 2 SHARDS", {type: "WATCHING"});
});

//
//
//Ready.
//
//


client.on("message", async message => {
  if(message.content === "z.help") {
   if(message.type === "dm") return;
    message.reply("Check your DM.")
    message.author.send("1");
  };
});

client.on("message", async message => {
  let verify = message.guild.roles.find(role => role.name === "Verified");
  let member = message.member;
  if(message.content === "z.verify") {
   if(message.type === "dm") return;
      if(message.member.roles.has(verify.id)) {
        message.channel.send(`Вы уже проходили проверку, ${message.author.username}: роль присутствует.`)
          } else {
            member.addRole(verify).catch(console.error);
        message.channel.send(`Проверка пройдена для ${message.author.username}: каналы открыты.`)
          }
      };

});

client.on("message", async message => {
  if(message.content === "z.res") {
    if(message.author.id === "339462715917729792") {
      let used = process.memoryUsage().rss / 1024 / 1024;
      message.channel.send(`Приблизительное количество выделенных ресурсов составляет ${Math.round(used * 100) / 100} МБ`);
      } else {
    message.channel.send("Доступ запрещен.")
  };
 };
});


//
//
//LOGIN
//
//


client.login(login);
