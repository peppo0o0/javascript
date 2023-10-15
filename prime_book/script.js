// The number given is 12345. Rearrange the digits of this number in reverse order.

let num = 12345;
let numString = String(num);
let [r0, r1, r2, r3, r4] = [numString[0], numString[1], numString[2], numString[3], numString[4]];
let numReverse = r4 + r3 + r2+ r1 + r0;

alert(numReverse);