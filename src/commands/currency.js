const { default: axios } = require("axios");
const { SlashCommandBuilder, ALLOWED_EXTENSIONS } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("currency")
    .setDescription("Currency value conversor")
    .addStringOption((option) =>
      option
        .setName("currencytype")
        .setDescription("Currency type")
        .setRequired(true)
        .addChoices(
          { name: "Brazilian Real BRL", value: "BRL" },
          { name: "Dollar USD", value: "USD" },
          { name: "Euro EUR", value: "EUR" },
          { name: "British Pound GBP", value: "GBP" },
          { name: "Yen JPY", value: "JPY" },
          { name: "Canadian Dollar CAD", value: "CAD" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("conversion")
        .setDescription("Currency conversion")
        .setRequired(true)
        .addChoices(
          { name: "Brazilian Real BRL", value: "BRL" },
          { name: "Dollar USD", value: "USD" },
          { name: "Euro EUR", value: "EUR" },
          { name: "British Pound GBP", value: "GBP" },
          { name: "Yen JPY", value: "JPY" },
          { name: "Canadian Dollar CAD", value: "CAD" }
        )
    ),
  async execute(interaction) {
    //code

    const baseCurrency = interaction.options.getString("currencytype");
    const conversionCurrency = interaction.options.getString("conversion");
    let conversionValue = 0;

    await axios
      .get(
        `https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.CURRENCY_API_KEY}&base_currency=${baseCurrency}&currencies=${conversionCurrency}`
      )
      .then((response) => {
        conversionValue =
          response.data.data[`${conversionCurrency}`].toFixed(2);
      })
      .catch((error) => {
        console.log(error);
      });

    //Buscar conversão de 1 - 1 da escolha

    const msg = ` 1 ${baseCurrency} = **${conversionValue}** **${conversionCurrency}**`;

    await interaction.reply(msg);
  },
};
