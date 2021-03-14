const express = require("express");
const json = require("./package.json");
const fs = require("fs");

const Script11 = require("./NodeScripts/Script11");

const app = express();

app.use(express.json());

// Script 11

console.log("Script 11 : ", Script11.split("Sirine Houeidi"));

//Script 18

fs.readFile("package.json", "utf8", (err, data) => {
  try {
    console.log(JSON.parse(data));
  } catch (error) {
    console.log("Json invalid", error);
  }
});

//Script 16

var docxConverter = require("docx-pdf");

docxConverter("./myFiles/word.docx", "./output.pdf", function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log("result" + result);
});

// Views With pug engine

app.set("view engine", "pug");
app.use("/static", express.static("public"));

// Script 20

const QRCode = require("qrcode");

QRCode.toDataURL("My first QrCode", function (err, url) {
  console.log("QrCode", url);
  app.get("/", function (req, res) {
    res.render("index", {
      title: "Script 20",
      message: "Hello there this is your QrCode!",
      url: url,
    });
  });
});

//Script 19

let myFile = "function add(first, second) { return first + second; }";

/*********** Beautify Version *************** */

var beautify = require("json-beautify");

console.log("Beautify", beautify(myFile, null, 3, 100));

const path = require("path");
const fse = require("fs-extra");

const beautyVersion = () => {
  fse
    .outputFile("Beautify/beautify.json", beautify(myFile, null, 3, 100))
    .then(() => {
      console.log("The file was saved!");
    })
    .catch((err) => {
      console.error(err);
    });
};

/*********** Minify Version *************** */

let UglifyJS = require("uglify-js");
let code = "function add(first, second) { return first + second; }";

let result = UglifyJS.minify(code);
console.log(result.error); // runtime error, or `undefined` if no error
console.log("Minify Version", result.code); // minified output: function add(n,d){return n+d}

const minifyVersion = () => {
  fse
    .outputFile("Minify/minify.json", result.code)
    .then(() => {
      console.log("The file was saved!");
    })
    .catch((err) => {
      console.error(err);
    });
};

// beautyVersion();
// minifyVersion();

const PORT = 5000;

app.listen(PORT, (error) => {
  error
    ? console.log("Connection to server failed", error)
    : console.log("Server connected successfully");
});
