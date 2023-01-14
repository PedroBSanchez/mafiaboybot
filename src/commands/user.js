const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("user").setDescription("User Test"),
  async execute(interaction) {
    //code
    await interaction.reply("User test liro liro");
  },
};
