import React from "react";
import SubmitButton from "./SubmitButton.jsx";
import UserStore from "../../store/UsersStore.js";
import ValidationHelper from "../../utilities/ValidationHelper.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  let navigate = useNavigate();
  const { LoginFormValue, LoginFormOnChange, UserOtpRequest } = UserStore();
  const FormOnSubmit = async () => {
    if (!ValidationHelper.IsEmail(LoginFormValue.email)) {
      toast.error("Please enter valid email");
      return;
    } else {
      let res = await UserOtpRequest(LoginFormValue.email);
      res
        ? navigate("/verifyLogin")
        : toast.error("Something went wrong while sending email!");
    }
  };
  return (
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5">
            <h4>Enter Your Email</h4>
            <p>
              A verification code will be sent to the email address you provide
            </p>
            <input
              name="email"
              value={LoginFormValue.email}
              onChange={(e) => {
                LoginFormOnChange("email", e.target.value);
              }}
              placeholder="Email Address"
              type="email"
              className="form-control"
            />
            <SubmitButton
              onClick={FormOnSubmit}
              className="btn mt-3 btn-success"
              text="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
