import React, { useEffect, useState } from "react";
import CartStore from "../../store/CartsStore.js";
import { useParams } from "react-router-dom";
import ReviewStore from "../../store/ReviewsStore.js";
import ValidationHelper from "./../../utilities/ValidationHelper.js";
import toast from "react-hot-toast";
import CartsSkeleton from "./../../skeletons/CartsSkeleton.jsx";
import { Modal } from "react-bootstrap";
import ReviewSubmitButton from "./ReviewSubmitButton.jsx";
import testImage from "../../assets/images/placing.jpg";

const InvoiceDetails = () => {
  const [Show, SetShow] = useState(false);
  const handleClose = () => SetShow(false);
  const ReviewModel = (id) => {
    SetShow(true);
    ReviewFormOnChange("productID", id);
  };
  const { id } = useParams();
  const { InvoiceDetailsList, InvoiceDetailsListRequest } = CartStore();
  const { ReviewFormValue, ReviewFormOnChange, ReviewSaveRequest } =
    ReviewStore();
  useEffect(() => {
    (async () => {
      await InvoiceDetailsListRequest(id);
    })();
  }, [id]);
  const SubmitReview = async () => {
    if (ValidationHelper.IsEmpty(ReviewFormValue?.des)) {
      toast.error("Description field is empty!");
    } else {
      let res = await ReviewSaveRequest(ReviewFormValue);
      res
        ? toast.success("Review submitted successfully!")
        : toast.error("Something went wrong!");
        SetShow(false);
    }
  };
  if (InvoiceDetailsList === null) {
    return <CartsSkeleton />;
  } else if (!InvoiceDetailsList || InvoiceDetailsList.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <p className="text-center mt-4">No Invoice Found</p>
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
                {InvoiceDetailsList.map((item, i) => {
                  return (
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <img
                        className="rounded-1"
                        alt=""
                        width="90"
                        height="auto"
                        src={testImage}
                      />
                      <div className="ms-2 me-auto">
                        <div className="fw-medium h6">
                          {item["product"]["title"]}
                        </div>
                        <span>
                          Unit Price: {item["price"]}, Total:{" "}
                          {item["price"] * parseInt(item["qty"])}
                        </span>
                        <br />
                        <span>
                          Qty: {item["qty"]}, Size: {item["size"]}, Color:{" "}
                          {item["color"]}
                        </span>
                      </div>
                      <button
                        onClick={() => ReviewModel(item["productID"])}
                        className="btn btn-success"
                      >
                        Create Review
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <Modal show={Show} onHide={handleClose}>
          <Modal.Header closeButton>
            <h6>Create Review</h6>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-12 p-2">
                  <label className="form-label">Rating</label>
                  <select
                    onChange={(e) =>
                      ReviewFormOnChange("rating", e.target.value)
                    }
                    className="form-select"
                  >
                    <option value="5">5 Star</option>
                    <option value="4">4 Star</option>
                    <option value="3">3 Star</option>
                    <option value="2">2 Star</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
                <div className="col-12 p-2">
                  <label className="form-label">Review</label>
                  <textarea
                    onChange={(e) => ReviewFormOnChange("des", e.target.value)}
                    className="form-control"
                    rows={7}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-dark" onClick={handleClose}>
              Close
            </button>
            <ReviewSubmitButton
              text="Submit"
              className="btn btn-success"
              onClick={SubmitReview}
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default InvoiceDetails;
