import React from "react";
import { Link } from 'react-router';
import image from "../../assets/images/payment.png"
const Footer = () => {
  return (
    <div>
      <div className="section-bottom shadow-sm bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <h1 className="bodyMedium">Legals</h1>
              <p className="my-2">
                <Link className="nav-link" to="/legal-features/about">
                  About
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/legal-features/refund">
                  Refund Policy
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/legal-features/terms">
                  Terms
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/legal-features/privacy">
                  Privacy
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/legal-features/legal">
                  Legal
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h1 className="bodyMedium">Information</h1>
              <p className="my-2">
                <Link className="nav-link" to="/legal-features/how-to-buy">
                  How to buy
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/legal-features/contact">
                  Contact
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/legal-features/complain">
                  Complain
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h1 className="bodyMedium">About</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum{" "}
              </p>
              <img
                className="w-75"
                src={image}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark py-3 text-center">
        <p className="text-white bodySmal">All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
