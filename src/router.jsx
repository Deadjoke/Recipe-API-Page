import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Allproducts from "./Components/AllProducts/Allproducts";
import Details from "./Components/Details/Details";

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '', element: <Allproducts /> },  
      {
        path: "categories",
        element: <Allproducts />, // parent
        children: [
          { path: ":categoryName", element: <Allproducts /> } // child
        ]
      },
      { path: "mealdetails/:mealid", element: <Details /> }
    ]
  }
]);

export default router;
