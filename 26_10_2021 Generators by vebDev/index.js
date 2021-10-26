//console.log("Hello");

function* gen() {
  //   console.log("asdfasdf");
  //   yield 1;
  //   yield 2;
  //   console.log("ffffffff");

  console.log("asdfasdf");
  let res = (yield) * 2; //yield обязательно в скобки
  console.log("res", res);
}

let iter = gen();

console.log(iter.next());
console.log(iter.next(3));

//console.log(iter.next());
// iter.next();
// console.log(iter.next());
//console.log(gen());

console.log("2====================");

function* gen2() {
  yield 1;
  yield 2;
  yield 3;
}

let iter2 = gen2();
console.log(iter2.next());
// console.log(iter2.next());

//====the returt and throw methods====
// console.log(iter2.return());
// console.log(iter2.throw(new Error("some error")));
console.log(iter2.next());

console.log("3====================");

function* gen3() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (error) {
    console.log("Custom error---", error);
  }
}

let iter3 = gen3();
console.log(iter3.next());
// console.log(iter2.next());

//====the returt and throw methods====
// console.log(iter2.return());
// console.log(iter3.throw(new Error("some error")));
console.log(iter3.next());

console.log("4====================");

function* genRange(start, end) {
  let current = start;
  while (current <= end) {
    yield current++;
  }
}
// number в этом случае - это value из того что выдает метод next
for (number of genRange(1, 10)) {
  console.log(number);
}

console.log("5 функция генератор как метод объекта=========");
let obj = {
  *genRange(start, end) {
    let current = start;
    while (current <= end) {
      yield current++;
    }
  },
};

for (number of obj.genRange(1, 10)) {
  console.log(number);
}

console.log("6 =========");

function* gen6(start = 1, end = 5) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

let iter6 = gen6();
console.log(iter6.next().value);
let num = iter6.next();
console.log(num);
