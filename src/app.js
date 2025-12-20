import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import RestaurantMenu from "./components/RestaurantMenu.js";


const Loading = () => {
  return (
    <div className="app flex flex-col justify-center items-center min-h-screen">
    
      <div className="w-16 h-16 border-6 border-gray-800 border-t-6 border-t-sky-400 rounded-full animate-spin"></div>

      
      <h2 className="mt-5 font-medium text-lg">Loading...</h2>
      <p className="mt-2 text-gray-400">Please Wait...</p>
    </div>
  );
};

export default Loading;


const About = lazy( () => {
    return import("./components/About.js");
} );

const Grocery = lazy( () => {
  return import("./components/Grocery.js");
} );


const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 px-6 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: ( <Suspense fallback= {<Loading />}><About /></Suspense> ),
      },
      {
        path: "/contact",
        element: <Contact />,
      }, 
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }, {
        path: "/grocery",
        element: ( <Suspense fallback = { <Loading /> }  ><Grocery /></Suspense> )
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
