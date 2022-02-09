const { Perms } = require("../validation/permissions");
const { Client } = require('discord.js');
const { promisify } = require('util');
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require('ascii-table');
const consola = require('consola');;

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    const Table = new Ascii("Commands loaded");

    CommandsArray = [];

    (await PG(`${process.cwd()}/Commands/*/*.js`)).map(async (file) => {
        const command = require(file);

        if (!command.name)
            return Table.addRow(file.split("/")[7], "⛔ FAILED", "Missing a name.");

        if (!command.description)
            return Table.addRow(command.name, "⛔ FAILED", "Missing a description.");

        if (command.permission) {
            if (Perms.includes(command.permission))
                command.defaultPermission = false;
            else
                return Table.addRow(command.name, "⛔ FAILED", "Permission is invalid.");
        };

        if (command.done) {
            return Table.addRow(command.name, "⛔ UNFINISHED");
        };

        client.commands.set(command.name, command)
        CommandsArray.push(command);

        await Table.addRow(command.name, "✅ SUCCESFULL");

    });

    consola.log(Table.toString());




    client.on('ready', async () => {
        client.application.commands.set([])
        client.guilds.cache.forEach((guild) => {
            guild.commands.set(CommandsArray).then(async (command) => {
                const Roles = (commandName) => {
                    const cmdPerms = CommandsArray.find((c) => c.name === commandName).permission;
                    if (!cmdPerms) return null;

                    return guild.roles.cache.filter((r) => r.permissions.has(cmdPerms))
                }

                const fullPermissions = command.reduce((accumulator, r) => {
                    const roles = Roles(r.name);
                    if (!roles) return accumulator;

                    const permissions = roles.reduce((a, r) => {
                        return [...a, { id: r.id, type: "ROLE", permission: true }]
                    }, [])

                    return [...accumulator, { id: r.id, permissions }]
                }, [])

                await guild.commands.permissions.set({ fullPermissions })
            })
        })
    })
};