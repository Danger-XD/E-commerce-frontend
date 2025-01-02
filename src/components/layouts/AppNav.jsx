import React, { useEffect } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/plainb-logo.svg";
import ProductsStore from "../../store/ProductsStore.js";
import UserStore from "../../store/UsersStore.js";
import SubmitButton from "../users/SubmitButton.jsx";
import CartStore from "../../store/CartsStore.js";
import WishStore from "../../store/WishlistStore.js";
const AppNav = () => {
  const { SearchKeyword, SetSearchKeyword } = ProductsStore();
  const { IsLogin, LogoutRequest } = UserStore();
  const { CartCount, CartListRequest } = CartStore();
  const { WishCount, WishListRequest } = WishStore();
  const navigate = useNavigate();
  const OnClickLogout = async () => {
    await LogoutRequest();
    sessionStorage.clear();
    localStorage.clear();
    // sessionStorage.removeItem("token")
    // localStorage.removeItem("token")
    navigate("/login");
  };
  useEffect(() => {
    (async () => {
      if (IsLogin()) {
        await CartListRequest();
        await WishListRequest();
      }
    })();
  }, []);
  return (
    <>
      <div className="container-fluid text-white p-2 bg-success">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6">
              <span>
                <span className="f-12">
                  <i className="bi bi-envelope"></i> Support@PlanB.com{" "}
                </span>
                <span className="f-12 mx-2">
                  <i className="bi bi-envelope"></i> 01774688159{" "}
                </span>
              </span>
            </div>
            <div className="col-md-6">
              <span className="float-end">
                <span className="bodySmal mx-2">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="bodySmal mx-2">
                  <i className="bi bi-youtube"></i>
                </span>
                <span className="bodySmal">
                  <i className="bi bi-facebook"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="" width="96px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav06"
            ariacontrols="
nav06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav06">
            <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
              <span className="nav-item me-4">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </span>
            </ul>
          </div>
          <div className=" d-lg-flex">
            <div className="input-group">
              <input
                onChange={(e) => SetSearchKeyword(e.target.value)}
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link
                to={
                  SearchKeyword.length > 0
                    ? `/productListByKeyword/${SearchKeyword}`
                    : `/`
                }
                className="btn btn-outline-dark"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ height: 24, width: 24 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0
7 7 0 0114 0z"
                  />
                </svg>
              </Link>
            </div>
            {IsLogin() ? (
              <>
                <Link
                  to="/orders"
                  type="button"
                  className="btn ms-2 btn-light position-relative"
                >
                  Orders
                </Link>
                <Link
                  to="/cart"
                  type="button"
                  className="btn ms-2 mx-2 btn-light position-relative"
                >
                  <i className="bi text-dark bi-bag"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {CartCount}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
                <Link
                  to="/wish"
                  type="button"
                  className="btn ms-2 btn-light position-relative"
                >
                  <i className="bi text-dark bi-heart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                    {WishCount}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
                <Link
                  type="button"
                  className="btn ms-3 btn-success d-flex"
                  to="/profile"
                >
                  Profile
                </Link>
                <SubmitButton
                  onClick={OnClickLogout}
                  text="Logout"
                  className="btn ms-3 btn-success d-flex"
                />
              </>
            ) : (
              <Link
                type="button"
                className="btn ms-3 btn-success d-flex"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNav;