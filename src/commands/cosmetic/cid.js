const { success2, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'cid',
  description: 'Equip any skin by ID using parameters.',
  category: 'cosmetic',
  usage: '<cid>',
  example: 'CID_028_Athena_Commando_F',

  run: async (client, bot, message, args, getCosmetic) => {
    const cosmetic = args[0];
    if (!cosmetic || cosmetic.length < 4) return error2('Please provide a CID.', message);

    bot.party.me.setOutfit(cosmetic);
    success2(cosmetic, message);
  }
}