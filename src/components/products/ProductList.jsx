import React, { useEffect, useState } from "react";
import ProductsStore from "../../store/ProductsStore.js";
import testImage from "../../assets/images/placing.jpg";
import ProductsSkeleton from "../../skeletons/ProductsSkeleton.jsx";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductList = () => {
  const {
    ListByProducts,
    BrandsList,
    BrandsListRequest,
    CategoriesList,
    CategoriesListRequest,
    ListByProductsFilterRequest,
  } = ProductsStore();
  const [filter, setFilter] = useState({
    categoryID: "",
    brandID: "",
    priceMax: "",
    priceMin: "",
  });
  const filterOnChange = async (name, value) => {
    setFilter((data) => ({ ...data, [name]: value }));
  };
  useEffect(() => {
    (async () => {
      BrandsList === null ? await BrandsListRequest() : null;
      CategoriesList === null ? await CategoriesListRequest() : null;
      let isFilterEmpty = Object.values(filter).every((value) => value === "");
      !isFilterEmpty ? await ListByProductsFilterRequest(filter) : null;
    })();
  }, [filter]);
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-3 p-2">
          <div className="card vh-100 p-3 shadow-sm">
            <label className="form-label mt-3">Brands</label>
            <select
              value={filter.brandName}
              onChange={async (e) =>
                await filterOnChange("brandName", e.target.value)
              }
              className="form-control form-select"
            >
              <option value="">Choose Brand</option>
              {BrandsList !== null ? (
                BrandsList.map((item, index) => {
                  return (
                    <option value={item["_id"]}>{item["brandName"]}</option>
                  );
                })
              ) : (
                <option></option>
              )}
            </select>
            <label className="form-label mt-3">Categories</label>
            <select
              value={filter.categoryName}
              onChange={async (e) =>
                await filterOnChange("categoryName", e.target.value)
              }
              className="form-control form-select"
            >
              <option value="">Choose Category</option>
              {CategoriesList !== null ? (
                CategoriesList.map((item, index) => {
                  return (
                    <option value={item["_id"]}>{item["categoryName"]}</option>
                  );
                })
              ) : (
                <option></option>
              )}
            </select>
            <label className="form-label mt-3">
              Maximum Price ${filter.priceMax}
            </label>
            <input
              value={filter.priceMax}
              onChange={async (e) =>
                await filterOnChange("priceMax", e.target.value)
              }
              min={0}
              max={1000000}
              step={1000}
              type="range"
              className="form-range"
            />
            <label className="form-label mt-3">
              Minimum Price ${filter.priceMin}
            </label>
            <input
              value={filter.priceMin}
              onChange={async (e) =>
                await filterOnChange("priceMin", e.target.value)
              }
              min={0}
              max={1000000}
              step={1000}
              type="range"
              className="form-range"
            />
          </div>
        </div>
        <div className="col-md-9 p-2">
          <div className="container">
            <div className="row">
              {ListByProducts === null ? (
                <ProductsSkeleton />
              ) : (
                <div className="container">
                  <div className="row">
                    {ListByProducts.map((item, index) => {
                      return (
                        <div className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                          <Link
                            to={`/productDetailsID/${item["_id"]}`}
                            className="card shadow-sm h-100 rounded-3 bg-white"
                          >
                            <img
                              className="w-100 rounded-top-2"
                              src={testImage}
                            />
                            <div className="card-body">
                              <p className="bodySmal text-secondary my-1">
                                {item["title"]}
                              </p>
                              {item["discount"] ? (
                                <p className="bodyMedium text-dark my-1">
                                  Price:&nbsp;&nbsp;
                                  <s>{item["price"]}</s>&nbsp;&nbsp;
                                  {item["discountPrice"]} BDT
                                </p>
                              ) : (
                                <p className="bodyMedium text-dark my-1">
                                  Price: {item["price"]} BDT
                                </p>
                              )}
                              <StarRatings
                                rating={parseFloat(item["star"])}
                                starRatedColor="red"
                                starDimension="15px"
                                starSpacing="2px"
                              />
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
