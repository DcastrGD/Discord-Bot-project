const Pagination = require('discord-paginationembed');

module.exports = {
  name: "rollusers",
  alias: ["usersroll"],
  
  execute: async (client, message, args) => {
        let rol = message.guild.roles.cache.get(args[0]) || message.mentions.roles.first() 

        if(!rol) return message.channel.send('Menciona o pon la id de un rol. **Las ids de los ususarios no funcionan.**')

let role = message.guild.roles.resolve(rol).members.map(m => m.user.tag).join("\n")
        if(role.length === 0) {
            return message.channel.send(`No se encontraron resultados.`)
           }   
       const FieldsEmbed = new Pagination.FieldsEmbed()
       .setArray([{ word: 'Pulsa para pasar de página' }, { word: ':one:' }])
       .setAuthorizedUsers([message.author.id])
       .setChannel(message.channel)
       .setElementsPerPage(2)
       .setPageIndicator(false)
       .formatField('Continue...', el => el.word);
       FieldsEmbed.embed
  .setTitle(`Se han encontrado ${rol.members.size} usuario(s) con ese rol`)
  .setDescription("```js\n"+role+"```")
  .setColor("BLUE")
       FieldsEmbed.build();
  }}

