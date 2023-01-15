const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("goodmorning")
    .setDescription("Good morning "),
  async execute(interaction) {
    //code

    //Buscar api para retoranr frase de bom dia e falar sobre oq é o dia

    await interaction.reply("In progress...");
  },
};
