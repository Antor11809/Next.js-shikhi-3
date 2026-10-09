import React from 'react';

const BookCard = ({book}) => {
    const {id, title, price, description, rating} = book;
    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}     {rating}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now - {price} tk</button>
    </div>
  </div>
</div>
    );
};

export default BookCard;

