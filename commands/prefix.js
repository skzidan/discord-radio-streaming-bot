const config = require("../config.json");
const fs = require("fs")

exports.run = (client, message, args) => {
if(message.author.id !== config.ownerID) return;
if(message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;
    message.channel.send(`Prefix has been updated to ${newPrefix}`).catch(console.error);
  
    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
}