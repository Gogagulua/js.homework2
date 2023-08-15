let a = true;
let b = false;
console.log(a == b);  // What will this print?  //FALSE
console.log(a != b);  // What will this print?  //TRUE

let c = true;
let d = "true";
console.log(c === d);  // What will this print? //FALSE
console.log(c !== d);  // What will this print? //TRUE

let e = true;  // This is like 1
let f = false; // This is like 0
console.log(e > f);  // What will this print? //TRUE
console.log(f < e);  // What will this print? //TRUE
console.log(e >= f);  // What will this print? //TRUE
console.log(f <= e);  // What will this print? //TRUE


// Boolean Constructor
console.log(Boolean(0));          // ? //FALSE
console.log(Boolean(""));         // ? //FALSE
console.log(Boolean(" "));        // ? //TRUE
console.log(Boolean(undefined));  // ? //FALSE
console.log(Boolean(null));       // ? //FALSE
console.log(Boolean("0"));        // ? //TRUE
console.log(Boolean("false"));    // ? //TRUE

// Double NOT (!!) Operator
console.log(!!0);          // ? //FALSE
console.log(!!"");         // ? //FALSE
console.log(!!NaN);        // ? //FALSE
console.log(!!"hello");    // ? //TRUE
console.log(!![]);         // ? //TRUE
console.log(!!{});         // ? //TRUE
console.log(!!undefined);  // ? //FALSE
console.log(!!null);       // ? //FALSE

let value1 = " ";
let value2 = [];
let value3 = 0.0;
let value4 = false;

// Conditional Statements
value1 ? console.log("truthy") : console.log("falsy");  // ? //TRUTHY
value2 ? console.log("truthy") : console.log("falsy");  // ? //TRUTHY
value3 ? console.log("truthy") : console.log("falsy");  // ? //FALSY
value4 ? console.log("truthy") : console.log("falsy");  // ? //FALSY

// Comparison with Boolean
console.log(true == 1);     // ? //TRUE
console.log(false == 0);    // ? //TRUE
console.log(true === 1);    // ? //FALSE
console.log(false === 0);   // ? //FALSE
console.log(true != 1);     // ? //FALSE
console.log(false != 0);    // ? //FALSE
console.log(true !== 1);    // ? //TRUE
console.log(false !== 0);   // ? //TRUE

// Array and Object Conversion
console.log(Boolean([]));   // ? //true
console.log(Boolean({}));   // ? //true
console.log(!![]);          // ? //true
console.log(!!{});          // ? //true