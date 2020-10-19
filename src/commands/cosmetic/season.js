const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'season',
  description: 'Equips the tier 100 skin of given season.',
  category: 'cosmetic',
  aliases: ['max'],
  usage: '<season>',
  example: '10',

  run: async (client, bot, message, args, getCosmetic) => {
    let cid; let skin;
    const season = args[0];
    if (!season) return error2('Please provide a season', message);

    switch (season) {
      case '1': {
        skin = 'Renegade Raider';
        cid = 'CID_028_Athena_Commando_F';
        break;
      }
      case '2': {
        skin = 'Black Knight';
        cid = 'CID_035_Athena_Commando_M_Medieval';
        break;
      }
      case '3': {
        skin = 'The Reaper';
        cid = 'CID_084_Athena_Commando_M_Assassin';
        break;
      }
      case '4': {
        skin = 'Omega';
        cid = 'CID_116_Athena_Commando_M_CarbideBlack';
        break;
      }
      case '5': {
        skin = 'Ragnarok';
        cid = 'CID_165_Athena_Commando_M_DarkViking';
        break;
      }
      case '6': {
        skin = 'Dire';
        cid = 'CID_230_Athena_Commando_M_Werewolf';
        break;
      }
      case '7': {
        skin = 'The Ice King';
        cid = 'CID_288_Athena_Commando_M_IceKing';
        break;
      }
      case '8': {
        skin = 'Luxe';
        cid = 'CID_352_Athena_Commando_F_Shiny';
        break;
      }
      case '9': {
        skin = 'Vendetta';
        cid = 'CID_407_Athena_Commando_M_BattleSuit';
        break;
      }
      case '10': {
        skin = 'Ultima Knight';
        cid = 'CID_484_Athena_Commando_M_KnightRemix';
        break;
      }
      case '11': {
        skin = 'Fusion';
        cid = 'CID_572_Athena_Commando_M_Viper';
        break;
      }
      case '12': {
        skin = 'Midas';
        cid = 'CID_694_Athena_Commando_M_CatBurglar';
        break;
      }
      case '13': {
        skin = 'Eternal Knight';
        cid = 'CID_767_Athena_Commando_F_BlackKnight';
        break;
      }
      case '14': {
        skin = 'Tony Stark';
        cid = 'CID_843_Athena_Commando_M_HightowerTomato_Casual';
        break;
      }
      default: {
        return error2('Please choose between a *valid* season, for example 10', message);
      }
    }

    bot.party.me.setOutfit(cid);
    success3(`Skin has been set to **${skin}** [**${cid}**], Season ${season}'s max tier skin.`, message);
  }
}