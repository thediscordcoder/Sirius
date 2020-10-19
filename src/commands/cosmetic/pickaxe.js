const { success, error, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'pickaxe',
  description: 'Equip any pickaxe by name using parameters.',
  category: 'cosmetic',
  aliases: ['pk'],
  usage: '<pickaxe>',
  example: 'Raider\'s Revenge',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!args[0]) return error2('Please provide a pickaxe.', message);
    const cosmetic = await getCosmetic(args.slice(0).join(' '), 'AthenaPickaxe');

    if (cosmetic.status === 404) return error('pickaxe', message);

    bot.party.me.setPickaxe(cosmetic.data.id);
    success(cosmetic, message);
  }
}