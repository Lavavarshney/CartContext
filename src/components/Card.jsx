import React from "react";

function Card({ img, title, price, children }) {
  return (
    <div className="card p-4 mb-5 flex flex-col justify-between" style={{ minHeight: '100%', width: '300px' }}>
      <img
        className="object-cover mb-4"
        src={img}
        alt={title}
        style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} // Ensure the image scales properly
      />
      <div className="card-body flex-1">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="font-bold">{price} Rs</p>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}

export default Card;
