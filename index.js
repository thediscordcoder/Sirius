(async () => {
const Discord = require('discord.js'),
      fnbr = require('fnbr'),
      fetch = require('node-fetch'),
      config = require('./config.json'),
      { Client } = require('fnbr'),
      { token, cid, bid, eid, pickaxeId, prefix, ownerOnly, ownerIDs, acceptInvite, acceptFriend, discordStatus, discordStatusType, fortniteStatus, fortnitePlatform } = require('./config.json');

const { readFile, writeFile } = require('fs').promises;

const getCosmetic = async (cosmeticType, cosmeticSearch) => { // https://github.com/xMistt
  const url =
    "https://fortnite-api.com/v2/cosmetics/br/search" +
    "?matchMethod=contains" +
    `&name=${cosmeticSearch}` +
    `&backendType=${cosmeticType}`;

  return (await fetch(url)).json();
};

const Options = {
  status: fortniteStatus,
  platform: fortnitePlatform,
  auth: {}
}

    try {
    Options.auth.deviceAuth = JSON.parse(await readFile('./deviceAuth.json'));
  } catch (e) {
    Options.auth.authorizationCode = async () => Client.consoleQuestion('[FORTNITE] Please enter an authorization code: ');
  }

const fortnite = new Client(Options);
const discord = new Discord.Client();

function success(command, cosmetic, message) {
  const embed = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle(':green_circle: Success')
  .setDescription(`${command} has been set to ${cosmetic.data.name} | ${cosmetic.data.id}`);
  message.channel.send(embed);
}

function error(command, message) {
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle(':red_circle: Error')
  .setDescription(`No ${command} was found using current parameters.`)
  message.channel.send(embed);
}

discord.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (ownerOnly && !ownerIDs.includes(message.author.id)) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'help') {
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Commands')
    .setDescription('For a list of commands, please visit [this](https://sirius-5.gitbook.io/sirius/commands) website for a list of commands.')
    message.channel.send(embed);
  }

  if (command === 'skin') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
    const content = args.slice(0).join(' ');
    if (!content || content.length < 1) return message.channel.send('A valid parameter is required.');

    const cosmetic = await getCosmetic('AthenaCharacter', content);
    if (cosmetic.status === 404) return error('skin', message)
    fortnite.party.me.setOutfit(cosmetic.data.id);
    success('Skin', cosmetic, message);
  }

  if (command === 'backpack') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
    const content = args.slice(0).join(' ');
    if (!content || content.length < 1) return message.channel.send('A valid parameter is required.');

    const cosmetic = await getCosmetic('AthenaBackpack', content);
    if (cosmetic.status === 404) return error('backpack', message);
    fortnite.party.me.setBackpack(cosmetic.data.id);
    success('Backpack', cosmetic, message);
  }

  if (command === 'emote') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
    const content = args.slice(0).join(' ');
    if (!content || content.length < 1) { 
      fortnite.party.me.clearEmote();
      return message.channel.send('Emote cleared.');
    }

    const cosmetic = await getCosmetic('AthenaDance', content);
    if (cosmetic.status === 404) return error('emote', message);
    fortnite.party.me.setEmote(cosmetic.data.id);
    success('Emote', cosmetic, message);
  }

  if (command === 'pickaxe') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
    const content = args.slice(0).join(' ');
    if (!content || content.length < 1) return message.channel.send('A valid parameter is required.');

    const cosmetic = await getCosmetic('AthenaPickaxe', content);
    if (cosmetic.status === 404) return error('pickaxe', message);
    fortnite.party.me.setPickaxe(cosmetic.data.id);
    success('Pickaxe', cosmetic, message);
  }

  if (command === 'variants') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party');
    const cid = args[0];
    const channel = args[1];
    const variant = args[2];
    if (!cid || !channel || !variant) return message.channel.send(`Command usage: \`${prefix}variants CID CHANNEL VARIANT\`\nExample: \`${prefix}variants CID_029_Athena_Commando_F_Halloween Material Mat3\``);


    fortnite.party.me.setOutfit(cid, [{channel: channel, variant: variant}]);
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':green_circle: Success')
    .setDescription(`Variants has been set to ${cid}, ${channel}, ${variant}`)
    message.channel.send(embed);
  }

  if (command === 'level') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
    const level = args[0];
    if (!level || isNaN(level)) return message.channel.send('Please enter a *valid* level.');

    fortnite.party.me.setLevel(level);
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':green_circle: Success')
    .setDescription(`Level has been set to ${level}.`)
    message.channel.send(embed);
  }

  if (command === 'bp' || command === 'battlepass') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
    const level = args[0];
    if (!level || isNaN(level)) return message.channel.send('Please enter a *valid* battlepass level.');

    fortnite.party.me.setBattlepass(true, level, '99999%', '165%');
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':green_circle: Success')
    .setDescription(`Battlepass level has been set to ${level}`)
    message.channel.send(embed);
  }

  if (command === 'ready') {
   if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
   fortnite.party.me.setReadiness(true);
   message.channel.send('Ready!');
  }

  if (command === 'unready') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
    fortnite.party.me.setReadiness(false);
    message.channel.send('Unready!');
  }

  if (command === 'cid') {
    const cid = args[0];
    if (!cid) return message.channel.send('Please enter a *valid* CID.');

    fortnite.party.me.setOutfit(cid);
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':green_circle: Success')
    .setDescription(`CID has been set to ${cid}!`)
    message.channel.send(embed);
  }

  if (command === 'eid') {
    const eid = args[0];
    if (!eid) return message.channel.send('Please enter a *valid* EID.');;

    fortnite.party.me.setEmote(eid);
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':green_circle: Success')
    .setDescription(`EID has been set to ${cid}!`)
    message.channel.send(embed);  }

  if (command === 'bid') {
    const bid = args[0];
    if (!bid) return message.channel.send('Please enter a *valid* BID.');

    fortnite.party.me.setBackpack(bid);
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':green_circle: Success')
    .setDescription(`BID has been set to ${cid}!`)
    message.channel.send(embed);  }

  if (command === 'pickaxe_id') {
    const pickaxe = args[0];
    if (!pickaxe) return message.channel.send('Please enter a *valid* Pickaxe ID.');

    fortnite.party.me.setPickaxe(cid);
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':green_circle: Success')
    .setDescription(`Pickaxe ID has been set to ${cid}!`)
    message.channel.send(embed);  }

  if (command === 'info') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
    const skin = fortnite.party.me.outfit.split('\'')[0];
    const pickaxe = fortnite.party.me.pickaxe.split('\'')[0];

    const incomingFriends = [];
    const outgoingFriends = [];

    fortnite.pendingFriends.forEach(friend => {
      if (friend.direction === 'INCOMING') incomingFriends.push(friend);
      if (friend.direction === 'OUTGOING') outgoingFriends.push(friend);
    });

    const embed = new Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Client Information')
    .addField('Party', `Members: ${fortnite.party.members.size}\nLeader: ${fortnite.party.leader.displayName}`)
    .addField('Props', `Skin: ${skin}\nEmote: ${fortnite.party.me.emote ? fortnite.party.me.emote : "None"}\nPickaxe: ${pickaxe}`)
    .addField('Client', `Ready: ${fortnite.party.me.isReady ? "Yes" : "No"}\nFriends: ${fortnite.friends.size}\nIncoming Friends: ${incomingFriends.length}\nOutgoing Friends: ${outgoingFriends.length}\nTotal: ${incomingFriends.length + outgoingFriends.length}`)
    message.channel.send(embed);
  }

  if (command === 'kick') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
    const user = args.slice(0).join(' ');
    if (!user || !fortnite.party.me.role === 'CAPTAIN') return message.channel.send('Missing argument; no user specified, or i am not the party leader.');

    fortnite.party.kick(user).catch(e => {
      return message.channel.send(`Error: ${e}`);
    });
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':green_circle: Success')
    .setDescription(`${user} has been kicked from the party.`)
    message.channel.send(embed);
  }

  if (command === 'promote') {
    if (!fortnite.party) return message.channel.send('Fortnite client is not in a party.');
    const user = args.slice(0).join(' ');
    if (!user || !fortnite.party.me.role === 'CAPTAIN') return message.channel.send('Missing argument; no user specified, or i am not the party leader.');

    fortnite.party.promote(user).catch(e => {
      return message.channel.send(`Error: ${e}`);
    });
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':green_circle: Success')
    .setDescription(`${user} has been promoted to party leader.`)
    message.channel.send(embed);
  }

  if (command === 'send') {
    const content = args.slice(0).join(' ');
    fortnite.party.sendMessage(content);
    message.channel.send('Successfully sent message!');
  }
});

