const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'henchman',
  description: 'Equips a random henchman skin.',
  category: 'cosmetic',
  aliases: ['hman'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    const henchmans = ['CID_794_Athena_Commando_M_HenchmanBadShorts_D', 'CID_NPC_Athena_Commando_F_HenchmanSpyDark', 'CID_791_Athena_Commando_M_HenchmanGoodShorts_D', 'CID_780_Athena_Commando_M_HenchmanBadShorts', 'CID_NPC_Athena_Commando_M_HenchmanGood', 'CID_692_Athena_Commando_M_HenchmanTough', 'CID_707_Athena_Commando_M_HenchmanGood', 'CID_792_Athena_Commando_M_HenchmanBadShorts_B', 'CID_793_Athena_Commando_M_HenchmanBadShorts_C', 'CID_NPC_Athena_Commando_M_HenchmanBad', 'CID_790_Athena_Commando_M_HenchmanGoodShorts_C', 'CID_779_Athena_Commando_M_HenchmanGoodShorts', 'CID_NPC_Athena_Commando_F_RebirthDefault_Henchman', 'CID_NPC_Athena_Commando_F_HenchmanSpyGood', 'CID_706_Athena_Commando_M_HenchmanBad', 'CID_789_Athena_Commando_M_HenchmanGoodShorts_B'];
    const henchman = henchmans[Math.floor(Math.random() * henchmans.length)];

    bot.party.me.setOutfit(henchman);
    success3('A random henchman has been equipped.', message);
  }
}