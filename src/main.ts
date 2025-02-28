console.log("HI");

console.log("  _____ _   _  _____ _   _  _____ ");
console.log(" |_   _| | | ||  ___| \\ | ||  ___|");
console.log("   | | | |_| || |__ |  \\| || |__  ");
console.log("   | | |  _  ||  __|| . ` ||  __| ");
console.log("   | | | | | || |___| |\\  || |___ ");
console.log("   \\_/ \\_| |_/\\____/\\_| \\_/\\____/ ");
console.log("                                 ");

const leftfish = "<(o_o<)";
const rightfish = "(>o_o)>";
const fish = "<(o_o)>";

console.log(leftfish + " " + fish + " " + rightfish);

let counter = 0;
let tile = "X";
let isForward = true;
let endNode = 10;
const logger = (counter: number, tile: string) => {
  if (counter < endNode && isForward) {
    counter++;
    console.log(tile.repeat(counter));
  }
  if (counter === endNode) {
    isForward = false;
    // counter = 9;
    // console.log(tile.repeat(counter));
  }
  if (counter > 0 && !isForward) {
    counter--;
    console.log(tile.repeat(counter));
  }

  if (counter === 0) {
    endNode = endNode + 1;
    isForward = true;
  }

  // console.log(tile.repeat(counter));
  setTimeout(() => {
    logger(counter, tile);
  }, 50);
};

logger(counter, tile);

// const recursiveLog = (counter: number, tile: string) => {
//   counter++;
//   // while (counter > 10) {
//   //   console.log(tile.repeat(counter));
//   //   setTimeout(() => {
//   //     recursiveLog(counter, tile);
//   //   }, 50);
//   // }
// };

// recursiveLog(counter, tile);
