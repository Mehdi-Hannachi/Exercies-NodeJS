
const fs  = require('fs')

const Script18 = () => {
  fs.readFile("package.json", "utf8", (err, data) => {
    try {
      console.log(JSON.parse(data));
    } catch (error) {
      console.log("Json invalid", error);
    }
  });
};

module.exports = Script18
