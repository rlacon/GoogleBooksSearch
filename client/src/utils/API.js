import axios from "axios";

export default {
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    //   getBook: function(id) {
    //     return axios.get("/api/books/" + id);
    //   },
    // Gets the book with the given id
    getBook: function (search_term) {
        console.log("in getBook: " + search_term)
        // return axios.get("/api/books/" + search_term);
        axios.get(`/api/books/test`)
            .then(res => {
                console.log("returned in getBook: " + search_term)
                //   const posts = res.data.results.map(obj => ({title: obj.title, overview: obj.overview, poster: obj.poster_path, vote: obj.vote_average}));
                //   this.setState({ posts });
            });
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
