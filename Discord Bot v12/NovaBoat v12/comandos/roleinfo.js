const Discord = require('discord.js');
  
module.exports = {
  name: "roleinfo",
  alias: ["rollinfo"],

execute: async (client, message, args) => {



const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);



 if(!role) return message.channel.send("** ¡Especifica un rol, o pon una id de un rol!**")


 const rol = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/926827105398968353/930212685839216720/istockphoto-1168197906-612x612.jpg')
      .setDescription("**🏷 | Informacion sobre el rol mencionado.**")
      .addField("📌 Nombre:", ` ${role.name}`) 
      .addField(":id: ID del rol:", ` ${role.id}`) 
      .addField(" 👥 Miembros con el Rol:", ` ${role.members.size}`) 
      .addField("🗃 Posición:", ` ${role.rawPosition}`) 
      .addField("🟢 HexColor:", ` ${role.hexColor}`) 
      .addField("🗣 Mencionable:", ` ${role.mentionable}`) 
      .addField("⛓ Separado:", ` ${role.hoist}`) 
      .addField("🖥 Gestionado por el sistema:", ` ${role.managed}`) 
      .setColor("BLUE")
      
      
      message.channel.send(rol);

}}