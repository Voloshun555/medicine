import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Forma } from "../components/forma/forma";
import ListPharmacies from "../components/list-pharmacies/listPharmacies";
import { removeAllShopItem } from "../redux/shop/shopSlice";
import s from "./pageStyle.module.scss";
import { createNewShopItem } from "../redux/basket/basketOperation";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const ShopingCard = () => {
  const shop = useSelector((state) => state.shop.shopList);
  const totalPrice = shop.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleSubmit = (e) => {
     e.preventDefault();
     if (
       !formData.name ||
       !formData.email ||
       !formData.phone ||
       !formData.address ||
       !shop.length
     ) {
       alert("All fields are required.");
       return;
     }
     dispatch(createNewShopItem({ user: formData, product: shop }));
     dispatch(removeAllShopItem());
     setFormData(initialState);
   };

  return (
    <div className={s.container}>
      <div className={s.wrapShop}>
        <Forma formData={formData} handleChange={handleChange} />
        <ListPharmacies medicines={shop} shopList={shop} step={true} />
      </div>
      <div className={s.submit}>
        <p>Total price: {totalPrice}$</p>
        <button className={s.buttonSubmit} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShopingCard;
