const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Sends the connection between the client and Discord.',
  category: 'info',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    const ping = client.ws.ping;
    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Client Connection')
    .addField('Discord', `\`${ping} ms\``, true)

    const msg = await message.channel.send('Ping?');

    const Ping = msg.createdTimestamp - message.createdTimestamp;
    embed.addField('Client', `\`${Ping} ms\``, true);

    msg.edit(null, embed);
  }
}