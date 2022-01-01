
// generator functions can pause or continue the execution as per the client says 
function* genTest() {
    yield "banana";
    console.log("banana is given out");
    yield "orange";
    console.log("orange is given out");
    yield "apple";
    console.log("apple is given out, list got finished !!");
}

const genResult = genTest();

function processOneYieldPlease() {
    console.log("wait for 3 sec...");
    setTimeout(() => {
        const result = genResult.next();
        console.log(result);
        if (!result.done) processOneYieldPlease();
    }, 3000);
}

// The getTest function has not executed fully at this point.
// when we call next() it executes a yield and give you result of that
// then continues till then next yield and waits there
processOneYieldPlease();


//-------------------- Promise + Generator -------------------------

// Combining Promises and generators we can build clean workflows to handle
// chain of async calls

const marinateChicken = new Promise(
    (resolve) => setTimeout(resolve, 3000, "Chicken marinated")
);

const grillChicken = new Promise(
    (resolve) => setTimeout(resolve, 5000, "Chicken Grill Ready !!")
);

const grillGenerator = function* () {
    yield marinateChicken;
    yield grillChicken;
}

const grillGenResult = grillGenerator();

function grillChickenProcess() {
    const result = grillGenResult.next();
    if (result.done) return;
    result.value.then(c => {
        console.log(c);
        grillChickenProcess();
    });
};

grillChickenProcess();


//----------------- Terminate generator function exec ===================

// grillGenResult.throw("Error. Something is wrong.") // stops with error
// grillGenResult.return("Done with this.") // will stop with the result