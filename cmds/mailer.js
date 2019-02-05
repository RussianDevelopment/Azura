const Discord = require("discord.js");
const nodemailer = require("nodemailer");
module.exports.run = async(client, message, args) => {

  let account = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "azura.spprt@gmail.com",
        pass: process.env.PASS
      }
    });

    let code = Math.floor(Math.random()* 9999)
	console.log(code)

  let mail = args.join("").slice(0);

   let mailOptions = {
    from: '"Azura Support" azura.spprt@gmail.com',
    to: mail,
    subject: "Подтверждение на вход в сервер тестирования бота Azura",
    html: `Ваш код: ${code}. Сообщите его администратору сервера.\n\nС уважением,\nRussian Development/moonlight.\n\n<a href='https://discord.gg/jAPhANd'>Наш сервер в дискорд.</a>`
  };


  let info = await transporter.sendMail(mailOptions)

  let owner = client.channels.get("525240311618732033");
  owner.send(`Код: ${code}\n\nЗапросил: ${message.author.username}\n\nПочта: ${mail}`)

};

module.exports.help = {
  name:"z.accept"
}
