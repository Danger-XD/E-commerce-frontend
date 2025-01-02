import React, { useEffect } from 'react';
import LayoutBody from '../components/layouts/LayoutBody.jsx';
import FeaturesStore from '../store/FeaturesStore.js';
import LegalContents from '../components/features/LegalContents.jsx';

const TermsPage = () => {
    const { LegalListRequest } = FeaturesStore();
    useEffect(() => {
      (async () => {
        await LegalListRequest("terms");
      })();
    }, []);
    return (
      <LayoutBody>
        <LegalContents />
      </LayoutBody>
    );
};

export default TermsPage;