import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCarts, emptycarts } from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartDetails = () => {
  const data = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    data.forEach((product) => {
      totalPrice += product.price;
    });
    return totalPrice.toFixed(2); // Ensure total price is rounded to 2 decimal places
  };

  const productDelete = (productId) => {
    toast.error('Item deleted from cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(deleteToCarts(productId));
  };

  const emptycart = () => {
    dispatch(emptycarts(data));
  };

  return (
    <div className="cart">
      <div className="container">
        <h2 className="px-5 p-2">My shopping cart</h2>
        <div className="cart-items">
          {data.map((product, index) => (
            <div className="cart-item" key={index}>
              <div className="row">
                <div className="col-md-7 center-item">
                  <img src={product.image} alt={product.category} />
                  <h5>{product.category}</h5>
                </div>
                <div className="col-md-5 center-item">
                  <h5>Price: ${product.price.toFixed(2)}</h5>
                  <span
                    onClick={() => productDelete(index)}
                    className="material-symbols-outlined"
                  >
                    delete
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-item">
          <div className="row g-2">
            <div className="col-6">
              <h5>Subtotal:</h5>
              <h5>tax</h5>
              <h5>Total:</h5>
            </div>
            <div className="col-6 status">
              <h5>
                $<span id="sub-total">{calculateTotalPrice()}</span>
              </h5>
              <h5>
                $<span id="tax-amount">0</span>
              </h5>
              <h5>
                $<span id="total-price">{calculateTotalPrice()}</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-12 pt-4 pb-4">
          <Link to="/" className="btn btn-default back-to-list-btn">
            Back to List
          </Link>
          <Link to="/checkout"><button onClick={emptycart} className="btn btn-success check-out">
            Checkout
          </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartDetails;
