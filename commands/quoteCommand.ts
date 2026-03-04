class QuoteCommand {
    program;

    constructor(program){
        this.program = program;
    }

    register(){
        this.program
        .command("quote")
        .action(() => this.getQuote());
    }

    getQuote() {
        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Innovation distinguishes between a leader and a follower. - Steve Jobs",
            "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(randomQuote);
    }
}
module.exports = QuoteCommand;