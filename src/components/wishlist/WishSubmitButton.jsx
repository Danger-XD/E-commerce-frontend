import React from "react";
import WishStore from "../../store/WishlistStore.js";

const WishSubmitButton = (props) => {
  let { IsWishSubmit } = WishStore();

  if (IsWishSubmit === false) {
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

export default WishSubmitButton;