fortnite.on('party:invite', (invite) => {
  console.log(`[SIRIUS] [FORTNITE] Received a party invitation from ${invite.sender.displayName}`);
  if (acceptInvite) { 
    invite.accept();
  } else {
    invite.decline();
  }
   console.log(`[SIRIUS] [FORTNITE] Invite from ${invite.sender.displayName} has been ${acceptInvite ? 'accepted' : 'declined'}.`);
});

fortnite.on('friend:request', (request) => {
  console.log(`[SIRIUS] [FORTNITE] Received a friend request from ${request.displayName}`);

  if (acceptFriend) {
    request.accept();
  } else {
    request.decline();
  }
  console.log(`[SIRIUS] [FORTNITE] Friend request from ${request.displayName} has been ${acceptFriend ? 'accepted' : 'declined'}`);
});

fortnite.on('ready', () => {
  fortnite.party.me.setOutfit(cid);
  fortnite.party.me.setEmote(eid);
  fortnite.party.me.setBackpack(bid);
  fortnite.party.me.setPickaxe(pickaxeId);

  const content = discordStatus;
  const a = content.replace('%ClientUserDisplayName%', fortnite.user.displayName).replace('%PartyMemberCount%', fortnite.party.members.size);

  setInterval(function() {
    discord.user.setActivity(a, { type: discordStatusType});
  }, 10000)
});

fortnite.on('message', message => {
  console.log(`[SIRIUS] [FORTNITE] Message from ${message.sender.displayName}: ${message.content}`);
});

  if (token !== 'TOKEN') { 
    discord.login(token); 
  } else {
    return console.log('[DISCORD] Please provide a valid token in config.json');
  }

  fortnite.on('deviceauth:created', (content) => writeFile('./deviceAuth.json', JSON.stringify(content, null, 2)));

  await fortnite.login();
  discord.login(token)
  console.log(`[SIRIUS] [FORTNITE] Client ready as ${fortnite.user.displayName}.\n[SIRIUS] [DISCORD] Client ready as ${discord.user.tag}.`);
})();
