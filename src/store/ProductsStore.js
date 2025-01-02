import { create } from "zustand";
import axios from "axios";

const ProductsStore = create((set) => ({
  BrandsList: null,
  BrandsListRequest: async () => {
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/productBrandList`
    );
    if (res.data["status"] === "success") {
      set({ BrandsList: res.data["data"] });
    }
  },
  CategoriesList: null,
  CategoriesListRequest: async () => {
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/productCategoryList`
    );
    if (res.data["status"] === "success") {
      set({ CategoriesList: res.data["data"] });
    }
  },
  SlidersList: null,
  SlidersListRequest: async () => {
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/productSliderList`
    );
    if (res.data["status"] === "success") {
      set({ SlidersList: res.data["data"] });
    }
  },
  ListByProductsRemark: null,
  ListByProductsRemarkRequest: async (remark) => {
    set({ ListByProductsRemark: null });
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/productListByRemark/${remark}`
    );
    if (res.data["status"] === "success") {
      set({ ListByProductsRemark: res.data["data"] });
    }
  },
  ListByProducts: null,
  ListByProductsBrandRequest: async (BrandID) => {
    set({ ListByProducts: null });
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/productListByBrand/${BrandID}`
    );
    if (res.data["status"] === "success") {
      set({ ListByProducts: res.data["data"] });
    }
  },
  ListByProductsCategoryRequest: async (CategoryID) => {
    set({ ListByProducts: null });
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/productListByCategory/${CategoryID}`
    );
    if (res.data["status"] === "success") {
      set({ ListByProducts: res.data["data"] });
    }
  },
  ListByProductsKeywordRequest: async (Keyword) => {
    set({ ListByProducts: null });
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/productListByKeyword/${Keyword}`
    );
    if (res.data["status"] === "success") {
      set({ ListByProducts: res.data["data"] });
    }
  },
  SearchKeyword: "",
  SetSearchKeyword: async (Keyword) => {
    set({ SearchKeyword: Keyword });
  },
  ListByProductsFilterRequest: async (postBody) => {
    set({ ListByProducts: null });
    let res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/productListByFilter`,
      postBody
    );
    if (res.data["status"] === "success") {
      set({ ListByProducts: res.data["data"] });
    }
  },
  ProductsDetails: null,
  ProductsDetailsRequest: async (ProductID) => {
    set({ ProductsDetails: null });
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/productDetailsID/${ProductID}`
    );
    if (res.data["status"] === "success") {
      set({ ProductsDetails: res.data["data"] });
    }
  },
  ProductsReview: null,
  ProductsReviewRequest: async (ProductID) => {
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/productReviewListByID/${ProductID}`
    );
    if (res.data["status"] === "success") {
      set({ ProductsReview: res.data["data"] });
    }
  },
}));
export default ProductsStore;
