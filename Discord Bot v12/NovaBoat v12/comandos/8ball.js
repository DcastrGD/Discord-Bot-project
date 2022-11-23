const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
	name: '8ball',
	alias: ['8bola'],

	execute(Client, message, args) {
    const texto = args.join(" "); //Capturamos el texto del logro



if(texto.length >= 30) return message.channel.send("Para evitar problemas el texto no puede superar los 30 caracteres")


		let pregunta = args.join(' ');
		if (!pregunta) return message.channel.send('Debes poner tu pregunta');

		let respuestas = [
			'Si',
			'No',
			'Probablemente',
			'No se',
			'Pregunta otra cosa, si',
			'Algun dia'
		];
		let respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];

		const embed = new Discord.MessageEmbed()

			.setTitle('😎 | Animate a Preguntar')
			.setColor('RANDOM')
			.setDescription(`**Pregunta:**
${pregunta} 
			**\nRespuesta:**
${respuesta}`)
			.setTimestamp();

		message.channel.send(embed);
	}
};
