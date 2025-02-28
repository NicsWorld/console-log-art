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
for (let i = 0; i < 100; i++) {
  // delay(1000);
  setTimeout(() => {
    counter++;
    console.log(tile.repeat(counter));
  }, 5000);
  // counter++;
  // console.log(tile.repeat(counter));
}
