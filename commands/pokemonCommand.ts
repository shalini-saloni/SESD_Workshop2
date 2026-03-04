class PokemonCommand {
    program;

    constructor(program){
        this.program = program;
    }

    register(){
        this.program
        .command("pokemon")
        .action(() => this.getPokemon());
    }

    async getPokemon() {
        try{
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
            const pokemons = res.data.results;
            const randomIndex = Math.floor(Math.random() * pokemons.length);
            console.log(pokemons[randomIndex].name);
        }
        catch(err){
            console.log(err);
        }
    }
}
module.exports = PokemonCommand;