import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToastOutlet from "./components/ToastOutlet";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import "./index.css";
import CheckoutPage from "./pages/CheckoutPage";
import EmptyBagPage from "./pages/EmptyBagPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import ProductPage from "./pages/ProductPage";
import StartPage from "./pages/StartPage";
import { theme } from "./theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ToastOutlet />}>
      {/* <Route element={<AppLayout />}> */}
      <Route index element={<StartPage />} />
      <Route path="/product/:id/:title" element={<ProductPage />} />
      <Route path="orderconfirmation" element={<OrderConfirmationPage />} />
      <Route path="*" element={<h3>404 Not Found</h3>} />
      {/* </Route> */}
      {/* <Route element={<CheckoutLayout />}> */}
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="emptybag" element={<EmptyBagPage />} />
      {/* </Route> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ShoppingCartProvider>
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
