const dotenv = require("dotenv");

const fs = require("node:fs");
const path = require("node:path");
dotenv.config();

const {
  Client,
  GatewayIntentBits,
  ActivityType,
  Collection,
  InteractionType,
  Events,
} = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//global variables
client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Set a new item in the Collection with the key as the command name and the value as the exported module
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
    );
  }
}

//ready event
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity({
    name: `Coded By Odi`,
    type: ActivityType.Streaming,
  });
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.type === InteractionType.ApplicationCommand) {
    const command = client.commands.get(interaction.commandName);
    if (!command) {
      console.log(`No command found for ${interaction.commandName}`);
      return interaction.reply({
        content: `${interaction.commandName} is not valid`,
        ephemeral: true,
      });
    }
    try {
      command.execute(interaction);
    } catch (error) {
      console.log(error);
      await interaction.reply({
        content: "Error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

client.login(process.env.BOT_TOKEN);
