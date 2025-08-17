import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Allproducts from './Components/AllProducts/Allproducts';
import Details from './Components/Details/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Allproducts /> },  // when at "/"
      { path: "categories", element: <Allproducts /> },
      { path: "categories/:categoryName", element: <Allproducts /> },
      { path: "mealdetails/:mealid", element: <Details /> }
    ]
  }
]);
export default function App() {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}
