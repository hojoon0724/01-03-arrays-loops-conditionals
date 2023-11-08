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

//* Methods, revisited
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

console.log(favMovies.indexOf("Titanic"));

//? 1. use the sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort();
console.log(favMovies);
// it sorted the array alphabetically. Did not permanently alter it, it's only altered from this point on, after the "sort" method has been run

//? 2. use the method pop
favMovies.pop();
console.log("2", favMovies);

//? 3. push "guardians of the galaxy"
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

//? 4. Reverse the array
favMovies.reverse();
console.log(favMovies);

//? 5. Use the shift method
favMovies.shift();
console.log(favMovies);

//? 6. unshift - what does it return?
favMovies.unshift();
console.log(favMovies);
// nothing changes. we removed the first element and never stored it anywhere and we didn't specify what to add at the beginning of the array

//? 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
const django = favMovies.indexOf("Django Unchained");
console.log(django);
favMovies.splice(django, 0, "Avatar");
console.log(favMovies);
// did not permanently alter the array. it's only altered from this point on

//? 8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?

const favMoviesHalfLength = favMovies.length / 2;
console.log(favMoviesHalfLength);
console.log(favMovies.slice(favMoviesHalfLength));

//? 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
console.log(favMoviesHalfLength);
// it's taking the length of the array, dividing it by 2, then returning the value 9.5. When applied to slice, it's only using the whole number and ignoring the decimals

//? 10. console.log your final results
console.log(favMovies);

//? After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf("Guardians of the Galaxy")); // "Fast and Furious" did not get removed. "Guardians of the Galaxy" got removed.
// We get "-1" value
console.log(favMovies[-1]); // Just seeing what happens if I look for "-1" in the array

//? Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// We could have used "let" and it would have worked just fine because we did not redefine "favMovies". BUT it's just safer to use "const". We were able to change the contents because the "const" refers to the entire array, not the individual items inside the array.

// -----------------------------------------------------
// Where is Waldo
// -----------------------------------------------------

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

//? Remove Eggbert (hint look at the slice/splice method(s))
const eggbertArrayIndex = whereIsWaldo.indexOf("Eggbert");
console.log(eggbertArrayIndex);
whereIsWaldo.splice(eggbertArrayIndex, eggbertArrayIndex);
console.log(whereIsWaldo);

//? Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[1][2]);
console.log(whereIsWaldo[2][1][1]);

// -----------------------------------------------------
// Excited Kitten
// -----------------------------------------------------

//console.log("test", kittenMessage);

const kittenMessage = "Love me, pet me! HSSSSSS!";
for (i = 1; i <= 20; i++) {
  // if odd, just message
  if (i % 2 != 0) {
    console.log("iteration", i, kittenMessage);
  }
  // if even, alt message
  else {
    // array of messages
    const kittenMessageAlt = [
      "...human...why you taking pictures of me?...",
      "...the catnip made me do it...",
      "...why does the red dot always get away...",
    ];
    // generate random number below array.length
    const r = Math.floor(Math.random() * kittenMessageAlt.length);
    console.log("iteration", i, kittenMessageAlt[r]);
  }
}

// -----------------------------------------------------
// Find the Median
// -----------------------------------------------------
//? Find the median number in the following nums array, then console.log that number.
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

// reorder array
nums.sort();

// if there are odd number of items
if (nums.length % 2 != 0) {
  // console.log("array count odd", nums.length);
  console.log("odd", nums[(nums.length - 1) / 2]);
  //if there are even number of items, add the middle 2 and average
} else {
  // console.log("array count even", nums.length);
  const lower = nums[nums.length / 2 - 1];
  const higher = nums[nums.length / 2];
  // console.log("lower", lower);
  // console.log("higher", higher);
  console.log("even", (lower + higher) / 2);
}
