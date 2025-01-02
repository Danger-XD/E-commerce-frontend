import React, { useState } from "react";
import ProductImages from "./ProductImages.jsx";
import ProductsStore from "../../store/ProductsStore.js";
import DetailsSkeleton from "../../skeletons/DetailsSkeleton.jsx";
import parse from "html-react-parser";
import Reviews from "./Reviews.jsx";
import CartStore from "../../store/CartsStore.js";
import { toast } from "react-hot-toast";
import WishStore from "../../store/WishlistStore.js";

const Details = () => {
  const { ProductsDetails } = ProductsStore();
  const {
    CartOptionValue,
    CartOptionRequest,
    CartListRequest,
    CartOptionOnChange,
  } = CartStore();
  const { WishOptionRequest, WishListRequest } = WishStore();
  const [quantity, setQuantity] = useState(1);
  const quantityIncrement = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };
  const AddToCartBtn = async (ProductID, quantity) => {
    let res = await CartOptionRequest(CartOptionValue, ProductID, quantity);
    if (res) {
      toast.success("Product Added to Cart");
      await CartListRequest();
    }
  };
  const AddToWishBtn = async (ProductID) => {
    let res = await WishOptionRequest(ProductID);
    if (res) {
      toast.success("Product Added to Wish");
      await WishListRequest();
    }
  };
  if (ProductsDetails === null) {
    return <DetailsSkeleton />;
  } else {
    return (
      <div>
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-7 p-3">
              <ProductImages />
            </div>
            <div className="col-md-5 p-3">
              <h4>{ProductsDetails[0]["title"]}</h4>
              <p className="text-muted bodySmal my-1">
                {ProductsDetails[0]["category"]["categoryName"]}
              </p>
              <p className="text-muted bodySmal my-1">
                {ProductsDetails[0]["brand"]["brandName"]}
              </p>
              <p className="bodySmal mb-2 mt-1">
                {ProductsDetails[0]["shortDes"]}
              </p>
              {ProductsDetails[0]["discount"] ? (
                <span>
                  <strike className="text-secondary">
                    ${ProductsDetails[0]["price"]}
                  </strike>{" "}
                  {ProductsDetails[0]["discountPrice"]}
                </span>
              ) : (
                <p className="text-secondary">${ProductsDetails[0]["price"]}</p>
              )}

              <div className="row">
                <div className="col-4 p-2">
                  <label className="bodySmal">Size</label>
                  <select
                    onChange={(e) => {
                      CartOptionOnChange("size", e.target.value);
                    }}
                    className="form-control my-2 form-select"
                  >
                    <option value="">Size</option>
                    {ProductsDetails[0]["details"]["size"]
                      .split(",")
                      .map((item, i) => {
                        return <option value={item}>{item}</option>;
                      })}
                  </select>
                </div>
                <div className="col-4 p-2">
                  <label className="bodySmal">Color</label>
                  <select
                    onChange={(e) => {
                      CartOptionOnChange("color", e.target.value);
                    }}
                    className="form-control my-2 form-select"
                  >
                    <option value="">Color</option>
                    {ProductsDetails[0]["details"]["color"]
                      .split(",")
                      .map((item, i) => {
                        return <option value={item}>{item}</option>;
                      })}
                  </select>
                </div>
                <div className="col-4 p-2">
                  <label className="bodySmal">Quantity</label>
                  <div className="input-group my-2">
                    <button
                      onClick={quantityDecrement}
                      className="btn btn-outline-secondary"
                    >
                      -
                    </button>
                    <input
                      value={quantity}
                      type="text"
                      className="form-control bg-light text-center"
                      readOnly
                    />
                    <button
                      onClick={quantityIncrement}
                      className="btn btn-outline-secondary"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-4 p-2">
                  <button
                    onClick={async () => {
                      await AddToCartBtn(ProductsDetails[0]["_id"], quantity);
                    }}
                    className="btn w-100 btn-success"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="col-4 p-2">
                  <button
                    onClick={async () => {
                      await AddToWishBtn(ProductsDetails[0]["_id"]);
                    }}
                    className="btn w-100 btn-success"
                  >
                    Add to Wish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="Speci-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Speci-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Speci-tab-pane"
                  aria-selected="true"
                >
                  Specifications
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Review-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Review-tab-pane"
                  aria-selected="false"
                >
                  Review
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Speci-tab-pane"
                role="tabpanel"
                aria-labelledby="Specitab"
                tabIndex="0"
              >
                {parse(ProductsDetails[0]["details"]["des"])}
              </div>
              <div
                className="tab-pane fade"
                id="Review-tab-pane"
                role="tabpanel"
                aria-labelledby="Review-tab"
                tabIndex="0"
              >
                <Reviews />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
