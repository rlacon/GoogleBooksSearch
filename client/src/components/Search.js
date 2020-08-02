import React from "react";
import API from "../utils/API";
import BookResults from "./BookResults";
import Navbar from "./Navbar";
import Loader from "./Loader";

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      search_term: "",
      error: null,
      isLoaded: true
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
    this.setState({
      isLoaded: false
    });
    this.makeAPICall();
  }

  makeAPICall = () => {
    console.log("makeAPICall: " + this.state.search_term)
    API.getBook(this.state.search_term)
      .then(
        (res) => {
          debugger;
          this.setState({
            isLoaded: true,
            books: res.data.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (err) => {
          this.setState({
            isLoaded: true,
            err
          });
        }
      )
  }

  render() {
    const { err, isLoaded, books } = this.state;
    if (err) {
      return <div>Error: {err.message}</div>;
    }
    else {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <Navbar />
              <nav class="navbar">
                <a href="/index" class="navbar-brand"><img src={require("../images/Google_Books_logo_2015.svg")} width="100" height="auto" class="d-inline-block align-top" alt="Google Books logo" />
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
              {!isLoaded ? <Loader /> : <BookResults books={this.state.books} />}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Search;