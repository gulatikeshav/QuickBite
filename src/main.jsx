import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </Provider>
);
