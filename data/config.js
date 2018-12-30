const Discord = require("discord.js");
exports.login = process.env.TOKEN;
exports.modules = new Discord.WebhookClient(process.env.ID, process.env.HOOK);
