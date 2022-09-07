// on instancie DiscordJS
const Discord = require("discord.js");
const { Client, GatewayIntentBits  } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// on attends que le bot soit prêt
client.on("ready", () => {
    // On change le statut
    client.user.setPresence({ 
        activities: { 
            name: 'En pleine démo' 
        }, 
        status: 'dnd' })
});

// On se connecte
client.login("OTU0MDM4MzA1MjQxMDY3NTIx.GIFujq.DsAiAN7y59zePMx2Kwnuq6YVY3osJbJImDZLLQ");