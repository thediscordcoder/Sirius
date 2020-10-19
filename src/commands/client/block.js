const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'block',
  description: 'Blocks a friend.',
  category: 'client',
  usage: '<friend>',
  example: 'Azlxy.',

  run: async (client, bot, message, args, getCosmetic) => {
    const friend = bot.friends.find(x => x.displayName === args.slice(0).join(' '));
    if (!friend) return error2('Please provide a friend to block.', message);

    try {
      await friend.block();
      success3(`${friend.displayName} has been blocked.`, message);
    } catch {
      error2(`An error occured while trying to block ${friend.displayName}.`, message);
    }
  }
}