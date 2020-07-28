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

var BreakException = {};

try {
  // 34, 1, 49, 2, 21
  //   44 6 1 49 47
  perm([34, 1, 49, 2, 21]).forEach((item) => {
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

function checkArray(values) {
  var it1 = [];
  var it2 = [];
  var it3 = [];
  var it4 = [];
  for (i = 0; i < 3; i++) {
    it1.push(switchCheck(i, values[0], values[1]));
  }
  it1.forEach((element) => {
    for (i = 0; i < 3; i++) {
      it2.push(switchCheck(i, element, values[2]));
    }
  });
  it2.forEach((element) => {
    for (i = 0; i < 3; i++) {
      it3.push(switchCheck(i, element, values[3]));
    }
  });
  it3.forEach((element) => {
    for (i = 0; i < 3; i++) {
      it4.push(switchCheck(i, element, values[4]));
    }
  });
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
