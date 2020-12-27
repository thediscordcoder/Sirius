const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'playlist',
  description: 'Change the party\'s playlist.',
  category: 'party',
  usage: '<playlist_id>',
  example: 'playlist_argon_duos_sp',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!bot.party.me.isLeader) return error2('I must be party leader in order to change the playlist.', message);

    const newPlaylist = args[0];
    if (!newPlaylist) return error2('Please provide a playlist.', message);

    bot.party.setPlaylist(newPlaylist).catch(err => { return error2('An error occured while trying to change the playlist.', message);});
    success3(`Changed the playlist to ${newPlaylist}.`, message);
  }
}
