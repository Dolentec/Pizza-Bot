const discord = require('discord.js');
const balloptions = require('./../lists/8ballOptions.json');
const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: "8ball",
    description: "ask the bot about your future",
    options: [
        {
            name: "question",
            description: "What is your question",
            type: "STRING",
            required: true
        },
    ],
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction, client) {
        const { options } = interaction;

        const question = options.getString("question");
        const random = balloptions[Math.floor(Math.random() * balloptions.length)]

        const embed = new discord.MessageEmbed()
            .setDescription(`${interaction.user}'s 8ball`)
            .addField("Question?", `${question}`, true)
            .addField('8ball', `${random}`)
            .setColor("RED")
            .setTimestamp()
        interaction.reply({embeds: [embed] })
    }
}