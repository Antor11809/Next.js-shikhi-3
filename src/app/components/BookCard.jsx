import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    const {id, title, price, description, rating} = book;
    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
   <h2 className="card-title">{title} <span className="ml-[40px]">⭐ {rating}</span></h2>
    <p>{description}</p>
    <div className="card-actions justify-end">

      <Link href={`/books/${id}`}>
      <button className="btn btn-primary">View Details- {price} tk</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;

