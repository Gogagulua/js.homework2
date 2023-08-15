// 1. If-Else Statements
let selector = prompt("eneter your age")

// Exercise 1.1: მოცემულია ცვლადი age, დაწერე if-else ბრძანება, რომელიც შეამოწმებს ადამიანის ასაკს და თუ ადამიანი არის 18 წლის ანდა მეტი დაბრუნდება true, თუ არადა false.


// Your code here

let age = 18;
if (age >= 18) {
  console.log("true");
} else{
    console.log("false")
}

// Exercise 1.2: მოცემულია ცვლადი temperature, დაწერე if-else ბრძანება, რომელიც შეამოწმებს ტემპერატურას და თუ ტემპერატურა არის 20 ზე ნაკლები დაბრუნდება "cold", 20-დან 30-მდე დაბრუნდება "moderate", 30-ზე მეტია დაბრუნდება "hot".

let temperature = 25;
// Your code here
if(temperature < 20) {
    console.log(cold)
} else if(temperature > 20 && temperature < 30) {
    console.log(moderate)
} else if (temperature > 30) {
    console.log(hot)
}


// 2. Ternary Operator
// Exercise 2.1: გამოიყენე ternary operator რომ შეამოწმო რიცხვი კენტია თუ ლუწია. თუ კენტია დაბრუნდება "Even", თუ ლუწია დაბრუნდება "Odd".
// Hint 1: გამოიყენეთ % (modulo) რომ გამოითვალოთ რიცხვის კენტობა.
// Hint 2: გამოიყენეთ === (strict equality) რომ შეამოწმოთ რიცხვების ტიპი.
let number = 7;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);


// Exercise 2.2: გამოიყენე ternary operator რომ განსაზღვრო ადამიანის თინეიჯერია თუ არა. თუ არა, დაბრუნდება "No", თუ არადა "Yes".
// Hint 1: თინეიჯერია თუ მისი ასაკი არის 13-დან 19-მდე.

let age2 = 15;
let isTeenager = age2>=13 && age2<19 ? "Yes" : "No";
console.log(isTeenager);


// 3. Switch Statement
// Exercise 3.1: მოცემულია ცვლადი day, გამოიყენე switch statement რომ დაბეჭდოთ კვირის დღე.
let day = 3;  // 1 for Monday, 2 for Tuesday, etc.
// Your code here
switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
  }


// Exercise 3.2: გამოიყენე switch ბრძანება რომ დაახაარისხო ხილი ფერის მიხედვით. მაგალითად, ვაშლი და ალუბალი წითელია, ბანანი ყვითელია...


let fruit = "apple";
// Your code here

let color;

switch (fruit) {
  case "apple":
  case "cherry":
    color = "red";
    break;
  case "banana":
    color = "yellow";
    break;
  case "orange":
    color = "orange";
    break;
  case "grape":
    color = "purple";
    break;
}