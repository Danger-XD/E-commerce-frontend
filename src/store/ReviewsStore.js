import { create } from "zustand";
import { unauthorized } from "../utilities/utility.js";
import axios from "axios";

const ReviewStore = create((set) => ({
  IsReviewSubmit: false,
  ReviewFormValue: {
    productID: "",
    rating: "",
    des: "",
  },
  ReviewFormOnChange: (name, value) => {
    set((state) => ({
      ReviewFormValue: {
        ...state.ReviewFormValue,
        [name]: value,
      },
    }));
  },
  ReviewSaveRequest: async (PostBody) => {
    try {
      set({ IsReviewSubmit: true });
      let res = await axios.post(
        `${import.meta.env.BASE_URL}/api/createProductReview`,
        PostBody
      );
      return res.data["status"] === "success";
    } catch (error) {
      unauthorized(error.response.status);
    } finally {
      set({ IsReviewSubmit: false });
    }
  },
}));
export default ReviewStore;
