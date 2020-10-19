const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'purpleskull',
  description: 'Equips the purple glow variant of Skull Trooper',
  category: 'cosmetic',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_030_Athena_Commando_M_Halloween', [{ channel: 'ClothingColor', variant: 'Mat1' }]);
    success3('Equipped Skull Trooper with Purple Glow variant.', message);
  }
}