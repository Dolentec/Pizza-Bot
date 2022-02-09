const discord = require('discord.js');
const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: "caniusethatplease",
    description: "aks if you can use that",
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
    async execute(client, interaction) {

            const embed = new discord.MessageEmbed()
                .setDescription("sorry you can't use that 😖😭")
                .setColor("RED")
            interaction.reply({ embeds: [embed] })
    }
}