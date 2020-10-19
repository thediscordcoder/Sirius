const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'sitout',
  description: 'Makes the client sitout.',
  category: 'party',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setSittingOut(true);
    success3('Sitting Out!', message);
  }
}