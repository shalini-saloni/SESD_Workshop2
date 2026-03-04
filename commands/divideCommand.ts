class DivideCommand {
    program;

    constructor(program){
        this.program = program;
    }

    register(){
        this.program
        .command("divide <n1> <n2>")
        .action((n1, n2) => this.divide(n1,n2));
    }

    divide(n1, n2) {
        if(Number(n2) === 0){
            console.log("Error: Division by zero is not allowed.");
            return;
        }
        console.log(Number(n1) / Number(n2));
    }
}
module.exports = DivideCommand;