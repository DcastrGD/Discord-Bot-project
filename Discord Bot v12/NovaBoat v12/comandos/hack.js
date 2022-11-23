const Discord = require('discord.js');

module.exports = {
  name: "hack",
  alias: ["hackeo"],
  
  execute: async (client, message, args) => {

    let bot = client.user.username;
    let botavatar = client.user.avatarURL();
    
    let usuario = message.author;
    let usuarioavatar = message.author.avatarURL();
    
    let usuarioahackear = message.mentions.users.first();
    if(!usuarioahackear) return message.channel.send("¡Debes mencionar a un usuario!")
    
    let nombres = ["SantaClaus", "Rodolfo", "Benito Camela", "Kein Becil"]
    let ips = ["235.167.118.78", "185.237.237.47", "104.44.140.116", "251.97.130.852", "161.39.172.100"]
    let correos = ["SantaPro123@gmail.com", "Kein564@gmail.com", "Benito12@gmail.com"]
    let contraseñas = ["ImRodolfo", "Benito", "Santaclaus1", "KeinPro12"]
    
    const embed = new Discord.MessageEmbed()
    .setAuthor(bot, botavatar) 
    .setTitle("🔐 | Comando Hack") 
    .addField("Quien te hackeo:", usuario.tag) 
    .setThumbnail("https://www.pandasecurity.com/es/mediacenter/src/uploads/2016/03/pandasecurity-Who-are-the-most-famous-hackers-in-history.jpg")
    .addField("Nombre:", nombres[Math.floor(Math.random() * nombres.length)]) 
    .addField("Dirección IP:", ips[Math.floor(Math.random() * ips.length)]) 
    .addField("Correó electronico:", correos[Math.floor(Math.random() * correos.length)]) 
    .addField("Contraseña:", contraseñas[Math.floor(Math.random() * contraseñas.length)]) 
    .setColor("GREEN") 
    .setFooter("Hackeado")
   
    message.author.avatarURL()
    message.channel.send(embed) 
  }}