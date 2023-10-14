// Given a variable with the string 'abcde'. Referring to the individual characters of this string.
// write the characters of this string in reverse order into a new variable, that is, 'edcba'.
let str = "abcde";

let pos4 = str[4];
let pos3 = str[3];
let pos2 = str[2];
let pos1 = str[1];
let pos0 = str[0];

let strReverse = pos4 + pos3 + pos2 + pos1 + pos0;

alert(strReverse);