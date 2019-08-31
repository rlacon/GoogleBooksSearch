import React from "react";

function Search(props) {

    return (
        <div>
            <container>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Search</label>
                    <input type="text" class="form-control" id="input" aria-describedby="searchHelp" placeholder="Enter book title" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </container>
        </div>
    )
}


export default Search;