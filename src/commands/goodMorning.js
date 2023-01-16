const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("goodmorning")
    .setDescription("Good morning "),
  async execute(interaction) {
    //code

    console.log(interaction.guild.members.users);

    await interaction.reply("In progress...");
  },
};
