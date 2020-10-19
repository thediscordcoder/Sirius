const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'removefriend',
  description: 'unfriend',
  category: 'client',
  aliases: ['unfriend'],
  usage: '<user>',
  example: 'Azlxy.',

  run: async (client, bot, message, args, getCosmetic) => {
    const user = bot.friends.find(x => x.displayName === args.slice(0).join(' '));
    if (!user) return error2('Please provide a friend to unfriend.', message);

    try {
      await bot.removeFriend(user.displayName);
      success3(`${user.displayName} has been removed from your friend list.`, message);
    } catch {
      error2(`An error occured while trying to remove ${user.displayName} from your friend list.`, message);
    }
  }
}