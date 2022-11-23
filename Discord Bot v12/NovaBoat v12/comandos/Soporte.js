const Discord = require('discord.js');

module.exports = {
  name: "soporte",
  alias: ["support"],

  execute: (client, message, args) => {

    const embed = new Discord.MessageEmbed()

    .setTitle("Servidor de Soporte NovaBoat")
    .setDescription("Aquí tienes el servidor de soporte de NovaBoat")
    .setThumbnail("https://media.discordapp.net/attachments/930562654425202750/932710800114728970/istockphoto-1168197906-612x612-removebg-preview.png?width=400&height=400")
    .addField("Soporte", "Link para [[Soporte]](https://www.memegenerator.es/meme/31265333)")
    .setFooter("Soporte NovaBoat")
    .setColor("BLUE")

    message.channel.send(embed)
  }
}