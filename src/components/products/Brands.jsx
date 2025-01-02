import React from "react";
import ProductsStore from "../../store/ProductsStore.js";
import BrandsSkeleton from "./../../skeletons/BrandsSkeleton.jsx";
import { Link } from "react-router";
import testImage from "../../assets/images/placing.jpg";

const Brands = () => {
  const { BrandsList } = ProductsStore();
  if (BrandsList === null) {
    return <BrandsSkeleton />;
  } else {
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
            <span className="bodySmal mb-5 text-center">
              Explore a World of Choices Across Our Most Popular <br />
              Shopping Categories{" "}
            </span>
            {BrandsList.map((item, index) => {
              return (
                <div className="col-6 col-lg-8r text-center col-md-8r p-2">
                  <Link to={`/productListByBrand/${item["_id"]}`} className="card h-100 rounded-3 bg-light">
                    <div className="card-body">
                      <img className="w-75" src={testImage} />
                      <p className="bodySmal mt-3">{item["brandName"]}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Brands;
