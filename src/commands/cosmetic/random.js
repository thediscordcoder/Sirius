const { success3, error2 } = require('../../utils/functions.js');
const fetch = require('node-fetch');

async function getRandomCosmetic(backendValue) {
  const url = 'https://fortnite-api.com/v2/cosmetics/br';

  const cosmetics = fetch(url).then(r => r.json()).then(res => {
    return res.data.filter(c => c.type.value.toLowerCase() === backendValue);
  });
  
  return cosmetics;
}

module.exports = {
  name: 'random',
  description: 'Select\'s a random cosmetic.',
  category: 'cosmetic',
  aliases: ['r'],
  usage: '<cosmetic>',
  example: 'skin',

  run: async (client, bot, message, args, getCosmetic) => {
    let backendValue;

    const cosmetic = args[0];

    switch (cosmetic.toLowerCase()) {
      case 'outfit': backendValue = 'outfit'; break;
      case 'backpack': backendValue = 'backpack'; break;
      case 'emote': backendValue = 'emote'; break;
      case 'pickaxe': backendValue = 'pickaxe'; break;
      case 'emoji': backendValue = 'emoji'; break;
      default: {
        return error2('Invalid cosmetic given.\nPlease choose between `outfit`, `backpack`, `emote`, `pickaxe`, `emoji`', message);
      }
    }

    const c = await getRandomCosmetic(backendValue);
    const cc = c[Math.floor(Math.random() * c.length)];

    if (backendValue === 'outfit') {
      bot.party.me.setOutfit(cc.id);
    } else if (backendValue === 'backpack') {
      bot.party.me.setBackpack(cc.id);
    } else if (backendValue === 'emote') {
      bot.party.me.setEmote(cc.id);
    } else if (backendValue === 'pickaxe') {
      bot.party.me.setPickaxe(cc.id);
    } else if (backendValue === 'emoji') {
      bot.party.me.setEmoji(cc.id);
    }

    success3(`Equipped **${cc.name}** [**${cc.id}**].`, message);
  }
}