import React from 'react';


const BookDetailPage = async({params}) => {
    const {BookId} = await params;
const res = await fetch (`http://localhost:5000/books/${BookId}`);
const book = await res.json();

    return (
        <div>
            <h1>Book Details</h1>
            <h1>{book.title}</h1>
            <h1>{book.description}</h1>
            <h1>{book.author}</h1>
        </div>
    );
};

export default BookDetailPage;