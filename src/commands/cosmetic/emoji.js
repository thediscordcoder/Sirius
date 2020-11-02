const { success, error, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'emoji',
  description: 'Equip any emoji by name using parameters.',
  category: 'cosmetic',
  usage: '<emoji>',
  example: '1 HP',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!args[0]) return error2('Please provide an emoji.', message);
    const cosmetic = await getCosmetic(args.slice(0).join(' '), 'AthenaEmoji');

    if (cosmetic.status === 404) return error('emoji', message);

    bot.party.me.setEmoji(cosmetic.data.id);
    success(cosmetic, message);
  }
}