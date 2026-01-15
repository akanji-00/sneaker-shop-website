import MinusBtn from "../../assets/images/icon-minus.svg";
import PlusBtn from "../../assets/images/icon-plus.svg";

export default function CartCounter({ qty, setQty }) {
  // const [isCount, setIsCount] = useState(0);

  function decreaseCount() {
    setQty((q) => {
      if (q <= 0) {
        return 0;
      }
      return q - 1;
    });
  }

  function increaseCount() {
    setQty((q) => {
      return q + 1;
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
      <span className="quantity">{qty}</span>
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
