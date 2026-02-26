#!/usr/bin/env node
const {Command} = require('commander');
const axios = require('axios');

const program = new Command();

program
.command("greet <name>")
.action((name) => {console.log(`Hello, ${name}!`)});

program 
.command("add <n1> <n2>")
.description("Adds two numbers")
.action((n1, n2) => {console.log(Number(n1) + Number(n2))});

program
.command("subtract <n1> <n2>")
.description("Subtracts second number from first")
.action((n1, n2) => {console.log(Number(n1) - Number(n2))});

program
.command("multiply <n1> <n2>")
.description("Multiplies two numbers")
.action((n1, n2) => {console.log(Number(n1) * Number(n2))});

program 
.command("divide <n1> <n2>")
.description("Divides first number by second")
.action((n1, n2) => {console.log(Number(n1) / Number(n2))});

program.parse();