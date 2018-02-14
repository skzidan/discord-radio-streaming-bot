const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
  
  if (args.length === 0)
  return message.reply("You never supplied a stream URL!");

    const streamURL = args.slice(0, args.length).join(" ");

      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing..');
            connection.playArbitraryInput(`${streamURL}`);
          })
          .catch(console.log);
      } else {
        message.reply('You are not in a voice channel!');
      }
    };
  

