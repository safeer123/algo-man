//---------------- Callback Hell -----------------

// excessive nesting on functions
const makePizza = (ingredients, callback) => {
    mixIngredients(ingredients, function (mixedIngredients) {
        bakePizza(mixedIngredients, function (bakedPizza) {
            console.log('finished!');
            if (callback) callback('pizza is ready');
        });
    });
}

//---------------- Promise -------------------------------------------

/*
A Promise is an object representing the eventual completion or failure 
of an asynchronous operation.
*/

const myPromise = new Promise((resolve, reject) => {
    // your code goes here
    // calls resolve or reject (asynchronously / synchronously)
});

const waitPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success results");
    }, 2000);
});

// access the async results
waitPromise.then(
    data => {
        console.log(data); // Success results
    });

// we can handle the error
const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error details");
    }, 2000);
});

errorPromise
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    })

// -------------------- Chaining promises ------------

// more readable than callback nestings
promiseABC
    .then(data => {
        // return something new 
        return 'working...'
    })
    .then(data => {
        // log the data that we got from the previous promise
        console.log(data);

        throw 'failed!';
    })
    .catch(err => {
        // grab the error from the previous promise and log it
        console.error(err);
        // failed!
    })

//------------------ Promise all ----------------------

// When we are dependent on multiple results from async calls, 
// we want to get all results in one place
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first value');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'second value');
});

Promise
    .all([promise1, promise2])
    .then(data => {
        const [promise1data, promise2data] = data;
        console.log(promise1data, promise2data);
    });

//----------------- Promise race ---------------------

// When we are dependent on any one out of multiple async calls
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first value');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second value');
});

Promise.race([promise1, promise2]).then(function (value) {
    console.log(value); // second value
    // Both resolve, but promise2 is faster
});
