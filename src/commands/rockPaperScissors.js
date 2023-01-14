const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rockpaperscissors")
    .setDescription("Play Rock Paper Scissors"),
  async execute(interaction) {
    //code
    await interaction.reply("Pong!");
  },
};
