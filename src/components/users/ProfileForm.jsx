import React, { useEffect } from "react";
import UserStore from "../../store/UsersStore.js";
import ProfilesSkeleton from "../../skeletons/ProfilesSkeleton.jsx";
import toast from "react-hot-toast";

const ProfileForm = () => {
  const {
    ProfileFormValue,
    ProfileFormValueOnChange,
    ProfileDetails,
    ProfileDetailsRequest,
    ProfileSaveRequest,
  } = UserStore();
  useEffect(() => {
    (async () => {
      await ProfileDetailsRequest();
    })();
  }, []);
  const SaveClick = async () => {
    let res = await ProfileSaveRequest(ProfileFormValue);
    if (res) {
      toast.success("Profile Updated");
      await ProfileDetailsRequest();
    }
  };
  {
    if (ProfileDetails === null) {
      return <ProfilesSkeleton />;
    } else {
      return (
        <div className="container mt-5">
          <div className="card p-5 rounded-3">
            <h6>Customer Details</h6>
            <hr />
            <div className="row mb-4">
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Name </label>
                <input
                  value={ProfileFormValue.cus_name}
                  onChange={(e) => {
                    ProfileFormValueOnChange("cus_name", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Phone </label>
                <input
                  value={ProfileFormValue.cus_phone}
                  onChange={(e) => {
                    ProfileFormValueOnChange("cus_phone", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Fax </label>
                <input
                  value={ProfileFormValue.cus_fax}
                  onChange={(e) => {
                    ProfileFormValueOnChange("cus_fax", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Country </label>
                <input
                  value={ProfileFormValue.cus_country}
                  onChange={(e) => {
                    ProfileFormValueOnChange("cus_country", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer City </label>
                <input
                  value={ProfileFormValue.cus_city}
                  onChange={(e) => {
                    ProfileFormValueOnChange("cus_city", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer State </label>
                <input
                  value={ProfileFormValue.cus_state}
                  onChange={(e) => {
                    ProfileFormValueOnChange("cus_state", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Post Code </label>
                <input
                  value={ProfileFormValue.cus_postcode}
                  onChange={(e) => {
                    ProfileFormValueOnChange("cus_postcode", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Address</label>
                <input
                  value={ProfileFormValue.cus_add}
                  onChange={(e) => {
                    ProfileFormValueOnChange("cus_add", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
            </div>
            <h6>Shipping Details</h6>
            <hr />
            <div className="row">
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Name </label>
                <input
                  value={ProfileFormValue.ship_name}
                  onChange={(e) => {
                    ProfileFormValueOnChange("ship_name", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Phone </label>
                <input
                  value={ProfileFormValue.ship_phone}
                  onChange={(e) => {
                    ProfileFormValueOnChange("ship_phone", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Country </label>
                <input
                  value={ProfileFormValue.ship_country}
                  onChange={(e) => {
                    ProfileFormValueOnChange("ship_country", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping City </label>
                <input
                  value={ProfileFormValue.ship_city}
                  onChange={(e) => {
                    ProfileFormValueOnChange("ship_city", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping State </label>
                <input
                  value={ProfileFormValue.ship_state}
                  onChange={(e) => {
                    ProfileFormValueOnChange("ship_state", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Post Code </label>
                <input
                  value={ProfileFormValue.ship_postcode}
                  onChange={(e) => {
                    ProfileFormValueOnChange("ship_postcode", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Address</label>
                <input
                  value={ProfileFormValue.ship_add}
                  onChange={(e) => {
                    ProfileFormValueOnChange("ship_add", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 p-2">
                <button onClick={SaveClick} className="btn btn-success">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default ProfileForm;
