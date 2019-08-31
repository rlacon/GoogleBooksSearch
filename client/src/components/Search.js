import React from "react";
import API from "../utils/API";

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search_term: '' }
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
        API.getBook("test")
            // .then(res => this.setState({ books: res.data }))
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    // value={this.state.search_term}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Search;