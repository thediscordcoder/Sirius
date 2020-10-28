const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'battlepass',
  description: 'Sets the battlepass level of the client.',
  category: 'general',
  aliases: ['bp'],
  usage: '<level>',
  example: '1000',

  run: async (client, bot, message, args, getCosmetic) => {
    const bp = args[0];
    if (!bp || isNaN(bp)) return error2('Please provide a level; level is not a number.', message);

    bot.party.me.setBattlepass(true, parseInt(bp), 100, 100);
    success3(`Battlepass level has been set to **${bp}**.`, message);
  }
}
