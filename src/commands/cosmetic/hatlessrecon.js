const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'hatlessrecon',
  description: 'Equips the no hat variant of Recon Expert',
  category: 'cosmetic',
  aliases: ['nohatrecon'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_022_Athena_Commando_F', [{ channel: 'Parts', variant: 'Stage2' }]);
    success3('Equipped Recon Expert with No Hat variant.', message);
  }
}