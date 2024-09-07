import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {addToCarts} from "../redux/actions/productActions";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function ProductComponent(props) {
  const products = useSelector((state) => state.allProducts.products);
const dispatch = useDispatch()
  const handleAddToCartClick = (event, id) => {
    
    // Prevent the default link behavior
    event.preventDefault();
    // Stop the propagation of the click event
    event.stopPropagation();

    dispatch(addToCarts(id))
    toast.success('item added to cart!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        })
   
       
   
  };

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/productdetails/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt="image" />
              </div>
              <div className="content">
                <div className="header">{title}</div>

                <div className="meta price ">${price}</div>
                <div className="meta">
                  <p>{category}</p>

                  <span
                    onClick={(event) => handleAddToCartClick(event, id)}
                    className="material-symbols-outlined"
                  >
                    add_shopping_cart
                  </span>
                 
                </div>
                <ToastContainer/>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
