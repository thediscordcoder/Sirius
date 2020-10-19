const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'invite',
  description: 'Invites someone to the party.',
  category: 'party',
  aliases: ['inv'],
  usage: '<user>',
  example: 'Azlxy.',

  run: async (client, bot, message, args, getCosmetic) => {
    const user = args.slice(0).join(' ');
    if (!user) return error2('Please provide an user.', message);

    try {
      await bot.party.invite(user);
      success3(`${user} has been invited to your party.`, message);
    } catch {
      error2(`An error occured while trying to invite ${user} to the party.`, message);
    }
  }
}