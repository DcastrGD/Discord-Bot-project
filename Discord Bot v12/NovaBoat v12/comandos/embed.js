const Discord = require('discord.js');

module.exports = {
  name: "embed",
  alias: ["embed"],
  
  execute: async (client, message, args) => {
    
   	var perms = message.member.hasPermission('ADMINISTRATOR');
		if (!perms)
			return message.channel.send('No tienes los suficientes permisos')
    
    message.delete()
    
    let grasa = args.join(' ')
    if(!grasa) return message.channel.send("Ejemplo: Titulo $$ Descripcion $$ footer $$ color")
    let texto = grasa.split(" $$ ")
    
    const embed = new Discord.MessageEmbed()
    .setTitle(texto[0])
    .setDescription(texto[1])
    .setFooter(texto[2])
    .setColor(texto[3])
    
    message.channel.send(embed)
  }
  
}