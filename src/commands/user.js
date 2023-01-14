const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("user").setDescription("User Test"),
  async execute(interaction) {
    //code

    await interaction.reply(
      `User: **${
        interaction.user.username
      }**\nCreated At: **${interaction.user.createdAt.toLocaleDateString()}**`
    );
  },
};
