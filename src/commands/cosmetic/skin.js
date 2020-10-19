const { success, error, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'skin',
  description: 'Equip any skin by name using parameters.',
  category: 'cosmetic',
  aliases: ['s'],
  usage: '<skin>',
  example: 'Renegade Raider',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!args[0]) return error2('Please provide a skin.', message);
    const cosmetic = await getCosmetic(args.slice(0).join(' '), 'AthenaCharacter');

    if (cosmetic.status === 404) return error('skin', message);

    bot.party.me.setOutfit(cosmetic.data.id);
    success(cosmetic, message);
  }
}