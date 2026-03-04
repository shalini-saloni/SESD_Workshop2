#!/usr/bin/env node
const cli_engine = require('./cli_engine/cli_engine');
const greet_command = require('./commands/greetCommand');
const add_command = require('./commands/addCommand');
const subtract_command = require('./commands/subtractCommand');
const multiply_command = require('./commands/multiplyCommand');
const divide_command = require('./commands/divideCommand');
const joke_command = require('./commands/jokeCommand');
const pokemon_command = require('./commands/pokemonCommand');
const quote_command = require('./commands/quoteCommand');
const weather_command = require('./commands/weatherCommand');
const fact_command = require('./commands/factCommand');


const engine = new cli_engine();
engine.registerCommand([greet_command, add_command, subtract_command, multiply_command, divide_command, joke_command, pokemon_command, quote_command, weather_command, fact_command]);
engine.run();
