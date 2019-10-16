/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding- The 'this' keyword refers to what is left of the dot when the function is invoked
* 2. Explicit Binding- Explicitly referencing what you want this to mean by using .call or .apply to pass the argument you want 'this' to apply to. 
* 3. New Binding- Creates a constructor function which allows us to create new objects and save them. The 'this' keyword will refer to the new object that has been created. 
* 4. Window Binding- If you invoke a function that uses the 'this' keyword and none of the above principles apply, then the 'this' keyword will default to the window object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function holidayGreeting(holiday) {
    console.log("Have a wonderful " + holiday + " !")
    console.log(this);
}

holidayGreeting('Halloween');

// Principle 2

// code example for Implicit Binding

const greeting = {
    hello: 'Hi ',
    speak: function (name) {
        console.log(this.hello + name);
        console.log(this);
    }
}

greeting.speak('Emily');

// Principle 3

// code example for New Binding

const Show = function (name, genre, network) {
    this.name = name;
    this.genre = genre;
    this.network = network;
};

const westworld = new Show("WestWorld", "Sci - Fi", "HBO");

console.log(westworld)

// Principle 4

// code example for Explicit Binding

const favAnimal = function () {
    console.log('My favorite animal is ' + this.animal)
};

const elephant = {
    animal: 'Elephant',
    color: 'Gray'
};

favAnimal.call(elephant);