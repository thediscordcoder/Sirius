const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'marauder',
  description: 'Equips a random marauder skin.',
  category: 'cosmetic',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    const marauders = ['CID_NPC_Athena_Commando_M_MarauderHeavy', 'CID_NPC_Athena_Commando_M_MarauderElite', 'CID_NPC_Athena_Commando_M_MarauderGrunt'];
    const marauder = marauders[Math.floor(Math.random() * marauders.length)];

    bot.party.me.setOutfit(marauder);
    success3('A random marauder has been equipped.', message);
  }
}