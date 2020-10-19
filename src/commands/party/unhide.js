const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'unhide',
  description: 'Unhides all party members except for the client.',
  category: 'party',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!bot.party.me.isLeader) return error2('I must be party leader in order to unhide all the party members.', message);

    bot.party.hideMembers(false);
    success3('Stopped hiding all the party members.', message);

  }
}