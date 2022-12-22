import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import {useSelector} from "react-redux";
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from "react-redux";

const Cart = () => {

    const products = useSelector(state=>state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
      let total = 0 ;
      products.forEach((item) => {
        total+= item.quantity * item.price
      });
      return total.toFixed(2)
    }

  return (
    <div className='cart'>
        <h1>Product in your cart</h1>
        {products.length ?
        (products?.map(item=> (
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
        ))) :
        <p className="cart__empty">Nothing here...</p>
        }
        <div className="total">
            <span>TOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        {(products.length > 0) && <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>}
    </div>
  )
}

export default Cart