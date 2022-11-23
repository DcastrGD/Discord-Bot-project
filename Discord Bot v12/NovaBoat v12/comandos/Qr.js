
const Discord = require('discord.js');
  
module.exports = {
  name: "qrcode",
  alias: ["qr"],

  execute: async (client, message, args) => {

	let text = args.join(" ");
if(!text) {
  return message.channel.send("Debes especificar un texto para generar.");
}
    
let pleaseWait = await message.channel.send("Espera un momento...");
        
let embed = new Discord.MessageEmbed()
.setTitle("Aquí está tu codigo QR")
.setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.replace(new RegExp(" ", "g"), "%20")}`)
.setColor('GREEN');

message.channel.send(embed).then(() => pleaseWait.delete());
}}