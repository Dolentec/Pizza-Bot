/*
const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    /**
     * @param {GuildMember} member 
     *
    execute(member) {

        const { user, guild } = member;

        member.roles.add("936739158569934868");

        const Welcomer = new WebhookClient({ 
            id: "936739666185564172",
            token: "4NVqXz-OTi3sgFqIw4iUvge5vQbS4_aXdKCC6wrzBnQIrskuazRgNKob7WAqrkLViFMd"
        });

        const Welcome = new MessageEmbed()
        .setcolour("GREEN")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Welcomer.send({embeds: [Welcome]})
    }
}
*/