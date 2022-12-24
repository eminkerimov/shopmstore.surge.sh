import React from "react";
import "./Payment.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";

const Payment = () => {
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  return (
    <div className="payment">
      <div className="payment__left">
        <h3>Payment total</h3>
        <span>$ {total}</span>
        <div className="payment__left__list">
          {/* (products?.map(item=> (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0, 100)}</p>
                    <div className="price">{item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className="delete" 
                onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
        ))) */}
        </div>
      </div>
      <div className="payment__right">
        <h1>Pay with card</h1>
        <div className="payment__right__item">
          <span className="payment__right__item-label">Email</span>
          <input required className="payment__right__item-input" type="text" />
        </div>
        <div className="payment__right__item">
          <span className="payment__right__item-label">Card information</span>
          <input
            required
            className="payment__right__item-input"
            type="text"
            placeholder="1234 1234 1234 1234"
          />
          <div className="flex">
            <input
              required
              className="payment__right__item-input"
              type="text"
              placeholder="MM/YY"
            />
            <input
              required
              className="payment__right__item-input"
              type="text"
              placeholder="CVC"
            />
          </div>
        </div>
        <div className="payment__right__item">
          <span className="payment__right__item-label">Name on card</span>
          <input
            required
            className="payment__right__item-input"
            type="text"
            placeholder=""
          />
        </div>
        <Link className="link" to="/">
          <button onClick={() => dispatch(resetCart())}>Pay</button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
