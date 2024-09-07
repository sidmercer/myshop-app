
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import CartDetails from "./components/CartDetails";
import CheckOut from "./components/CheckOut";

export const routes=[
    {path:"/",element:<ProductListing/>},
    {path:"productdetails/:productid",element:<ProductDetails/>},
    {path:"/cart",element:<CartDetails/>},
    {path:"/checkout",element:<CheckOut/>}
]