import React from "react";
import SubmitButton from "./SubmitButton.jsx";
import ValidationHelper from "../../utilities/ValidationHelper.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UserStore from "../../store/UsersStore.js";

const OtpForm = () => {
  let navigate = useNavigate();
  const { OtpFormOnChange, OtpFormValue, VerifyLoginRequest } = UserStore();
  const FormOnSubmit = async () => {
    if (ValidationHelper.IsEmpty(OtpFormValue.otp)) {
      toast.error("Please enter valid pin!");
      return;
    } else {
      let res = await VerifyLoginRequest(OtpFormValue.otp);
      res
        ? navigate("/")
        : toast.error("Something went wrong while sending email!");
    }
  };
  return (
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5">
            <h4>Enter Verification Code</h4>
            <p>
              A verification code has been sent to the email address you provide
            </p>
            <input
              value={OtpFormValue.otp}
              onChange={(e) => {
                OtpFormOnChange("otp", e.target.value);
              }}
              placeholder="Verification"
              type="text"
              className="form-control"
            />
            <SubmitButton
              onClick={FormOnSubmit}
              className="btn mt-3 btn-success"
              text="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
