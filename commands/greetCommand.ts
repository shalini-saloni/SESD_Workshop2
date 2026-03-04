const chalk = require('chalk');

class Greet_Command {
    name;
    program;
    
    constructor(program) {
        this.program = program;
        this.name = "greet";
    }

    sayHello(name) {
        console.log(chalk.green(`Hello, ${name}!`));
    }
    
    register() {
        this.program
        .command("greet <name>")
        .action((name) => this.sayHello(name));
    }
}
module.exports = Greet_Command;