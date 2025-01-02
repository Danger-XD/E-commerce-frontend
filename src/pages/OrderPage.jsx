import React from 'react';
import LayoutBody from '../components/layouts/LayoutBody.jsx';
import InvoiceList from '../components/invoices/InvoiceList.jsx';

const OrderPage = () => {
    return (
        <LayoutBody>
            <InvoiceList/>
        </LayoutBody>
    );
};

export default OrderPage;