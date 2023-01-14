const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rockpaperscissors")
    .setDescription("Play Rock Paper Scissors")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("Even or Odd")
        .setRequired(true)
        .addChoices(
          { name: "Rock", value: "0" },
          { name: "Paper", value: "1" },
          { name: "Scissors", value: "2" }
        )
    ),
  async execute(interaction) {
    //code

    //Rock -> 0
    //Paper -> 1
    //Scissors -> 2

    const botChoice = Math.floor(Math.random() * (3 - 0) + 0);
    const botChoiceText = findText(botChoice);

    const userChoice = parseInt(interaction.options.getString("type"));
    const userChoiceText = findText(userChoice);

    const userWinRock = userChoice == 0 && botChoice == 2;
    const userWinPaper = userChoice == 1 && botChoice == 0;
    const userWinScissors = userChoice == 2 && botChoice == 1;

    const draw = userChoice == botChoice;

    let msg = "";
    if (userWinRock || userWinPaper || userWinScissors) {
      msg = `You Win 😡\nYours: **${userChoiceText}**\nMafiaBoy: **${botChoiceText}**`;
    } else if (draw) {
      msg = `DRAW!!!! 😤\nYours: **${userChoiceText}**\nMafiaBoy: **${botChoiceText}**`;
    } else {
      msg = `MafiaBoy Wins 😜\nYours: **${userChoiceText}**\nMafiaBoy: **${botChoiceText}**`;
    }

    await interaction.reply(msg);
  },
};

const findText = (choice) => {
  switch (choice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;

    default:
      return "Error";
      break;
  }
};
