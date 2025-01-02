import React, { useEffect } from "react";
import LayoutBody from "../components/layouts/LayoutBody.jsx";
import LegalContents from "../components/features/LegalContents.jsx";
import FeaturesStore from "../store/FeaturesStore.js";

const ContactPage = () => {
  const { LegalListRequest } = FeaturesStore();
  useEffect(() => {
    (async () => {
      await LegalListRequest("contact");
    })();
  }, []);
  return (
    <LayoutBody>
      <LegalContents />
    </LayoutBody>
  );
};

export default ContactPage;
