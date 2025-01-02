import React, { useEffect } from "react";
import CartStore from "../../store/CartsStore.js";
import testImage from "../../assets/images/placing.jpg";
import CartSubmitButton from "./CartSubmitButton.jsx";
import CartsSkeleton from "../../skeletons/CartsSkeleton.jsx";

const CartList = () => {
  const {
    CartListRemoveRequest,
    CartListRequest,
    CartPayableTotal,
    CartVatTotal,
    CartTotal,
    CartList,
    CartInvoiceRequest,
  } = CartStore();
  useEffect(() => {
    (async () => {
      await CartListRequest();
    })();
  }, []);
  const RemoveCart = async (id) => {
    await CartListRemoveRequest(id);
    await CartListRequest();
  };
  if (CartList === null) {
    return <CartsSkeleton />;
  } else if (CartList.length === 0) {
    return (
      <div className="container mt-3">
        <div className="row">
          <p>Cart is Empty</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-4">
              <ul className="list-group list-group-flush">
                {" "}
                {CartList.map((item, index) => {
                  let price = item["product"][0]["price"];
                  if (item["product"][0]["discount"] === true) {
                    price = item["product"][0]["discountPrice"];
                  }
                  return (
                    <li
                      className="listgroup-
        item d-flex justify-content-between align-items-start"
                    >
                      <img
                        className="rounded-1"
                        width="90"
                        height="auto"
                        src={testImage}
                      />
                      <div className="ms-2 me-auto">
                        <p className="fw-lighter m-0">
                          {item["product"][0]["title"]}
                        </p>
                        <p className="fw-lighter my-1">
                          Unit Price: {price},Qty: {item["qty"]}, Size:{" "}
                          {item["size"]}, Color: {item["color"]}
                        </p>
                        <p className=" h6 fw-bold m-0 text-dark">
                          Total <i className="bi bi-currency-dollar"></i>
                          {parseInt(price) * parseInt(item["qty"])}{" "}
                        </p>
                      </div>
                      <button
                        onClick={() => RemoveCart(item["_id"])}
                        className="btn btn-sm btn-outline-danger"
                      >
                        {" "}
                        <i className="bi bi-trash"></i>
                      </button>
                    </li>
                  );
                })}{" "}
              </ul>
              <div className="my-4">
                <ul className="list-group bg-transparent list-group-flush">
                  <li className="list-group-item bg-transparent h6 m-0 text-dark">
                    <span className="float-end">
                      Total: <i className="bi bi-currency-dollar" />
                      {CartTotal}{" "}
                    </span>
                  </li>
                  <li className="list-group-item bg-transparent h6 m-0 text-dark">
                    <span className="float-end">
                      {" "}
                      Vat(5%): <i className="bi bi-currency-dollar" />
                      {CartVatTotal}
                    </span>
                  </li>
                  <li className="list-group-item bg-transparent h6 m-0 text-dark">
                    <span className="float-end">
                      {" "}
                      Payable: <i className="bi bi-currency-dollar" />
                      {CartPayableTotal}
                    </span>
                  </li>
                  <li className="list-group-item bg-transparent ">
                    <span className="float-end">
                      <CartSubmitButton
                        text="Check Out "
                        onClick={async () => {
                          await CartInvoiceRequest();
                        }}
                        className="btn px-5 mt-2 btn-success"
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CartList;
