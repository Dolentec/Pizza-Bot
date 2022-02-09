const { Client } = require("discord.js");
const mongoose = require("mongoose");
const { Database } = require("../../config.json");

module.exports = {
  name: "ready",
  once: true,
  /**
   * @param {Client} client
   */
  execute(client) {
      console.log("✅ The client is now ready!");
      client.user.setActivity(`${client.users.cache.size} users |  /help`, { type: "WATCHING" });

      if(!Database) return;
      mongoose.connect(Database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
          console.log("✅ The client is now connected to the database!")
      }).catch((err) => {
        console.log(err)
      })
  }
};
