const db = require("../models");
var books = require('google-books-search');


// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        // db.Book
        //   .find(req.query)
        //   .sort({ date: -1 })
        //   .then(dbModel => res.json(dbModel))
        //   .catch(err => res.status(422).json(err));
    },
    
    findBySearchTerm: function (req, res) {
        // Let's connect to Google
        console.log("in findBySearchTerm: " + req.body)
        var options = {
            key: "AIzaSyBaH_LDs0NEAH2ILfku3MkGJ9-iy7xmXzo",
            field: 'title',
            offset: 0,
            limit: 10,
            type: 'books',
            order: 'relevance',
            lang: 'en'
        };

        //   books.search('Professional JavaScript for Web Developers', function(error, results) {
        //     if ( ! error ) {
        //         console.log("----------------------------------")
        //         console.log(results);
        //         console.log("----------------------------------")
        //     } else {
        //         console.log(error);
        //     }
        // });

        books.search("Professional JavaScript for Web Developers", options, function (error, results, apiResponse) {
            if (!error) {
                console.log("----------------------------------")
                console.log(results);
                console.log("----------------------------------")
            } else {
                console.log(error);
            }
        });

        // db.Book
        //   .findById(req.params.id)
        //   .then(dbModel => res.json(dbModel))
        //   .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        // db.Book
        //   .create(req.body)
        //   .then(dbModel => res.json(dbModel))
        //   .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        // db.Book
        //   .findOneAndUpdate({ _id: req.params.id }, req.body)
        //   .then(dbModel => res.json(dbModel))
        //   .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        // db.Book
        //   .findById({ _id: req.params.id })
        //   .then(dbModel => dbModel.remove())
        //   .then(dbModel => res.json(dbModel))
        //   .catch(err => res.status(422).json(err));
    }
};
