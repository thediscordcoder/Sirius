const { success2, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'eid',
  description: 'Equip any emote by ID using parameters.',
  category: 'cosmetic',
  usage: '<eid>',
  example: 'EID_Floss',

  run: async (client, bot, message, args, getCosmetic) => {
    const cosmetic = args[0];
    if (!cosmetic || cosmetic.length < 4) return error2('Please provide an EID.', message);

    bot.party.me.setEmote(cosmetic);
    success2(cosmetic, message);
  }
}