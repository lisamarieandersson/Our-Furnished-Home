import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CheckoutPage from "./pages/CheckoutPage";
import EmptyBagPage from "./pages/EmptyBagPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import ProductPage from "./pages/ProductPage";
import StartPage from "./pages/StartPage";
import { themeOptions } from "./theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <ThemeProvider themeOptions={themeOptions}>
      <Route>
        {/* <Route element={<AppLayout />}> */}
        <Route index element={<StartPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="orderconfirmation" element={<OrderConfirmationPage />} />
        <Route path="*" element={<h3>404 Not Found</h3>} />
        {/* </Route> */}
        {/* <Route element={<CheckoutLayout />}> */}
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="emptybag" element={<EmptyBagPage />} />
        {/* </Route> */}
      </Route>
    </ThemeProvider>
  )
);

// function AppLayout() {
//   return (
//     <>
//       <AppHeader />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   )
// }

// function CheckoutLayout() {
//   return (
//     <>
//       <CheckoutHeader />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   )
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
