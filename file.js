const { log } = require("console");
const fs = require("fs");
// fs.readFile("./docs/creativecoder.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//write
// fs.writeFile("./docs/creative123.txt", "hello", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });
// console.log("abc");

//check file exists or not and delete file

// if (!fs.existsSync("./docs/creativecoder.txt")) {
//   fs.writeFile("./docs/creativecoder.txt", "replay 1,23", (err) => {
//     if (err) console.log(err);
//     console.log("after writing files");
//   });
// } else {
//   fs.unlink("./docs/creativecoder.txt", (err) => {
//     if (err) console.log(err);
//     console.log("deleted");
//   });
// }

//folder creation
// fs.mkdir('./new',(err)=>{
//    if(err) console.log(err);
//    console.log('folder created');
// })

//folder delete
// fs.rmdir('./new',(err)=>{
//     if(err) console.log(err);
//     console.log('folder deleted');
// })

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) console.log(err);
    console.log("removed");
  });
} else {
  fs.mkdir("./new", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
}
