const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ["limpiar"], 

execute (client, message, args){

  const cantidad = args.join(' ');

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("**Hey! No tienes permiso para utilizar este comando!**")

message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "No Tienes Permisos Para Utilizar Este Comando"
      );

    if (!args[0])
      return message.channel.send(`Por Favor, Dame Una Cantidad`);

    if (isNaN(args[0]))
      return message.channel.send(`Por favor, Dame Un Valor Numerico`);

    if (args[0] < 4)
      return message.channel.send(
        `Error al eliminar el mensaje **${args[0]}**, Solo puedo eliminar mensajes a partir de **5**  `
      );

    if (args[0] > 100)
      return message.channel.send(
        `No puedo eliminar mas de 100 mensajes ${args[0]} es el limite de discord`
      );

    let Reason = args.slice(1).join(" ") || "Ninguna razon proporcionada";

    message.channel.bulkDelete(args[0]).then(Message => {
      let embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle(`**🗑 __Mensajes Eliminados__**`)
        .addField(`🛡 Staff`, `**${message.author.tag}**`)
        .addField(`📂 Canal`, `**${message.channel.name}**`)
        .addField(`🛠 Mensajes Eliminados`, `**${Message.size}**`)
        .addField(`📝 Razon?`, `**${Reason}**`)
        .setFooter(`📌 Pedido Por ${message.author.username}`)
        .setTimestamp();
      return message.channel
        .send(embed)
        .then(msg => msg.delete({ timeout: 10000 }));
    });

  
  }};