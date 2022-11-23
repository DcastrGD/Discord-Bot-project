const Discord = require('discord.js');
const { Client, MessageMentions } = require('discord.js');

module.exports = {
  name: "help",
  alias: ["ayuda"],
  
  execute(client, message, args){
    
    var server = message.guild;
    const embed = new Discord.MessageEmbed()
    
    .setTitle("⚒ |  Panel de Ayuda")
    .setThumbnail(server.iconURL())
    .setImage("https://media.discordapp.net/attachments/930562654425202750/935150842615566366/standard-2.gif")
    .setDescription("Hola soy **NovaBoat** un bot Español multifunción y entretenimiento.")
    .addField("Como puedo contactar?", "Puedes contactar pulsando en el link  de [[Coming soom]](Proximamente)")
    .addField("Como puedo invitar vuestro bot?", "Puedes invitarlo pulsando el link  de [[Invitar]](https://discord.com/api/oauth2/authorize?client_id=846834734881570826&permissions=8&scope=bot)")
    .addField("Como puedo ver los comandos?", "Puedes ver los comandos poniendo **n/comandos**")
    .setFooter("NovaBoat help • prefix n/")
    .setTimestamp()
    .setColor("BLUE")
    
    message.channel.send(embed)
    
    
  }
}