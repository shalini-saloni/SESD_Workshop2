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

program
.command("joke")
.description("Random joke")
.action(async() => {
    try{
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log(res.data.setup);
        console.log(res.data.punchline);
    }
    catch(err){
        console.log(err);
    }
})

program
.command("pokemon")
.description("Random pokemon")
.action(async() => {
    try{
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
        const pokemons = res.data.results;
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        console.log(pokemons[randomIndex].name);
    }
    catch(err){
        console.log(err);
    }
})

program.parse();