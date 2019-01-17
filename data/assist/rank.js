const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
let xp = require('../jsons/xp.json')

const config = require('../config.js');

var modules = config.modules;

var login = config.login;

client.on("ready", async () => {

  const embed = new Discord.RichEmbed()
  .setTitle("Azura Modules")
  .setColor("#24CFA4")
  .setDescription("Модуль ,rank' загружен.")
  .setFooter("POWERED BY RIPPLE");

  modules.send(embed)
});


client.on("message", async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if(message.type === "dm") return;
  let xpAdd = Math.floor(Math.random() * 3) + 5;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;
  xp[message.author.id].xp =  curxp + xpAdd;

  if(command ==='take'){
    if(!args[0]){ const embed = new Discord.RichEmbed()
    .setTitle("Azura's Roles")
    .setColor("#00FF00")
    .setDescription("В настоящее время имеется небольшое кол-во ролей.\n\nПробный кодер - 350 поинтов\n\nНачинающий - 500 поинтов\n\nБывалый - 750 поинтов\n\nИнтеллигент - 1230 поинтов\n\nРазбирающийся - 1510 поинтов\n\nШарющий - 1800 поинтов\n\nПонимает язык - 2100 поинтов\n\nПрофессионал - 2400 поинтов\n\nС языком на ты - 2800 поинтов\n\nКак пять пальцев - 4000 поинтов")
    .setFooter("Поинты можно получить проявляя актив на сервере.")
    message.channel.send(embed);}
    if(args[0] === 'Пробный кодер'){ if(curxp > 350){
      let coder = message.guild.roles.find(role => role.name === "Пробный кодер");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
      } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "Пробный кодер" выдана пользователю ${message.author.username}`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 350 поинтов. У вас ${curxp} поинтов`)
    };
    }
    if(args[0] === 'Начинающий'){
      if(curxp > 500){
      let coder = message.guild.roles.find(role => role.name === "Начинающий");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
      } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "Начинающий" выдана пользователю ${message.author.username}`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 500 поинтов. У вас ${curxp} поинтов`)
    };
  }
    if(args[0] === 'Бывалый'){
      if(curxp > 750){
      let coder = message.guild.role.find(role => role.name === "Бывалый");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
      } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "Бывалый" выдана пользователю ${message.author.username}`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 750 поинтов. У вас ${curxp} поинтов`)
    };
   }
    if(args[0] === 'Интеллигент') {
    if(curxp > 1230){
      let coder = message.guild.roles.find(role => role.name === "Интеллигент");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
      } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "Интеллигент" выдана пользователю ${message.author.username}`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 1230 поинтов. У вас ${curxp} поинтов`)
    };
  }
    if(args[0] === 'Разбирающийся'){
    if(curxp > 1510){
      let coder = message.guild.roles.find(role => role.name === "Разбирающийся");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
      } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "Разбирающийся" выдана пользователю ${message.author.username}`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 1510 поинтов. У вас ${curxp} поинтов`)
    };
    if(args[0] === 'Шарющий'){
      if(curxp > 1800){
      let coder = message.guild.roles.find(role => role.name === "Шарющий");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
      } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "Шарющий" выдана пользователю ${message.author.username}`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 1800 поинтов. У вас ${curxp} поинтов`)
    };
  }
      if(args[0] === 'Понимает' || args[1] === 'язык'){
        if(curxp > 2100){
      let coder = message.guild.roles.find(role => role.name === "Понимает язык");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
      } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "Понимает язык" выдана пользователю ${message.author.username}`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 2100 поинтов. У вас ${curxp} поинтов`)
    };
  }
      if(args[0] === 'Профессионал'){
        if(curxp > 2400){
      let coder = message.guild.roles.find(role => role.name === "Профессионал");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
      } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "Профессионал" выдана пользователю ${message.author.username}`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 2400 поинтов. У вас ${curxp} поинтов`)
    };
  }
      if(args[0] === 'С' || args[1] === 'языком' || args[2] === 'на' || args[3] === 'ты') {
    if(curxp > 2800){
      let coder = message.guild.roles.find(role => role.name === "С языком на ты");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
      } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "С языком на ты" выдана пользователю ${message.author.username}`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 2800 поинтов. У вас ${curxp} поинтов`)
    };
  }
      if(args[0] === 'Как' || args[1] === 'пять' || args[2] === 'пальцев') {
    if(curxp > 4000){
      let coder = message.guild.roles.find(role => role.name === "Как пять пальцев");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
        } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "Как пять пальцев" выдана пользователю ${message.author.username}. Поздравляем с максимальным уровнем!`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 4000 поинтов. У вас ${curxp} поинтов`)
    };
  }
   }
if(command === 'points'){
    const embed = new Discord.RichEmbed()
    .setTitle(`Профиль пользователя ${message.author.username}`)
    .setColor("#00FF00")
    .setDescription(`Ваше количество поинтов: ${curxp} поинтов.`)
    .setFooter("Чтобы заработать больше поинтов, проявляйте больше актив на сервере");
    message.channel.send(embed)
  };
});

  fs.writeFile("../jsons/xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
      });
});

//
//
//

client.login(login)
