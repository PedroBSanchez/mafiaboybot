const { default: axios } = require("axios");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("dog").setDescription("Just a dog"),
  async execute(interaction) {
    //code

    let dogImage = "";

    await axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        dogImage = response.data.message;
      })
      .catch((error) => {
        console.log(error);
      });

    const exampleEmbed = new EmbedBuilder()
      .setColor(0x009955)
      .setTitle("Random dog")
      .setAuthor({
        name: "Dog",
        iconURL: dogImage,
      })
      .setDescription("Random Dog")
      .setImage(dogImage)
      .setTimestamp()
      .setFooter({
        text: "Some random DOG",
        iconURL: dogImage,
      });

    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
