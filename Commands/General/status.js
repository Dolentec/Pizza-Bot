const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const { connection } = require("mongoose");
require("../../Events/Client/ready");

module.exports = {
    name: "status",
    description: "Displays the status of the client and database connection",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(client, interaction) {

        const Response = new MessageEmbed()

        .setColor(`${colourCode(connection.readyState)}`)

        .setDescription(`**client**: \`✅ ONLINE\` - \`${client.ws.ping}ms\`\n **uptime**: <t:${parseInt(client.readyTimestamp / 1000)}:R>\n
        **Database**: \`${switchTo(connection.readyState)}\``)

        interaction.reply({embeds: [Response]})
    }
}

function switchTo(val) {
    var status = " ";
    switch(val) {
        case 0 : status = `⛔ DISCONNECTED`
        break;
        case 1 : status = `✅ CONNECTED`
        break;
        case 2 : status = `🟠 CONNECTING`
        break;
        case 3 : status = `🔻 DISCONNECTING`
        break;
    }
    return status;
}

function colourCode(val) {
    var status = " ";
    switch(val) {
        case 0 : status = `RED`
        break;
        case 1 : status = `#32cd32`
        break;
        case 2 : status = `ORANGE`
        break;
        case 3 : status = `RED`
        break;
    }
    return status;
}