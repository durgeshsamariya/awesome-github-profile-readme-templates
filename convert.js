const fs = require("fs");

// read file
const readFiles = fs
  .readFileSync("README.md")
  .toString()
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n");

const regexMatchItem = /\[(.*)\]((.*)\.md)/gm;
let authors = [];

readFiles.forEach((item) => {
  if (item === "") return;

  const match = regexMatchItem.exec(item);
  if (!match) return;

  const nameAuthor = `${match[0]
    .replace("[", "")
    .replace("]", "")
    .replace(
      "Contributions(https://github.com/durgeshsamariya/awesome-github-profile-readme-templates/blob/master/CONTRIBUTING.md) are welcome. Read the [Guidelines]",
      ""
    )})`;

  authors.push(nameAuthor);
});

// sorting alphabet
authors = authors.sort(function (a, b) {
  return a.localeCompare(b);
});

const sidebar = {};

authors.forEach((author) => {
  const firstLetter = author.toUpperCase()[0];

  if (firstLetter === undefined) return;
  let nameAuthor = `[${author.replace("(", "](")}`;

  if (sidebar[firstLetter]) {
    sidebar[firstLetter].push(nameAuthor);
  } else {
    sidebar[firstLetter] = [nameAuthor];
  }
});

delete sidebar["("];

const loopNestedObj = (obj) => {
  Object.keys(obj).forEach((key) => {
    console.log(`   - ${key}`);
    obj[key].map((value) => {
      console.log(`     - ${value}`);
    });
  });
};

loopNestedObj(sidebar);
// console.log(sidebar);
