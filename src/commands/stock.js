const { default: axios } = require("axios");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stock")
    .setDescription("Stock Quoter")
    .addStringOption((option) =>
      option.setName("stockcode").setDescription("Stock code").setRequired(true)
    ),

  async execute(interaction) {
    //code

    let msg = "";
    const stockCode = interaction.options.getString("stockcode");

    await axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockCode.toUpperCase()}&apikey=${
          process.env.STOCK_API_KEY
        }`
      )
      .then((response) => {
        if (response.data["Global Quote"]["05. price"] != undefined) {
          msg = `${stockCode.toUpperCase()}: **$${parseFloat(
            response.data["Global Quote"]["05. price"]
          ).toFixed(2)}**\nLast Day Change: **$${parseFloat(
            response.data["Global Quote"]["09. change"]
          ).toFixed(2)}**  (${response.data["Global Quote"][
            "10. change percent"
          ].substring(0, 4)}%)`;
        } else {
          msg = `Stock code not found in Nasdaq 😅`;
        }
      })
      .catch((error) => {
        msg = `Stock code not found in Nasdaq 😅`;
      });

    await interaction.reply(msg);
  },
};
