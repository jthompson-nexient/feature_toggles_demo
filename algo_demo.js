import featureFlag from './aws_sdk_flag_utils.js'

/* All other modules in your application use this function, which calls 
one of your two implementations depending on the feature_flag being 
set to true or false. */
async function usefull_utility_algorithm() {
    if (await featureFlag("improved_function_algorithm_key")) {
        return improved_algorithm(7)
    } else {
        return legacy_algorithm(7)
    }
}

// New and improved algorithm
function improved_algorithm(x) {
    console.log("\n!!! Improved Algorithm !!!")
    if (x == 0) {
        return 1;
    } else {
        return x * improved_algorithm(x - 1);
    }
}

// Legacy algorithm
function legacy_algorithm(x) {
    console.log("\n!!! Legacy Algorithm !!!")
    let total = x
    let y = x-1
    for(y; y > 0; y--) {
        total *= y;
    }
    return total
}

// testing...
(async function() {
    const my_factorial = await usefull_utility_algorithm()
    console.log("Answer:", my_factorial)
})()
