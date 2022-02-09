const discord = require("discord.js");
const { Client, CommandInteraction, MessageEmbed, displayAvatarURL } = require("discord.js");

module.exports = {
  name: "info",
  description: "Gets information about the pizza bot.",
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  async execute(client, interaction) {

    const embed = new discord.MessageEmbed()
      .setTitle("Info")
      .setColor("RED")
      .setAuthor({
        name: "Pizza Bot",
        iconURL: "https://i.imgur.com/CtcI8zU.png",
        url: "https://discord.js.org",
      })
      .setDescription("here's some info about the bot!")
      .setThumbnail(displayAvatarURL)
      .addFields(
        { name: "Users", value: `${client.users.cache.size}` },
        { name: "Guilds", value: `${client.guilds.cache.size}` },
        { name: "Commands", value: "One million" }
      )
      .setImage("https://i.imgur.com/CtcI8zU.png")
      .setTimestamp()
      .setFooter({
        text: "Created at",
        iconURL: "https://i.imgur.com/CtcI8zU.png",
      });

    interaction.reply({ embeds: [embed] });
  },
};
