const express = require("express");
const mongoose = require("mongoose");
const bookish = express();
var bodyParser = require("body-parser");

const BooksModel = require("./Database/books");
const AuthorsModel = require("./Database/authors");
const PublicationsModel = require("./Database/publications");
mongoose
  .connect(
    "mongodb+srv://thogarukalyankumar:Thogaru@shapeai.mjodpjf.mongodb.net/bookcollection?retryWrites=true&w=majority",{
      useNewUrlParser: true, useUnifiedTopology: true

    }
  )
  .then(() => console.log("connected"));
bookish.use(bodyParser.urlencoded({ extended: true }));
bookish.use(bodyParser.json());
bookish.post("/post11/author", async (request, res) => {
  const { ab } = request.body;
  const addnewauthor = AuthorsModel.create(ab);
  return res.json({
    books: addnewauthor,
    message: "author was added",
  });
});
bookish.post("/post1/newbook", async (req, res) => {
  const { nb } = req.body;
  console.log(nb);
  const addbook = BooksModel.create(nb);
  return res.json({
    to: addbook,
    message: "sucessfully added new book in db",
  });
});

bookish.post("/post/publications", async (req, res) => {
  const { newpub } = req.body;
  console.log(newpub);
  const addnewpub = PublicationsModel.create(newpub);
  return res.json({
    abc: newpub,
    message: "done",
  });
});

//------------------------put-----------------------
bookish.put("/book/upade/:isbn", async (req, res) => {
  const getbook = await BooksModel.findOneAndUpdate(
    {
      ISBN: req.params.isbn,
    },
    {
      title: req.body.bookTitle,
    },
    {
      new: true,
    }
  );
  return res.json({
    book: getbook,
  });
});
//-------------------------put---------------pudate the author id
bookish.put("/books/author/update/:isbn", async (req, res) => {
  //update book database
  const book = await BooksModel.findOneAndUpdate(
    {
      ISBN: req.params.isbn,
    },
    {
      $addToSet: {
        authors: req.body.newAuthor,
      },
    },
    {
      new: true,
    }
  );
  //update authors database
  const getauthor = await AuthorsModel.findOneAndUpdate(
    {
      id: req.body.newAuthor,
    },
    {
      $push: {
        books: req.params.isbn,
      },
    },
    {
      new: true,
    }
  );
  return res.json({ books1: book, authors1: getauthor });
});
//------------------------------get
bookish.get("/author/get/:id", async (req, res) => {
  const getauthor = await AuthorsModel.findOne({
    id: req.params.id,
  });
  return res.json({
    author: getauthor,
  });
});
  //----------------------delete
bookish.delete("/book/delete/:isbn", async (req,res)=>{
  const book = await BooksModel.findOneAndDelete(
    {
      ISBN : req.params.isbn
    }
  )
  return res.json({
    book1 : book
  })
})
  

bookish.listen(3000, () => {
  console.log("your on 3000 port");
});
