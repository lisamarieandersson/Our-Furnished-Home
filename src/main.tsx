import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { OrderProvider } from "./contexts/OrderContext";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import "./index.css";
import CheckoutPage from "./pages/CheckoutPage";
import ConstructionPage from "./pages/ConstructionPage";
import EmptyBagPage from "./pages/EmptyBagPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import ProductPage from "./pages/ProductPage";
import StartPage from "./pages/StartPage";
import { theme } from "./theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route element={<AppLayout />}> */}
      <Route index element={<StartPage />} />
      <Route path="/product/:id/:title" element={<ProductPage />} />
      <Route path="orderconfirmation" element={<OrderConfirmationPage />} />
      <Route path="*" element={<h3>404 Not Found</h3>} />
      <Route path="underconstruction" element={<ConstructionPage />} />
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
        <OrderProvider>
          <RouterProvider router={router} />
        </OrderProvider>
      </ShoppingCartProvider>
    </ThemeProvider>
  </React.StrictMode>
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
