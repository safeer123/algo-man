const fs = require("fs");

function readTextFile(path) {
    if(fs.existsSync(path)) {
        fs.readFile("sample.txt", function(err, buf){
            if(buf) {
                console.log(buf.toString());
            } else {
                console.log("Something went wrong");
                if (err) { console.log(err) }
            }
        });
    } else {
        console.log("Check the file exist in the path");
    }
}

function writeTextFile(path, data) {
    fs.writeFile(path, data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully Written to File.");
        }
    });
}

readTextFile("sample.txt");
readTextFile("I_dont_exist.txt");
writeTextFile("Now_I_exist.txt", "This is my content.\nPlease read it.");

// setTimeout(() => {
//     console.log("Cleaning up the files...");
//     fs.rmSync("Now_I_exist.txt");
// }, 10000);
