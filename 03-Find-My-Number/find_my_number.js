//insert your pseudocode below
/*
- create a variable which generates a integer between [1,100].
- ask the user to guess that number and set this to another variable..
- repeat comparing the number of the user with the integer untile they are equal.
- If the answer of the user is wrong , so it is greater or less than the right answer.
- finish the process if the user enters 0.
- show a message when the user guesses the right answer.

*/

//insert your code below
var Integer, Number2;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


Integer = mathRandomInt(1, 100);
Number2 = window.prompt('Can you guess the my number?');
while (Number2 != Integer) {
  if (Number2 > Integer) {
    Number2 = window.prompt('my number is Lower ! .... guess agin');
  }
  if (Number2 < Integer) {
    Number2 = window.prompt('my number is higher! ..... guess again');
  }
  if (Number2 == 0) {
    break;
  }
}
window.alert('You Win! ');