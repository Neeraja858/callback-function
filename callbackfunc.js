// A function that accepts another function as a callback
function greetUser(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // Call the callback function
}

// A function to be used as a callback
function sayGoodbye() {
    console.log("Goodbye!");
}

// Using the callback
greetUser("Alice", sayGoodbye);
