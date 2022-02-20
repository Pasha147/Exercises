console.log("1");
let prom = new Promise(function (resolve, reject) {
  console.log("2");
  setTimeout(() => {
    console.log("3");
    resolve();
  }, 1000);
})
  .then(() => {
    console.log("4");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("5");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    console.log("6");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("7");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    console.log("8");
  });
