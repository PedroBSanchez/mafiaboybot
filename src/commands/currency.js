const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("currency")
    .setDescription("Currency value conversor"),
  async execute(interaction) {
    //code
    await interaction.reply("In progress");
  },
};
