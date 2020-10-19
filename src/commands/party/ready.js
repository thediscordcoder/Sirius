const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'ready',
  description: 'Sets the readiness of the client.',
  category: 'party',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setReadiness(true);
    success3('Ready!', message);
  }
}