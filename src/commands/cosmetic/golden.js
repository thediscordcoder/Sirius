const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'golden',
  description: 'Equip a golden variant of a skin.',
  category: 'cosmetic',
  aliases: ['g'],
  usage: '<skin>',
  example: 'peely',

  run: async (client, bot, message, args, getCosmetic) => {
    let cid; let name; let variant;
    const skin = args[0];
    if (!skin) return error2('Please provide a skin.', message);

    switch (skin.toLowerCase()) {
      case 'peely': {
        name = 'Peely';
        cid = 'CID_701_Athena_Commando_M_BananaAgent';
        variant = 'Stage4';
        break;
      }

      case 'meowscles': {
        name = 'Meowscles';
        cid = 'CID_693_Athena_Commando_M_BuffCat';
        variant = 'Stage4';
        break;
      }

      case 'tntina': {
        name = 'TNTina';
        cid = 'CID_691_Athena_Commando_F_TNTina';
        variant = 'Stage7';
        break;
      }

      case 'midas': {
        name = 'Midas';
        cid = 'CID_694_Athena_Commando_M_CatBurglar';
        variant = 'Stage4';
        break;
      }

      case 'brutus': {
        name = 'Brutus';
        cid = 'CID_692_Athena_Commando_M_HenchmanTough';
        variant = 'Stage4';
        break;
      }

      case 'skye': {
        name = 'Skye';
        cid = 'CID_690_Athena_Commando_F_Photographer';
        variant = 'Stage4';
        break;
      }

      default: {
        return error2('Please provide a *valid* skin.\nValid skins: `peely, meowscles, tntina, midas, brutus, skye`', message);
      }
    }

    bot.party.me.setOutfit(cid, [{ channel: 'Progressive', variant: variant}], [ 2, 350 ]);
    success3(`Equipped ${name} with golden agent variant.`, message);
  }
}