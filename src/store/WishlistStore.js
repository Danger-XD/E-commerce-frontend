import axios from "axios";
import { create } from "zustand";
import { unauthorized } from "../utilities/utility.js";

const WishStore = create((set) => ({
  IsWishSubmit: false,
  WishOptionRequest: async (ProductID) => {
    try {
      set({ IsWishSubmit: true });
      let res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/createWish`,
        { productID: ProductID }
      );
      return res.data["status"] === "success";
    } catch (error) {
      unauthorized(error.response.status);
    } finally {
      set({ IsWishSubmit: false });
    }
  },
  WishList: null,
  WishCount: 0,
  WishListRequest: async () => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/readWishList`
      );
      set({ WishList: res.data["data"] });
      set({ WishCount: res.data["data"].length });
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
  WishListRemoveRequest: async (ProductID) => {
    try {
      set({ WishList: null });
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/removeWish`, {
        productID: ProductID,
      });
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
}));
export default WishStore;
