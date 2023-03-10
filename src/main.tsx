import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromElements, Route } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import CheckoutPage from './pages/CheckoutPage';
import EmptyBagPage from './pages/EmptyBagPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import ProductPage from './pages/ProductPage';
import StartPage from './pages/StartPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<StartPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orderconfirmation" element={<OrderConfirmationPage />} />
      <Route path="emptybag" element={<EmptyBagPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
