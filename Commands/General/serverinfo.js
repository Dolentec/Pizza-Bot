const discord = require("discord.js");
const { Client, CommandInteraction, MessageEmbed, displayAvatarURL } = require("discord.js");

module.exports = {
  name: "serverinfo",
  description: "Gets information about this server.",
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {

    const embed = new discord.MessageEmbed()
      .setTitle("Info")
      .setColor("RED")
      .setAuthor({
        name: "Pizza Bot",
        iconURL: "https://i.imgur.com/CtcI8zU.png",
        url: "https://www.discord.js",
      })
      .setDescription("here's some info about this server!")
      .addField('Member Count', interaction.guild.memberCount.toString())
      .addField('Created', interaction.guild.createdAt.toLocaleString())
      .addField('Commands', "7")
      .setTimestamp()
    interaction.reply({ embeds: [embed] });
  },
};
