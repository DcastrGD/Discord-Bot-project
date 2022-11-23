const Discord = require('discord.js')

module.exports = {
  name: "reportar",
  alias: ["report"],
  
  execute: async (client, message, args) => {
    message.delete()
    let channel = client.channels.cache.get ('931313523940794429');
    let user = message.author;
    let reportar = args[0];
    if(!reportar) return message.channel.send(`**Envia un reporte o sugerencia al desarrollador!**`)
    let reason = args.slice(1).join (' ')
    if(!reason) return message.channel.send('**Envia la razon')
    const embed = new Discord.MessageEmbed()
    .setTitle('**Reporte/Sugerencia Nueva!**')
    .setDescription('Se ha abierto un nuevo reporte!')
    .addField("**Nombre del usuario: ** " , `${message.author.username}`)
    .addField("ID del usuario: ", `${message.author.id}`)
    .addField("Comando erroneo", `${reportar}`)
    .addField("Razon del reporte", reason)
    .setThumbnail('https://media.discordapp.net/attachments/931137859304452156/932625575489732628/kisspng-vector-graphics-gear-computer-icons-image-gasend-5b6ddb509a1539.4694732315339262246311-removebg-preview.png?width=527&height=468')
    .setColor("RANDOM")
    .setFooter('Reporte enviado por ' +message.author.username)

    channel.send(embed)
    .then(m => {
      m.react("🟩")
      m.react("🟥")
    })

    message.reply('**Tu reporte ha sido enviado!**')
      .then(msg => {
        msg.delete({ timeout: 5000});
        
      })

  }
}