import React from "react";
import s from "./pageStyle.module.scss";
import { useSelector } from "react-redux";
import { FilterSection } from "../components/filter/filterSection";

export const Home = () => {
  const filter = useSelector((state) => state.filter.items);
  const shop = useSelector((state) => state.shop.shopList);

  const medicine = filter[0]?.medications;

  return (
    <section className={s.container}>
      <FilterSection data={medicine} shopList={shop} shop={shop} />
    </section>
  );
};
