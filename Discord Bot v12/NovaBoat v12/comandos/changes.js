const Discord = require('discord.js');

module.exports = {
  name: "change",
  alias: ["cambios"],


  execute: (client, message, args) => {

    const embed = new Discord.MessageEmbed()

    .setTitle("Ultimos cambios y actualizaciones del bot")
    .setDescription("Cada semana se irá infotmanado de nuevas cosas.")
    .addField("En proceso", "En proceso")
    .setFooter("En proceso")
    .setColor("BLUE")

    message.channel.send(embed)
  }
}