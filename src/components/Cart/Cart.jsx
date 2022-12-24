import React, { useEffect, useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { removeItem, resetCart, totalCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
      let total = 0;
      products.forEach((item) => {
        total += item.quantity * item.price;
      });
      setTotalPrice(total.toFixed(2));
  }, [products]);


  return (
    <div className="cart">
      <h1>Product in your cart</h1>
      {products.length ? (
        products?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} x ${item.price}
              </div>
            </div>
            <DeleteOutlinedIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        ))
      ) : (
        <p className="cart__empty">Nothing here...</p>
      )}
      <div className="total">
        <span>TOTAL</span>
        <span>${totalPrice}</span>
      </div>
      <button
      onClick={() => dispatch(totalCart(totalPrice))}
      >
        <Link className="link" to="/payment">
          PROCEED TO CHECKOUT
        </Link>
      </button>
      {products.length > 0 && (
        <span className="reset" onClick={() => dispatch(resetCart())}>
          Reset Cart
        </span>
      )}
    </div>
  );
};

export default Cart;
