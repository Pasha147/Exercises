// function* strGenerator() {
//   yield "H";
//   yield "e";
//   yield "l";
//   yield "l";
//   yield "o";
// }

// const str = strGenerator().next();

// function* numberGen(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i;
//   }
// }

// const num = numberGen(5);

const iterator = {
  //   gen(n = 10) {
  [Symbol.iterator](n = 10) {
    let i = 0;
    // it doesn't work
    // return {
    //   value: i,
    //   done: false,
    // };

    return {
      next() {
        if (i < n) {
          return {
            value: ++i,
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

function* iter(n = 5) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let k of iterator) {
  console.log(k);
}
console.log("-------------");
for (let k of iter(7)) {
  console.log(k);
}
