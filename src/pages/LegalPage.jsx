import React, { useEffect } from 'react';
import FeaturesStore from '../store/FeaturesStore.js';
import LayoutBody from '../components/layouts/LayoutBody.jsx';
import LegalContents from '../components/features/LegalContents.jsx';

const LegalPage = () => {
    const { LegalListRequest } = FeaturesStore();
    useEffect(() => {
      (async () => {
        await LegalListRequest("legal");
      })();
    }, []);
    return (
      <LayoutBody>
        <LegalContents />
      </LayoutBody>
    );
};

export default LegalPage;