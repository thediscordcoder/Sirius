const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'pinkghoul',
  description: 'Equips the pink variant of Ghoul Trooper',
  category: 'cosmetic',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_029_Athena_Commando_F_Halloween', [{ channel: 'Material', variant: 'Mat3' }]);
    success3('Equipped Ghoul Trooper with Pink variant.', message);
  }
}