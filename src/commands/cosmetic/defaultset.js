const { success3 } = require('../../utils/functions.js');
const config = require('../../config.js');

module.exports = {
  name: 'defaultset',
  description: 'Equips the set provided in the config.',
  category: 'cosmetic',
  aliases: ['ds'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit(config.fortnite.cid);
    bot.party.me.setBackpack(config.fortnite.bid);
    bot.party.me.setEmote(config.fortnite.eid);
    bot.party.me.setPickaxe(config.fortnite.pickaxe_id);
    success3('Default set has been equipped!', message);
  }
}