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
let tile = "|";
let isForward = true;
let endNode = 10;
let maxLoops = 0;
const logger = (counter: number, tile: string) => {
  if (counter < endNode && isForward) {
    counter++;
    const stringWithSpaces = " ".repeat(50) + tile.repeat(counter);
    console.log(stringWithSpaces);
  }
  if (counter === endNode) {
    isForward = false;
  }
  if (counter > 0 && !isForward) {
    counter--;
    const stringWithSpaces = " ".repeat(50) + tile.repeat(counter);
    console.log(stringWithSpaces);
  }

  if (counter === 0) {
    maxLoops++;
    if (endNode < 20) endNode = endNode + 1;
    isForward = true;
  }

  if (maxLoops > 5) {
    return;
  }

  setTimeout(() => {
    logger(counter, tile);
  }, 50);
};

logger(counter, tile);
/*
    |
    ||
    |||
    ||||
    |||||
    ||||||
    |||||
    ||||
    |||
    ||
    |
 
|    |




*/

const clicky = () => {
  const square = document.querySelector(".square");
  if (square) {
    square.classList.toggle("animate");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", clicky);
  }
});
