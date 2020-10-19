const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'send',
  description: 'Send a message to the party chat.',
  category: 'party',
  aliases: ['say'],
  usage: '<content>',
  example: 'Hello! I\'m a real bot!',

  run: async (client, bot, message, args, getCosmetic) => {
    const content = args.slice(0).join(' ');
    if (!content) return error2('Please provide content to send.', message);

    bot.party.sendMessage(content);
    success3('Successfully sent message!', message);
  }
}