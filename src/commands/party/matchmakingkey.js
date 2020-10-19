const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'matchmakingkey',
  description: 'Sets the custom matchmaking key.',
  category: 'party',
  aliases: ['mmkey', 'smm'],
  usage: '<key>',
  example: 'abcd1234',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!bot.party.me.isLeader) return error2('I must be party leader in order to change the matchmaking key', true);
    const key = args.slice(0).join(' ');
    if (!key) return error2('Please provide a matchmaking key.', message);

    try {
      await bot.party.setCustomMatchmakingKey(key);
      success3(`The matchmaking key has been set to ${key}.`, message);
    } catch {
      error2(`An error occured while trying to set the matchmaking key to ${key}.`);
    }
  }
}