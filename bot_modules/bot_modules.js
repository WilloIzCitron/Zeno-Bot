const {Client, Collection} = require("discord.js");

module.exports = class undefined extends Client {
  constructor(options) {
    super(options)

    this.cooldowns = new Collection(); 
    this.commands = new Collection(); 
    this.aliases = new Collection();
    this.config = require('../config.json');
    this.recent = new Set();
  }
}