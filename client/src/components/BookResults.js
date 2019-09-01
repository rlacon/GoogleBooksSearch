import React from 'react';

function BookResults(props) {
    return (
        <div>
            {props.books.map((item, key) =>
                <div key={item.id}>
                    <p>{item.volumeInfo.title}</p>
                    <p>{item.volumeInfo.authors}</p>
                    <img src={item.volumeInfo.imageLinks.smallThumbnail} />
                    <p>{item.volumeInfo.description}</p>
                </div>
            )}
        </div>
    )
}

export default BookResults;