const { Command } = require('commander');
const axios = require('axios');

class CLI_Engine {
    program;

    constructor(){
        this.program = new Command();
    }

    registerCommand(commands) {
        commands.forEach((commandClass) => {
            const commandInstance = new commandClass(this.program);
            commandInstance.register();
        })
    }

    run(){
        this.program.parse();
    }
}

module.exports = CLI_Engine;