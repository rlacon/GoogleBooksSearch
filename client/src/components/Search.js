import React from "react";
import API from "../utils/API";
import BookResults from "./BookResults";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            search_term: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.makeAPICall = this.makeAPICall.bind(this)
    }

    handleChange(event) {
        this.setState({ search_term: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("You entered: " + this.state.search_term)
        this.makeAPICall();
    }

    makeAPICall = () => {
        console.log("makeAPICall: " + this.state.search_term)
        API.getBook(this.state.search_term)
            .then(res => this.setState({ books: res.data.items }))
            .then(res => console.log(this.state.books))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* <Jumbotron /> */}
                        <Navbar />
                        <nav class="navbar">
                            <a href="/index" class="navbar-brand"><img src={require("../images/Google_Books_logo_2015.svg")} width="100" height="auto" class="d-inline-block align-top" alt="" />
                            </a>
                            <form onSubmit={this.handleSubmit} class="form-inline">
                                <input
                                    class="form-control mr-sm-2"
                                    type="search"
                                    value={this.state.search_term}
                                    onChange={this.handleChange}
                                    placeholder="Enter a book title"
                                    aria-label="Search" />
                                <button class="btn" type="submit">Search</button>
                            </form>
                        </nav>
                        <BookResults books={this.state.books} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;