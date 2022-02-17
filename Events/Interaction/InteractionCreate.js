const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const consola = require('consola');

const { commands } = require('../../index');

module.exports = {
    name: "interactionCreate",
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            consola.info(`/${command.name} was used.`)
            if (!command) return interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setTitle("⛔ An error occured while trying to run this command!")
                ]
            }) && client.commands.delete(interaction.commandName);

            command.execute(interaction, client);

        }
    }
}