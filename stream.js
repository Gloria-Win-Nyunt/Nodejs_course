const fs = require("fs");

const readStream = fs.createReadStream("./docs/creative123.txt");
const writeStream = fs.createWriteStream("./docs/long-write.txt");

//pipe 
// readStream.on("data", function (data) {
//   writeStream.write(data.toString());
//   writeStream.write("---chunk----");
// });


readStream.pipe(writeStream);