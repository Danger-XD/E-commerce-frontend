import React, { useEffect } from "react";
import LayoutBody from "../components/layouts/LayoutBody.jsx";
import LegalContents from "../components/features/LegalContents.jsx";
import FeaturesStore from "../store/FeaturesStore.js";

const AboutPage = () => {
  const { LegalListRequest } = FeaturesStore();
  useEffect(() => {
    (async () => {
      await LegalListRequest("about");
    })();
  }, []);
  return (
    <LayoutBody>
      <LegalContents />
    </LayoutBody>
  );
};

export default AboutPage;
