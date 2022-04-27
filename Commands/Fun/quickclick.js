const discord = require('discord.js');
const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: "quickclick",
    description: "click the button as fast as possible when it appears!",
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
    async execute(client, interaction) {

            const embed = new discord.MessageEmbed()
                .setDescription(`Click the button below as fast as possible to win the game!`)
                .setColor('RED')
                .setTitle(`${interaction.user}'s game of click.`)
            interaction.reply({ embeds: [embed] })
    }
}