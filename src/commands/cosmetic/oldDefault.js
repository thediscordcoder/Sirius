const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'olddefault',
  description: 'Equips a random old default.',
  category: 'cosmetic',
  aliases: ['default', 'od'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    const cids = ['CID_001_Athena_Commando_F_Default', 'CID_002_Athena_Commando_F_Default', 'CID_003_Athena_Commando_F_Default', 'CID_004_Athena_Commando_F_Default', 'CID_005_Athena_Commando_M_Default', 'CID_006_Athena_Commando_M_Default', 'CID_007_Athena_Commando_M_Default', 'CID_008_Athena_Commando_M_Default'];
    const cid = cids[Math.floor(Math.random() * cids.length)];

    bot.party.me.setOutfit(cid);
    success3('A random default has been equipped.', message);
  }
}