const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'variants',
  description: 'Equip a skin but with variants.',
  category: 'cosmetic',
  aliases: ['v', 'variant'],
  usage: '<cid> <channel> <variant>',
  example: 'CID_029_Athena_Commando_F_Halloween Material Mat3',

  run: async (client, bot, message, args, getCosmetic) => {
    const [cid, channel, variant] = args;
    if (!cid || !channel || !variant) return error2('Wrong usage.\nCorrect usage: `variants <cid> <channel> <variant>`\nExample: `variants CID_029_Athena_Commando_F_Halloween Material Mat3`', message);

    bot.party.me.setOutfit(cid, [{ channel: channel, variant: variant}]);
    success3(`Equipped **${cid}** with variant **${channel}**, **${variant}**`, message);
  }
}