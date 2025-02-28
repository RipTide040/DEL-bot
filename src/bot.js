const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,  // Added to access message content
    GatewayIntentBits.GuildMembers,   // Added to access member updates
  ],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith('s!')) {
    const command = message.content.slice(2).trim();
    if (command === 'hello') {
      message.channel.send('world');
    }
  }
});

client.login(process.env.TOKEN);
