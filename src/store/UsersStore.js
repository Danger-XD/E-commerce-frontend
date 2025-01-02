import { create } from "zustand";
import axios from "axios";
import { getEmail, setEmail, unauthorized } from "../utilities/utility.js";
import Cookies from "js-cookie";

const UserStore = create((set) => ({
  IsLogin: () => {
    return !!Cookies.get("token");
  },
  LoginFormValue: { email: "" },
  LoginFormOnChange: (name, value) => {
    set((state) => ({
      LoginFormValue: {
        ...state.LoginFormValue,
        [name]: value,
      },
    }));
  },
  OtpFormValue: { otp: "" },
  OtpFormOnChange: (name, value) => {
    set((state) => ({
      OtpFormValue: {
        ...state.OtpFormValue,
        [name]: value,
      },
    }));
  },
  IsFormSubmit: false,
  UserOtpRequest: async (email) => {
    set({ IsFormSubmit: true });
    let res = await axios.post(`${import.meta.env.BASE_URL}/api/login`, {
      email: email,
    });
    setEmail(email);
    set({ IsFormSubmit: false });
    return res.data["status"] === "success";
  },
  LogoutRequest: async () => {
    set({ IsFormSubmit: true });
    let res = await axios.post(`${import.meta.env.BASE_URL}/api/logout`);
    set({ IsFormSubmit: false });
    return res.data["status"] === "success";
  },
  VerifyLoginRequest: async (otp) => {
    set({ IsFormSubmit: true });
    let email = getEmail();
    let res = await axios.post(`${import.meta.env.BASE_URL}/api/verifyLogin`, {
      email: email,
      otp: otp,
    });
    set({ IsFormSubmit: false });
    return res.data["status"] === "success";
  },
  ProfileFormValue: {
    cus_add: "",
    cus_city: "",
    cus_country: "",
    cus_fax: "",
    cus_name: "",
    cus_phone: "",
    cus_postcode: "",
    cus_state: "",
    ship_add: "",
    ship_city: "",
    ship_country: "",
    ship_name: "",
    ship_phone: "",
    ship_postcode: "",
    ship_state: "",
  },
  ProfileFormValueOnChange: (name, value) => {
    set((state) => ({
      ProfileFormValue: {
        ...state.ProfileFormValue,
        [name]: value,
      },
    }));
  },
  ProfileDetails: null,
  ProfileDetailsRequest: async () => {
    try {
      let res = await axios.get(
        `${import.meta.env.BASE_URL}/api/readUserProfile`
      );
      if (res.data["data"].length > 0) {
        set({ ProfileDetails: res.data["data"][0] });
        set({ ProfileFormValue: res.data["data"][0] });
      } else {
        set({ ProfileDetails: {} });
      }
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
  ProfileSaveRequest: async (PostBody) => {
    try {
      set({ ProfileDetails: null });
      let res = await axios.post(
        `${import.meta.env.BASE_URL}/api/updateUserProfile`,
        PostBody
      );
      return res.data["status"] === "success";
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
}));
export default UserStore;
