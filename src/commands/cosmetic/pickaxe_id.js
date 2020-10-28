const { success2, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'pickaxe_id',
  description: 'Equip any pickaxe by ID using parameters.',
  category: 'cosmetic',
  aliases: ['pid'],
  usage: '<pickaxe_id>',
  example: 'BID_004_BlackKnight',

  run: async (client, bot, message, args, getCosmetic) => {
    const cosmetic = args[0];
    if (!cosmetic || cosmetic.length < 4) return error2('Please provide a Pickaxe ID.', message);

    bot.party.me.setPickaxe(cosmetic);
    success2(cosmetic, message);
  }
}