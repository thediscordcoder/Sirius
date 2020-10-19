const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'level',
  description: 'Sets the level of the client.',
  category: 'general',
  aliases: ['l'],
  usage: '<level>',
  example: '100',

  run: async (client, bot, message, args, getCosmetic) => {
    const level = args[0];
    if (!level || isNaN(level)) return error2('Please provide a level; level is not a number.', message);

    bot.party.me.setLevel(parseInt(level));
    success3(`Level has been set to **${level}**.`, message);
  }
}