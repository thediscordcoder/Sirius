const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'join',
  description: 'Join\'s a public party.',
  category: 'party',
  usage: '<user>',
  example: 'Azlxy.',

  run: async (client, bot, message, args, getCosmetic) => {
    const friend = bot.friends.find(x => x.displayName === args.slice(0).join(' '));
    if (!friend) return error2('Please provide a friend to join.', message);

    try {
      await friend.joinParty();
      success3(`Joined ${friend.displayName}'s party.`, message);
    } catch {
      error2(`An error occured while trying to join ${friend.displayName}'s party.`, message);
    }
  }
}