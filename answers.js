console.log("sup");
// -----------------------------------------------------
// Part I: HTML & CSS
// -----------------------------------------------------

// 5/5 ready

// -----------------------------------------------------
// Part II: JS Reps
// -----------------------------------------------------
//* Easy Going
//? Write a loop, log 1-20
for (i = 0; i < 20; i++) {
  console.log("number is", i + 1);
}

//* Get Even
//? Write loop: even nums 0-200
for (i = 0; i <= 200; i += 2) {
  console.log("number is", i);
}
//* Fizz Buzz
/*
1. log all nums from 1-100
2. if num is divisible by 3, log "Fizz" instead
3. if num is div by 5 = "Buzz"
4. if num is div by 3 && 5 = "FizzBuzz"
*/

//count all numbers
for (i = 0; i <= 200; i++) {
  // divisible by 3 && 5
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    // div by 3
  } else if (i % 3 == 0) {
    console.log("Fizz");
    // div by 5
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }
  // normal number
  else {
    console.log(i);
  }
}

//* Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

//? add 1 year to plantee
plantee[2] += 1;
console.log(plantee[2]);

//? change wolfy's hometown to Gotham City
wolfy[3] = "Gotham City";
console.log(wolfy[3]);

//? dart: add "Hawkins"
dart.push("Hawkins");
console.log(dart[4]);

//? replace wolfy with gameboy
wolfy[0] = "Gameboy";
console.log(wolfy[0]);

//* Yess at the ninja turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let name of ninjaTurtles) {
  console.log(name.toUpperCase());
}
