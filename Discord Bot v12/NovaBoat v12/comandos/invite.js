const Discord = require('discord.js');

module.exports = {
  name: "invitar",
  alias: ["invite"],

  execute: (client, message, args) => {

    const embed = new Discord.MessageEmbed()

    .setTitle("Invitación de NovaBoat")
    .setDescription("Aquí tienes la invitación del bot espero que disfrutes! >.<")
    .setThumbnail("https://media.discordapp.net/attachments/930562654425202750/932710800114728970/istockphoto-1168197906-612x612-removebg-preview.png?width=400&height=400")
    .addField("Invitación", "Link para [[Invitar]](https://discord.com/api/oauth2/authorize?client_id=846834734881570826&permissions=8&scope=bot)")
    .setFooter("Gracias por invitar el bot :D")
    .setColor("BLUE")

    message.channel.send(embed)
  }
}