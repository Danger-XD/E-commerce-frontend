import { create } from "zustand";
import axios from "axios";

const FeaturesStore = create((set) => ({
  FeaturesList: null,
  FeaturesListRequest: async () => {
    let res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/featureList`);
    if (res.data["status"] === "success") {
      set({ FeaturesList: res.data["data"] });
    }
  },
  LegalList: null,
  LegalListRequest: async (type) => {
    set({ LegalList: null });
    let res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/legal-features/${type}`
    );
    if (res.data["status"] === "success") {
      set({ LegalList: res.data["data"] });
    }
  },
}));
export default FeaturesStore;
