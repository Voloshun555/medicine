import React from "react";
import { CardFarmicy } from "../card-farmicy/cardFarmici";
import s from "./listPharmacies.module.scss";
import { addShopItem, removeShopItem } from "../../redux/shop/shopSlice";
import { useDispatch, useSelector } from "react-redux";

const ListPharmacies = ({ medicines, shopList, step }) => {
  const filters = useSelector((state) => state.filter);

  const filteredCars = medicines.filter((item) => {
    if (filters.selectedModel && item.name !== filters.selectedModel) {
      return false;
    }
    if (filters.selectedPrice && item.price !== filters.selectedPrice) {
      return false;
    }

    return true;
  });
  const dispatch = useDispatch();

  const handleShopAction = (item) => {
    const isItemInShop = shopList.some((shopItem) => shopItem.id === item.id);
    if (isItemInShop) {
      dispatch(removeShopItem({ id: item.id }));
    } else {
      const newItem = { ...item, quantity: 1 };
      dispatch(addShopItem({ item: newItem }));
    }
  };

  const hasValidMedicines = (filteredCars) => {
    if (!filteredCars || filteredCars.length === 0) {
      return false;
    }

    for (const medicine of filteredCars) {
      if (
        medicine &&
        medicine.id &&
        !isNaN(medicine.price) &&
        medicine.image &&
        medicine.name
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className={s.container}>
      {hasValidMedicines(filteredCars) ? (
        <ul className={s.containerCard}>
          {filteredCars.map((item) => (
            <CardFarmicy
              key={item.id}
              step={step}
              name={item.name}
              image={item.image}
              price={item.price}
              data={item}
              onClick={() => handleShopAction(item)}
              buttonText={
                shopList.some((shopItem) => shopItem.id === item.id)
                  ? "Remove"
                  : "Add card"
              }
            />
          ))}
        </ul>
      ) : (
        <h1>No valid medications found.</h1>
      )}
    </div>
  );
};

export default ListPharmacies;
