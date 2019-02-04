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
  client.user.setActivity("на булочки одноклассниц", {type: "WATCHING"});
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
    const embed = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor("#00FF00")
    .setDescription("z.verify - пройти проверку на сервере\n\nz.res - ?\n\nz.take - список ролей, которые можно взять\n\nz.take (имя роли) - получить роль");
    message.author.send(embed);
  };
});

client.on("message", async message => {
  let verify = message.guild.roles.find(role => role.name === "пользователь");
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
  let dscrd = message.guild.roles.find(role => role.name === "discord.js");
  let member = message.member;
  if(message.content === "z.verify") {
   if(message.type === "dm") return;
      if(message.member.roles.has(dscrd.id)) {
        message.channel.send(`Вы уже проходили проверку, ${message.author.username}: роль присутствует.`)
          } else {
            member.addRole(dscrd).catch(console.error);
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

client.on("message", async message => {
  if(message.content.includes("discord.gg")) {
    let owner = client.users.get("339462715917729792");
    message.delete(500).then(owner.send(`Сообщение от: ${message.author.tag} ${message.author.id}\n\nСодержание: Реклама`))
    message.author.send(`${message.author.username}, реклама запрещена.`)
  };
});

client.on("message", async message => {
  if(message.content.includes("discordapp.com")) {
    let owner = client.users.get("339462715917729792");
    message.delete(500).then(owner.send(`Сообщение от: ${message.author.tag} ${message.author.id}\n\nСодержание: Реклама`))
    message.author.send(`${message.author.username}, реклама запрещена.`)
  };
});

//
//
//LOGIN
//
//


client.login(login);
