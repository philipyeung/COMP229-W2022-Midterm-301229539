

//*******************************************************************
//  COMP229   W2022 MIDTERM
//  File name       : index.js
//  Author's Name  : Kai Hong Yeung
//  StudentID       : 301229539
//  Web App name    : COMP229 W2022 MIDTERM Book Application
//  Date            : 05 Mar 2022
//*******************************************************************


// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
