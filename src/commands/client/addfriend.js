const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'addfriend',
  description: 'Send a friend request to someone.',
  category: 'client',
  aliases: ['add', 'friendrequest'],
  usage: '<user>',
  example: 'Azlxy.',

  run: async (client, bot, message, args, getCosmetic) => {
    const user = args.slice(0).join(' ');
    if (!user) return error2('Please provide an user.', message);

    try {
      await bot.addFriend(user);
      success3(`Friend request has been sent to ${user}.`, message);
    } catch {
      error2(`An error occured while trying to add ${user} as friend.`, message);
    }
  }
}
