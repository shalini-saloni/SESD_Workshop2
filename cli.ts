#!/usr/bin/env node
const {Command} = require('commander');
const axios = require('axios');

const program = new Command();

program
.command("greet <name>")
.action((name) => {console.log(`Hello, ${name}!`)});

program.parse();