const discord = require('discord.js');
const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: "pizza",
    description: "Pizza Time.",
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
    async execute(client, interaction) {

            const embed = new discord.MessageEmbed()
                .setDescription("It's Pizza Time!")
                .setColor("RED")
            interaction.reply({ embeds: [embed] })
    }
}
