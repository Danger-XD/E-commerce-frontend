import React, { useEffect } from 'react';
import LayoutBody from '../components/layouts/LayoutBody.jsx';
import FeaturesStore from '../store/FeaturesStore.js';
import LegalContents from '../components/features/LegalContents.jsx';

const ComplainPage = () => {
    const { LegalListRequest } = FeaturesStore();
  useEffect(() => {
    (async () => {
      await LegalListRequest("complain");
    })();
  }, []);
  return (
    <LayoutBody>
      <LegalContents />
    </LayoutBody>
  );
};

export default ComplainPage;