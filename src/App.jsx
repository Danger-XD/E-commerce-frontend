import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import ProductByBrand from "./pages/ProductByBrand.jsx";
import ProductByCategory from "./pages/ProductByCategory.jsx";
import ProductByKeyword from "./pages/ProductByKeyword.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import RefundPage from "./pages/RefundPage.jsx";
import HowToBuyPage from "./pages/HowToBuyPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ComplainPage from "./pages/ComplainPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import WishPage from "./pages/WishPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import InvoicePage from "./pages/InvoicePage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productListByBrand/:id" element={<ProductByBrand />} />
        <Route
          path="/productListByCategory/:id"
          element={<ProductByCategory />}
        />
        <Route
          path="/productListByKeyword/:keyword"
          element={<ProductByKeyword />}
        />
        <Route path="/productDetailsID/:id" element={<ProductDetails />} />
        <Route path="/legal-features/about" element={<AboutPage />} />
        <Route path="/legal-features/refund" element={<RefundPage />} />
        <Route path="/legal-features/how-to-buy" element={<HowToBuyPage />} />
        <Route path="/legal-features/contact" element={<ContactPage />} />
        <Route path="/legal-features/complain" element={<ComplainPage />} />
        <Route path="/legal-features/terms" element={<TermsPage />} />
        <Route path="/legal-features/legal" element={<LegalPage />} />
        <Route path="/legal-features/privacy" element={<PrivacyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verifyLogin" element={<VerifyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wish" element={<WishPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/invoiceDetails/:id" element={<InvoicePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
