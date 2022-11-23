const Discord = require('discord.js');

module.exports = {
  name: "comandos",
  alias: ["commands"],

  execute(client, message, args) {
    
    var server = message.guild;
    const embed = new Discord.MessageEmbed()

      .setTitle(" ⚒  | Panel de Comandos")
      .setThumbnail(server.iconURL())
      .addField("🏷 Información [6]", "`user`, `uptime`, `serverinfo`, `botinfo`, `avatar`, `roleinfo`", false)
      .addField("⚙️ Configuración [0]", "Proximamente", false)
      .addField("🔒 Moderación [2]", "`kick`, `clear`", false)
      .addField("📑 Texto [8]", "`say`, `ping`, `poll`, `qrcode`, `tweet`, `reportar`, `randomuser`, `invite`", false)
      .addField("🎲 Utilidad [3]", "`8ball`, `buscaminas`, `hack`", false)
      .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
      .setTimestamp()
      .setColor("BLUE")
    message.channel.send(embed)
  }
}