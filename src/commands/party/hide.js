const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'hide',
  description: 'Hides all party members except for the client.',
  category: 'party',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!bot.party.me.isLeader) return error2('I must be party leader in order to hide all the party members.', message);

    bot.party.hideMembers(true);
    success3('All party members have been hidden.', message);

  }
}
