import React from "react";
import { filterMedicine } from "../../redux/filter/filterSlice";
import s from "./pharmacies.module.scss";
import { useDispatch, useSelector } from "react-redux";

export const Pharmacies = () => {
  const medicines = useSelector((state) => state.medicine.items);
  const dispatch = useDispatch();

  const onClick = (clickedData) => {
    dispatch(filterMedicine([clickedData]));
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Pharmacies</h2>
      <div>
        <ul className={s.groupButton}>
          {medicines.map((data, index) => (
            <li
              key={index}
              className={s.listButton}
              onClick={() => onClick(data)}
            >
              <button type="button">
                {data.pharmacy}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
