import React, { useEffect } from "react";
import WishStore from "../../store/WishlistStore.js";
import ProductsSkeleton from "../../skeletons/ProductsSkeleton.jsx";
import StarRatings from "react-star-ratings";
import testImage from "../../assets/images/placing.jpg";
import { Link } from "react-router-dom";

const WishList = () => {
  const { WishListRequest, WishList, WishListRemoveRequest } = WishStore();
  useEffect(() => {
    (async () => {
      await WishListRequest();
    })();
  }, []);
  const RemoveWishBtn = async (ProductID) => {
    await WishListRemoveRequest(ProductID);
    await WishListRequest();
  };
  if (WishList === null) {
    return (
      <div className="container">
        <div className="row">
          <ProductsSkeleton />
        </div>
      </div>
    );
  } else if (WishList.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <p className="text-center mt-5">No item found!</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mt-3">
        <div className="row">
          {WishList.map((item, index) => {
            return (
              <div
                key={index}
                className="col-md-3 p-2 col-lg-3 col-sm-6 col-12"
              >
                <img className="w-100 rounded-top-2" src={testImage} />
                <div className="card-body">
                  <p className="bodySmal text-secondary my-1">
                    {item["product"][0]["title"]}
                  </p>
                  {item["product"][0]?.["discount"] ? (
                    <p className="bodyMedium text-dark my-1">
                      Price:&nbsp;&nbsp;
                      <s>{item["product"][0]["price"]}</s>&nbsp;&nbsp;
                      {item["product"][0]["discountPrice"]} BDT
                    </p>
                  ) : (
                    <p className="bodyMedium text-dark my-1">
                      Price: {item["product"][0]["price"]} BDT
                    </p>
                  )}
                  <StarRatings
                    rating={parseFloat(item["product"][0]["star"])||0}
                    starRatedColor="red"
                    starDimension="15px"
                    starSpacing="2px"
                  />
                  <div className="mt-3 d-flex justify-content-between">
                    <button
                      onClick={() => RemoveWishBtn(item["productID"])}
                      className="btn btn-sm btn-danger"
                    >Remove</button>
                    <Link
                      to={`/productDetailsID/${item["productID"]}`}
                      className="btn btn-sm btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default WishList;
