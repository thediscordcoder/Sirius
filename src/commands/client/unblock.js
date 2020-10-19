const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'unblock',
  description: 'Unblocks a friend.',
  category: 'client',
  usage: '<friend>',
  example: 'Azlxy.',

  run: async (client, bot, message, args, getCosmetic) => {
    const friend = args.slice(0).join(' ');
    if (!friend) return error2('Please provide a friend to block.', message);

    try {
      await bot.unblockFriend(friend);
      success3(`${friend} has been unblocked.`, message);
    } catch {
      error2(`An error occured while trying to unblock ${friend}.`, message);
    }
  }
}