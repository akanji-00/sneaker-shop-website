import { useState } from "react";

import MinusBtn from "../../assets/images/icon-minus.svg";
import PlusBtn from "../../assets/images/icon-plus.svg";

export default function CartCounter() {
  const [isCount, setIsCount] = useState(0);

  function decreaseCount() {
    setIsCount((prevCount) => {
      if (prevCount <= 0) {
        return 0;
      }
      return prevCount - 1;
    });
  }

  function increaseCount() {
    setIsCount((prevCount) => {
      return prevCount + 1;
    });
  }

  return (
    <div className="cart__counter-button">
      <button
        onClick={decreaseCount}
        className="decrease-btn"
        aria-label="Decrease quantity"
      >
        <img src={MinusBtn} alt="Remove" />
      </button>
      <span className="quantity">{isCount}</span>
      <button
        onClick={increaseCount}
        className="increase-btn"
        aria-label="Increase quantity"
      >
        <img src={PlusBtn} alt="Add" />
      </button>
    </div>
  );
}
