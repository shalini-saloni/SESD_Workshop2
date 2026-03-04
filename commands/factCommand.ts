class FactCommand {
    program;

    constructor(program){
        this.program = program;
    }

    register(){
        this.program
        .command("fact")
        .action(() => this.fact());
    }

    async fact(){
        try{
            const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
            const data = await response.json();
            console.log(data.text);
        }
        catch(err){
            console.error("Error fetching fact:", err);
        }
    }
}
module.exports = FactCommand;