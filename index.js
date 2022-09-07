// on instancie DiscordJS
const Discord = require("discord.js");
const { Client, GatewayIntentBits  } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// On se connecte
client.login("OTU0MDM4MzA1MjQxMDY3NTIx.GTkMfW.cJoCjjFD2OZ7T-nNf0UXuZOE44Zq-Hi4LZ3hf8");