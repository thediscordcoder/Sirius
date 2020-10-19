const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'copy',
  description: 'Copies a party member\'s set.',
  category: 'general',
  aliases: ['c'],
  usage: '[member]',
  example: 'Azlxy.',

  run: async (client, bot, message, args, getCosmetic) => {
    const member = bot.party.members.find(x => x.displayName === args.slice(0).join(' '));
    if (!member) return error2('Please enter a member to copy.', message); 

    const items = {
      outfit: member.outfit,
      backpack: member.backpack,
      emote: member.emote,
      pickaxe: member.pickaxe
    }

    if (items.outfit) await bot.party.me.setOutfit(items.outfit);
    if (items.backpack) await bot.party.me.setBackpack(items.backpack);
    if (items.pickaxe) await bot.party.me.setPickaxe(items.pickaxe);
    if (items.emote) await bot.party.me.setEmote(items.emote);
    success3(`Copied ${member.displayName}'s set!`, message);
  }
}