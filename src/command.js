const { readdirSync } = require('fs');

module.exports = (client) => {
  readdirSync(__dirname + '/commands/').forEach(dir => {
    const commands = readdirSync(__dirname + `/commands/${dir}/`).filter(file => file.endsWith('.js'));

    for (let file of commands) {
      let pull = require(__dirname + `/commands/${dir}/${file}`);

      if (pull.name) {
        client.commands.set(pull.name, pull);
      }

      if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
  });
}

/*
const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'NAME',
  description: 'DESCRIPTION',
  category: 'CATEGORY',
  aliases: ['ALIASES'],
  usage: 'USAGE',
  example: 'EXAMPLE',

  run: async (client, bot, message, args, getCosmetic) => {
    // CODE
  }
}
*/