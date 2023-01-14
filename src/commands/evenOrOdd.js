const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("evenorodd")
    .setDescription("Even or Odd")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("Even or Odd")
        .setRequired(true)
        .addChoices(
          { name: "Even", value: "even" },
          { name: " Odd", value: "odd" }
        )
    )
    .addIntegerOption((option) =>
      option
        .setName("number")
        .setDescription("Number")
        .setMaxValue(10)
        .setMinValue(0)
        .setRequired(true)
    ),
  async execute(interaction) {
    //code

    const botValue = Math.floor(Math.random() * (10 - 0) + 0);
    const userValue = interaction.options.getInteger("number");
    const soma = botValue + userValue;
    const even = soma % 2 == 0;
    const userPar =
      interaction.options.getString("type") == "even" ? true : false;

    let msg = "";
    if (userPar && even) {
      //Usuário ganhou com par
      msg = `You Win (Even)  😡\nYours: ${userValue}\nBot: ${botValue}\nResult: ${soma}`;
    } else if (!userPar && !even) {
      //Usuário ganhou com ímpar
      msg = `You Win (Odd)  😡\nYours: ${userValue}\nBot: ${botValue}\nResult: ${soma}`;
    } else {
      msg = `MafiaBoy Wins (${
        userPar ? "Odd" : "Even"
      })  😜\nYours: ${userValue}\nBot: ${botValue}\nResult: ${soma}`;
    }

    await interaction.reply(msg);
  },
};
