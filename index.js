const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const math = require('./Math.js');
const print = require('./Print.js');

const readLineAddExample = () => {
  rl.question("Where do I start? ", (min) => {
    rl.question("Where do I end? ", (max) => {
      controlsExample (min, max);
      rl.close();
    });
  });
}

const controlsExample = (min, max) => {
  let i = parseInt (min);
  max = parseInt (max);
  while( i <= max) {
    console.log(i);
    i += 1;
  }
}

//readLineAddExample();
readLineAddExample ();