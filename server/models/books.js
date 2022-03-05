

//*******************************************************************
//  COMP229   W2022 MIDTERM
//  File name       : books.js
//  Author's Name  : Kai Hong Yeung
//  StudentID       : 301229539
//  Web App name    : COMP229 W2022 MIDTERM Book Application
//  Date            : 05 Mar 2022
//*******************************************************************


let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
