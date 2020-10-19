const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'hologram',
  description: 'Equips the Hologram skin from the Star Wars event.',
  category: 'cosmetic',
  aliases: ['holo'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_VIP_Athena_Commando_M_GalileoGondola_SG');

    success3('Equipped the Hologram skin from the Star Wars event!', message);
  }
}