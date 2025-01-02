import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "../utilities/utility.js";

const CartStore = create((set) => ({
  IsCartSubmit: false,
  CartOptionValue: {
    productID: "",
    color: "",
    size: "",
  },
  CartOptionOnChange: (name, value) => {
    set((state) => ({
      CartOptionValue: {
        ...state.CartOptionValue,
        [name]: value,
      },
    }));
  },
  CartOptionRequest: async (PostBody, ProductID, quantity) => {
    try {
      set({ IsCartSubmit: true });
      PostBody.productID = ProductID;
      PostBody.qty = quantity;
      let res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/createCart`,
        PostBody
      );
      return res.data["status"] === "success";
    } catch (error) {
      unauthorized(error.response.status);
    } finally {
      set({ IsCartSubmit: false });
    }
  },
  CartList: null,
  CartCount: 0,
  CartTotal: 0,
  CartVatTotal: 0,
  CartPayableTotal: 0,
  CartListRequest: async () => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/readCartList`
      );
      set({ CartList: res.data["data"] });
      set({ CartCount: res.data["data"].length });
      let total = 0;
      let vat = 0;
      let payable = 0;
      res.data["data"].forEach((item, index) => {
        if (item["product"][0]["discount"] === true) {
          total =
            total +
            parseInt(item["qty"]) *
              parseInt(item["product"][0]["discountPrice"]);
        } else {
          total =
            total +
            parseInt(item["qty"]) * parseInt(item["product"][0]["price"]);
        }
      });
      vat = total * 0.05;
      payable = vat + total;
      set({ CartTotal: total });
      set({ CartVatTotal: vat });
      set({ CartPayableTotal: payable });
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
  CartListRemoveRequest: async (id) => {
    try {
      set({ CartList: null });
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/removeCart`, {
        id: id,
      });
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
  CartInvoiceRequest: async () => {
    try {
      set({ IsCartSubmit: true });
      let res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/createInvoice`
      );
      window.location.href = res.data["data"]["GatewayPageURL"];
    } catch (error) {
      unauthorized(error.response.status);
    } finally {
      set({ IsCartSubmit: false });
    }
  },
  InvoiceList: null,
  InvoiceListRequest: async () => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/InvoiceList`
      );
      set({ InvoiceList: res.data["data"] });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
  InvoiceDetailsList: null,
  InvoiceDetailsListRequest: async (id) => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/invoiceDetails/${id}`
      );
      set({ InvoiceDetailsList: res.data["data"] });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));
export default CartStore;
