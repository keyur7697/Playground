/*-
    -  Alice has invented a new card game to play with Bob. Alice made a deck of
    -  cards with random values between 1 and 52. Bob picks 5 cards. Then, he has
    -  to rearrange the cards so that by utilizing the operations plus, minus, or
    -  times, the value of the cards reach Alice's favorite number, 42. More
    -  precisely, find operations such that ((((val1 op1 val2) op2 val3) op3 val4)
    -  op4 val5) = 42.
    -
    -  Help Bob by writing a program to determine whether it is possible to reach
    -  42 given 5 card values.
    -
    -  For example, Bob picks 5 cards out of the deck containing 60, 1, 3, 5, and
    -  20. Bob rearranges the cards and supplies four operations, so that 5 * 20
    -  - 60 + 3 - 1 = 42.
    -
    -  Input sample:
    -      44 6 1 49 47
    -      34 1 49 2 21
    -      31 38 27 51 18
    -
    -  The input consists of five integers on a line, separated by spaces. Each
    -  integer V is 0 <= V <= 52.
    -  Output sample:
    -      NO
    -      YES
    -      NO
    -
    -  For each test case print a line containing "YES" if it is possible to reach
    -  the value 42 according to the rules of the game, or "NO" otherwise.
    -*/

// Sample arrays with test results
var array = [44, 6, 1, 49, 47]; //NO
var array = [34, 1, 49, 2, 21]; //YES
var array = [31, 38, 27, 51, 18]; //NO
var BreakException = {};

try {
  perm(array).forEach((item) => {
    if (checkArray(item) === true) {
      console.log("Yes");
      throw BreakException;
    }
  });
  console.log("No");
} catch (e) {
  if (e != BreakException) {
    console.log(e);
  }
}

//function to fetch permutations of array
function perm(xs) {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

    if (!rest.length) {
      ret.push([xs[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]));
      }
    }
  }
  return ret;
}

//function to perform opertaions on given array.
function checkArray(values) {
  var iteration1 = [];
  var iteration2 = [];
  var iteration3 = [];
  var iteration4 = [];

  for (i = 0; i < 3; i++) {
    iteration1.push(switchCheck(i, values[0], values[1]));
  }

  iteration1.forEach((element) => {
    for (i = 0; i < 3; i++) {
      iteration2.push(switchCheck(i, element, values[2]));
    }
  });

  iteration2.forEach((element) => {
    for (i = 0; i < 3; i++) {
      iteration3.push(switchCheck(i, element, values[3]));
    }
  });

  iteration3.forEach((element) => {
    for (i = 0; i < 3; i++) {
      var answer = switchCheck(i, element, values[4]);
      iteration4.push(answer);
      if (answer == 42) {
        return true; //to stop execution if 42 Found
      }
    }
  });
  //console.log("iterations" + iteration4.length);

  var result = iteration4.filter((number) => number == 42);
  if (result.length > 0) return true;
  else return false;
}

function switchCheck(i, a, b) {
  var result = 0;
  switch (i) {
    case 0:
      result = a + b;
      //console.log(a + "+" + b + "=" + (a + b));
      break;
    case 1:
      result = a - b;
      //console.log(a + "-" + b + "=" + (a - b));
      break;
    case 2:
      result = a * b;
      //console.log(a + "*" + b + "=" + a * b);
      break;
  }
  return result;
}
