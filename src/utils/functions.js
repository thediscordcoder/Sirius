const { MessageEmbed } = require('discord.js');

const good = new MessageEmbed()
.setColor('GREEN')
.setAuthor('Success')
.setFooter('Sirius', 'https://cdn.discordapp.com/attachments/749665296226189312/765248124666511390/unknown.png');

const bad = new MessageEmbed()
.setColor('RED')
.setAuthor('Error')
.setFooter('Sirius', 'https://cdn.discordapp.com/attachments/749665296226189312/765248124666511390/unknown.png');

function success(cosmetic, message) {
  good.setDescription(`**${cosmetic.data.name}** [**${cosmetic.data.id}**] has been equipped.`);
  message.channel.send(good);
}

function success2(cosmetic, message) {
  good.setDescription(`**${cosmetic}** has been equipped.`);
  message.channel.send(good);
}

function success3(content, message) {
  good.setDescription(content);
  message.channel.send(good);
}

function error(cosmetic, message) {
  bad.setDescription(`No ${cosmetic} was found using current paramaters.`);
  message.channel.send(bad);
}

function error2(content, message) {
  bad.setDescription(content);
  message.channel.send(bad);
}

module.exports = {
  success: success,
  success2: success2,
  success3: success3,
  error: error,
  error2: error2
}
