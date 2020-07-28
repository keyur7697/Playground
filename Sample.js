function checkArray(values) {
  //var values = [4, 20, 40, 3, 1];
  //console.log(values);
  var it1 = [];
  var it2 = [];
  var it3 = [];
  var it4 = [];
  // Getting sum of numbers
  //------------------------------------ first 2 op
  for (i = 0; i < 3; i++) {
    it1.push(switchCheck(i, values[0], values[1]));
  }
  //console.log("it1= " + it1);
  //console.log("--------------------------------------------------------------");
  //------------------------------------ iteration 1 (first 2 op
  it1.forEach((element) => {
    for (i = 0; i < 3; i++) {
      it2.push(switchCheck(i, element, values[2]));
    }
  });
  //   console.log("it2= " + it2);
  //   console.log("it2 length" + it2.length);
  //   console.log("--------------------------------------------------------------");

  it2.forEach((element) => {
    for (i = 0; i < 3; i++) {
      it3.push(switchCheck(i, element, values[3]));
    }
  });
  //   console.log("it3= " + it3);
  //   console.log("it3 length" + it3.length);[ 3, 1, 20, 40, 4 ]

  //   console.log("--------------------------------------------------------------");

  it3.forEach((element) => {
    for (i = 0; i < 3; i++) {
      it4.push(switchCheck(i, element, values[4]));
    }
  });
  //   console.log("it4= " + it4);
  //   console.log("it4 length" + it4.length);
  //   console.log("--------------------------------------------------------------");

  var result = it4.filter((number) => number == 42);
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

function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function factorial(n) {
  var val = 1;
  for (var i = 1; i < n; i++) {
    val *= i;
  }
  return val;
}

function permute(perm, func) {
  var total = factorial(perm.length);

  for (var j = 0, i = 0, inc = 1; j < total; j++, inc *= -1, i += inc) {
    for (; i < perm.length - 1 && i >= 0; i += inc) {
      func.call(perm);
      swap(perm, i, i + 1);
    }

    func.call(perm);

    if (inc === 1) {
      swap(perm, 0, 1);
    } else {
      swap(perm, perm.length - 1, perm.length - 2);
    }
  }
  checkArray(this);
}

console.clear();

count = 0;
var BreackException = {};
try {
  permute([4, 20, 40, 3, 1], function (p) {
    count++;

    var temp = checkArray(this);
    if (temp == true) {
      console.log(this);
      console.log(temp);
    }
  });
} catch (e) {
  console.log(e);
}

console.log("There have been " + count + " permutations");
