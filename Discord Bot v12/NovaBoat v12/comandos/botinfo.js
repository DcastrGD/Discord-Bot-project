const Discord = require('discord.js');

const moment = require("moment") 
require("moment-duration-format") 
var os = require('os');

module.exports = {
  name: "botinfo",
  alias: ["botinfo"],

  execute: async (client, message, args) => {

    const actividad = moment
      .duration(client.uptime)
      .format(" D [dias], H [hrs], m [mins], s [secs]")
    


    const botinfo = new Discord.MessageEmbed()
      .setAuthor(`Informacion del bot`, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL({ size: 2048 }))
      .setDescription("`Información del bot completa.`")
      .addField(
        "Servidores: ",
        "```diff\n+ " + client.guilds.cache.size + "\n```",
        true
      )
      .addField("Uptime: ", "```\n" + actividad + "\n```", true)
      .addField(
        "RAM:",
        "```fix\n" +
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        "MB\n```",
        true
      )
      .addField("Lenguaje:", '```json\n"JavaScript"\n```', true)
      .addField("Libreria:", "```ini\n[Discord.js v12.5.1]\n```", true)
      .setFooter(`Informacion del bot solicitada por ${message.author.username}`)
      .setColor("BLUE"); 

    message.channel.send(botinfo);
   
  }
}