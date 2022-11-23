const Discord = require('discord.js');

module.exports = {
	name: 'user',
	alias: ['userinfo'],

	execute(client, message, args) {
let userm = message.mentions.users.first()
    if(!userm){
      var user = message.author;
      
        const embed = new Discord.MessageEmbed()
        .setTitle("Información del usuario")
        .setThumbnail('https://cdn.discordapp.com/attachments/926827105398968353/930212685839216720/istockphoto-1168197906-612x612.jpg')
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", false)
        .addField('ID', user.id, false)
        .addField('Estado', user.presence.status, false)
        .addField('Apodo', message.member.nickname, false)
        .addField('Cuenta Creada', user.createdAt.toDateString(), false)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .setColor(0x66b3ff)
        .setTimestamp()
        .setFooter('Solicitado por: ' +message.member.displayName, message.author.avatarURL())
        
       message.channel.send({ embed });
    }else{
      const embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/attachments/926827105398968353/930212685839216720/istockphoto-1168197906-612x612.jpg")
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", false)
      .addField('ID', userm.id, false)
      .addField('Estado', userm.presence.status, false)
      .addField('Apodo', message.member.nickname, false)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
      .setColor(0x66b3ff)
      .setTimestamp()
      .setFooter('Solicitado por: ' +message.member.displayName, message.author.avatarURL())

     message.channel.send({ embed });
    }
    
}}