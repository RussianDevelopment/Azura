const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
const fs = require("fs");
const nodemailer = require("nodemailer");
let reg = require("./data/reg.json");
let prefix = "";

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
  console.log(`AZURA\n\nBot developers: Ripple & Fluiser\n\nServers: ${client.guilds.size}`);
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
  if(message.content === "z.res") {
    if(message.author.id === "339462715917729792") {
      let used = process.memoryUsage().rss / 1024 / 1024;
      const embed = new Discord.RichEmbed()
      .setTitle("Azura Statistic")
      .setColor("RANDOM")
      .setDescription(`${Math.round(used * 100) / 100 МБ/ 500 МБ`)
      .addField("Shards", "1");
      message.channel.send(embed);
      } else {
    message.channel.send("Доступ запрещен.");
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
