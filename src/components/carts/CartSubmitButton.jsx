import React from "react";
import CartStore from "../../store/CartsStore.js";

const CartSubmitButton = (props) => {
  let { IsCartSubmit } = CartStore();

  if (IsCartSubmit === false) {
    return (
      <button onClick={props.onClick} type="submit" className={props.className}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button disabled={true} className={props.className}>
        <div className="spinner-border spinner-border-sm" role="status"></div>{" "}
        Processing...
      </button>
    );
  }
};

export default CartSubmitButton;
