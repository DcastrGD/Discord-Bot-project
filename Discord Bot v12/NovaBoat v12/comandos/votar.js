const Discord = require ('discord.js');

module.exports = {
  name: "encuesta",
alias: ["poll"],

execute (client, message, args){

  message.delete()

     	var perms = message.member.hasPermission('ADMINISTRATOR');
		if (!perms)
			return message.channel.send('No tienes los suficientes permisos')
    

    
if(!args[0]) return message.channel.send('n!poll <pregunta>')
let encuesta = args.join(' ').split(' | ')

if(encuesta.length !== 1) return message.channel.send('n!poll <pregunta>')

let embed = new Discord.MessageEmbed()
.setTitle("📊 | Nueva Encuesta")
.setDescription(encuesta[0])

.setFooter("Nueva Encuesta")
.setColor("RANDOM")

message.channel.send(embed)

.then(m => {
    m.react("📈");
    m.react("📉");

  });
}}
