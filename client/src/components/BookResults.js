import React from 'react';
import "./style.css";

function BookResults(props) {
    return (
        <div className="container col border border-rounded p-4 bookResults">

            <div className="col">
                <h2>Book Results</h2>
            </div>

            {props.books.map((item, key) =>
                <div key={item.id} className="col bookResult">

                    <h4><strong>{item.volumeInfo.title}</strong></h4>
                    <p>{item.volumeInfo.authors}</p>

                    <div className="row">
                        <div className="col-auto">
                            <img src={item.volumeInfo.imageLinks.thumbnail} />
                        </div>

                        <div className="col">
                            <p id="book-description">{item.volumeInfo.description}</p>
                        </div>
                    </div>

                    <hr />
                </div>
            )}
        </div>
    )
}

export default BookResults;