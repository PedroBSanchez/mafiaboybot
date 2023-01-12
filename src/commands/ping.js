const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Ping Test"),
  async execute(interaction) {
    //code
    await interaction.reply("Pong! xesque");
  },
};
