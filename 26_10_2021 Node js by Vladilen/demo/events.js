const EventEmitter = require("events");

const emitter = new EventEmitter();

//прослушка события
/*
emitter.on("anything", (data) => {
  console.log("ON: anything", data);
});

emitter.emit("anything", { a: 1 });
emitter.emit("anything", { b: 2 });

setTimeout(() => {
  emitter.emit("anything", { c: 3 });
}, 500);
*/

//36:39 наследование от EventEmitter
class Dispatcher extends EventEmitter {
  //метод
  subscribe(eventName, cb) {
    console.log("subscribe...");
    this.on(eventName, cb);
  }

  dispatch(eventName, data) {
    console.log("dispatching...");
    this.emit(eventName, data);
  }
}

const dis = new Dispatcher();

dis.subscribe("aa", (data) => {
  console.log("ON aa", data);
});

dis.dispatch("aa", { aa: 22 });
