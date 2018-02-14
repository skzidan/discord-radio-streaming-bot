const config = require('../config.json');

exports.run = (client, message, args) => {

return message.reply(`\n${config.prefix}Help - Displays Help Menu\n${config.prefix}Play <Stream URL> - Joins And Plays A Radio Stream\n${config.prefix}Leave - Leaves Voice Channel.\n${config.prefix}Prefix <New Prefix> - Sets New Prefix. **[BOT OWNER ONLY${config.prefix}]**`)

}
