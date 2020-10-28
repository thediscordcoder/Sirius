const { success2, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'bid',
  description: 'Equip any backpack by ID using parameters.',
  category: 'cosmetic',
  usage: '<bid>',
  example: 'BID_004_BlackKnight',

  run: async (client, bot, message, args, getCosmetic) => {
    const cosmetic = args[0];
    if (!cosmetic || cosmetic.length < 4) return error2('Please provide a BID.', message);

    bot.party.me.setBackpack(cosmetic);
    success2(cosmetic, message);
  }
}