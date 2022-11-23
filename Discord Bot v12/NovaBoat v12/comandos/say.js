const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
	name: 'say',
	alias: ['decir'],

	execute(client, message, args) {
	

		var perms = message.member.hasPermission('ADMINISTRATOR');
		if (!perms)
			return message.channel.send('No tienes los suficientes permisos')


		let texto = args.join(' ')
		if (!texto) return message.channel.send('Tienes que escribir algo')
		
		message.delete();

		message.channel.send(texto)
	}
};
