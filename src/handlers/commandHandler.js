const { Client } = require("discord.js");
const { readdirSync } = require("fs");

/**
 *
 * @param {Client} client
 */

module.exports = (client) => {
  //code
  console.log(`Commands handler Loaded`);

  readdirSync("./src/commands")
    .filter((cmd) => cmd.endsWith(".js"))
    .forEach((cmd) => {
      const command = require(`../commands/${cmd}`);
      if (command?.data?.name) {
        client.commands.set(command.data.name, command);
        console.log(client.commands.get(command.data.name));
      } else {
        console.log(`${command?.data?.name} is not ready`);
      }
    });
};
