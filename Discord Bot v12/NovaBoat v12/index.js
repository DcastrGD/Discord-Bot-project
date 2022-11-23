const Discord = require('discord.js');
const { Client, MessageMentions } = require('discord.js');

const client = new Discord.Client({ ws: { properties: { $browser: "Discord Android" } } })

const ms = require('ms');
const msg = require('msg')

const fs = require('fs');
let { readdirSync } = require('fs');

const async = require('async')

client.commands = new Discord.Collection();
const commandFile = fs
  .readdirSync('./comandos')
  .filter(file => file.endsWith('.js'));

for (const file of commandFile) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

//-------------PREFIX MAS EL CLIENTE ENCENDEDOR-------------------//

client.on('message', message => {
  let prefix = 'n/';

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  //-------------------------------------------------------------------------//

//-------------------------COMANDOS PARA INDEX------------------------------------//
//------------------------------------------------------------------------------//

//---------------------------------------------------------------------------//
  if (command === 'ping') {

    let ping = Math.floor(message.client.ping);

    message.channel.send(":ping_pong: Pong!")
      .then(m => {

        m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);

      });

  }
//---------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
 if (command === 'uptime') {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        const embed = new Discord.MessageEmbed()
           .setTitle(`⏱ | Tiempo del bot activo`, true)
           .addField("Días", `${days}`, true)
           .addField("Horas", `${hours}`, true)
           .addField("Minutos", `${minutes}`, true)
           .addField("Segundos", `${seconds}`, true)
           .setColor("BLUE")
           .setFooter("El bot tiene reinicios de 5 minutos")
       message.channel.send(embed);
    }
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
   if(command === 'kick' ){

    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');

    	var perms = message.member.hasPermission('ADMINISTRATOR');
		if (!perms)
			return message.channel.send('No tienes los suficientes permisos')
    
    if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('Escribe una razón, `n/kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No puedo expulsar al usuario mencionado.');
     
    message.guild.member(user).kick(razon);
    message.channel.send(`**${user.username}**, fue expulsado del servidor, **Razón:** **${razon}.** `);

}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
  if (command === "serverinfo" ) {
var server = message.guild;

const embed = new Discord.MessageEmbed()
.setTitle("**📚 | ServerInfo**")
.setDescription("**Informacion del servidor actualmente**")
.setThumbnail(server.iconURL())
.setAuthor(server.name, server.iconURL())
.addField(':id: | **ID del servidor**', server.id, true)
.addField('🗓 | **Fecha de creación**',`${server.joinedAt}`)
.addField("🌏 | **Región**", message.guild.region, `${server.region}`)
.addField("⚜️ | **Dueño del servidor**",`${server.owner.user}`)
.addField(":id: | **ID del dueño**",`${server.ownerID}`)
.addField(`🗂 | **Canales** [${server.channels.cache.size}]`, `Categoria: ${server.channels.cache.filter(x => x.type === "category").size} texto: ${server.channels.cache.filter(x => x.type === "text").size} voz: ${server.channels.cache.filter(x => x.type === "voice").size}`, true)

.addField('**👥 | Miembros**', server.memberCount, false)
.addField("🤖 | **Bots**",`${message.guild.members.cache.filter(m => m.user.bot).size}`)
.addField('🌀 | **Emojis**',message.guild.emojis.cache.size)
.addField('💕 | **Boosters**',message.guild.premiumSubscriptionCount.toString())
.addField('⚠️ | **Nivel de verificación**',`${server.verificationLevel}`)
.addField('🎫 | **Roles**', server.roles.cache.size,true)
.setColor("BLUE")
.setFooter('Solicitado por: ' +message.member.displayName, message.author.avatarURL())
message.channel.send(embed);
} 
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
if(command === `avatar`) {
   let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 
    const avatar = new Discord.MessageEmbed()
.setDescription(`[Descargar Avatar](${user.displayAvatarURL({
        format: 'png',
        dynamic: true
    })})`)
.setImage(user.displayAvatarURL({dynamic: true, size : 1024 }))
.setTitle('Pedido por: ' +message.member.displayName)
.setColor("RANDOM")
message.channel.send(avatar)
}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
  if (command === "phcomment"){ 

message.delete()

let txt = args.join('%20');  

if (!txt) return message.channel.send("Olvidaste colocar los argumentos.") 
	
let autor = message.author; 

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png') 

message.channel.send(attachment)
  }
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
  if (command === "tweet"){  

message.delete() 
const texto = args.join(" ")
if(!texto) return message.channel.send("No has ingresado un texto")

if(texto.length >= 30) return message.channel.send("Para evitar problemas el texto no puede superar los 30 caracteres")

let txt = args.join('%20'); 
	
const embed2 = new Discord.MessageEmbed() 
.setTitle(`ERROR`)
.setDescription(`No has colocado ningun argumento.`)
.setColor(`RED`)
if (!txt) return message.channel.send(embed2) 
	
let autor = message.author; 

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=tweet&username=${autor.username}&text=${txt}&raw=1`,'logo.png') 

message.channel.send(attachment)	

} 
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
if (command === "serverbot") { 
    let embed = new Discord.MessageEmbed() 
      .setTitle(`Estoy en ${client.guilds.cache.size} Servers !`)

      .setDescription(`${client.guilds.cache.map(r => r.name).join(". \n\n")}`)

      .setColor("RANDOM")
    message.reply(embed) 
  }
//--------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------//
if(message.content.startsWith(prefix + "randomuser")) {
  
  message.delete()
  const embed = new Discord.MessageEmbed()
    .setDescription('Usuario: ' + message.guild.members.cache.random().displayName) 
    .setColor("RANDOM")
message.channel.send(embed)
}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

  let cmd = client.commands.find(
    c => c.name === command || (c.alias && c.alias.includes(command))
  );
  if (cmd) {
    cmd.execute(client, message, args);
  }

});
//--------------------------------------------------------------------------------//

//-----------------------------ESTADO DEL BOT------------------------------//
const array = [ 
  {
    name: `Buenos Dias`, 
    type: `PLAYING` 
  },
  {
    name: `n/help`, 
    type: `WATCHING`
  }
]
    setInterval(() => {
        function presence() {
             client.user.setPresence({
              status: 'idle',
                activity: array[Math.floor(Math.random() * array.length)], 
            });
        }
        presence();
    }, 60000);
//-------------------------------------------------------------------------------//

//-----------------------TOKEN DEL BOT---------------------------------------------//

client.login("") // Poner tu token
                