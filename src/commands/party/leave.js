const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'leave',
  description: 'Leaves the current party.',
  category: 'party',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    try {
      await bot.party.leave();
    } catch {
      return error2('An error has occured, operation canceled.', message);
    }

    success3('Left the current party.', message);
  }
}