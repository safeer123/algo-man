const readline = require('readline');

async function readInput(instruction = "") {
    return new Promise((resolve) => {
        console.log(instruction);
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
          });

        rl.on('line', function(line){
            resolve(line);
            rl.close();
        });
    });
}

async function readAll() {
    const a = await readInput("Enter input a:");
    const b = await readInput("Enter input b:");
    return [a, b];
}

readAll().then(([a, b]) => console.log("Inputs --> ", a, b));
