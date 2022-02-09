const { Client } = require("discord.js");
const { Collection } = require("discord.js");
const client = new Client({intents: 32767});
const { Token } = require("./config.json");

client.commands = new Collection()

client.on('ready', () => {
    console.log(`✅ Logged in as ${client.users.tag}`);
  })

require("./Handlers/Events")(client);
require("./Handlers/Commands")(client);

client.login(Token);