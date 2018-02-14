const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {

      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
      message.reply('Left Voice Channel.');
    };
  }