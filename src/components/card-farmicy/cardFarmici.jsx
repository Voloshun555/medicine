import { useDispatch } from "react-redux";
import { countShoppingCart } from "../../redux/shop/shopSlice";
import s from "./cardFarmicy.module.scss";

export const CardFarmicy = ({
  data,
  name,
  image,
  price,
  onClick,
  buttonText,
  step,
}) => {

 
  const dispatch = useDispatch();
  const handleCounterChange = (event) => {
    const newValue = parseInt(event.target.value);
      dispatch(countShoppingCart({ quantity: newValue, id: data.id }));
  };

  return (
    <li className={s.cardList}>
      <img className={s.image} src={image} alt={name} />
      <div className={s.wrapDescription}>
        <h2 className={s.title}>{name}</h2>
      </div>
      <div className={s.totalPrice}>
        <p>{price} $</p>
        {step && (
          <input
            onChange={handleCounterChange}
            value={data.quantity} 
            type="number"
            min={1}
            step={1}
          />
        )}
      </div>
      <button onClick={onClick}>{buttonText}</button>
    </li>
  );
};
