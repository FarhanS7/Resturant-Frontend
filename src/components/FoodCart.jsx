import React from "react";

const FoodCart = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
          <p className="bg-slate-900 text-white absolute right-0 top-0 mr-4 mt-4 rounded px-4">
            ${price}
          </p>
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-200">
              Add to Cart
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
