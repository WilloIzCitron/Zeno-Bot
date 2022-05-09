const puppeteer = require('puppeteer');
const Discord = require('discord.js');

// chromium headless
// const getScreenshot = async (url) => {
//     const browser = await puppeteer.launch({
//         defaultViewport: {
//             width:1920,
//             height:1080
//       }});
//     const page = await browser.newPage();
//     await page.goto(url);
//     await page.waitForTimeout(3000)
//     const buffer = await page.screenshot({type: 'png'});
//     await browser.close();

//     return buffer;
// }

exports.run = async (client, message, args) => {
    let url = message.content.split(" ").slice(1).join(" ");
    if (!url) return message.channel.send("Please provide a url!");
    const buffer = new MessageAttachment(`https://shot.screenshotapi.net/screenshot?&url=${encodeURIComponent(url)}&width=1920&height=1080&output=image`, "screenshot.png");
    message.channel.send({ files: [buffer] });
};

exports.help = {
    name: "screenshot",
    description: "get website screenshot from url",
    usage: "screenshot <url>",
    example: "screenshot https://google.com",
    api: ""
  }
  
  exports.conf = {
    aliases: ["ss"],
    cooldown: 7
  }