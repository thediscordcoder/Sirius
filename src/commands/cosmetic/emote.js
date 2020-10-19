const { success, success3, error } = require('../../utils/functions.js');

module.exports = {
  name: 'emote',
  description: 'Equip any emote by name using parameters.',
  category: 'cosmetic',
  aliases: ['em'],
  usage: '<emote>',
  example: 'Floss',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!args[0]) {
      bot.party.me.clearEmote();
      success3('Stopped emoting.', message);
    } else {
    const cosmetic = await getCosmetic(args.slice(0).join(' '), 'AthenaDance');

    if (cosmetic.status === 404) return error('emote', message);

    bot.party.me.setEmote(cosmetic.data.id);
    success(cosmetic, message);
    }
  }
}