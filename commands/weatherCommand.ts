class WeatherCommand {
    program;

    constructor(program){
        this.program = program;
    }

    register(){
        this.program
        .command("weather <city>")
        .action((city) => this.getWeather(city));
    }

    async getWeather(city){
        try{
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=18.52&longitude=73.85&current_weather=true`
            );

            const data = await response.json();
            console.log(`Temperature: ${data.current_weather.temperature}°C`);
        }
        catch(error){
            console.error("Error fetching weather data:", error);
        }
    }
}
module.exports = WeatherCommand;