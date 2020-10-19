const { success, success3, error } = require('../../utils/functions.js');

module.exports = {
  name: 'backpack',
  description: 'Equip any backpack by name using parameters.',
  category: 'cosmetic',
  aliases: ['bp'],
  usage: '<backpack>',
  example: 'Black Shield',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!args[0]) {
      bot.party.me.clearBackpack();
      success3('Unequipped the current backpack.', message);
    } else {

    const cosmetic = await getCosmetic(args.slice(0).join(' '), 'AthenaBackpack');

    if (cosmetic.status === 404) return error('backpack', message);

    bot.party.me.setBackpack(cosmetic.data.id);
    success(cosmetic, message);
    }
  }
}
