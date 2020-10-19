const config = require('../../config.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Shows a list of available commands.',
  category: 'info',
  aliases: ['h'],
  usage: '[command]',
  example: 'skin',

  run: async (client, bot, message, args, getCosmetic) => {
    const prefix = config.discord.prefix;

    const commands = {
      client: client.commands.filter(x => x.category === 'client'),
      party: client.commands.filter(x => x.category === 'party'),
      cosmetic: client.commands.filter(x => x.category === 'cosmetic'),
      general: client.commands.filter(x => x.category === 'general'),
      info: client.commands.filter(x => x.category === 'info')
    }

    let command = client.commands.get(args[0]);
    if (!command) command = client.commands.get(client.aliases.get(args[0]));

    if (command) {
      const cmdEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('Command')
      .setDescription(`
       Name ➟ **${command.name}**
       Description ➟ **${command.description}**
       Category ➟ **${command.category}**
       Aliases ➟ **${command.aliases ? command.aliases.map(x => x).join(', ') : 'None'}**
       Usage ➟ **${command.usage ? command.usage : 'None'}**
       Example ➟ **${prefix}${command.name} ${command.example}**`)
       .setFooter(`Sirius | ${client.commands.size} commands`, 'https://cdn.discordapp.com/attachments/749665296226189312/765248124666511390/unknown.png');
       message.channel.send(cmdEmbed);
    } else {
    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Commands')
    .setDescription(`Here's a list of available commands, use \`${prefix}help <command>\` to view more about a command.`)
    .addField(`Client [${commands.client.size}]`, commands.client.map(x => `\`${x.name}\``).join(', '))
    .addField(`Party [${commands.party.size}]`, commands.party.map(x => `\`${x.name}\``).join(', '))
    .addField(`Cosmetic [${commands.cosmetic.size}]`, commands.cosmetic.map(x => `\`${x.name}\``).join(', '))
    .addField(`General [${commands.general.size}]`, commands.general.map(x => `\`${x.name}\``).join(', '))
    .addField(`Info [${commands.info.size}]`, commands.info.map(x => `\`${x.name}\``).join(', '))
    .setFooter(`Sirius | ${client.commands.size} commands`, 'https://cdn.discordapp.com/attachments/749665296226189312/765248124666511390/unknown.png');
    message.channel.send(embed);
    }
  }
}
