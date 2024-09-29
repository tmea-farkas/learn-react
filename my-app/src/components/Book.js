import React from "react";

function Book(prop) {
    const book = prop.book
    return (
        <div>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
        </div>
    )
}

export default Book