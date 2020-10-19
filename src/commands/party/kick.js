const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'kick',
  description: 'Kicks someone from the party.',
  category: 'party',
  usage: '<user>',
  example: 'Azlxy.',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!bot.party.me.isLeader) return error2('I must be party leader in order to kick people.', message);
    const member = bot.party.members.find(x => x.displayName === args.slice(0).join(' '));
    if (!member) return error2('Please provide a party member to kick.', message);

    try {
      await member.kick();
      success3(`${member.displayName} has been kicked from the party.`, message);
    } catch {
      error2(`An error occured while trying to kick ${member.displayName}.`, message);
    }
  }
}