const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'unready',
  description: 'Sets the readiness of the client.',
  category: 'party',
  aliases: ['sitin'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setReadiness(false);
    success3('Unready!', message);
  }
}