<<<<<<< HEAD

import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import CartDetails from "./components/CartDetails";
import CheckOut from "./components/CheckOut";

export const routes=[
    {path:"/",element:<ProductListing/>},
    {path:"productdetails/:productid",element:<ProductDetails/>},
    {path:"/cart",element:<CartDetails/>},
    {path:"/checkout",element:<CheckOut/>}
=======

import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

export const routes=[
    {path:"/",element:<ProductListing/>},
    {path:"productdetails/:productid",element:<ProductDetails/>}
>>>>>>> 8000d6aefee7ac732088c8e588acff330cae9e04
]