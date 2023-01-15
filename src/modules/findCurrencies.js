const findAllCurrencies = async () => {
  let currencies = [];
  await axios
    .get(
      `https://api.freecurrencyapi.com/v1/currencies?apikey=${process.env.CURRENCY_API_KEY}`
    )
    .then((response) => {
      console.log(response.data);
      response.data.forEach((currency) => {
        currencies.push({
          name: `${currency.name} ${currency.symbol}`,
          value: `${currency.code}`,
        });
      });
    })
    .catch((error) => {
      console.log("Fail:");
      console.log(error);
    });

  return currencies;
};

module.exports = { findAllCurrencies };
