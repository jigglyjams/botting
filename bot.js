import { keys } from './keys.js';
import { log } from './utils.js';
import { Client, Intents, MessageEmbed, MessageAttachment } from 'discord.js';
const discord = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

discord.on('messageCreate', async m => {
  if (!m.author.bot) {
    if (m.content === 'hi') {
      discord.channels.cache.get(m.channelId).send('Sup');
    }
  }
});

discord.once('ready', async c => {
  log(`Ready! Logged in as ${c.user.tag}`);
});

discord.login(keys.DISCORD_KEY);