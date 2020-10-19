const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'promote',
  description: 'Promote someone from the party to leader.',
  category: 'party',
  usage: '<user>',
  example: 'Azlxy.',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!bot.party.me.isLeader) return error2('I must be party leader in order to promote people.', message);
    const member = bot.party.members.find(x => x.displayName === args.slice(0).join(' '));
    if (!member) return error2('Please provide a party member to promote.', message);

    try {
      await member.promote();
      success3(`${member.displayName} has been promoted to party leader.`, message);
    } catch {
      error2(`An error occured while trying to promote ${member.displayName}.`, message);
    }
  }
}