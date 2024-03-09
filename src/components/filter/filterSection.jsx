import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/filter/filterSlice";
import { DropdownIndicator } from "./DropdownIndicator";
import "./FilterCastomSelect.scss";
import s from "./FilterSection.module.scss";
import ListPharmacies from "../list-pharmacies/listPharmacies";
import { Pharmacies } from "../pharmacies/pharmacies";

export function FilterSection({ data, shop }) {
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  // const [selectedPrice, setSelectedPrice] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredMedicines(data);
  }, [data]);

  const applyFilters = () => {
    let filtered = [...data];
    if (selectedModel) {
      filtered = filtered.filter((medicine) => medicine.id === selectedModel);
    }
    // if (selectedPrice) {
    //   filtered = filtered.filter(
    //     (medicine) => medicine.price === selectedPrice
    //   );
    // }
    setFilteredMedicines(filtered);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    applyFilters();
    const filter = {
      selectedModel,
      // selectedPrice,
    };
    dispatch(setFilters(filter));
  };

  const medicineOptions = data.map((m) => ({ value: m.id, label: m.name }));
  // const optionsPrice = Array.from({ length: 30 }, (_, index) => ({
  //   value: String(index + 1),
  //   label: String((index + 1) % 2 === 0 ? (index + 1) / 2 : (index + 1) * 0.5),
  // }));

  return (
    <section className={s.ContainerSectionFilter}>
      <form className={s.filterContainer} onSubmit={handleFormSubmit}>
        <div className={s.inputContainer}>
          <label>
            <span className={s.label}>Medicine brand</span>
            <Select
              components={{ DropdownIndicator }}
              classNamePrefix="custom-select"
              options={medicineOptions}
              isClearable={true}
              value={medicineOptions.find(
                (option) => option.value === selectedModel
              )}
              onChange={(option) =>
                setSelectedModel(option ? option.value : "")
              }
              isSearchable={true}
              placeholder="medicine"
            />
          </label>
        </div>
        {/* <div>
          <label>
            <span className={s.label}>Price</span>
            <Select
              components={{ DropdownIndicator }}
              classNamePrefix="custom-select"
              options={optionsPrice}
              isClearable={true}
              value={optionsPrice.find(
                (option) => option.value === selectedPrice
              )}
              onChange={(option) =>
                setSelectedPrice(option ? option.value : "")
              }
              isSearchable={true}
              placeholder="Price"
            />
          </label>
        </div> */}
        <button className={s.buttonSearch} type="submit">
          Search
        </button>
      </form>
      <div className={s.wrapShop}>
        <Pharmacies />
        <ListPharmacies
          medicines={filteredMedicines}
          shopList={shop}
          step={false}
        />
      </div>
    </section>
  );
}
