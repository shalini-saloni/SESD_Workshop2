const {execSync} = require('child_process');

class InitTS {
    program;

    constructor(program){
        this.program = program;
    }

    register(){
        this.program
        .command("init_ts <folderName>")
        .action((folderName) => this.initializeTS(folderName));
    }

    initializeTS(folderName) {
        console.log(chalk.green(`Initializing TypeScript project in folder: ${folderName}`));
        this.run(`mkdir ${folderName}`);
        this.run(`cd ${folderName} && npm init -y`);
        this.run(`cd ${folderName} && npm install -D typescript ts-node nodemon @types/node`);
        this.run(`cd ${folderName} && npx tsc --init`);
        console.log(chalk.blue("TypeScript Project Created Successfully!"))
    }

    run(command){
        execSync(command, {stdio: 'inherit'});
    }
}