const books = [
  {
    ISBN: "123456B",
    title: "mask",
    pubdate: "2020-04-23",
    language: "en",
    pages: 240,
    authors: [1, 2],
    publications: [1],
    cat: ["learning", "tech"]
  }
];
const authors = [
  {
    id: 1,
    name: "kalyankumar",
    books: ["123456B", "secrate"]
  },
  {
    id: 2,
    name: "elon mask",
    books: ["123456B", "3"]
  },
];

const publications = [
  {
    id: 1,
    name: "writex",
    books: ["123456B"],
  },
  {
    id: 2,
    name: "writex",
    books: ["bac"]
  },
  {
    id: 3,
    name: "writex",
    books: ["123456B", "kaa"]
  },
];
module.exports = { books, authors, publications };
