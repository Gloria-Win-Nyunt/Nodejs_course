// globalThis.setTimeout(function () {
//   console.log("hello");
// },3000);

let interval = globalThis.setInterval(function () {
  console.log("hello");
}, 2000);

globalThis.setTimeout(function () {
  clearInterval(interval);
}, 5000);

console.log(__dirname);
console.log(__filename);
