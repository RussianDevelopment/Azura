const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
const fs = require("fs");
const nodemailer = require("nodemailer");
const porn = new Discord.WebhookClient(process.env.IDWeb, process.env.TokenWeb)
let reg = require("./data/reg.json");
let xp = require("./data/jsons/xp.json")
let prefix = "";
const request = require('request');

const config = require('./data/config.js');

var login = config.login;

//
//
//Set up
//
//

fs.readdir("./cmds/", (err, files) => {

  console.log("Загружаю команды.");

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Команд нет.");
      return;
    }

    jsfile.forEach((f, i) =>{
      let props = require(`./cmds/${f}`);
      console.log(`${f} загружен.`);
      client.commands.set(props.help.name, props);
    });
  });


client.on("ready", async () => {
  console.log(`AZURA\n\nBot developers: ripple_x & Fluiser\n\nServers: ${client.guilds.size}`);
  console.log(`Working.`);
  client.user.setActivity("porno", {type: "WATCHING"});
});

//
//
//Ready.
//
//

client.on("message", async message => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

  if(message.content === "z.help") {
   if(message.type === "dm") return;
    message.reply("check your DM.")
    const embed = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor("#00FF00")
    .setDescription("z.verify - пройти проверку на сервере\n\nz.mute (@ping) - мут. Только с ролью Main и ее правами\n\nz.pron - красивые картинки");
    message.author.send(embed);
  };
});


client.on("message", (message) => {
  if(message.content.includes("discord.gg"))
  {
    message.delete(5);
    const owner = client.channels.get("3548924171506417696").send(`CASE:\n**Реклама**\n\nОтправитель: ${message.author}\n\nСодержание: реклама`);
        let mute = message.guild.roles.find(role => role.name === "AzuraMute");
        let member = message.member;
      message.channel.send(`WARN:\n\nПричина: реклама\n\nВыдан: Azura\n\nДля безопасности выдан мут. Чтобы снять, напишите в #рестрикт`);
      member.addRole(mute);
    owner.send("Muted");
  }; 
});


client.on("message", async message => {
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


  if(message.content === "z.take Пробный кодер") {
    if(curxp > 350){
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

  fs.writeFile("./data/jsons/xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
      });
});

//
//
//

client.on("message", async message => {

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;


  if(message.content === "z.take Начинающий") {
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

});

//
//
//

client.on("message", async message => {

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;


  if(message.content === "z.take Бывалый") {
    if(curxp > 750){
      let coder = message.guild.roles.find(role => role.name === "Бывалый");
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

});

//
//
//

client.on("message", async message => {

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;


  if(message.content === "z.take Интеллигент") {
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

});

//
//
//

client.on("message", async message => {

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;


  if(message.content === "z.take Разбирающийся") {
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
  }

});

//
//
//

client.on("message", async message => {

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;


  if(message.content === "z.take Шарющий") {
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

});

//
//
//

client.on("message", async message => {

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;


  if(message.content === "z.take Понимает язык") {
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

});

//
//
//

client.on("message", async message => {

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;


  if(message.content === "z.take Профессионал") {
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

});

//
//
//

client.on("message", async message => {

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;


  if(message.content === "z.take С языком на ты") {
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

});

//
//
//

client.on("message", async message => {

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;


  if(message.content === "z.take Как пять пальцев") {
    if(curxp > 4000){
      let coder = message.guild.roles.find(role => role.name === "Как пять пальцев");
      let member = message.member;
      if(message.member.roles.has(coder.id)) {
        message.channel.send(`Вы уже получали роль, ${message.author.username}`)
      } else {
        member.addRole(coder).catch(console.err);
        message.channel.send(`Роль "С языком на ты" выдана пользователю ${message.author.username}. Поздравляем с максимальным уровнем!`)
      };
    } else {
      message.channel.send(`Недостаточно поинтов. Необходимо 4000 поинтов. У вас ${curxp} поинтов`)
    };
  }

});

client.on("message", async message => {
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;

  if(message.content === "z.points"){
    const embed = new Discord.RichEmbed()
    .setTitle(`Профиль пользователя ${message.author.username}`)
    .setColor("#00FF00")
    .setDescription(`Ваше количество поинтов: ${curxp} поинтов.`)
    .setFooter("Чтобы заработать больше поинтов, проявляйте больше актив на сервере");
    message.channel.send(embed)
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
  if(message.content === "z.res") {
    if(message.author.id === "339462715917729792") {
      let used = process.memoryUsage().rss / 1024 / 1024;
      const embed = new Discord.RichEmbed()
      .setTitle("Azura Statistic")
      .setColor("RANDOM")
      .setDescription(`${Math.round(used * 100) / 100} МБ / 500 МБ`)
      .addField("Shards", `2\nMain: x\nRoses Bloom: ${Math.round(used * 100) / 100 + 5} mb / 500`);
      message.channel.send(embed);
      } else {
    message.channel.send("Доступ запрещен.");
  };
 };
});

client.on("message", (message) => 
{
  if(message.content === "z.pron")
  {
    request('https://nekos.life/api/v2/img/neko', function (error, response, body) {
     let pr = JSON.parse(body);
      let embed = new Discord.RichEmbed()
      .setTitle("Azura's Body")
      .setColor("RANDOM")
      .setImage(pr['url'])
      .setTimestamp();
      porn.send(embed);
    });
  };
  
  if(message.content === "z.pron automatic")
  {
   let automatic = setInterval(function()
   {
      request('https://nekos.life/api/v2/img/neko', function (error, response, body) {
     let pr = JSON.parse(body);
      let embed = new Discord.RichEmbed()
      .setTitle("Azura's Body")
      .setColor("RANDOM")
      .setImage(pr['url'])
      .setTimestamp();
      porn.send(embed);
    });
   }, 15000);
  };
 });
 
client.on("message", async message => {
   if(message.content === "z.take")
   {
    const embed = new Discord.RichEmbed()
    .setTitle("Azura's Roles")
    .setColor("#00FF00")
    .setDescription("В настоящее время имеется небольшое кол-во ролей.\n\nПробный кодер - 350 поинтов\n\nНачинающий - 500 поинтов\n\nБывалый - 750 поинтов\n\nИнтеллигент - 1230 поинтов\n\nРазбирающийся - 1510 поинтов\n\nШарющий - 1800 поинтов\n\nПонимает язык - 2100 поинтов\n\nПрофессионал - 2400 поинтов\n\nС языком на ты - 2800 поинтов\n\nКак пять пальцев - 4000 поинтов")
    .setFooter("Поинты можно получить проявляя актив на сервере.")
    message.channel.send(embed)
  };
});



                                           
//
//
//LOGIN
//
//


client.login(login);
