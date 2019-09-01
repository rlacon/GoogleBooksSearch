import React from "react";
import API from "../utils/API";
import Item from "./Item";


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
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.search_term}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <h1>Book Results</h1>
                {this.state.books.map((item, key) =>
                    <Item item={item} key={item.id} />
                )}
            </div>
        )
    }
}

export default Search;