const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'shutdown',
  description: 'Shuts the client down.',
  category: 'client',
  aliases: ['kill'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    try {
      await bot.logout();
    } catch {
      return error2('An error has occured trying to log off the Fortnite client, operation canceled.', message);
    }

    success3('Fortnite client has been shut down, attempting to destroy Discord client..', message);
    client.destroy();
    console.log('[SIRIUS] [INFO]', 'Thank you for using Sirius!');
    process.exit();
  }
}