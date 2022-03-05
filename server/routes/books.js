

//*******************************************************************
//  COMP229   W2022 MIDTERM
//  File name       : books.js
//  Author's Name  : Kai Hong Yeung
//  StudentID       : 301229539
//  Web App name    : COMP229 W2022 MIDTERM Book Application
//  Date            : 06 Mar 2022
//*******************************************************************


// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    //blank value for the books property
     let newBook = book({
      "Title": "",      
      "Description": "",
      "Price": "",
      "Author": "",
      "Genre": ""
  });
    // renders the book details page
     res.render('books/details', {title: 'Add Book', books: newBook})    

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

    //  Title: String,
    //  Description: String,
    //  Price: Number,
    //  Author: String,
    //  Genre: String

    //new books property with post value
     let newBook = book({
      "Title": req.body.title,      
      "Description": req.body.description,
      "Price": req.body.price,
      "Author": req.body.author,
      "Genre": req.body.genre
  });
// Create book with id in DB
  book.create(newBook, (err, Book) =>{
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          // refresh the book details page
          res.redirect('/books');
      }
  });
});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

     let id = req.params.id;
    // Query book with id in DB for edit
     book.findById(id, (err, bookToEdit) => {
         if(err)
         {
             console.log(err);
             res.end(err);
         }
         else
         {
             //show the details page for edit
             res.render('books/details', {title: 'Edit Book', books: bookToEdit})
         }
     });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

     let id = req.params.id
    //update books property with post value
     let updatedBook = book({
        "_id": id,
        "Title": req.body.title,      
        "Description": req.body.description,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
     });
     // Update book with id in DB
     book.updateOne({_id: id}, updatedBook, (err) => {
         if(err)
         {
             console.log(err);
             res.end(err);
         }
         else
         {
             // refresh the book details page
             res.redirect('/books');
         }
     });
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

     let id = req.params.id;
    // Delete book with id in DB
     book.remove({_id: id}, (err) => {
         if(err)
         {
             console.log(err);
             res.end(err);
         }
         else
         {
              // refresh the book details page
              res.redirect('/books');
         }
     });
});


module.exports = router;
