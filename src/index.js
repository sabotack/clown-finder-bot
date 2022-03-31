const {Client, Intents} = require('discord.js');
const {token, userID} = require('./config.json');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => {
    console.log("Ready! " + bot.user.username);
});

bot.on('messageCreate', msg => {
    if(msg.author.bot) return false;

    if(msg.author.id === userID) {
        console.log("From: " + msg.author.username + " | " + msg.content);
        msg.react('🤡');
    }
});

bot.login(token);