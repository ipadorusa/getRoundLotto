const fs = require("fs");

function makeJson(fileName, data) {
  fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log(`File ${fileName} has been saved.`);
  });
}

module.exports = makeJson;
