import React from "react";
import ProductsStore from "../../store/ProductsStore.js";
import StarRatings from "react-star-ratings";

const Reviews = () => {
  const { ProductsReview } = ProductsStore();
  return (
    <div>
      <ul className="list-group mt-4 list-group-flush">
        {ProductsReview !== null ? (
          ProductsReview.map((item, index) => {
            return (
              <li key={index} className="list-group-item bg-transparent">
                <h6 className="m-0 p-0">
                  <i className="bi bi-person"></i> {item["profile"]["cus_name"]}
                </h6>
                <StarRatings
                  rating={parseFloat(item["rating"])}
                  starRatedColor="red"
                  starDimension="15px"
                  starSpacing="2px"
                />
                <p>{item["des"]}</p>
              </li>
            );
          })
        ) : (
          <p>No review</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
